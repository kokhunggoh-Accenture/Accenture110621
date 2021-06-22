import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// lazy loaded Service module
import { ServicesModule } from './services/services.module';
import { InsightsModule } from './insights/insights.module';

//Loading UnsavedChangesGuard
import { UnsavedChangesGuard } from './_guards/un-saved-changes-guard.service';
import { CareersModule } from './careers/careers.module';
import { ContactModule } from './contact/contact.module';
import { SharedModule } from './_shared/shared/shared.module';
import { ListOfRegisteredUsersModule } from './list-of-registered-users/list-of-registered-users.module';
import { IndustriesModule } from './industries/industries.module';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ServicesModule,
    InsightsModule,
    CareersModule,
    ContactModule,
    ListOfRegisteredUsersModule,
    IndustriesModule,
    AboutModule,
    LoginModule,
    HomeModule,
    PageNotFoundModule,
    SharedModule,
  ],
  providers: [UnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
