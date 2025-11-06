import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import AboutUs from "../pages/AboutUs.vue";
import Products from "../pages/Products.vue";
import ProductDetails from "../pages/ProductDetails.vue";
import ContactUs from "../pages/ContactUs.vue";
import LaunchPage from "../pages/LaunchPage.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "AboutUs", component: AboutUs },
  { path: "/products", name: "Products", component: Products },
  {
    path: "/products/:id",
    name: "ProductDetails",
    component: ProductDetails,
    props: true,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () => import("../pages/Gallery.vue"),
  },
  { path: "/contact", name: "ContactUs", component: ContactUs },
  {
    path: "/launch",
    name: "Launch",
    component: () => import("../pages/LaunchPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Default scroll behavior — always scroll to top on route change
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "auto" };
  },
});

export default router;
