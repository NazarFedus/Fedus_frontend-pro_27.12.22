import React from "react";

import Menu from "./components/Menu/Menu";
import ResultPopUp from './components/ResultPopUp/ResultPopUp.tsx'

function App() {
  return (
    <div className="w-full h-[100vh] bg-slate-500 flex">
      <Menu></Menu>
      <ResultPopUp></ResultPopUp>
    </div>
  );
}

export default App;
