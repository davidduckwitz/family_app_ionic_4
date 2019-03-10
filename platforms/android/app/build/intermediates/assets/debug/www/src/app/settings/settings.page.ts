import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { FilePath } from '@ionic-native/file-path/ngx';
import { finalize } from 'rxjs/operators';
const STORAGE_KEY = 'my_images';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  actualLanguage: string;
  firstname: string;
  lastname: string;
  username: string;
  images = [];
  userimage = '';
  user = '';
  desktop = false;
  Langs = [
    {
      name: 'Deutsch',
      blang: 'de-DE',
      flag: 'DE'
    },
    {
      name: 'English',
      blang: 'en-GB',
      flag: 'GB'
    },
    {
      name: 'Russian',
      blang: 'ru-RU',
      flag: 'RU'
    },
    {
      name: 'Armenian',
      blang: 'am-AM',
      flag: 'AM'
    }
  ];
  constructor(
    public translate: TranslateService,
    private camera: Camera,
    private file: File,
    private http: HttpClient,
    private webview: WebView,
    private actionSheetController: ActionSheetController,
    private toastController: ToastController,
    private plt: Platform,
    private loadingController: LoadingController,
    private ref: ChangeDetectorRef,
    private filePath: FilePath,
    private authenticationService: AuthenticationService,
    private userService: UserService
    ) {
    this.user = this.authenticationService.getUser();
    this.actualLanguage = localStorage.getItem('language');
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en-GB');
    console.log(translate.getBrowserCultureLang());
    console.log('Language from Browser:' + translate.getBrowserCultureLang());

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    if (localStorage.getItem('language') !== '') {
      translate.use(localStorage.getItem('language'));
    } else {
      if ( translate.getBrowserCultureLang() ) {
        translate.use(translate.getBrowserCultureLang());
        console.log('Language from Browser:' + translate.getBrowserCultureLang());
      } else {
        translate.use('en-GB');
        this.actualLanguage = 'en-GB';
      }

    }
  }

  ngOnInit() {
    this.plt.ready().then(() => {
      console.log(this.plt.platforms());
      if (this.plt.is('cordova')) {
        console.warn('cordova');
        this.desktop = false;
      }
      if (!this.plt.is('cordova')) {
        console.warn('without cordova');
        this.desktop = true;
      }
      this.loadStoredImages();
    });
  }

  loadStoredImages() {
   this.userimage = this.user['image'];
   this.firstname = this.user['firstname'];
   this.lastname = this.user['lastname'];
   this.username = this.user['name'];
}

selectinputImage(value) {
  console.log(value);
  this.processFile(value);
}

processFile(imageInput: any) {

  const file: File = imageInput;
  const reader = new FileReader();
  this.startUpload(file);
}
pathForImage(img) {
  if (img === null) {
    return '';
  } else {
    const converted = this.webview.convertFileSrc(img);
    return converted;
  }
}
  async presentToast(text) {
    const toast = await this.toastController.create({
        message: text,
        position: 'bottom',
        duration: 3000
    });
    toast.present();
  }

selectImage() {
  this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
}

takePicture(sourceType: PictureSourceType) {
  const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
  };

  this.camera.getPicture(options).then(imagePath => {
      if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
          this.filePath.resolveNativePath(imagePath)
              .then(filePath => {
                  const correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                  const currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                  this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
              });
      } else {
          const currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
          const correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
  });

}

createFileName() {
  const d = new Date(),
      n = d.getTime(),
      newFileName = n + '.jpg';
  return newFileName;
}

copyFileToLocalDir(namePath, currentName, newFileName) {
  this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
      // this.updateStoredImages(newFileName);
      const filePath = this.file.dataDirectory + newFileName;
        const resPath = this.pathForImage(filePath);
        const newEntry = {
            name: newFileName,
            path: resPath,
            filePath: filePath
        };
        this.presentToast(newFileName);
        this.images = [newEntry, ...this.images];
        this.ref.detectChanges(); // trigger change detection cycle
  }, error => {
      this.presentToast('Error while storing file.');
  });
}

deleteImage(imgEntry, position) {
  this.images.splice(position, 1);
      const correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);

      this.file.removeFile(correctPath, imgEntry.name).then(res => {
          this.presentToast('File removed.');
      });

}

startUpload(imgEntry) {
  this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
      .then(entry => {
          ( < FileEntry > entry).file(file => this.readFile(file));
      })
      .catch(err => {
          this.presentToast('Error while reading file.');
      });
}

saveAvatar(avatar: string, user) {
  const fullFilePath = 'http://familyapp.arina-web-innovations.online/uploads/' + avatar;
  this.authenticationService.setUserAvatar(fullFilePath, user).subscribe(res => {
    const newEntry = {
      name: avatar,
      path: 'http://familyapp.arina-web-innovations.online/uploads/',
      filePath: fullFilePath
  };
  // this.images = [newEntry, ...this.images];
  this.userimage = 'http://familyapp.arina-web-innovations.online/uploads/' + avatar;
  this.user['image'] = this.userimage;
  this.authenticationService.setUser(this.user);
  this.ref.detectChanges(); // trigger change detection cycle
    return res['status'];
  });
}

readFile(file: any) {
  const reader = new FileReader();
  reader.onloadend = () => {
      const formData = new FormData();
      const imgBlob = new Blob([reader.result], {
          type: file.type
      });
      formData.append('file', imgBlob, file.name);
      this.uploadImageData(formData);
      this.saveAvatar(file.name, this.user['userid']);
  };
  reader.readAsArrayBuffer(file);
}

async uploadImageData(formData: FormData) {
  const loading = await this.loadingController.create({
      message: 'Uploading image...',
  });
  await loading.present();

  this.http.post('http://familyapp.arina-web-innovations.online/api/v1/uploadavatar.php', formData)
      .pipe(
          finalize(() => {
              loading.dismiss();
          })
      )
      .subscribe(res => {
          if (res['success']) {
              this.presentToast('File upload complete.');
          } else {
              this.presentToast('File upload failed.');
          }
      });
}

  onLangChange(lang: string) {
    if (this.actualLanguage === null) {
      this.actualLanguage = 'en';
    } else {
      this.translate.use(lang);
    }
    localStorage.setItem('language', lang);
    this.actualLanguage = lang;
  }

  saveFirstname(firstname: string, user) {
    this.userService.setUserFirstname(firstname, user).subscribe(res => {
      this.user['firstname'] = firstname;
      this.authenticationService.setUser(this.user);
      this.ref.detectChanges(); // trigger change detection cycle
      return res['status'];
    });
  }

  saveLastname(lastname: string, user) {
    this.userService.setUserLastname(lastname, user).subscribe(res => {
      this.user['lastname'] = lastname;
      this.authenticationService.setUser(this.user);
      this.ref.detectChanges(); // trigger change detection cycle
      return res['status'];
    });
  }

  saveUserData(firstname: string, lastname: string, nickname: string) {
    if (this.user['firstname'] !== firstname) {
      this.user['firstname'] = firstname;
      this.saveFirstname(firstname, this.user['userid']);
    }

    if (this.user['lastname'] !== lastname) {
      this.user['lstname'] = lastname;
      this.saveLastname(lastname, this.user['userid']);
    }
  }

}
