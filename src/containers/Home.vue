<script>
import useDarkMode from '../hooks/useDarkMode';

    export default {
    setup() {
        const { currentTheme, toggleTheme } = useDarkMode();
        console.log(currentTheme.value)
    }
}

</script>

<template>
        <h2 class="p-5 m-0">Home Page</h2>
</template>

<style lang="scss">
</style>