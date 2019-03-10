import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { MessagesService } from './services/messages.service';
import * as $ from 'jquery';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { FamilyModalComponent } from './components/family-modal/family-modal.component';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AddtofamilyModalComponent } from './components/addtofamily-modal/addtofamily-modal.component';
import { AddfamilyModalComponent } from './components/addfamily-modal/addfamily-modal.component';

import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { ChatModalComponent } from './components/chat-modal/chat-modal.component';
import { EmojiPickerComponent } from './components/emoji-picker/emoji-picker.component';
import { environment } from '../environments/environment';

import { FiremessagingService } from './services/firemessaging.service';

import { TranslateLoader, TranslateModule, TranslateService, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    FamilyModalComponent,
    AddtofamilyModalComponent,
    AddfamilyModalComponent,
    ChatModalComponent,
    EmojiPickerComponent],
  entryComponents: [FamilyModalComponent, AddtofamilyModalComponent, AddfamilyModalComponent, ChatModalComponent],
  imports: [
    FormsModule, 
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  exports: [TranslateModule,TranslatePipe],
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
    FilePath,
    FiremessagingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
