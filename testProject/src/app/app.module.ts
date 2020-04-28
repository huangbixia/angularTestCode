import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DiSampleAppComponent } from './di-sample-app/di-sample-app.component';
import { MyService } from 'common/myService';
import { ApiService, API_URL } from 'common/ApiService';
import { ViewPortService } from 'common/ViewPortService';

const isProduction: boolean = false;

@NgModule({
  declarations: [
    AppComponent,
    DiSampleAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MyService, 
    ApiService, 
    ViewPortService,
    {
      provide: 'ApiServiceAlias',
      useExisting: ApiService
    },
    {
      provide: 'ApiSerive',
      useClass: ApiService
    },
    {
      provide: API_URL,
      useValue: isProduction ? 'http://phoebe.com' : 'http://phoebeTest.com'
    },
    {
      provide: 'SizeService',
      useFactory: (viewPort: any) => {
        return viewPort.determineService();
      },
      deps: [ViewPortService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
