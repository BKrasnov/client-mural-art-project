import { FC, Suspense } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { store } from './core/store';
import { RootRouter } from './core/routes/RootRouter';

import './theme/index.css';

/** Replace "Brr... gere should..." on "<ErrorSite>" */
export const App: FC = () => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Suspense fallback={<div>Brrr... here should be your loader component</div>}>
          <RootRouter />
        </Suspense>
      </div>
    </HashRouter>
  </Provider>
);
