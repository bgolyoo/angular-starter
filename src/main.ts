import { bootstrapApplication } from '@angular/platform-browser';

import { environment } from '@env/environment';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

const enableMocking = async () => {
  if (environment.production) return;

  const { worker } = await import('./mocks/browser');

  return worker.start();
};

enableMocking()
  .then(() => bootstrapApplication(AppComponent, appConfig))
  .catch((err) => console.error(err));
