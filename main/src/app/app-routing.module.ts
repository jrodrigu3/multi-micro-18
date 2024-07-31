import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { loadRemoteModule } from '@angular-architects/module-federation';
import  environment  from '../environments/environment.env.json';

const routes: Routes = [
  {
    path: 'payment',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: `${environment.remotes.payment}remoteEntry.js`,
        exposedModule: './MainComponent',
      }).then((m) => m.ProductsModule),
  },
  /*
        path: '',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './MainComponent',
      }).then((m) => m.ProductsModule),
  },
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
