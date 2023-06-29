import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { CardModule } from 'src/app/components/card/card.module';

@NgModule({
  imports: [
    CommonModule,
    CardModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
