import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'privacy', component: PrivacyPolicyComponent },
    { path: 'terms', component: TermsOfUseComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: PageNotFoundComponent }
];
