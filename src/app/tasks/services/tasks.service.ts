import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map, Observable} from "rxjs";

@Injectable()
export class TasksService {

  constructor(private http: HttpClient) {
  }

  get(): Observable<Array<Task>> {
    return this.http.get<{ items: Task[] }>(
      environment.baseUrlApi + '/tasks'
    ).pipe(
      map((tasks) => tasks.items || [])
    );
  }
}
