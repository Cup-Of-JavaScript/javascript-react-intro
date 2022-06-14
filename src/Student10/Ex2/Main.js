import React from "react";
import "./Main.css";
import { Header } from "./Header";
import { Posts } from "./Posts";
import { Groups } from "./Groups";
import { Footer } from "./Footer";

export const Main = () => {
  return (
    <div className="Main">
      <Header />
      <Posts />
      <Groups />
      <Footer />
    </div>
  );
};
