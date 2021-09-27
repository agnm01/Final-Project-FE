<template>
  <main id="main">
    <section id="resume" class="resume">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Resume</h2>
          <p>
            {{ applicationState.userInfo.description }}
          </p>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>{{ applicationState.userInfo.schools[0].specialization }}</h4>
              <h5>{{ applicationState.userInfo.schools[0].schoolPeriod }}</h5>
              <p>
                <em>{{ applicationState.userInfo.schools[0].name }}</em>
              </p>
              <p>
                {{ applicationState.userInfo.schools[0].description }}
              </p>
            </div>
            <div class="resume-item">
              <h4>{{ applicationState.userInfo.schools[1].specialization }}</h4>
              <h5>{{ applicationState.userInfo.schools[1].schoolPeriod }}</h5>
              <p>
                <em>{{ applicationState.userInfo.schools[1].name }}</em>
              </p>
              <p>
                {{ applicationState.userInfo.schools[1].description }}
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>{{ applicationState.userInfo.workplaces[0].companyName }}</h4>
              <h5>{{ applicationState.userInfo.workplaces[0].workPeriod }}</h5>
              <p>
                <em>{{ applicationState.userInfo.workplaces[0].roleName }} </em>
              </p>
              <ul>
                <li>
                  {{ applicationState.userInfo.workplaces[0].description }}
                </li>
                <li>
                  {{ applicationState.userInfo.workplaces[0].description }}
                </li>
                <li>
                  {{ applicationState.userInfo.workplaces[0].description }}
                </li>
                <li>
                  {{ applicationState.userInfo.workplaces[0].description }}
                </li>
              </ul>
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
