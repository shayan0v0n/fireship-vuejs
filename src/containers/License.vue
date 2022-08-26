<script>
import useDarkMode from '../hooks/useDarkMode';
import Tweet from '../components/Tweet.vue';
import { ref, onMounted } from 'vue'
import axios from 'axios';
import CardPlaceholder from '../components/UI/CardPlaceholder.vue';
import LicensePlan from '../components/LicensePlan.vue';
import LicenseCheckout from '../components/LicenseCheckout.vue';

    export default {
    setup() {
        const { currentTheme } = useDarkMode();
        let licenses = ref(null)
        let tweets = ref(null)

        onMounted(() => {
            axios.get('https://fireship-6470a-default-rtdb.firebaseio.com/license.json')
            .then(res => {
                licenses.value = res.data
            }).catch(err => console.log(err))

            axios.get('https://fireship-6470a-default-rtdb.firebaseio.com/tweets.json')
            .then(res => {
                tweets.value = res.data
            }).catch(err => console.log(err))
        })

        return {
            licenses,
            currentTheme,
            tweets
        };
    },
    components: { Tweet, CardPlaceholder, CardPlaceholder, LicensePlan, LicenseCheckout }
}
</script>

<template>
    <div class="pro mx-3">
        <h3 class="py-3">PRO</h3>
            <LicensePlan :licenses="licenses" />
            <LicenseCheckout />
        <section class="py-5 text-center pro-tweets">
            <div class="mb-3">
                <h2>WELCOME ABOARD!</h2>
                <span>WHAT OTHER PROFESSIONAL DEVS SAY ABOUT FIRESHIP CONTENT</span>
            </div>
            <div class="row container m-auto" v-if="tweets">
                <div class="col-12 col-md-4" v-for="tweet in tweets">
                    <Tweet :tweetData="tweet" />
                </div>
            </div>
            <div class="row container m-auto" v-else>
                <div class="col-12 col-md-4" v-for="tweet in [0,1,2,3,4,5]">
                    <CardPlaceholder :isCard="true" />
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
@import '../styles/variables.scss';
    .pro {
        h3 {
            font-weight: bold;
            font-size: 2.5rem;
        }
    }
</style>