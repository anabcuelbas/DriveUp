import { Component, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  navigate: any;
  public screenWidth: number;

  constructor(private menu: MenuController, private platform: Platform) {
    this.sideMenu();
  }

  ngOnInit() {
    this.screenWidth = this.platform.width();
  }

  sideMenu() {
    this.navigate = [
      {
        title: 'Home',
        url: '/home',
        icon: 'home',
      },
      {
        title: 'Chat',
        url: '/chat',
        icon: 'chatboxes',
      },
      {
        title: 'Contacts',
        url: '/contacts',
        icon: 'contacts',
      },
    ];
  }

  // public get hideMenu(): boolean {
  //   return !this.router.isActive('/auth/login/phone', true);
  // }
}
