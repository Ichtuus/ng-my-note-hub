import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatImportModule } from '../mat-import/mat-import.module';

@NgModule({
  declarations: [],
  exports: [CommonModule, FormsModule, MatImportModule],
})
export class SharedModule {}
