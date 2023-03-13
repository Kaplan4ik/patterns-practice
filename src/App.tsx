import React from 'react';
import { Singleton } from './components/Singleton';
import { ServiceWorkerBeforeunload } from './facade/service-worker-beforeunload';
import { ServiceWorkerFacade } from './facade/service-worker-facade';

function App() {
  const beforeUnload = new ServiceWorkerFacade(
    new ServiceWorkerBeforeunload('api/logout', { data: 'Logout' })
  );
  beforeUnload.sendData();

  return <Singleton />;
}

export default App;
