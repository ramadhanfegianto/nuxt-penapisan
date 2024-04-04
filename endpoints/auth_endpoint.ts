import type { AuthEntity } from "~/entities/auth_entity"

export default {
    async getUser():Promise<any>{
        let data = null
        return await data
    },

    async login(payload:AuthEntity):Promise<any>{
        let data = payload
        return await data
    },
}