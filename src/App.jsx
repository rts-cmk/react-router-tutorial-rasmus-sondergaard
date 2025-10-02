import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="react-router-tutorial-rasmus-sondergaard">
          <Route index element={<Home />} />
          <Route path="react-router-tutorial-rasmus-sondergaard/about" element={<About />} />
          <Route path="react-router-tutorial-rasmus-sondergaard/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
