import { Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home.jsx";
import Agency from "./assets/pages/Agency.jsx";
import Blog from "./assets/pages/Blog.jsx";
import Contact from "./assets/pages/Contact.jsx";
import MenuScreen from "./assets/pages/MenuScreen.jsx";
import Work from "./assets/pages/Work.jsx";
import PageNotFound from "./assets/pages/PageNotFound.jsx";

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
