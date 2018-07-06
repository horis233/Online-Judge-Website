import { COLORS } from '../../assets/colors';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

declare var io: any;
declare var ace: any;

@Injectable()
export class CollaborationService {

  collaborationSocket: any;
  clientsInfo : Object = {};
  clientNum: number = 0;

  roomUserNum = new BehaviorSubject<string>("1");

  constructor() { }

  init(editor: any, sessionId: string): void {

    // Build socket
    this.collaborationSocket = io(window.location.origin, {query: `sessionId=${sessionId}`});

    // Listen changes
    this.collaborationSocket.on("change", (delta: string)=> {
      console.log('collaboration: editor changes by' + delta);
      delta = JSON.parse(delta);
      editor.lastAppliedChange = delta;
      editor.getSession().getDocument().applyDeltas([delta]);
    })

    // Listen cursor move
    this.collaborationSocket.on("cursorMove", (cursor) => {
      console.log("cursor move:" + cursor);
      let session = editor.getSession();
      cursor = JSON.parse(cursor);
      let x = cursor['row'];
      let y = cursor['column'];
      let changeClientId = cursor['socketId'];
      console.log(x + "," + y + " " +  changeClientId);

      if (changeClientId in this.clientsInfo) {
        session.removeMarker(this.clientsInfo[changeClientId]['marker']);
      } else {
        this.clientsInfo[changeClientId] = {};

        let css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".editor_cursor_" + changeClientId
            + " { position:absolute; background:" + COLORS[this.clientNum] + ";"
            + " z-index: 100; width:3px !important; }";
        document.body.appendChild(css);
        this.clientNum++;
      }

      let Range = ace.require('ace/range').Range;
      let newMarker = session.addMarker(new Range(x, y, x, y + 2), 'editor_cursor_' + changeClientId, true);
      this.clientsInfo[changeClientId]['marker'] = newMarker;
    });

    this.collaborationSocket.on('userNum', (num:string)=>{
      this.roomUserNum.next(num);
      console.log(num+' user(s) in the room');
    });

    this.collaborationSocket.on('message', (message) => {
      console.log('received ' + message);
    });

  }






  change(delta: string) {
    this.collaborationSocket.emit("change", delta);
  }

  cursorMove(cursor: string) {
    this.collaborationSocket.emit("cursorMove", cursor);
  }

  restoreBuffer(): void {
    this.collaborationSocket.emit("restoreBuffer");
  }

  getRoomUserNum() {
    return this.roomUserNum.asObservable();
  }

  disconnect():void {
    this.collaborationSocket.disconnect();
  }

  loadContents():void {
    this.collaborationSocket.emit('getContent');
  }
}
