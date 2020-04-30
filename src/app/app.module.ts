import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HandRangeToolsetComponent } from './hand-range-toolset/hand-range-toolset.component';
import { HandRangePiece } from './hand-range-piece.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HandRangeToolsetComponent,
    HandRangePiece
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
