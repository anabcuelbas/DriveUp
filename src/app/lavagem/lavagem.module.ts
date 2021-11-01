import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../components/header/header.module';
import { LavagemCardModule } from '../components/lavagem-card/lavagem-card.module';
import { LavagemPageRoutingModule } from './lavagem-routing.module';
import { LavagemPage } from './lavagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LavagemPageRoutingModule,
    LavagemCardModule,
    HeaderModule,
  ],
  declarations: [LavagemPage],
})
export class LavagemPageModule {}
