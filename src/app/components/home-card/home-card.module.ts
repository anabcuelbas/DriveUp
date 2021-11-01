import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomeCardComponent } from './home-card';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

  ],
  declarations: [HomeCardComponent],
  exports: [HomeCardComponent]
})
export class HomeCardModule {}
