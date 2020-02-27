import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DialougeComponent } from './dialouge/dialouge.component';
import { SelectBeverageComponent } from './dialouge/select-beverage/select-beverage.component';
import { TheUsualComponent } from './dialouge/the-usual/the-usual.component';
import { RightToBeForgottenComponent } from './right-to-be-forgotten/right-to-be-forgotten.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DialougeComponent,
    SelectBeverageComponent,
    TheUsualComponent,
    RightToBeForgottenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
