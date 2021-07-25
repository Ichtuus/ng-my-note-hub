import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatImportModule } from '../mat-import/mat-import.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatImportModule,
    FormsModule
  ]
})
export class SharedModule { }
