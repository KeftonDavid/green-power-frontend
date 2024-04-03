import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
    { component: HomeComponent, path: '' },
    { component: AboutComponent, path: 'about' },
    { component: ServicesComponent, path: 'services' }
];
