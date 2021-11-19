import React, { useState } from "react";
import styles from "./App.module.css"
import Gallery from "./gallery.js";
import Navbar from "./navbar.js"
import Contact from "./contact.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom';





function App() {
  const [click, setClick] = useState(false);
  const childToParent = () => {
    setClick(false)
  }

  return (
    <BrowserRouter>
    <div className={styles.App}>
      <header>
      <Navbar childToParent={childToParent}/>
      </header>
      <div className={click ? styles.contentActive : styles.content }>
      <Routes>
                <Route exact path="/" element={<Gallery />} />
                <Route exact path="/contact" element={<Contact />} />
      </Routes>
      </div>
      <footer>
      © John Lucente 2021
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
