import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  private serverContextPath: string = ''; // context path of the server
  private apiUrl: string = 'http://localhost:8080'+this.serverContextPath+'/demo/data'; //
  http = inject(HttpClient);


  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }


}
