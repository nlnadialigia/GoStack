import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import CreateGlobalStyles from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <CreateGlobalStyles />
  </>
);

export default App;
