<script>
  import useDarkMode from '../../hooks/useDarkMode';
export default {
  setup() {
    const { currentTheme } = useDarkMode();

    return {
      currentTheme
    }
  },
  props: {
    alertTitle: {}
  }
}

</script>

<template>
<div class="modal fade modal-lg" id="alertModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" :class="[currentTheme === 'dark' ? 'modalDark' : null]">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{ alertTitle }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
</div>
</template>

<style>
.modalDark {
  color: black;
}

</style>