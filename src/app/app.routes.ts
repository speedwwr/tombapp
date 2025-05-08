import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActiveFormComponent } from './active-form/active-form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ativo', component: ActiveFormComponent },
  { path: 'ativo/:id', component: ActiveFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
