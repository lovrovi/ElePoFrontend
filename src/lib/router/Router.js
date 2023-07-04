import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from 'pages/Layout';
import NoPage from 'pages/NoPage';
import Login from 'pages/Login';
import Register from 'pages/Register';
import ProcessorDetails from 'pages/processor/ProcessorDetails';
import Processors from 'pages/processor/Processors';

const routes = {
  LOGIN: '/login',
  REGISTER: '/register',
  PROCESSORS: '/processors',
  PROCESSORS_DETAILS: '/processors/:id',
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to={routes.PROCESSORS} />} />
      <Route path={routes.LOGIN} element={<Login />} />
      <Route path={routes.REGISTER} element={<Register />} />
      <Route path={routes.PROCESSORS} element={<Processors />} />
      <Route path={routes.PROCESSORS_DETAILS} element={<ProcessorDetails />} />

      <Route path="*" element={<NoPage />} />
    </Route>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export { Router, routes };
