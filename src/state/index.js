import { reactive } from "@vue/reactivity";

export const applicationState = reactive({
    isLoggedIn: false,
    userInfo: {},
}) ;
