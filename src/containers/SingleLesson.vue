<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useDarkMode from '../hooks/useDarkMode';
import LicenseCheckout from '../components/LicenseCheckout.vue';
import LicensePlan from '../components/LicensePlan.vue';

export default {
    setup() {
        const currentPath = useRoute().params.path;
        const router = useRouter()
        const currentAccount = JSON.parse(localStorage.getItem('account'))
        const currentCartAcc = JSON.parse(localStorage.getItem('account')) ? JSON.parse(localStorage.getItem('account')).cart : null
        const currentApprovedAcc = JSON.parse(localStorage.getItem('account')) ? JSON.parse(localStorage.getItem('account')).approvedCart : null
        const { currentTheme } = useDarkMode();
        let productExist = null
        let lessons = ref([]);
        let licenses = ref(null)



        if (currentAccount !== null) {
            const currentCarts = currentCartAcc.concat(currentApprovedAcc);
            productExist = currentCarts.findIndex(item => item.path == currentPath)
        }



        onMounted(() => {
            axios.get("https://fireship-6470a-default-rtdb.firebaseio.com/lessons.json")
                .then(res => {
                lessons.value = res.data.find((item) => {
                    return item.path == currentPath;
                });
            }).catch(err => console.log(err));
            axios.get('https://fireship-6470a-default-rtdb.firebaseio.com/license.json')
            .then(res => {
                licenses.value = res.data
            }).catch(err => console.log(err))
        });

        const addtocartHandler = () => {
            const currentAccount = JSON.parse(localStorage.getItem('account'))
            const currentCart = currentAccount.cart
            currentCart.push(lessons.value)
            const updatedAccount = {
                ...currentAccount,
                cart: currentCart
            }

            localStorage.setItem('account', JSON.stringify(updatedAccount))
            router.push('/dashboard/cartDashboard')
        }

        return {
            lessons,
            licenses,
            currentTheme,
            productExist,
            currentAccount,
            addtocartHandler
        };
    },
    components: { LicenseCheckout, LicensePlan }
}

</script>

<template>
    <div class="text-center single-lesson"  :class="[currentTheme == 'dark' ? 'single-lesson-dark' : null]" v-if="lessons.path">
        <div class="row container m-auto py-5">
            <div class="col-12 col-md-9">
                <section class="card" id="product">
                    <img :src="`/assets/imgs/${lessons.path}.webp`" class="w-100" alt="">
                    <div class="card-body text-start">
                        <h2 class="card-title">{{ lessons.title }}</h2>
                        <p class="card-text">{{ lessons.desc }}</p>
                        <p class="card-text price">PRICE: <span>${{ lessons.price }}.00</span></p>
                    </div>
                </section>
                <section class="addtocart">
                    <button class="btn w-100 mt-3 py-3" @click="addtocartHandler()" v-if="productExist == -1 && currentAccount !== null">ADD TO CART</button>
                    <button class="btn w-100 mt-3 py-3" disabled v-else>ADD TO CART</button>
                </section>
                <section id="checkout" class="my-5">
                    <LicenseCheckout />
                </section>
                <section id="license">
                    <LicensePlan :licenses="licenses" />
                </section>
            </div>
            <div class="col col-md-3 aside-right">
                <div>
                    <ul class="text-center">
                        <li><a href="#product">PRODUCTS</a></li>
                        <li><a href="#checkout">CHECKOUT</a></li>
                        <li><a href="#license">LICENSE</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="text-center single-lesson"  :class="[currentTheme == 'dark' ? 'single-lesson-dark' : null]" >
        <div class="row container m-auto py-5">
            <div class="col-12 col-md-9">
                <section class="card" id="product">
                    <img :src="`/assets/imgs/placeholder.png`" class="w-100" alt="">
                    <div class="card-body text-start">
                        <h2 class="card-title"><span class="placeholder col-5"></span></h2>
                        <p class="card-text"><span class="placeholder col-8"></span></p>
                        <p class="card-text price"><span class="placeholder col-2"></span></p>
                    </div>
                </section>
                <section class="addtocart">
                    <button class="btn w-100 mt-3 py-3" disabled>ADD TO CART</button>
                </section>
                <section id="checkout" class="my-5">
                    <LicenseCheckout />
                </section>
                <section id="license">
                    <div class="row">
                        <div class="col-12 col-md-4" v-for="items in [0, 1, 2]">
                            <CardPlaceholder />
                        </div>
                    </div>
                </section>
            </div>
            <div class="col col-md-3 aside-right">
                <div>
                    <ul class="text-center">
                        <li><span class="placeholder col-7"></span></li>
                        <li><span class="placeholder col-5"></span></li>
                        <li><span class="placeholder col-3"></span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/variables.scss';
.single-lesson {
    img {
        border-radius: 8px 8px 0 0;
    }
    .aside-right {
        div {
            position: sticky;
            top: 100px;
            z-index: 10;
        }
        ul {
            padding: 1rem;
            background-color: $primary_white;
            list-style: none;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
            border-radius: 8px;
            li {
                cursor: pointer;
                font-weight: bold;
                a {
                    color: inherit;
                    text-decoration: none;
                }
            }
        }
    }
    .card {
        .price {
            font-size: 1.5rem;
            span {
                color: $primary_green;
                font-weight: bold;
                font-size: 2rem;
            }
        }
    }

    .addtocart {
        button {
            background-color: $primary_green;
            border: none;
            color: white;
        }
    }
}
.single-lesson-dark {
    .aside-right {
        ul {
            padding: 1rem;
            list-style: none;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
            border-radius: 8px;
            background-color: $secondary_dark;
            li {
                cursor: pointer;
                font-weight: bold;
            }
        }
    }
    .card {
        background-color: $secondary_dark;
    }
}
</style>