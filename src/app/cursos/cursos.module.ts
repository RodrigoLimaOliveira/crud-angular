import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PrimeNgModule } from '../shared/prime-ng/prime-ng.module';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [
    CursosComponent,
    CursosFormComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    CursosRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
