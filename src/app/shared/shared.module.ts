import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderFormsComponent } from './components/header-forms/header-forms.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CityBasicDataFormsComponent } from './components/city-basic-data-forms/city-basic-data-forms.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    SideBarComponent,
    NavBarComponent,
    HeaderFormsComponent,
    CityBasicDataFormsComponent,
  ],
  exports: [
    SideBarComponent,
    NavBarComponent,
    HeaderFormsComponent,
    CityBasicDataFormsComponent,
  ],
})
export class SharedModule {}
