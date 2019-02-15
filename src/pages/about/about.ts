import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public events: Events) {
    events.publish('hideHeader', { isHidden: true});
  }

  ionViewWillLeave() {
    //Make footer visiable while leaving the page.
    this.events.publish('hideHeader', { isHidden: false});
}

}
