import { useState, useEffect } from "react";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Why } from "./components/why";
import { How } from "./components/how";
import { Features } from "./components/features";
import { Navigation } from "./components/navigation";
import JsonData from "./data/data.json";
import "./assets/scss/custom.scss";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <>
      <Navigation />
      <Home data={landingPageData.HOME} />
      <About data={landingPageData.ABOUT} />
      <Why data={landingPageData.WHY} />
      <How data={landingPageData.HOW} />
      <Features data={landingPageData.FEATURES} />
    </>
  );
};

export default App;
