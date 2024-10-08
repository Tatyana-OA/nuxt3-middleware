export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log("----Setup Middleware----");

  if (to.path === "/login") {
    throw createError({
      statusCode: 405,
      statusMessage:
        "Oh, snap, I'm learning about middleware errors, so there you go.",
    });
  }

  // try {
  //   const data = await fetch("/api/this-path");
  //   return navigateTo("/profile" + data.user.name);
  // } catch (err) {
  //   return abortNavigation(err);
  // }
});
