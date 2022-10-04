import React from "react";

import Header from "./components/Header";
import Post from "./components/Post";

function App() {
  return (
    <>
      <Header title="Filipe´s Blog" subtitle="Weekly posts" />

      <hr />

      <Post title="Post title 01" subtitle="Post subtitle 01" />
    </>
  );
}

export { App };
