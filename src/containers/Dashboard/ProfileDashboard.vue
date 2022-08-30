<script>
import useDarkMode from '../../hooks/useDarkMode';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import DashboardOffcanvas from '../../components/UI/DashboardOffcanvas.vue'

export default {
    setup() {
        const { currentTheme } = useDarkMode();
        const currentAccount = JSON.parse(localStorage.getItem('account'))
        let userNameValue = currentAccount !== null ? ref(currentAccount.name) : null;
        let passwordValue = currentAccount !== null ? ref(currentAccount.password) : null;
        let formValidare = ref(false)
        const router = useRouter()

        
        const userNameValueHandler = e => {
            userNameValue.value = e.target.value
            formValidateHandler()
        }

        const passwordValueHandler = e => {
            passwordValue.value = e.target.value
            formValidateHandler()
        }

        const formValidateHandler = () => {
            if (userNameValue.value.trim().length > 8 && passwordValue.value.trim().length > 8) {
                formValidare.value = true
            }else {
                formValidare.value = false
            }
        }

        const profileSubmitHandler = () => {
            const formData = {
                name: userNameValue.value,
                password: passwordValue.value,
                license: '',
                cart: [],
                approvedCart: []
            }
            
            localStorage.setItem("account", JSON.stringify(formData))
            router.push('/dashboard')
        }

        return {
            userNameValueHandler,
            passwordValueHandler,
            profileSubmitHandler,
            currentAccount,
            formValidare,
            currentTheme
        }
    },components: {DashboardOffcanvas}
}

</script>

<template>
    <div v-if="currentAccount !== null">
        <dashboard-offcanvas />
        <div class="pb-5" :class="[currentTheme == 'dark' ? 'profile-dashboard-dark' : 'profile-dashboard-light']">
            <button class="dashboard-btn w-100" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"><fa icon="bars" /></button>
            <div class="p-5 container mt-5">
                <div class="p-3">
                    <div class="mb-4">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Username"
                        :value="currentAccount.name" @input="(e) => userNameValueHandler(e)">
                    </div>
                    <div class="mb-4">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                        :value="currentAccount.password" @input="(e) => passwordValueHandler(e)">
                    </div>
                    <button class="w-100 btn" v-if="formValidare" @click="profileSubmitHandler()">SUBMIT</button>
                    <button class="w-100 btn" disabled v-else>SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="text-center py-5">
        <div class="my-5">
            <h2 class="pt-3">You Should Register First👽👊</h2>
            <span>Please Register First, If You Want Use Dashboard...</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../../styles/variables.scss';
.profile-dashboard-dark {
    .dashboard-btn {
        padding: .5rem;
    }
    div {
        background-color: $secondary_dark;
        border-radius: 10px;
        input {
            padding: .7rem;
        }
        button {
            padding: .7rem;
            background-color: $primary_white;
            color: black;
            &:hover {
                background-color: $secondary_white;
                color: black;
            }
        }
    }
} 

.profile-dashboard-light {
    .dashboard-btn {
            padding: .5rem;
            border: none;
            background-color: $primary_dark;
            color: white;
    }
    div {
        background-color: $primary_white;
        border-radius: 10px;
        input {
            padding: .7rem;
        }
        button {
            padding: .7rem;
            background-color: $secondary_dark;
            color: white;
            &:hover {
                background-color: $primary_dark;
                color: blwhiteack;
            }
        }
    }
} 
</style>