import React from 'react';
import { AbstractFactory } from './components/AbstractFactory';
import { Decorators } from './components/Decorators';
import { Factory } from './components/Factory';
import { Native } from './components/Native';
import { Singleton } from './components/Singleton';
import { State } from './components/State';
import { Strategy } from './components/Strategy';
import { UserPermissionListener } from './components/UserPermissionListener';
import { ServiceWorkerBeforeunload } from './facade/service-worker-beforeunload';
import { ServiceWorkerFacade } from './facade/service-worker-facade';

function App() {
  const beforeUnload = new ServiceWorkerFacade(
    new ServiceWorkerBeforeunload('api/logout', { data: 'Logout' })
  );
  beforeUnload.sendData();

  return (
    <>
      <Singleton />
      <Native />
      <UserPermissionListener />
      <Factory />
      <AbstractFactory />
      <br />
      <State />
      <Strategy />
      <Decorators />
    </>
  );
}

export default App;
