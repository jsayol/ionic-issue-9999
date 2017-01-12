import { Component, ViewChild } from '@angular/core';
import { Tabs, Tab } from "ionic-angular";

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

  fixedPreviousTab(trimHistory: boolean = true): Tab {
    // walk backwards through the tab selection history
    // and find the first previous tab that is enabled and shown
    for (let i = this.ionTabs._selectHistory.length - 1; i >= 0; i--) {
      const tab = this.ionTabs._tabs.find(t => t.id === this.ionTabs._selectHistory[i]);
      if (tab && tab.enabled && tab.show) {
        if (trimHistory) {
          this.ionTabs._selectHistory.splice(i + 1);
        }
        return tab;
      }
    }

    return null;
  }

  tabChanged() {
    // Note: keep trimHistory=false for this test
    const previousTab = this.ionTabs.previousTab(false);
    const realPreviousTab = this.fixedPreviousTab(false);
    console.log('previousTab() says', previousTab && previousTab.root.name, 'but it should say', realPreviousTab && realPreviousTab.root.name);
  }

}
