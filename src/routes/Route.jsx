import React, { BrowserRouter, Routes, Route } from "react";

const Route = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element="home" />
        <Route path="master-banner" element="" />
      </Routes>
    </BrowserRouter>
  );
};

export default Route;
