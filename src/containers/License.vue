<script>
import useDarkMode from '../hooks/useDarkMode';
import Tweet from '../components/Tweet.vue';
import { ref, onMounted } from 'vue'
import axios from 'axios';
import CardPlaceholder from '../components/UI/CardPlaceholder.vue';

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
    components: { Tweet, CardPlaceholder, CardPlaceholder }
}
</script>

<template>
    <div class="pro mx-3">
        <h3 class="py-3">PRO</h3>
        <section class="py-5 pro-banner">
            <div class="row container m-auto" v-if="licenses">
                <div class="col-12 col-md-4 text-center" v-for="license in licenses">
                    <img :src="[currentTheme == 'dark' ? `/assets/imgs/${license.name}_icon-light.png` :
                     `/assets/imgs/${license.name}_icon-dark.png`]" />
                    <h3 class="my-3">{{ license.name }}</h3>
                    <h3 class="pricing-license"><span>${{ license.price }}</span><span>/{{ license.timeout }}</span></h3>
                    <hr>
                    <div class="text-start">
                        <div v-for="descItem in license.desc" class="px-5 py-1">
                            ✔️{{ descItem }}
                        </div>
                    </div>
                    <button class="btn">CHOOSE PLAN</button>
                </div>
            </div>
            <div class="row container m-auto" v-else>
                <div class="col-12 col-md-4" v-for="license in [0,1,2]">
                    <CardPlaceholder />
                </div>
            </div>
        </section>
        <section class="py-3 container pro-checkout" :class="[ currentTheme == 'light' ? 'pro-checkout-dark' : null ]">
            <div class="mx-5">
                <span>You are purchasing Fireship.io PRO Quarterly Membership 🚀</span>
                <hr>
                <span>Credit Or Debit Card</span>
                <input class="form-control" placeholder="Card Number" />
                <button class="btn">PAY</button>
            </div>
        </section>
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
        .pro-banner {
            hr {
                width: 75%;
                margin: 1rem auto;
            }
            .pricing-license {
                & span:nth-child(1) {
                    color: $primary_green;
                    font-size: 3rem;
                    font-weight: bold;
                }
                & span:nth-child(2) {
                    font-size: 1.5rem;
                }
            }
            button {
                width: 100%;
                margin: 5rem 0;
                background-color: $primary_green;
                border: none;
                color: white;
                transition: .3s;
                font-weight: bold;
                &:hover {
                    @include transformY(-3px)
                }
            }

        }
        .pro-checkout {
            background-color: $secondary_dark;
            input {
                border: 3px solid $primary_gray;
                border-radius: 2px;
                padding: 1rem;
                background-color: transparent;
                color: $primary_blue;
                margin-top: 1rem;
            }

            button {
                background-color: $primary_blue;
                width: 100%;
                margin-top: .5rem;
                border: none;
                padding: 1rem;
                color: white;
            }
        }

        .pro-checkout-dark {
            background-color: $primary_white;
        }
    }
</style>