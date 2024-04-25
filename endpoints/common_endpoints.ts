
const baseURL = "http://penapisan-be.localhost/api";

export default {
    async getUser(){
        return await $fetch(baseURL+"/user", { method:"GET"})
    }

}