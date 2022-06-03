import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { PrimeNgModule } from '../shared/prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
