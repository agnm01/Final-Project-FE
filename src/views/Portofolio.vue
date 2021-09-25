<template>
  <v-container>
    <Header></Header>
    <Resume></Resume>
    <Tools></Tools>
    <TeamMembers></TeamMembers>
    <Footer></Footer>
    <BackToTop></BackToTop>
  </v-container>
</template>

<script>
import Header from "../components/PortofolioPage/Header.vue";
// import Hero from "../components/PortofolioPage/Hero.vue";
// import About from "../components/PortofolioPage/About.vue";
// import Skills from "../components/PortofolioPage/Skills.vue";
// import Interests from "../components/PortofolioPage/Interests.vue";
import Resume from "../components/PortofolioPage/Resume.vue";
import Tools from "../components/PortofolioPage/Tools.vue";
import TeamMembers from "../components/PortofolioPage/TeamMembers.vue";
import BackToTop from "../components/PortofolioPage/BackToTop.vue";
import Footer from "../components/PortofolioPage/Footer.vue";

export default {
  name: "Portofolio",
  components: {
    Header,
    Footer,
    BackToTop,
    TeamMembers,
    Resume,
    Tools,
  },
};
</script>

<style scoped>
@import "../assets/css/style.css";
</style>
