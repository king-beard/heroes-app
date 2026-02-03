import { AdminPage } from "@/admin/pages/AdminPage";
import { HeroPage } from "@/heores/pages/hero/HeroPage";
import { HomePage } from "@/heores/pages/home/HomePage";
import { SearchPage } from "@/heores/pages/search/SearchPage";
import { createBrowserRouter, Navigate } from "react-router";

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/heroes/{id}',
    element: <HeroPage />
  },
  {
    path: '/search',
    element: <SearchPage />
  },
  {
    path: '/admin',
    element: <AdminPage />
  },
  {
    path: '*',
    element: <Navigate to='/' />
  },
]);