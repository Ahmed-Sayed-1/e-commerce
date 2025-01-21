import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
// import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { RatingModule } from 'primeng/rating';

bootstrapApplication(AppComponent, appConfig,)
  .catch((err) => console.error(err));
  // bootstrapApplication(AppComponent, ).catch(err => console.error(err));