import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController, AlertController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user: any;
  slideOpts = {
    effect: 'flip'
  };

  constructor(
    private nativeStorage: NativeStorage,
    public loadingController: LoadingController,
    private router: Router,
    private platform: Platform,
    public alertController: AlertController
    ) { }

  ngOnInit() { }
}
