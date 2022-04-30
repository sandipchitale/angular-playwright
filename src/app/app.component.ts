import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = '';
  delay = 0;

  constructor(private httpClient: HttpClient) {

  }

  getUsers() {
    // this.delay = Math.round(Math.random() * 200) * 1000;
    this.delay = Math.ceil(Math.random() * 5) * 1000;

    setTimeout(() => {
      setTimeout(() => {
        this.httpClient
        .get<any>('https://reqres.in/api/users')
        .pipe(delay(this.delay))
        .subscribe((data) => {
          // this.delay = 0;
          this.users = JSON.stringify(data.data[0], null, '  ');
        });
      }, 0);
    }, this.delay);


  }
}
