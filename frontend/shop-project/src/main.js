import "./assets/main.css";

import { createRouter, createWebHashHistory } from "vue-router";
import { createApp } from "vue";
import App from "./App.vue";
import MainPage from "./pages/mainPage.vue";
import Catalog from "./pages/catalog.vue";
import DrawerOrder from "./pages/drawerOrder.vue";
import Test from "./pages/test.vue";
import Favourites from "./pages/favourites.vue";

const routes = [
  { path: "/", name: "MainPage", component: MainPage },
  { path: "/catalog", name: "Catalog", component: Catalog },
  { path: "/order", name: "Order", component: DrawerOrder },
  { path: "/test", name: "Test", component: Test },
  { path: "/favourites", name: "Favourites", component: Favourites },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
