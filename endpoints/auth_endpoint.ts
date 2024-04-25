import type { AuthEntity } from "~/entities/auth_entity"


const baseURL = "http://penapisan-be.localhost/api"

export default {
    async getUser(): Promise<any> {
        let data = null
        return await data
    },

    async login(payload: AuthEntity): Promise<any> {
        return await $fetch(baseURL + "/auth/login", { method: "POST", body: payload })
    },

    async logout(): Promise<any> {
        return await $fetch(baseURL + "/auth/login", { method: "POST", body: payload })
    }

}