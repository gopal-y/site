import { MaterialModule } from './material-module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SkillsComponent } from './skills/skills.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, NotFoundComponent, SkillsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
