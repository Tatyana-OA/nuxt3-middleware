export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log("----Setup Middleware----");

  if (to.path === "/munchkin") {
    throw createError({
      statusCode: 405,
      statusMessage: "Now, what are you doing looking for munchkins?",
    });
  }

  // try {
  //   const data = await fetch("/api/this-path");
  //   return navigateTo("/profile" + data.user.name);
  // } catch (err) {
  //   return abortNavigation(err);
  // }
});
