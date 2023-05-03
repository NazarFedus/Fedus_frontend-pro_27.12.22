import React from "react";

import TodoProvider from "./components/MenuProvider";
import Menu from "./components/Menu/Menu";
import ResultPopUp from "./components/ResultPopUp/ResultPopUp.tsx";

function App() {
  return (
    <TodoProvider>
      <div className="w-full h-[100vh] bg-slate-500 flex">
        <Menu />
        <ResultPopUp />
      </div>
    </TodoProvider>
  );
}

export default App;
