<template>
  <v-container>
    <Login></Login>
  </v-container>
</template>

<script>
import Login from "../components/LoginPage/Login.vue";

export default {
  name: "Home",
  components: {
    Login,
  },
};
</script>
