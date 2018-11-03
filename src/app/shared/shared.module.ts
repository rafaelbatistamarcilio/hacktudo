import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDollarSign, faChevronLeft, faHandHoldingUsd, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

// Add an icon to the library for convenient access in other components
library.add(faDollarSign, faChevronLeft, faHandHoldingUsd, faTrashAlt);

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    IonicModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  declarations: [HeaderComponent]
})
export class SharedModule { }
