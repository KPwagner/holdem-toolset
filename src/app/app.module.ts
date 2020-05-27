import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HandRangeToolsetComponent } from './hand-range-toolset/hand-range-toolset.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HandRangeCalculatorComponent } from './hand-range-toolset/hand-range-calculator/hand-range-calculator.component';
import { HandRangeGridComponent } from './hand-range-toolset/hand-range-grid/hand-range-grid.component';
import { HandRangeGridPieceComponent } from './hand-range-toolset/hand-range-grid-piece/hand-range-grid-piece.component';

@NgModule({
  declarations: [
    AppComponent,
    HandRangeToolsetComponent,
    HandRangeCalculatorComponent,
    HandRangeGridComponent,
    HandRangeGridPieceComponent
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
