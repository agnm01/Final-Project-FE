<template>
  <main id="main">
    <section id="interests" class="interests section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Interests</h2>
          <p>
            {{ applicationState.userInfo.description }}
          </p>
        </div>

        <div class="row skills-content">
          <div class="row">
            <div class="col-lg-3 col-md-4">
              <div class="icon-box">
                <i class="bx bx-ball" style="color: #ffbb2c"></i>
                <h3>Lorem Ipsum</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div class="icon-box">
                <i class="bx bx-abacus" style="color: #5578ff"></i>
                <h3>Dolor Sitema</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div class="icon-box">
                <i class="bx bx-album" style="color: #e80368"></i>
                <h3>Sed perspiciatis</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <div class="icon-box">
                <i class="bx bx-paint" style="color: #e361ff"></i>
                <h3>Magni Dolores</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="bx bx-planet" style="color: #47aeff"></i>
                <h3>Nemo Enim</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="bx bx-car" style="color: #ffa76e"></i>
                <h3>Eiusmod Tempor</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="bx bx-cloud" style="color: #11dbcf"></i>
                <h3>Midela Teren</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="bx bx-cycling" style="color: #4233ff"></i>
                <h3>Pira Neve</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="bx bx-anchor" style="color: #b2904f"></i>
                <h3>Dirada Pack</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="bx bx-aperture" style="color: #b20969"></i>
                <h3>Moton Ideal</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="bx bx-run" style="color: #ff5828"></i>
                <h3>Verdo Park</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="bx bx-book" style="color: #29cc61"></i>
                <h3>Flavor Nivelanda</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
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
