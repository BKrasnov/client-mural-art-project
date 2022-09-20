import { FC, memo } from "react";

import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Home } from "../componets";

const HomePageComponent: FC = () => (
  <>
    <Header />
    <Home />
    <Footer />
  </>
);

export const HomePage = memo(HomePageComponent);
