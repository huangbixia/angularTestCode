import { Component, OnInit, ReflectiveInjector, Inject } from '@angular/core';
import { MyService } from 'common/myService';
import { ApiService } from 'common/ApiService';
 
@Component({
  selector: 'app-di-sample-app',
  templateUrl: './di-sample-app.component.html',
  styleUrls: ['./di-sample-app.component.css']
})

export class DiSampleAppComponent implements OnInit {
  myService: MyService;
  constructor(private apiService: ApiService,
    @Inject('ApiServiceAlias') private aliasService: ApiService,
    @Inject('SizeService') private sizeService: any) { 
    let injector: any = ReflectiveInjector.resolveAndCreate([MyService]);
    this.myService = injector.get(MyService);
    console.log('Same instance?', this.myService === injector.get(MyService));
  }

  invokeService(): void {
    console.log('MyService return,', this.myService.getValue());
    this.apiService.get();
    this.aliasService.get();
    this.sizeService.run();
  }

  invokeApi(): void {
    this.apiService.get();
  }
  ngOnInit() {
  }

}
