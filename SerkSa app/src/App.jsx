//react library
import { lazy, useState } from "react";
//style
import styles from "./App.module.css";
import "./styles/Global.scss";
//components
import Navbar from "./Components/Navbar/Navbar.jsx";
import LandingPage from "./Components/Landing/Landing.jsx"
import Footer from "./Components/footer/Footer.jsx";
import ErrorHandle from "./pages/Error/Error.jsx";
const About = lazy(()=>import("./Components/About/About.jsx"))
const Feature = lazy(()=>import("./Components/FeaturePage/Feature.jsx"))
const KeyFeature = lazy(()=>import("./Components/KeyPage/KeyPage.jsx"))

//import react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
function App() {
  const Layout = () => {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.nav}> <Navbar /></div>
          <main className={styles.main}>
              <div id="home" className={styles.landing}> <LandingPage /> </div>
              <div id="about" className={styles.aboutPage}><About /></div>
              <div id="feature" className={styles.featurePage}><Feature /></div>
              <div id="key" className={styles.keyPage}><KeyFeature /></div>
          </main>
          <div id="contact" className={styles.footer}>
            <Footer />
          </div>
          <div className={styles.copyright}>
            <h4
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "300",
                fontSize: "0.9rem",
              }}
            >
              &#xa9; Alright Reserved 2024, SERKSA
            </h4>
          </div>
        </div>
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorHandle />,
    },
    {
      path: "/development",
      element: <ErrorHandle />,
    },
  ]);

  return (
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  );
}
export default App;
