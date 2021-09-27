<template>
  <main id="main">
    <section id="skills" class="skills section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Skills</h2>
          <p>
            {{ applicationState.userInfo.description }}
          </p>
        </div>

        <div class="row skills-content">
          <div class="col-lg-6">
            <div class="progress">
              <span class="skill"
                >{{ applicationState.userInfo.skills[0].name }}
                <i class="val"
                  >{{ applicationState.userInfo.skills[0].level }}%</i
                ></span
              >
              <div class="progress-bar-wrap">
                <div
                  id="lol"
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill"
                >{{ applicationState.userInfo.skills[1].name }}
                <i class="val"
                  >{{ applicationState.userInfo.skills[1].level }}%</i
                ></span
              >
              <div class="progress-bar-wrap">
                <div
                  id="rocket"
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill"
                >{{ applicationState.userInfo.skills[2].name }}
                <i class="val"
                  >{{ applicationState.userInfo.skills[2].level }}%</i
                ></span
              >
              <div class="progress-bar-wrap">
                <div
                  id="code"
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="progress">
              <span class="skill"
                >{{ applicationState.userInfo.skills[3].name }}
                <i class="val"
                  >{{ applicationState.userInfo.skills[3].level }}%</i
                ></span
              >
              <div class="progress-bar-wrap">
                <div
                  id="web"
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill"
                >{{ applicationState.userInfo.skills[4].name }}
                <i class="val"
                  >{{ applicationState.userInfo.skills[4].level }}%</i
                ></span
              >
              <div class="progress-bar-wrap">
                <div
                  id="html"
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill"
                >{{ applicationState.userInfo.skills[5].name }}
                <i class="val"
                  >{{ applicationState.userInfo.skills[5].level }}%</i
                ></span
              >
              <div class="progress-bar-wrap">
                <div
                  id="css"
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="55"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
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
