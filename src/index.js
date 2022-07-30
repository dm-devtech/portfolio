import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Projects from "./Pages/Projects.js";
import Blog from "./Pages/Blog.js";
import About from "./Pages/About.js";
import GitLanguageFinder from "./Pages/Projects/git-language-finder.js";
import LanguageLighthouse from "./Pages/Projects/language-lighthouse.js";
import Cms from "./Pages/Projects/cms.js";
import CatchMe from "./Pages/Projects/CatchMe.js";
import Baseball from "./Pages/Projects/baseball-scorecard.js";
import "./App.css";
import Layout from "./Pages/Layout.js";
import NavigationBar from "./Pages/NavigationBar.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <NavigationBar />
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/git-language-finder" element={<GitLanguageFinder />} />
          <Route path="/language-lighthouse" element={<LanguageLighthouse />} />
          <Route path="/cms" element={<Cms />} />
          <Route path="/CatchMe" element={<CatchMe />} />
          <Route path="/baseball-scorecard" element={<Baseball />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  </div>
);

reportWebVitals();
