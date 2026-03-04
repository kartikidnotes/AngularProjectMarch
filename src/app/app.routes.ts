import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { ServiceDetails } from './pages/service-details/service-details';
import { Contact } from './pages/contact/contact';
import { authGuard } from './core/auth-guard';
import { Bookings } from './pages/bookings/bookings';
import { Login } from './pages/login/login';

export const routes: Routes = [

  { path: '', component: Home },

  { path: 'contact', component: Contact },

  { path: 'login', component: Login },

  { 
    path: 'services', 
    component: Services,
    canActivate: [authGuard]  // 🔐 protected
  },

  { 
    path: 'service/:id', 
    component: ServiceDetails,
    canActivate: [authGuard]  // 🔐 also protect details
  },


  { 
    path: 'bookings', 
    component: Bookings,
    canActivate: [authGuard]  // 🔐 protected
  },

  { path: '**', redirectTo: '' }
];



  // { path: 'services', component: Services },

  // { path: 'bookings', component: Bookings },

  // { path: '**', redirectTo: '' }