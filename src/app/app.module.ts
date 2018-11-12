import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RestangularModule } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restangularConfig';
import { SendCsvService } from './services/send-csv.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CsvUploaderComponent } from './csv-uploader/csv-uploader.component';
import { FooterComponent } from './footer/footer.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CsvUploaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule,
    MatCardModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    AppRoutingModule
  ],
  providers: [SendCsvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
