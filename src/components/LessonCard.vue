<script>
import useDarkMode from '../hooks/useDarkMode';
import Tag from './Tag.vue';

export default {
    setup() {
        const { currentTheme } = useDarkMode();
        return {
            currentTheme
        };
    },
    props: {
        lessonData: {},
        lessonShort: {},
        dashboardCart: {}
    },
    components: { Tag }
}
</script>

<template>
    <div class="card course-card m-2 text-start" :class="[currentTheme == 'dark' ? 'course-card-dark' : null]">
        <img :src="`/assets/imgs/${lessonData.path}.webp`" alt="courses-img" v-show="lessonShort">
        <div class="card-body m-3">
            <router-link :to="`lessons/${lessonData.path}`" v-if="!dashboardCart"><h3>{{ lessonData.title }}</h3></router-link>
            <h3 v-else :style="{cursor: 'default'}">{{ lessonData.title }}</h3>
            <span>{{ lessonData.desc }}</span>
        </div>
        <div class="m-3" v-show="!dashboardCart">
            <span v-for="tag in lessonData.tags">
                <Tag :tagpath="tag">{{ tag }}</Tag>
            </span>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../styles/variables.scss';
.course-card {
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    transition: .3s;
    a {
        text-decoration: none;
        color: $primary_dark;
    }
    span {
        font-size: 1.2rem;
    }
    
    &:hover {
        @include transformY(-3px);
    }

    img {
        border-radius: 5px 5px 0 0;
    }
}

.course-card-dark {
    background-color: $secondary_dark;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    span {
        font-size: 1.2rem;
        color: $secondary_white;
    }
        a {
        text-decoration: none;
        color: $primary_white;
    }
}
</style>