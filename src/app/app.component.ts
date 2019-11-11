import { Component } from '@angular/core';
import { SampleService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ SampleService ],
})
export class AppComponent  {
  headers: string[];

  constructor(private sampleService: SampleService) {}

  showHeaderResponse() {
    this.sampleService.getSampleResponse()
      .subscribe(resp => {
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);
      });
  }

}
