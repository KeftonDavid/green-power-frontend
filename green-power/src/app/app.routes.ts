import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { component: HomeComponent, path: '' },
    { component: AboutComponent, path: 'about' },
    { component: ServicesComponent, path: 'services' },
    { component: ContactComponent, path: 'contact' }
];
