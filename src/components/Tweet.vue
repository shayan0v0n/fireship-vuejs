<script>
import useDarkMode from '../hooks/useDarkMode';


export default {
    setup() {
        const { currentTheme } = useDarkMode();
        return {
            currentTheme
        }
    },
    props: {
        tweetData: {}
    }
}

</script>

<template>
    <div class="card p-4 m-1 tweet-card" :class="[currentTheme == 'dark' ? 'tweet-card-dark' : null]">
        <div class="row mb-4">
            <div class="col-8 flex text-start">
                <img :src="`/assets/imgs/${tweetData.userName}.jpg`" class="w-25 rounded-circle" />
                <small class="m-3 my-0">{{ tweetData.userName }} </small>
                <p class="m-3 my-0">{{ tweetData.twitterID }}</p>
            </div>
            <div class="col-3 text-end">
                <fa icon="hashtag" />
            </div>
        </div>
        <div class="text-start">
            <span>{{ tweetData.tweet }}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import '../styles/variables.scss';

    .tweet-card {
        color: $primary_dark;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
        small {
            font-weight: bold;
            font-size: 1.2rem;
        }
        span {
            font-family: sans-serif;
        }
    }

    .tweet-card-dark {
        color: $primary_white;
        background-color: $secondary_dark;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
        small {
            font-weight: bold;
            font-size: 1.2rem;
        }
        span {
            font-family: sans-serif;
        }
    }
</style>