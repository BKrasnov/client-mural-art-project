import { FC, memo } from 'react';
import { Footer } from '../../../components/Footer';
import { Header } from '../../../components/Header';

import './HomePage.css';

const HomePageComponent: FC = () => (
  <>
    <div className="App">
      <Header/>
      <div className="container">
        <aside className="drawer">Drawer</aside>  
        <main className="main">Content</main>
      </div>
      <Footer/>
    </div>
  </>
);

export const HomePage = memo(HomePageComponent);
