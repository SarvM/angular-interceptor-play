import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ AppService ],
})
export class AppComponent  {
  headers: string[];

  constructor(private appService: AppService) {}

  showHeaderResponse() {
    this.appService.getAppResponse()
      .subscribe(resp => {
        //console.log('response', resp);
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);
      });
  }

}
