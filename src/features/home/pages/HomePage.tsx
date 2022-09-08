import { FC, memo } from 'react';
import { Header } from '../../../components/Header';

import './HomePage.css';

const HomePageComponent: FC = () => (
  <>
    <div className="App">
      <Header></Header>
      <div className="container">
        <aside className="drawer">Drawer</aside>  
        <main className="main">Content</main>
      </div>
      <div className="footer">Footer</div>
    </div>
  </>
);

export const HomePage = memo(HomePageComponent);
