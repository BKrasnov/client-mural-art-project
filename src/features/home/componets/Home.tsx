import { FC, memo } from "react";

import "./Home.css";

const HomeComponent: FC = () => (
    <main className="main">
      <div>Привет</div>
    </main>
);

export const Home = memo(HomeComponent);
