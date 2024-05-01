import { defineStore } from "pinia";
import Cookie from "js-cookie";
import auth from "~/endpoints/auth_endpoint";
import type { AuthEntity } from "~/entities/auth_entity";
import auth_endpoint from "~/endpoints/auth_endpoint";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

type user = {
    id: BigInteger,
    name: String,
}

interface form {
    username: String,
    password: String,
    tahun: String,
}

const router = useRouter();

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: {} as user,
        token: undefined as string,
        hasToken: false,
        form: {
            username: "",
            password: "",
            tahun: "2025",
        } as form,
        errors: {}
    }),
    getters: {
        getToken: (state) => {
            return state.hasToken
        },
        getErrors: (state) => {
            return state.errors
        }
    },
    actions: {
        checkToken(): void {
            this.token = Cookie.get("TOKEN")
            if (this.token != undefined){
                this.hasToken = true
            }        
        },
        async login(payload: AuthEntity){
            const { data, errors } = await auth_endpoint.login(payload)
            
            if (data) {
                await Cookie.set("TOKEN", data.token.access_token)
                this.token = Cookie.get("TOKEN")

                navigateTo("/dashboard")
            }

            if (errors) {
                this.errors = errors
            }
                
        },  

        async logout(): void{
            await Cookie.remove('TOKEN')

            this.hasToken = false

            this.token = undefined
        }
    }
} )