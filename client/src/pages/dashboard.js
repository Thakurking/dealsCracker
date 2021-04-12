import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import NavBar from "../components/dashboard.Component/navbar";
import Body from "../components/dashboard.Component/body";

export default function Dashboard() {
  return (
    <>
      <NavBar />
      <Body />
    </>
  );
}
