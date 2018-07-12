const redisClient = require('../modules/redisClient');
const TIMEOUT_IN_SECONDS = 3600;


module.exports = function(io){

    //collaboration sessions
    const collaborations = [];
    // map form socketId to sessionId
    const sessionPath = '/temp_sessions/';
    const socketIdToSessionId = {};


    io.on('connection', (socket) => {
        const sessionId = socket.handshake.query['sessionId'];
        socketIdToSessionId[socket.id] = sessionId;


        // Scession id in collaborations
        if (sessionId in collaborations) {
            collaborations[sessionId]['participants'].push(socket.id);
            let usersInTheRoom = collaborations[sessionId]['participants'];
            for (let i=0; i<usersInTheRoom.length; i++) {
            console.log('SEND: USERS NUM');
            io.to(usersInTheRoom[i]).emit('userNum',""+usersInTheRoom.length);
          }

        } else {
            redisClient.get(sessionPath + '/' + sessionId, data => {

                if (data) { // there is data in radis
                    console.log('session terminated perviously, pulling back from redis');
                    collaborations[sessionId] = {
                        'cachaedInstructions' : JSON.parse(data),
                        'participants': []
                    }
                } else { // create a new collaboration
                    console.log('creating new session');
                    collaborations[sessionId] = {
                        'cachaedInstructions' : [],
                        'participants': []
                    }
                }
                collaborations[sessionId]['participants'].push(socket.id);

                let usersInTheRoom = collaborations[sessionId]['participants'];

                for (let i=0; i<usersInTheRoom.length; i++) {

                  console.log('SEND: USERS NUM');
                  io.to(usersInTheRoom[i]).emit('userNum',""+usersInTheRoom.length);

                }
            });
        }

        socket.on('change', delta => {
          console.log( "change " + socketIdToSessionId[socket.id] + " " + delta );
            const sessionId = socketIdToSessionId[socket.id];
            if(sessionId in collaborations){

                collaborations[sessionId]['cachaedInstructions'].push(['change', delta, Date.now()]);

                let users = collaborations[sessionId]['participants'];

                for (let i=0; i<users.length; i++) {

                  if ( socket.id != users[i] ) {
                    console.log('SEND!'+ users[i] + '   ' +socket.id+ '  '+sessionId + '' );
                    console.log(users[i]);
                    io.to(users[i]).emit('change',delta);
                  }
                }
            }
            else {
      				console.log('error');
      			}
            // forwardEvents(socket.id, 'change', delta);
        });

        socket.on('cursorMove', cursor => {
            console.log( "cursorMove " + socketIdToSessionId[socket.id] + " " + cursor ) ;
            cursor = JSON.parse(cursor);
            cursor['socketId'] = socket.id;

            let sessionId = socketIdToSessionId[socket.id];
      			if (sessionId in collaborations) {

      				let users = collaborations[sessionId]['participants'];

      				for (let i=0; i<users.length; i++) {

      					if ( socket.id != users[i] ) {
      						//console.log('SEND!'+ users[i] + '   ' +socket.id+ '  '+sessionIdReceived + '' );
      						//console.log(users[i]);

      						io.to(users[i]).emit('cursor', JSON.stringify(cursor) );
      					}
      				}
      			}
      			else {
      				console.log('error');
      			}
            // forwardEvents(socket.id, 'cursorMove', JSON.stringify(cursor));
        });

        // When client side call restore Buffer
        socket.on('restoreBuffer', () => {
            const sessionId = socketIdToSessionId[socket.id];
            if (sessionId in collaborations) {
                const instructions = collaborations[sessionId]['cachaedInstructions'];
                for (let instruction of instructions) {
                    socket.emit(instruction[0], instruction[1]);
                }
            }
        });
        // When disconnect, save content in radis
        socket.on('disconnect', () => {
          console.log(`socket:${socket.id} disconnected!`);

    			if (sessionId in collaborations) {

    				let users = collaborations[sessionId]['participants'];
    				let idx = users.indexOf(socket.id);

    				if (idx != -1) {
    					users.splice(idx,1);
    				}

    				let usersInTheRoom = collaborations[sessionId]['participants'];
    				for (let i=0; i<usersInTheRoom.length; i++) {

    					console.log('SEND: USERS NUM');
    					io.to(usersInTheRoom[i]).emit('userNum',""+usersInTheRoom.length);

    				}

    				if (users.length==0) {
    					console.log('Contents were saved into Redis');
    					let key = sessionPath+sessionId;
    					let val = JSON.stringify(collaborations[sessionId]['cachaedInstructions']);

    					redisClient.set(key,val,()=>{});
    					redisClient.expire(key,TIMEOUT_IN_SECONDS);
    					delete collaborations[sessionId];

    				}
    			}
        });

        function forwardEvents(socketId, eventName, dataString) {
            let sessionId = socketIdToSessionId[socketId];

            if (sessionId in collaborations) {
                let participants = collaborations[sessionId]['participants'];
                for (let i = 0; i < participants.length; i++) {
                    if (socket.id != participants[i]) {
                        io.to(participants[i]).emit(eventName, dataString);
                    }
                }
            } else {
                console.log("WARNING: could not tie socket_id to any collaboration");
            }
        }
    });
}
