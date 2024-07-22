import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';

import {
  StoreFeatureModule,
  StoreModule,
} from '@ngrx/store';

import { reducers } from './reducers';

@NgModule({})
export class RemoteWrapperModule {
  static loadRemoteStore(): ModuleWithProviders<StoreFeatureModule> {
    return StoreModule.forFeature('sharedData', reducers.sharedData);
  }
}
