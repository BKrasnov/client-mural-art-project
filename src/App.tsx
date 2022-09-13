import { FC, Suspense } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { store } from './core/store';
import { RootRouter } from './core/routes/RootRouter';

import './theme/index.css';

import { Loader } from './components/Loader';

export const App: FC = () => (
  <Provider store={store}>
    <HashRouter>
        <Suspense fallback={<Loader/>}>
          <RootRouter />
        </Suspense>
    </HashRouter>
  </Provider>
);
