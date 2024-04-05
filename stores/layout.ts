import { defineStore } from "pinia"

type breadcrumbItems = Array<{label:string, path:string}>

export const useLayoutStore = defineStore('layout', {
    state: () => ({
        breadcrumb: [] as breadcrumbItems,
    })
    
})