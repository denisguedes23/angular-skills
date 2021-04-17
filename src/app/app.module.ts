import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatChipsModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FakeApiService } from './fake-api.service';
import { HelloComponent } from './hello.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardComponent } from './dashboard/card/componente/card.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatGridListModule, RouterModule.forRoot([]), MatButtonModule, MatProgressSpinnerModule, MatChipsModule, MatCardModule, HttpClientModule, FlexLayoutModule, InMemoryWebApiModule.forRoot(FakeApiService, {delay: 5000}) ],
  declarations: [ AppComponent, HelloComponent, DashboardComponent, CardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
