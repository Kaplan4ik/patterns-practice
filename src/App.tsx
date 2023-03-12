import React from 'react';
import { Singleton } from './components/Singleton';
import { ServerWorkerFacade } from './facade/serviceWorkerFacade';

function App() {
  const serverWorkerInit = new ServerWorkerFacade();
  serverWorkerInit.sendDataOnBeforeUnload('api/url', { data: 'Unload page' });

  return <Singleton />;
}

export default App;
