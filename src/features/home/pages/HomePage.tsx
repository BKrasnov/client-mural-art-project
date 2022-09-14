import { FC, memo } from "react";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";

import "./HomePage.css";

const HomePageComponent: FC = () => (
  <>
    <Header />
    <main className="main">
      Content
    </main>
    <Footer />
  </>
);

export const HomePage = memo(HomePageComponent);
