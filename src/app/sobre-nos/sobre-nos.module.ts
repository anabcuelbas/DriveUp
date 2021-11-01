import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../components/header/header.module';
import { SobreNosRoutingModule } from './sobre-nos-routing.module';
import { SobreNosComponent } from './sobre-nos.component';

@NgModule({
  declarations: [SobreNosComponent],
  imports: [SobreNosRoutingModule, HeaderModule, IonicModule],
  exports: [SobreNosComponent],
})
export class SobreNosModule {}
