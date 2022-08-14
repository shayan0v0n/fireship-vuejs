import { createRouter, createWebHistory } from "vue-router"
const Home = import('./containers/Home.vue');
const Lessons = import('./containers/Lessons.vue');
const Courses = import('./containers/Courses.vue');
const Tags = import('./containers/Tags.vue');
const License = import('./containers/License.vue');

const routes = [
    { path: '/', name: 'homePage', component: Home },
    { path: '/lessons', name: 'lessonsPage', component: Lessons },
    { path: '/courses', name: 'coursesPage', component: Courses },
    { path: '/tags', name: 'tagsPage', component: Tags },
    { path: '/license', name: 'licensePage', component: License }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router