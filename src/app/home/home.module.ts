import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SwiperComponent } from 'swiper/angular';
import { HeaderModule } from '../components/header/header.module';
import { HomeCardModule } from '../components/home-card/home-card.module';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HomeCardModule,
    HeaderModule,
  ],
  declarations: [HomePage, SwiperComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomePageModule {}
