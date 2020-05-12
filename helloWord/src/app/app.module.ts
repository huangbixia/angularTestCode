import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormTestComponent } from './form-test/form-test.component';
import { HTTPTestComponent } from './http-test/http-test.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';

// 导入路由模块
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { SearchComponent } from './search/search.component';

import { SPOTIFY_PROVIDERS } from './common/service/SpotifyService';
import { AUTH_PROVIDERS } from './common/service/AuthService';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import { LoggedInGuard } from './common/loggedInGuard.guard';
import { HostSampleComponent } from './host-sample/host-sample.component';
import { PopupDirective } from './directive/popup.directive';
import { NgBookIfDirective } from './directive/ng-book-if.directive';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'article/:id', component: ArticleComponent },
  { path: 'search', component: SearchComponent },
  // { path: 'contactus', redirectTo: 'contact' },
  { path: 'login', component: LoginComponent },
  { path: 'protected', component: ProtectedComponent, canActivate: [LoggedInGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent,
    FormTestComponent,
    HTTPTestComponent,
    SimpleHttpComponent,
    SimpleHttpComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ArticleComponent,
    SearchComponent,
    LoginComponent,
    ProtectedComponent,
    HostSampleComponent,
    PopupDirective,
    NgBookIfDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)  // 安装路由配置
  ],
  providers: [
    LoggedInGuard,
    SPOTIFY_PROVIDERS,
    AUTH_PROVIDERS,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
