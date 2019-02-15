import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { PostDetailPage } from '../pages/posts/postdetail';
import { SubscribePage } from '../pages/subscribe/subscribe';
import { SplashPage } from '../pages/splash/splash';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PostService, VideoService} from '../providers/wordpress-service';
import { UtilityService } from './utilityService';
import { CategoryFilterPage } from '../pages/filterCategory/filterCategory';
import { DatePipe } from '@angular/common';
import { VideoPage } from '../pages/video/video';
import { AboutPage } from '../pages/about/about';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactPage,
    PostDetailPage,
    SubscribePage,
    LoginPage,
    SplashPage,
    CategoryFilterPage,
    VideoPage,
    AboutPage
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactPage,
    PostDetailPage,
    SubscribePage,
    LoginPage,
    SplashPage,
    CategoryFilterPage,
    VideoPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UtilityService,
    PostService,
    VideoService,
    DatePipe
  ]
})
export class AppModule {}
