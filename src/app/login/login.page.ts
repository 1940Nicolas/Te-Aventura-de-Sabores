import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private alertController: AlertController ) { }

  ngOnInit() {
  }

   async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }


   validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailRegex.test(email);
  }

  login() {
    
    if (!this.email) {
     this.mostrarAlerta('El correo no fue escrito.');
     return;
   }

  if (!this.validarEmail(this.email)) {
    this.mostrarAlerta('El correo esta mal escrito.');
    return;
  }

   if (!this.password) {
    this.mostrarAlerta('La contraseña no fue escrita.');
    return;
  }

    if (this.password.length > 4) {
      this.mostrarAlerta('La contraseña no puede tener más de 4 caracteres.');
      return;
    }

  this.navCtrl.navigateForward(['/home'], {
    queryParams: {
      email: this.email,
      password: this.password
    }
  });
 
}

registro()
{
  this.navCtrl.navigateForward(['/registro']);
}

}
