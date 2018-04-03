import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  gotocontact():void{
    this.navCtrl.push('ContactPage');
  }
  gotoimages():void{
    this.navCtrl.push('ImagesPage');
  }
  gotoabout():void{
    this.navCtrl.push('AboutPage');
  }
}
