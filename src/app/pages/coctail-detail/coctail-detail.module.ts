import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoctailDetailComponent } from './coctail-detail.component';
import { CardModule } from 'src/app/components/card/card.module';

@NgModule({
  imports: [
    CommonModule,
    CardModule
  ],
  declarations: [CoctailDetailComponent],
  exports: [CoctailDetailComponent]
})
export class CoctailDetailModule { }
