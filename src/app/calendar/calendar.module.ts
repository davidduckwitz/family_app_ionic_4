import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FullCalendarModule } from 'ng-fullcalendar';
import { IonicModule } from '@ionic/angular';

import { CalendarPage } from './calendar.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullCalendarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CalendarPage]
})
export class CalendarPageModule {}
