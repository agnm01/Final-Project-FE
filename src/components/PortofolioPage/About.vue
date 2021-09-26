<template>
  <main id="main">
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>About</h2>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <img src="@/assets/profile-img.jpeg" class="img-fluid" />
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">
            <h3>{{ applicationState.userInfo.title }}</h3>
            <p class="fst-italic">
              {{ applicationState.userInfo.description }}
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <strong>Birthday:</strong> <span>{{ birthdate }}</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <strong>University:</strong>
                    <span>{{ applicationState.userInfo.schools[0].name }}</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Phone:</strong>
                    <span>{{ applicationState.userInfo.phone }}</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>City:</strong>
                    <span>{{ applicationState.userInfo.city }}</span>
                  </li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Age:</strong>
                    <span>{{ applicationState.userInfo.age }}</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <strong>Degree:</strong>
                    <span>{{ applicationState.userInfo.degree }}</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Email:</strong>
                    <span>{{ applicationState.userInfo.email }}</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <strong>Website:</strong>
                    <a href="#">{{ applicationState.userInfo.website }}</a>
                  </li>
                </ul>
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
import moment from "moment";

export default {
  data() {
    return {
      applicationState,
    };
  },
  computed: {
    birthdate() {
      return moment(this.applicationState.userInfo.birthdate).format(
        "D MMMM YYYY"
      );
    },
  },
};
</script>
