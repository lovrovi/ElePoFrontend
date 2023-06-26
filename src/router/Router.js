import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from 'pages/Layout';
import Dashboard from 'pages/Dashboard';
import NoPage from 'pages/NoPage';
import Login from 'pages/Login';
import Register from 'pages/Register';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
