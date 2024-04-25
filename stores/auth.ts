import { defineStore } from "pinia";
import Cookie from "js-cookie";
import auth from "~/endpoints/auth_endpoint";
import type { AuthEntity } from "~/entities/auth_entity";
import auth_endpoint from "~/endpoints/auth_endpoint";
import { useRouter } from "vue-router";

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
            tahun: "",
        } as form
    }),
    getters: {
        getToken: (state) => {
            return state.hasToken
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
            const { data, error } = await auth_endpoint.login(payload)
            
            if (data) {
                Cookie.set("TOKEN", data.token.access_token)
            } else {
                return
            }
        },  

        async logout(): void{
            await Cookie.remove('TOKEN')

            this.hasToken = false

            this.token = undefined
        }
    }
} )