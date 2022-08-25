<script>
import useDarkMode from '../hooks/useDarkMode';
import Modal from './UI/Modal.vue';


export default {
    setup() {
        const { currentTheme, toggleTheme } = useDarkMode();
        return {
            currentTheme,
            toggleTheme
        };
    },
    components: { Modal }
}

</script>
<template>
<Modal />
<nav class="navbar navbar-expand-lg row"
:class="[currentTheme==='light' ? 'navbar-light bg-light header-light' : 'navbar-dark bg-dark header-dark']">

    <div class="navbar-brand text-center col" href="#">
        <router-link :to="{name: 'homePage'}">
            <img src="/assets/imgs/logo.png" class=" m-auto" />
        </router-link>
    </div>
    <div class="container-fluid text-center col d-none d-md-block">
        <ul class="navbar-nav m-auto my-2 d-flex flex-row">
            <li class="nav-item center-list">
                <router-link :to="{name: 'lessonsPage'}">
                    <div class="m-2 nav-link d-flex">
                        <fa icon="tv" />
                        LESSIONS
                    </div>
                </router-link>
            </li>
            <li class="nav-item center-list">
                <router-link :to="{name: 'coursesPage'}">
                    <div class="m-2 nav-link d-flex">
                        <fa icon="suitcase" />
                    COURSES
                    </div>
                </router-link>
            </li>
            <li class="nav-item center-list">
                <router-link :to="{name: 'tagsPage'}">
                    <div class="m-2 nav-link d-flex">
                        <fa icon="tags" />
                        TAGS
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
    <div class="col text-center">
        <div class="nav mx-md-5">
            <fa icon="search" class="icons_item  nav-link" />
            <router-link :to="{name: 'licensePage'}">
            <fa icon="rocket" class="icons_item  nav-link" />
            </router-link>
            <fa icon="moon" class="icons_item  nav-link" @click="() => toggleTheme()" />
            <fa icon="user" class="icons_item nav-link " data-bs-toggle="modal" data-bs-target="#loginModal" />
        </div>
    </div>
</nav>
</template>

<style scoped lang="scss">
@import '../styles/variables.scss';
.header-light {
    margin: 0;
    position: sticky;
    z-index: 10;
    top: 0;
     .center-list {
         font-weight: bold;
         cursor: pointer;
         font-size: 1.2rem;
     }
     img {
         width: 13%;
     }

     .icons_item {
         font-size: 1.6rem;
        color: $primary_gray;
        transition: .3;
        cursor: pointer;
        &:hover {
            color: $secondary_dark;
        }
    }

    a {
        text-decoration: none;
    }
}

.header-dark {
    margin: 0;
    position: sticky;
    z-index: 10;
    top: 0;
    a {
        text-decoration: none;
    }
    .center-list {
        font-weight: bold;
         cursor: pointer;
         font-size: 1.2rem;
     }
     img {
        width: 15%;
     }

     .icons_item {
        font-size: 1.6rem;
        color: $primary_gray;
        transition: .3;
        cursor: pointer;
        &:hover {
            color: $secondary_white;
        }
    }
}

</style>