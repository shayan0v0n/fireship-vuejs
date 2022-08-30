<script>
import useDarkMode from '../../hooks/useDarkMode';
import DashboardOffcanvas from '../../components/UI/DashboardOffcanvas.vue';

export default {
    setup() {
        const { currentTheme } = useDarkMode();
        const currentAccount = JSON.parse(localStorage.getItem('account'))
        const exitHandler = () => {
            localStorage.removeItem("account");
            location.assign("/");
        };
        return {
            currentTheme,
            currentAccount,
            exitHandler
        };
    },
    components: { DashboardOffcanvas }
}

</script>

<template>
    <div v-if="currentAccount !== null">
            <dashboard-offcanvas />
        <div :class="[currentTheme == 'light' ? 'dashboard-dark' : 'dashboard']">
        <button class="dashboard-btn w-100" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"><fa icon="bars" /></button>

        <div class="text-center container py-5">
            <div class="row m-0">
                <div class="col-12 col-md-6 dashboard-parts">
                    <router-link to="/dashboard/productsDashboard">
                        <div>
                            PRODUCTS
                        </div>
                    </router-link>
                </div>
                <div class="col-12 col-md-6 dashboard-parts">
                    <router-link to="/dashboard/cartDashboard">
                        <div>
                            CART
                        </div>
                    </router-link>
                </div>
                <div class="col-12 col-md-6 dashboard-parts">
                    <router-link to="/license">
                        <div>
                            LICENSE
                        </div>
                    </router-link>
                </div>
                <div class="col-12 col-md-6 dashboard-parts">
                    <router-link to="/dashboard/profileDashboard">
                        <div>
                            PROFILE
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
            <div class="row m-0">
                <div class="col-12 col-md-3"></div>
                <div class="col-12 col-md-6 dashboard-parts">
                <div @click="() => exitHandler()" class="text-center">
                    EXIT
                </div>
                </div>
                <div class="col-12 col-md-3"></div>
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
    .dashboard {
        .dashboard-btn {
            padding: .5rem;
        }
        a {
            text-decoration: none;
            color: inherit;
        }
        .dashboard-parts {
            div {
                background-color: $secondary_dark;
                margin: 1rem;
                border-radius: 8px;
                padding: 6rem 0;
                box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
                cursor: pointer;
                transition: .3s;
                font-weight: bold;
                font-size: 1.5rem;
                &:hover {
                    @include transformY(-5px);
                }
            }
        }
    }
    .dashboard-dark {
        .dashboard-btn {
            padding: .5rem;
            border: none;
            background-color: $primary_dark;
            color: white;
        }
        a {
            text-decoration: none;
            color: inherit;
        }
        .dashboard-parts {
            div {
                background-color: $primary_white;
                margin: 1rem;
                border-radius: 8px;
                padding: 6rem 0;
                box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
                cursor: pointer;
                transition: .3s;
                font-weight: bold;
                font-size: 1.5rem;
                &:hover {
                    @include transformY(-5px);
                }
            }
        }
    }
</style>