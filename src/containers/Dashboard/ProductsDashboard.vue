<script>
    import LessonCard from '../../components/LessonCard.vue';
    import useDarkMode from '../../hooks/useDarkMode';
    import DashboardOffcanvas from '../../components/UI/DashboardOffcanvas.vue'
    import AlertModal from '../../components/UI/AlertModal.vue'
    import { useRouter } from 'vue-router';
    import { ref } from 'vue';
    
    export default {
        setup() {
            const currentAccount = JSON.parse(localStorage.getItem('account'))
            const currentCartAcc = currentAccount !== null ? JSON.parse(localStorage.getItem('account')).approvedCart : null
            const { currentTheme } = useDarkMode();
            const closeModal = ref()
            const route = useRouter()
            const showMoreCourses = () => {route.push('/courses')}
    
            return {
                showMoreCourses,
                currentCartAcc,
                closeModal,
                currentAccount,
                currentTheme
            }
        },components: { LessonCard, DashboardOffcanvas, AlertModal }
    }
    
    </script>
    
    <template>
        <div v-if="currentAccount !== null">
            <dashboard-offcanvas />
            <button class="dashboard-btn w-100" :class="[currentTheme == 'light' ? 'dashboard-btn-dark' : null]" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"><fa icon="bars" /></button>
            <div v-if="currentCartAcc[0]">
                <AlertModal alertTitle="Status Products🚀">
                <div class="row">
                    <div class="col-12 col-md-12" v-for="lessonData in currentCartAcc">
                        <div class="card course-card m-2 text-start"
                        :class="[currentTheme == 'dark' ? 'course-card-dark' : null]">
                            <div class="card-body m-3 text-center">
                                <h3>{{ lessonData.title }}</h3>
                                <span>{{ lessonData.desc }}</span>
                                <p class="mt-3">${{ lessonData.price }}.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-bs-dismiss="modal" ref="closeModal"></div>
                <div class="text-center">
                    <span class="m-auto" @click="showMoreCourses()"  data-bs-dismiss="modal" :style="{cursor: 'pointer', color: '#1565c0', fontSize: '1.4rem', fontWeight: 'bold'}">SHOW MORE COURSES</span>
                </div>
                
            </AlertModal>
                <div :class="[currentTheme == 'light' ? 'cartDashboard-dark' : 'cartDashboard']">
                    <button class="checkout-btn w-100" data-bs-toggle="modal" data-bs-target="#alertModal">STATUS</button>
                    <div class="py-5 container text-center">
                        <div class="row m-auto">
                            <div class="col-12 col-md-6" v-for="product in currentCartAcc">
                                <LessonCard :lessonData="product" :lessonShort="false" :dashboardCart="true" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="text-center py-5">
                <div class="my-5">
                    <h2>Products Page Have'nt Got Product😉💡</h2>
                    <span>Please Checkout Some Course Or Lesson & Then Check Here....</span>
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
    
    <style lang="scss" scoped>
        @import '../../styles/variables.scss';
    .cartDashboard-dark {
        .checkout-btn {
            background-color: $primary_green;
            padding: .5rem;
        }
    }
    .dashboard-btn-dark {
    padding: .5rem;
        border: none;
        background-color: $primary_dark;
        color: white;
}
    .cartDashboard {
        .checkout-btn {
            background-color: $primary_green;
            padding: .5rem;
        }
    }
    .dashboard-btn {
        padding: .5rem;
    }
    </style>