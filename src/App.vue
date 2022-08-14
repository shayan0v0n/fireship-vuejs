<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import useDarkMode from './hooks/useDarkMode';

    export default {
    setup() {
        const { currentTheme, toggleTheme } = useDarkMode();
        return {currentTheme}
    },
  components: {
    Header,
    Footer,
    Footer
}
}
</script>

<template>
  <Header />
  <main :class="[currentTheme == 'light' ? 'mainPage-light' : 'mainPage-dark']">
    <router-view></router-view>
  </main>
  <Footer />
</template>

<style lang="scss">
@import './styles/_variables.scss';

@font-face {
  font-family: 'vazir';
  src: url('../public/assets/fonts/Vazir-Regular-FD.woff');
}

body {
  background: $secondary_white;
  font-family: 'vazir' !important;
  padding: 0;
  margin: 0;
}

.mainPage-dark {
  background-color: $primary_dark;
  color: white;
}
</style>