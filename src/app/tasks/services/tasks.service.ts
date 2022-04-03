import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Task} from "../models";

@Injectable()
export class TasksService {

  constructor(private http: HttpClient) {
  }

  get(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(environment.baseUrlApi + '/tasks');
  }

  create(text: string): Observable<Task> {
    return this.http.post<Task>(environment.baseUrlApi + '/tasks', {text: text});
  }

  toggle(id: number): Observable<Task> {
    return this.http.put<Task>(environment.baseUrlApi + '/tasks/' + id, {});
  }
}
