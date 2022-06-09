import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosComponent } from './cursos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CursosComponent },
  { path: 'new', component: CursosFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }