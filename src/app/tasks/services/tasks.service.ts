import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class TasksService {

  constructor(private http: HttpClient) {
  }

  get() {
    return this.http.get(environment.baseUrlApi + '/tasks');
  }
}