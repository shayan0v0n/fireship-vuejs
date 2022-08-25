<script>
import Tag from "../components/Tag.vue";
import { onMounted, ref } from 'vue';
import axios from 'axios';
import CardPlaceholder from "../components/UI/CardPlaceholder.vue";
export default {
    setup() {
        let tags = ref(null)
        onMounted(() => {
            axios.get('https://fireship-6470a-default-rtdb.firebaseio.com/tags.json')
            .then(res => {
                tags.value = res.data
            }).catch(err => console.log(err))
        })

        return {
            tags
        }
    },
    components: { Tag, CardPlaceholder }
}
</script>


<template>
    <div class="tags mx-3 text-center">
        <h2 class="py-3">TAGS</h2>
        <div class="row py-5 m-auto" v-if="tags" >
            <span v-for="tag in tags" class="col col-2">
                <Tag :tagpath="tag">{{ tag }}</Tag>
            </span>
        </div>
        <div class="row py-5 m-auto" v-else >
            <span v-for="tag in [0,1,2,3,4,5,6,6,7,8,9]" class="col col-1">
                <CardPlaceholder :isCard="true" />
            </span>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .tags {
        h2 {
            font-weight: bold;
        }
        cursor: pointer;
    }
</style>