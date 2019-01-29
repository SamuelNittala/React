import React from "react";
import ReactDOM from "react-dom";

import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";

function MyApp() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
