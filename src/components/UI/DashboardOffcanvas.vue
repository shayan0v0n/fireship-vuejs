<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useDarkMode from '../../hooks/useDarkMode';

  export default {
    setup() {
      const { currentTheme } = useDarkMode();
      const router = useRouter()
      const offcanvasBtn = ref()
      const exitHandler = () => {
            localStorage.removeItem("account");
            location.assign("/");
            offcanvasBtn.value.click()
          };
          
      const routeHandler = route => {
          router.push(route)
        offcanvasBtn.value.click()
      }
      return {
        currentTheme,
        exitHandler,
        routeHandler,
        offcanvasBtn
      }
    }
  }
</script>

<template>
<div class="offcanvas offcanvas-start" :class="[currentTheme == 'light' ? 'dashboardOff-light' : 'dashboardOff-dark' ]" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel" :style="{cursor: 'pointer'}" @click="routeHandler('/dashboard')">Dashboard</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" ref="offcanvasBtn"></button>
  </div>
  <div class="offcanvas-body pt-5">
    <ul>
      <li @click="routeHandler('/dashboard/cartDashboard')"><fa icon="suitcase" class="icons" />Cart</li>
      <li @click="routeHandler('/dashboard/productsDashboard')"><fa icon="camera" class="icons" />Products</li>
      <li @click="routeHandler('/license')"><fa icon="rocket" class="icons" />License</li>
      <li @click="routeHandler('/dashboard/profileDashboard')"><fa icon="user" class="icons" />Profile</li>
      <li @click="exitHandler()"><fa icon="circle" class="icons" />Exit</li>
    </ul>
  </div>
</div>
</template>

<style lang="scss" scoped>
  @import '../../styles/variables.scss';
.dashboardOff-dark {
  background-color: $secondary_dark;
  color: white;
  .offcanvas-body {
    padding: 0;
    ul {
      list-style: none;
      padding: 0;
      li {
        padding: 1rem 0;
        padding-left: .7rem;
        font-size: 1.2rem;
        font-weight: bold;
        cursor: pointer;
        transition: .3s;
        .icons {
          margin: 0 .3rem;
        }
        &:hover {
          color: black;
          padding-left: 1.2rem;
          background-color: $secondary_white;
          border-right: 5px solid $primary_green;
        }
      }
    }
  }
}

.dashboardOff-light {
  background-color: $secondary_white;
  color: black;
  .offcanvas-body {
    padding: 0;
    ul {
      list-style: none;
      padding: 0;
      li {
        padding: 1rem 0;
        padding-left: .7rem;
        font-size: 1.2rem;
        font-weight: bold;
        cursor: pointer;
        transition: .3s;
        .icons {
          margin: 0 .3rem;
        }
        &:hover {
          color: white;
          padding-left: 1.2rem;
          background-color: $primary_dark;
          border-right: 5px solid $primary_green;
        }
      }
    }
  }
}
</style>