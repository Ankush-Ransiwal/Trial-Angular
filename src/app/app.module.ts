import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CbComponent } from './cb/cb.component';
import { InputHeadingComponent } from './cb/components/atoms/input-heading/input-heading.component';
import { TextInputComponent } from './cb/components/atoms/text-input/text-input.component';
import { FormInputComponent } from './cb/components/molecules/form-input/form-input.component';
import { BeneficiaryComponent } from './cb/components/organism/beneficiary/beneficiary.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CbComponent,
    InputHeadingComponent,
    TextInputComponent,
    FormInputComponent,
    BeneficiaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
