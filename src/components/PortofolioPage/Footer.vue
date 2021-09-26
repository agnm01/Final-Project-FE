<template>
  <footer id="footer">
    <div class="container">
      <h3>
        {{
          applicationState.userInfo.firstName +
          " " +
          applicationState.userInfo.lastName
        }}
      </h3>
      <p>
        Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi
        fuga maxime saepe commodi placeat.
      </p>
      <div class="social-links">
        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-github"></i></a>
      </div>
      <div class="copyright">
        Team
        <strong><span>Nici Prea Prea, Nici Foarte Foarte</span></strong
        >, with ❤
      </div>
    </div>
  </footer>
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
