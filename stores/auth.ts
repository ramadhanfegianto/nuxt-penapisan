import { defineStore } from "pinia";
import Cookie from "js-cookie";
import auth from "~/endpoints/auth_endpoint";
import type { AuthEntity } from "~/entities/auth_entity";
import auth_endpoint from "~/endpoints/auth_endpoint";
type user = {
    id: BigInteger,
    name: String,
}

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: {} as user,
        token: "" as string
    }),
    actions: {
        checkToken():string {
            if(Cookie.get("TOKEN") == undefined){
                return "need login"
            }
            return Cookie.get("TOKEN")
        },
        async login(payload: AuthEntity){
            const { data } = await auth_endpoint.login(payload)

            if (data) {
                Cookie.set("TOKEN", data.token)
            } else {
                return
            }
        }
    }
} )