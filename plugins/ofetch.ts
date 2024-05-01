import { ofetch } from 'ofetch'
import Swal from 'sweetalert2'
import { useAuthStore } from '~/stores/auth'

export default defineNuxtPlugin((_nuxtApp) => {
  globalThis.$fetch = ofetch.create({
    onRequest ({ _request, options }) {
      const authStore = useAuthStore()
      if (authStore.getToken) {
        options.headers = { Authorization: `Bearer ${authStore.token}`, Accept: "Application/json" }
        // console.log(options)
      } else {
        console.log('Not authenticated')
      }
    },
    onRequestError ({ response, error }) {
      console.log(response)
      console.log(error)
      // console.error(error?.statusCode)
    },
    onResponseError({ response, error }) {
      console.log(response.status)

      if (response.status == 401){
        Swal.fire()
        navigateTo("/login")
      }
    }
  })
})