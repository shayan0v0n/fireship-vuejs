<script>
import { ref, onUpdated} from 'vue';
import useDarkMode from '../hooks/useDarkMode';

export default {
    setup() {
        const { currentTheme } = useDarkMode()
        const cartNumber = ref('')
        const checkoutBtnValidate = ref(false)
        const currentAccount = JSON.parse(localStorage.getItem('account'))

        onUpdated(() => {
            if (cartNumber.value.trim().length > 5) {
                checkoutBtnValidate.value = true
            }else {
                checkoutBtnValidate.value = false
            }
        })

        const checkoutPayHandler = () => {
            alert("Comming Soon...")
        }

        return {
            currentTheme,
            cartNumber,
            currentAccount,
            checkoutBtnValidate,
            checkoutPayHandler
        }
    }
}

</script>

<template>
    <section class="py-3 container pro-checkout" :class="[ currentTheme == 'light' ? 'pro-checkout-dark' : null ]">
        <div class="mx-5 text-center">
            <span>You are purchasing Fireship.io PRO Quarterly Membership 🚀</span>
            <hr>
            <div class="text-start">
                <span>Credit Or Debit Card</span>
                <input class="form-control" placeholder="Card Number (Fake Number)" v-model="cartNumber" />
                <button class="btn" v-if="checkoutBtnValidate && currentAccount !== null" @click="checkoutPayHandler">PAY</button>
                <button class="btn" disabled v-else>PAY</button>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@import '../styles/variables.scss';   
.pro-checkout{
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
            span {
                font-size: 1.5rem;
            }
        }

        .pro-checkout-dark {
            background-color: $primary_white;
        }
</style>