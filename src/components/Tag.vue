<script>
export default {
  props: {
    tagpath: {}
  }
}

</script>

<template>
    <router-link :to="`/courses/${tagpath}`"><span><slot></slot></span></router-link>
</template>

<style scoped lang="scss">
@import '../styles/variables.scss';

span {
    background-color: $primary_green;
    padding: .2rem 1rem;
    margin: .2rem;
    border-radius: 5px;
}
</style>