import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}
