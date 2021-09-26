<template>
  <section id="hero" class="d-flex flex-column justify-content-center">
    <div class="container" data-aos="zoom-in" data-aos-delay="100">
      <h1>
        {{
          applicationState.userInfo.firstName +
          " " +
          applicationState.userInfo.lastName
        }}
      </h1>
      <p>
        I'm an
        <span class="typed">{{ applicationState.userInfo.title }}</span>
      </p>
      <div class="social-links">
        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        <a href="#" class="github"><i class="bx bxl-github"></i></a>
      </div>
    </div>
  </section>
</template>

<script>
import { applicationState } from "../../state";

export default {
  data() {
    return {
      applicationState,
    };
  },
};
</script>
