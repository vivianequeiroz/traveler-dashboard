import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderFormsComponent } from './components/header-forms/header-forms.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CityBaicDataFormsComponent } from './components/city-baic-data-forms/city-baic-data-forms.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SideBarComponent, NavBarComponent, HeaderFormsComponent, CityBaicDataFormsComponent],
  exports: [SideBarComponent, NavBarComponent, HeaderFormsComponent],
})
export class SharedModule {}
