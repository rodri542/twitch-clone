export default defineNuxtRouteMiddleware((to) => {
  if (to.path !== '/' && !to.path.startsWith('/stream/') && !to.path.startsWith('/404')) {
    return navigateTo('/404')
  }
})
