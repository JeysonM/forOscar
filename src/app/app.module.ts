import { PruebaPipe } from './../pipes/prueba/prueba';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactInfoPage } from '../pages/contact-info/contact-info';
import { ContactServiceProvider } from '../providers/contact-service/contact-service';
import { StatusPage } from '../pages/status/status';
import { StartPage } from '../pages/start/start';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { StatusServiceProvider } from '../providers/status-service/status-service';
import { ChatPage } from '../pages/chat/chat';
import { PopoverPage } from '../pages/popover/popover';
import { RegisterStatusPage } from '../pages/register-status/register-status';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PruebaPipe,
    ContactInfoPage,
    StartPage,
    LoginPage,
    RegisterPage,
    ChatPage,
    PopoverPage,
    RegisterStatusPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactInfoPage,
    StartPage,
    LoginPage,
    RegisterPage,
    ChatPage,
    PopoverPage,
    RegisterStatusPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactServiceProvider,
    StatusServiceProvider
  ]
})
export class AppModule {}
