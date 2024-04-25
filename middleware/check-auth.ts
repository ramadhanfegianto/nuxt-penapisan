import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore();

  const router = useRouter();

  await authStore.checkToken();
  
  if (authStore.getToken == false) {
     
     // router.push("/login")
  }  

});
