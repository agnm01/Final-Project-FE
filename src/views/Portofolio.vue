<template>
  <Header></Header>
  <Footer></Footer>
  <BackToTop></BackToTop>
</template>

<script>
import Header from "../components/PortofolioPage/Header.vue";
// import Hero from "../components/PortofolioPage/Hero.vue";
// import About from "../components/PortofolioPage/About.vue";
// import Skills from "../components/PortofolioPage/Skills.vue";
// import Interests from "../components/PortofolioPage/Interests.vue";
// import Resume from "../components/PortofolioPage/Resume.vue";
// import Tools from "../components/PortofolioPage/Tools.vue";
// import TeamMembers from "../components/PortofolioPage/TeamMembers.vue";
import BackToTop from "../components/PortofolioPage/BackToTop.vue";
import Footer from "../components/PortofolioPage/Footer.vue";

export default {
  name: "Portfolio",
  components: {
    Header,
    Footer,
    BackToTop,
  }, // de pus aici fiecare componenta
};
</script>

<style>
@import "../assets/css/style.css";
</style>
