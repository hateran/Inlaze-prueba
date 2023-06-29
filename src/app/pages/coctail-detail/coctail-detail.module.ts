import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoctailDetailComponent } from './coctail-detail.component';
import { CardModule } from 'src/app/components/card/card.module';
import { PaginationModule } from 'src/app/components/pagination/pagination.module';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    PaginationModule
  ],
  declarations: [CoctailDetailComponent],
  exports: [CoctailDetailComponent]
})
export class CoctailDetailModule { }
