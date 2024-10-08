export default defineNuxtRouteMiddleware((to, from) => {
  console.log("----Another global Middleware----");
});
