<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import LessonCard from '../components/LessonCard.vue';
import CardPlaceholder from '../components/UI/CardPlaceholder.vue';

export default {
    setup() {
        let lessons = ref([]);
        let currentLessons = ref([]);
        const currentPath = useRoute().params.path;
        onMounted(() => {
            axios.get("https://fireship-6470a-default-rtdb.firebaseio.com/lessons.json")
                .then(res => {
                lessons.value = res.data.find((item) => {
                    const existing = item.tags.findIndex(tag => tag == currentPath);
                    if (existing != -1) {
                        currentLessons.value.push(item);
                    }
                });
            }).catch(err => console.log(err));
        });
        return {
            currentLessons,
            currentPath
        };
    },
    components: { LessonCard, CardPlaceholder }
}

</script>

<template>
    <div class="container py-5">
        <h2 class="text-center">' {{ currentPath }} ' Tag!</h2>
        <div class="row" v-if="currentLessons[0]">
            <div class="col-12 col-md-6" v-for="lesson in currentLessons">
                <LessonCard :lessonData="lesson" :lessonShort="true"/>
            </div>
        </div>
        <div class="row" v-else>
            <div class="col-12 col-md-6" v-for="lesson in [0, 1]">
                <CardPlaceholder />
            </div>
        </div>
    </div>
</template>

<style>

</style>