import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoctailsComponent } from './coctails.component';
import { PaginationModule } from 'src/app/components/pagination/pagination.module';

@NgModule({
  imports: [
    CommonModule,
    PaginationModule
  ],
  declarations: [CoctailsComponent],
  exports: [CoctailsComponent]
})
export class CoctailsModule { }
