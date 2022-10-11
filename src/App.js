import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from './components/Footer'

import Home from './views/Home'
import Planes from './views/Planes'
import Contacto from "./views/Contacto"
import NotFound from './views/NotFound'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/planes" element={<Planes />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
