import { AboutPage } from "@/pages/AboutPage";
import { FashionPage } from "@/pages/FashionPage";
import { FrontLayout } from "@/pages/FrontLayout";
import { Homepage } from "@/pages/Homepage";
import { ShopPages } from "@/pages/ShopPages";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: FrontLayout,
    children: [
      {
        path: "/",
        Component: Homepage,
      },
      {
        path: "/shop",
        Component: ShopPages,
      },
      {
        path: "/fashion",
        Component: FashionPage,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
    ],
  },
]);
