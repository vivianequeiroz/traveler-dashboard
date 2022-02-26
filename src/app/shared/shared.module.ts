import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderFormsComponent } from './components/header-forms/header-forms.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BasicDataFormsComponent } from './components/basic-data-forms/basic-data-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CityDataService } from '../services/city/city-data.service';
import { ServiceOperationErrorComponent } from './components/service-operation-error/service-operation-error.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(CityDataService),
  ],
  declarations: [
    SideBarComponent,
    NavBarComponent,
    HeaderFormsComponent,
    BasicDataFormsComponent,
    ServiceOperationErrorComponent,
  ],
  exports: [
    SideBarComponent,
    NavBarComponent,
    HeaderFormsComponent,
    BasicDataFormsComponent,
    ServiceOperationErrorComponent,
  ],
})
export class SharedModule {}
