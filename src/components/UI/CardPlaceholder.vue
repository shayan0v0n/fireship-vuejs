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
        isCard: {}
    }
}

</script>

<template>
    <div class="card course-card m-1" :class="[currentTheme == 'dark' ? 'course-card-dark' : null]">
        <img :src="`/assets/imgs/placeholder.png`" alt="courses-img" v-show="!isCard">
        <div class="card-body">
            <h3><a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-4" aria-hidden="true"></a></h3>
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../styles/variables.scss';
.course-card {
    padding: 1rem;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    transition: .3s;
    span {
        font-size: 1.2rem;
        color: $secondary_dark;
    }
    
    button {
        background-color: $primary_green;
        color: white;
        transition: .3s;
        border: none;
        &:hover {
            @include transformY(-3px);
        }
    }
    &:hover {
        @include transformY(-3px);
    }
}

.course-card-dark {
    background-color: $secondary_dark;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    span {
        font-size: 1.2rem;
        color: $secondary_white;
    }
}
</style>