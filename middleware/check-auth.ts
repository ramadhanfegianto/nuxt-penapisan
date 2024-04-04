import { useAuthStore } from "~/stores/auth"

export default defineNuxtRouteMiddleware((to, from) => {
     const authStore = useAuthStore()

     const hasToken = authStore.checkToken()

     console.log(hasToken);
     
})