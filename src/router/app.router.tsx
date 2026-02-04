import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

import { AdminLayout } from "@/admin/layouts/AdminLayout";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";

const AdminPage = lazy(() => import('@/admin/pages/AdminPage'));
const HeroPage = lazy(() => import('@/heroes/pages/hero/HeroPage'));
const HomePage = lazy(() => import('@/heroes/pages/home/HomePage'));
const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage'));

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <HeroesLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'heroes/{id}',
        element: <HeroPage />
      },
      {
        path: 'search',
        element: <SearchPage />
      },
    ]
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to='/' />
  },
]);