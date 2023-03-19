import React from 'react';
import { Native } from './components/Native';
import { Singleton } from './components/Singleton';
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
    </>
  );
}

export default App;
