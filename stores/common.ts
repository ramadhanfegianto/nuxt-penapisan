import common_endpoints from "~/endpoints/common_endpoints";

export const useCommonStore = defineStore("common", {
  state: () => ({
    data: {},
  }),
  actions: {
    async getUser(): void{
      const {data, error} = await common_endpoints.getUser();   
      
      this.data = data
    },
  },
});
