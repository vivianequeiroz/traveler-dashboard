import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessCreationLayerComponent } from './shared/components/success-creation-layer/success-creation-layer.component';
import { CreateProfileFormsComponent } from './views/create-profile-forms/create-profile-forms.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'createProfile',
    component: CreateProfileFormsComponent,
  },
  {
    path: 'successLayer',
    component: SuccessCreationLayerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
