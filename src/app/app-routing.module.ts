import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KezdolapComponent } from './kezdolap/kezdolap.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReserveComponent } from './reserve/reserve.component';
import { SzervizComponent } from './szerviz/szerviz.component';
import { TargoncaComponent } from './targonca/targonca.component';

const routes: Routes = [
  {path:'', component: KezdolapComponent},
  {path:'regisztracio', component: RegistrationComponent},
  {path:'targonca', component: TargoncaComponent},
  {path:'reserve', component: ReserveComponent},
  {path:'szerviz', component: SzervizComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
