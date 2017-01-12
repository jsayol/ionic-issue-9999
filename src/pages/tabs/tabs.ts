import { Component, ViewChild } from '@angular/core';
import { Tabs } from "ionic-angular";

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild(Tabs) ionTabs: Tabs;
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;

  constructor() {

  }

  tabChanged() {
    const previousTab = this.ionTabs.previousTab();
    console.log('previousTab =', previousTab && previousTab.root.name);
  }

}
