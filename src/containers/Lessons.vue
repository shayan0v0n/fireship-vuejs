<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import LessonCard from '../components/LessonCard.vue';
import CardPlaceholder from '../components/UI/CardPlaceholder.vue';
export default {
    setup() {
        let lessons = ref(null)
        onMounted(() => {
            axios.get('https://fireship-6470a-default-rtdb.firebaseio.com/lessons.json')
            .then(res => {
                lessons.value = res.data
            }).catch(err => console.log(err))
        })

        return {
            lessons
        }
    },
    components: { LessonCard, CardPlaceholder }
}

</script>

<template>
    <div class="lessons mx-3 text-center">
        <h2 class="py-3 text-start">WATCH THE LATEST LESSONS</h2>
        <div class="row container m-auto" v-if="lessons">
            <div v-for="lesson in lessons" class="col-12 col-md-6">
                <LessonCard :lessonData="lesson" lessonShort="true" />
            </div>
        </div>
        <div class="row container m-auto" v-else>
            <div v-for="lesson in [0, 1, 2, 3]" class="col-12 col-md-6">
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