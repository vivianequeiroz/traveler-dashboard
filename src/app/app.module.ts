import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { AddProfileFormsComponent } from './views/add-profile-forms/add-profile-forms.component';
import { CreateProfileFormsComponent } from './views/create-profile-forms/create-profile-forms.component';

@NgModule({
  declarations: [AppComponent, SideBarComponent, NavBarComponent, AddProfileFormsComponent, CreateProfileFormsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
