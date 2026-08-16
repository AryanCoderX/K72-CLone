import { Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import Work from "./assets/pages/Work";
import Agency from "./assets/pages/Agency";
import Contact from "./assets/pages/Contact";
import PageNotFound from "./assets/pages/PageNotFound";
import MenuScreen from "./assets/pages/MenuScreen";
import Blog from "./assets/pages/Blog";

const App = () => {
  return (
    <Routes>  
      <Route path="/" element={<Home/>}/>
      <Route path="/work" element={<Work/>}/>
      <Route path="/agency" element={<Agency/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/menu" element={<MenuScreen/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  );
};

export default App;
