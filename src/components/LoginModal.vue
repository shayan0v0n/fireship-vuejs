<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    setup(props, context) {
        let userNameValue = ref('');
        let passwordValue = ref('');
        let userNameValidate = ref(false)
        let passwordValidate = ref(false)
        let formValidare = ref(false)
        let closeModal = ref()
        const router = useRouter()

        
        const userNameValueHandler = e => {
            userNameValue.value = e.target.value
            userNameValue.value.trim().length > 5 ? userNameValidate.value = true : userNameValidate.value = false
            formValidateHandler()
        }

        const passwordValueHandler = e => {
            passwordValue.value = e.target.value
            passwordValue.value.trim().length > 8 ? passwordValidate.value = true : passwordValidate.value = false
            formValidateHandler()
        }

        const formValidateHandler = () => {
            if (userNameValidate.value && passwordValidate.value) {
                formValidare.value = true
            }else {
                formValidare.value = false
            }
        }

        const accountExistHandler = () => {context.emit('accountExist')}

        const formSubmitHandler = () => {
            const formData = {
                name: userNameValue.value,
                password: passwordValue.value,
                license: '',
                cart: [],
                approvedCart: []
            }
            
            
            closeModal.value.click()
            localStorage.setItem("account", JSON.stringify(formData))
            accountExistHandler()
            router.push('/dashboard')
        }

        return {
            userNameValueHandler,
            passwordValueHandler,
            formSubmitHandler,
            closeModal,
            formValidare
        }
    }
}

</script>

<template>
    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Login!</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref="closeModal"></button>
            </div>
            <div class="modal-body">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Username" @input="(e) => userNameValueHandler(e)">
                    <label for="floatingInput">Username</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" @input="(e) => passwordValueHandler(e)">
                    <label for="floatingPassword">Password</label>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-success w-100" @click="formSubmitHandler()"  v-if="formValidare">Submit</button>
                <button type="button" class="btn btn-success w-100" disabled v-else>Submit</button>
            </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>