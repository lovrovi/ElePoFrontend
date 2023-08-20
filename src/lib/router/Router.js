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
import ProcessorCompare from 'pages/processor/ProcessorCompare';
import ProcessorCreate from 'pages/processor/ProcessorCreate';
import ProcessorEdit from 'pages/processor/ProcessorEdit';

const routes = {
  LOGIN: '/login',
  REGISTER: '/register',
  PROCESSORS: '/processors',
  PROCESSORS_DETAILS: '/processors/:id',
  PROCESSORS_COMPARE: '/processors/compare',
  PROCESSORS_CREATE: '/processors/create',
  PROCESSORS_EDIT: '/processors/edit/:id',
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to={routes.PROCESSORS} />} />
      <Route path={routes.LOGIN} element={<Login />} />
      <Route path={routes.REGISTER} element={<Register />} />
      <Route path={routes.PROCESSORS} element={<Processors />} />
      <Route path={routes.PROCESSORS_DETAILS} element={<ProcessorDetails />} />
      <Route path={routes.PROCESSORS_COMPARE} element={<ProcessorCompare />} />
      <Route path={routes.PROCESSORS_CREATE} element={<ProcessorCreate />} />
      <Route path={routes.PROCESSORS_EDIT} element={<ProcessorEdit />} />

      <Route path="*" element={<NoPage />} />
    </Route>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export { Router, routes };
