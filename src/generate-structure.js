const fs = require("fs");
const path = require("path");

const basePath = path.join(__dirname, "src");

// Pages with optional subpages
const pages = {
  Home: [],
  Products: [
    "Cabinets",
    "Flooring",
    "Countertops",
    "Closets",
    "Tiles",
    "Accessories",
    "OutdoorKitchen",
    "Appliances",
  ],
  Services: [
    "KitchenRemodeling",
    "BathroomRemodeling",
    "ClosetRemodeling",
    "NewConstruction",
  ],
  ForProfessionals: [],
  Reviews: [],
  About: ["InTheMedia", "ContactUs"],
  Franchising: ["WhyUs", "InvestmentInfo", "StepsToOwnership"],
  Blog: [],
  Locations: [],
  Contact: [],
  Legal: ["Terms", "Privacy", "SiteMap"],
};

// Common components
const components = ["Header", "Footer", "Hero", "CTA", "Testimonials"];

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function createPageFile(pagePath, name) {
  const content = `
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ${name}() {
  return (
    <>
      <Header />
      <main className="page-${name.toLowerCase()}">
        <h1>${name} Page</h1>
        <p>Content for ${name} goes here.</p>
      </main>
      <Footer />
    </>
  );
}
  `.trim();

  fs.writeFileSync(pagePath, content, "utf8");
}

// Step 1: Create components
const componentsPath = path.join(basePath, "components");
ensureDir(componentsPath);

components.forEach((comp) => {
  const compFile = path.join(componentsPath, `${comp}.jsx`);
  if (!fs.existsSync(compFile)) {
    fs.writeFileSync(
      compFile,
      `import React from "react";

export default function ${comp}() {
  return <div className="${comp.toLowerCase()}">${comp} Component</div>;
}
`
    );
  }
});

// Step 2: Create pages + subpages
const pagesPath = path.join(basePath, "pages");
ensureDir(pagesPath);

let routes = [];

Object.entries(pages).forEach(([page, subpages]) => {
  const pageDir = path.join(pagesPath, page);
  ensureDir(pageDir);

  const mainPageFile = path.join(pageDir, `${page}.jsx`);
  if (!fs.existsSync(mainPageFile)) {
    createPageFile(mainPageFile, page);
    routes.push({ path: `/${page.toLowerCase()}`, component: page });
  }

  subpages.forEach((sub) => {
    const subPageFile = path.join(pageDir, `${sub}.jsx`);
    if (!fs.existsSync(subPageFile)) {
      createPageFile(subPageFile, sub);
      routes.push({
        path: `/${page.toLowerCase()}/${sub.toLowerCase()}`,
        component: sub,
      });
    }
  });
});

// Step 3: Create App.jsx with routing
const appFile = path.join(basePath, "App.jsx");

const appContent = `
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
${routes
  .map(
    (r) =>
      `import ${r.component} from "./pages/${
        r.component.includes("/") ? r.component.split("/")[0] : r.component
      }/${r.component}.jsx";`
  )
  .join("\n")}

export default function App() {
  return (
    <Router>
      <Routes>
        ${routes
          .map((r) => `<Route path="${r.path}" element={<${r.component} />} />`)
          .join("\n        ")}
      </Routes>
    </Router>
  );
}
`.trim();

fs.writeFileSync(appFile, appContent, "utf8");

console.log("✅ Project structure generated successfully!");
