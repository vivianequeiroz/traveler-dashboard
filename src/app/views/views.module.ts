import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CreateProfileFormsComponent } from './create-profile-forms/create-profile-forms.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [CreateProfileFormsComponent, HomeComponent],
  exports: [CreateProfileFormsComponent],
})
export class ViewsModule {}
