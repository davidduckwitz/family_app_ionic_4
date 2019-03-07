import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

 firstname = '';
 lastname = '';
 username = '';
 password = '';
 cpassword = '';

 constructor(
  public alertController: AlertController,
  public router: Router,
  private authenticationService: AuthenticationService
) { }

 ngOnInit() {}

 async presentAlert(title: string, content: string) {
    const alert = await this.alertController.create({
        header: title,
        message: content,
        buttons: ['OK']
    });
    await alert.present();
}

	register(firstname: string, lastname: string, username: string, email: string, password: string, cpassword: string) {
		if ( password !== cpassword) {
			return console.error('Passwords dont match');
		}
		try {
			console.log(email, password);
			this.authenticationService.registerV1(firstname, lastname, username, email, password)
			.subscribe(response => {
				if (response['status'] === 1) {
					console.log(response['message']);
					this.presentAlert('Success', response['message']);
					this.router.navigate(['/login']);
				} else {
					console.log(response['message']);
					this.presentAlert('Danger', response['message']);
				}
			}, error => {
				console.log(error.status);
			});
		} catch (error) {
			console.dir(error);
		}
	}
}
