import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import Layout from "./Layout/Layout";

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
