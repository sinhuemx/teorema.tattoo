import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material

import { MatDatepickerModule } from '@angular/material/datepicker';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { BidiModule } from '@angular/cdk/bidi';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CdkTableModule } from '@angular/cdk/table';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';








@NgModule({
  imports: [
      CommonModule,
      MatDatepickerModule,
      OverlayModule,
      PortalModule,
      BidiModule,
      MatTableModule,
      MatButtonModule,
      MatFormFieldModule,
      CdkTableModule,
      MatCardModule,
      MatGridListModule,
      MatBadgeModule,
      MatInputModule,
      MatSelectModule,
      BrowserAnimationsModule,
      MatMenuModule,
      FlexLayoutModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatIconModule

  ],
  exports: [
      CommonModule,
      MatDatepickerModule,
      OverlayModule,
      PortalModule,
      BidiModule,
      MatTableModule,
      MatButtonModule,
      MatFormFieldModule,
      CdkTableModule,
      MatCardModule,
      MatGridListModule,
      MatBadgeModule,
      MatInputModule,
      MatSelectModule,
      BrowserAnimationsModule,
      MatMenuModule,
      FlexLayoutModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatIconModule
  ]
})
export class MaterialModule { }

