import { ApplicationConfig } from '@angular/core';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

const scroll: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled'
};

const scrollFeature: InMemoryScrollingFeature = withInMemoryScrolling(scroll);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, scrollFeature)]
};
