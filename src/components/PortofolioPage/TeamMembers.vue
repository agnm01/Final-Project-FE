<template>
  <main id="main">
    <section id="teammates" class="testimonials section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Team members</h2>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <div class="teammates">
            <!-- Start teammate item -->
            <div>
              <div class="testimonial-item">
                <img
                  src="@/assets/profile-img.jpeg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>
                  {{
                    applicationState.userInfo.firstName +
                    " " +
                    applicationState.userInfo.lastName
                  }}
                </h3>
                <h4>{{ applicationState.userInfo.title }}</h4>
                <p>
                  {{ applicationState.userInfo.description }} si sunt sefu' la
                  buzunaru' lui tati (momentan).
                </p>
              </div>
            </div>
            <!-- End teammate item -->

            <!-- Start teammate item -->
            <div>
              <div class="testimonial-item">
                <img
                  src="@/assets/testimonials-1.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                </p>
              </div>
            </div>
            <!-- End teammate item -->

            <!-- Start teammate item -->
            <div>
              <div class="testimonial-item">
                <img
                  src="@/assets/testimonials-1.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
                <p>
                  Enim nisi quem export duis labore cillum quae magna enim sint
                  quorum nulla quem veniam duis minim tempor labore quem eram
                  duis noster aute amet eram fore quis sint minim.
                </p>
              </div>
            </div>
            <!-- End teammate item -->
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
