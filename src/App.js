import React from "react";
import "../src/styles/Styles.scss";
import MainHome from "./pages/home/MainHome";
import MainServices from "./pages/service/MainServices";
import Header from "./pages/home/components/Header"
import MainProjects from "./pages/projects/MainProjects";
import MainContact from "./pages/contact/MainContact";
import MainBlog from "./pages/blogs/MainBlog";
import MainFooter from "./pages/footer/MainFooter";
import { useTheme } from "./context/theme/ThemeSection";

function App() {
  const { darkMode } = useTheme();

  React.useEffect(() => {
    if (darkMode) {
      document.getElementById("root").classList.add('dark-mode');
    } else {
      document.getElementById("root").classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="container">
      <Header />
      <MainHome />
      <MainServices />
      <MainProjects />
      <MainContact />
      <MainBlog />

      {/* FOoter */}
      <MainFooter />
    </div>
  );
}

export default App;
