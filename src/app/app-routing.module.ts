import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'user', loadChildren: './user/user.module#UserPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' }, 
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'family', loadChildren: './family/family.module#FamilyPageModule' },
  { path: 'communication', loadChildren: './communication/communication.module#CommunicationPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'tracking', loadChildren: './tracking/tracking.module#TrackingPageModule' },
  { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
