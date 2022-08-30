import { createRouter, createWebHistory } from "vue-router"
const Home = import('./containers/Home.vue');
const Lessons = import('./containers/Lessons.vue');
const Courses = import('./containers/Courses.vue');
const Tags = import('./containers/Tags.vue');
const License = import('./containers/License.vue');
const SingleLesson = import('./containers/SingleLesson.vue');
const SingleCourses = import('./containers/SingleCourse.vue');
const SingleTags = import('./containers/SingleTag.vue');
const Dashboard = import('./containers/Dashboard/Dashboard.vue');
const CartDashboard = import('./containers/Dashboard/CartDashboard.vue');
const ProductsDashboard = import('./containers/Dashboard/ProductsDashboard.vue');
const ProfileDashboard = import('./containers/Dashboard/ProfileDashboard.vue');

const routes = [
    { path: '/', name: 'homePage', component: Home },
    { path: '/lessons', name: 'lessonsPage', component: Lessons },
    { path: '/lessons/:path', name: 'lessonsPageChild', component: SingleLesson },
    { path: '/courses', name: 'coursesPage', component: Courses },
    { path: '/courses/:path', name: 'SingleCoursesChild', component: SingleCourses },
    { path: '/tags', name: 'tagsPage', component: Tags },
    { path: '/tags/:path', name: 'tagsPageChild', component: SingleTags },
    { path: '/license', name: 'licensePage', component: License },
    { path: '/dashboard', name: 'dashboardPage', component: Dashboard },
    { path: '/dashboard/cartDashboard', name: 'cartDashboardPage', component: CartDashboard },
    { path: '/dashboard/productsDashboard', name: 'productsDashboardPage', component: ProductsDashboard },
    { path: '/dashboard/profileDashboard', name: 'ProfileDashboardPage', component: ProfileDashboard }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;