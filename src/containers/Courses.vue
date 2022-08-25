<script>
import axios from 'axios';
import CourseCard from '../components/CourseCard.vue';
import { onMounted, ref } from 'vue';
import CardPlaceholder from '../components/UI/CardPlaceholder.vue';

export default {
    setup() {
        let courses = ref(null)
        onMounted(() => {
            axios.get('https://fireship-6470a-default-rtdb.firebaseio.com/courses.json')
            .then(res => {
                courses.value = res.data
            }).catch(err => console.log(err))
        })

        return {
            courses
        }
    },
    components: { CourseCard, CardPlaceholder }
}

</script>

<template>
    <div class="lessons mx-3 text-center">
        <h2 class="py-3 text-start">WATCH THE LATEST COURSES</h2>
        <div class="row container m-auto" v-if="courses">
            <div v-for="course in courses" class="col-12 col-md-6">
                <CourseCard :courseData="course" />
            </div>
        </div>
        <div class="row container m-auto" v-else>
            <div v-for="course in [0,1,2,3]" class="col-12 col-md-6">
                <CardPlaceholder />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .lessons {
        h2 {
            font-weight: bold;
        }
    }
</style>