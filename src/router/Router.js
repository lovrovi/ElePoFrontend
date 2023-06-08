import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from 'pages/Layout';
import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';
import NoPage from 'pages/NoPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
