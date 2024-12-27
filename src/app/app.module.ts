import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { OurPartnerComponent } from './our-partner/our-partner.component';
import { WhychooseComponent } from './whychoose/whychoose.component';
import { FooterComponent } from './footer/footer.component';
import { HowItsWorkComponent } from './how-its-work/how-its-work.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    TestimonialComponent,
    OurPartnerComponent,
    WhychooseComponent,
    FooterComponent,
    HowItsWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
