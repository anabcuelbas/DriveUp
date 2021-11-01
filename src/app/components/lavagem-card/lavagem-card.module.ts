import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LavagemCardComponent } from './lavagem-card';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

  ],
  declarations: [LavagemCardComponent],
  exports: [LavagemCardComponent]
})
export class LavagemCardModule {}
