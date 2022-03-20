import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ViewsModule } from './views/views.module';
import { HeaderFormsComponent } from './shared/components/header-forms/header-forms.component';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, ViewsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HeaderFormsComponent],
})
export class AppModule {}
