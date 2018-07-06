import { Injectable } from '@angular/core';

@Injectable()
export class AppConfigService {

  public apiBaseURL = 'http://localhost:4000/';

  constructor() { }

  getBaseUrl() {
    return this.apiBaseURL;
  }
}
