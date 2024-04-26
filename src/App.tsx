import React, { FC } from "react";
import DataList from "./components/data-list";

const App: FC = () => {
  return (
    <div style={{
      maxWidth: "80vw",
      height: "100vh",
      margin: "auto",
      display: "grid",
      placeItems: "center",
    }}>
      <DataList />
    </div>
  )
}

export default App