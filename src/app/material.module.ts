import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatToolbarModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';






@NgModule({
  imports: [MatButtonModule,
    MatButtonModule, MatToolbarModule, MatSelectModule, MatChipsModule
],
  exports: [MatButtonModule,
    MatButtonModule, MatToolbarModule, MatSelectModule, MatChipsModule]
})
// tslint:disable-next-line:eofline
export class MaterialModule { }