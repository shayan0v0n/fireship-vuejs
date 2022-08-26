<script>
import useDarkMode from '../hooks/useDarkMode';


export default {
    setup() {
        const { currentTheme } = useDarkMode()
        return {
            currentTheme
        }
    },
    props: {
        licenses: {}
    }
}

</script>

<template>
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
</template>

<style lang="scss" scoped>
@import '../styles/variables.scss';
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
</style>