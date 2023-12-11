import React from "react";
import MobileNav from "./components/MobileNav";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Subbar from "./components/Subbar";

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Subbar />
      {/* <MobileNav /> */}
    </>
  );
}

export default App;
