import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/toPromise';
import { Problem } from '../models/problem.model';

@Injectable()
export class DataService {

  private _problemSource = new BehaviorSubject<Problem[]>([]);

  constructor(private http: HttpClient) { }

  getProblems(): Observable<Problem[]> {
    this.http.get('api/v1/problems')
             .toPromise()
             .then( (res: Response) => {
               this._problemSource.next(JSON.parse(JSON.stringify(res)));
              })
              .catch( this.handleError );
    return this._problemSource.asObservable();
  }

  getProblem(id: number): Promise<Problem> {
    return this.http.get(`api/v1/problems/${id}`)
                    .toPromise()
                    .then( (res: Response) => JSON.parse(JSON.stringify(res)) )
                    .catch( this.handleError );
  }

  addProblem(newProblem: Problem) {
    const httpOptions = {
       headers: new HttpHeaders({
       'Content-Type':  'application/json',
      })
    };
    return this.http.post('api/v1/problems', newProblem, httpOptions)
                    .toPromise()
                    .then( (res: Response) => {
                      // call 'getProblems' to let the new problem display
                      this.getProblems();
                      JSON.parse(JSON.stringify(res));
                    })
                    .catch( this.handleError );
  }

  buildAndRun(data): Promise<Object> {
    const httpOptions = {
       headers: new HttpHeaders({
       'Content-Type':  'application/json',
      })
    };
    return this.http.post(`/api/v1/build_and_run`, data, httpOptions)
    .toPromise()
    .then((res: Response) => {
      console.log(res);
      return res;
    })
    .catch((error:any) => {
      return JSON.stringify(error);
    });
  }

  private handleError(error: any): Promise<any> {
      console.error('An error happened', error);
      return Promise.reject(error.body || error);
    }
}
