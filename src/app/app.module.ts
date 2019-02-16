import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { MessagesService } from './services/messages.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { FamilyModalComponent } from './components/family-modal/family-modal.component';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AddtofamilyModalComponent } from './components/addtofamily-modal/addtofamily-modal.component';

import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { ChatModalComponent } from './components/chat-modal/chat-modal.component';


@NgModule({
  declarations: [AppComponent, MenuItemComponent, FamilyModalComponent, AddtofamilyModalComponent, ChatModalComponent],
  entryComponents: [FamilyModalComponent, AddtofamilyModalComponent, ChatModalComponent],
  imports: [FormsModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    NativeStorage,
    MenuController,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Geolocation,
    AuthenticationService,
    MessagesService,
    Camera,
    File,
    WebView,
    FilePath
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}