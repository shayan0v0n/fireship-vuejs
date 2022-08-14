<script>
import useDarkMode from '../hooks/useDarkMode';


export default {
    setup() {
        const {currentTheme, toggleTheme} = useDarkMode()

        return {
            currentTheme
        }
    }
}
</script>

<template>
    <div class="text-center" :class="[currentTheme == 'light' ? 'footer-light' : 'footer-dark']">
        <div>
            <span>Find and issue with this page? <a href="#">Fix it on Github</a></span>
            <span>Copyright 2022 Fireship LLC <br /> Created With VUEJS By Shayan Vosoughi</span>
            <div>
                <a href="#">Contributors</a>
                <a href="#">Jobs</a>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../styles/variables.scss';
.footer-light {
    padding: 7rem 0;
    color: $secondary_dark;
    font-weight: bold;
    border-top: 1px dashed black;
    a {
        margin-left: 1rem;
        text-decoration: none;
        color: $primary_green;
    }
    span {
        padding: .5rem;
        display: block;
    }
}

.footer-dark {
    padding: 7rem;
    color: $secondary_white;
    background-color: $secondary_dark;
    font-weight: bold;
    border-top: 1px dashed black;
    a {
        margin-left: 1rem;
        text-decoration: none;
        color: $primary_green;
    }
    span {
        padding: .5rem;
        display: block;
    }
}
</style>