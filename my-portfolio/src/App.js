import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Page><Hero /></Page>} />
        <Route path="/about" element={<Page><About /></Page>} />
        <Route path="/projects" element={<Page><Projects /></Page>} />
        <Route path="/contact" element={<Page><Contact /></Page>} />
      </Routes>
    </AnimatePresence>
  );
}

function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
