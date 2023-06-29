import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { CardModule } from 'src/app/components/card/card.module';
import { PaginationModule } from 'src/app/components/pagination/pagination.module';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    PaginationModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
