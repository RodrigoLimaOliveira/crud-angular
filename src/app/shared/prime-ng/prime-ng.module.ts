import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  exports: [
    ToolbarModule,
    CardModule,
    TableModule,
  ]
})
export class PrimeNgModule { }
