<script>
import axios from 'axios'
import useDarkMode from '../hooks/useDarkMode';
import CourseCard from '../components/CourseCard.vue';
import Tweet from '../components/Tweet.vue';
import LessonCard from '../components/LessonCard.vue';
import { onMounted, reactive, ref } from 'vue';
import CardPlaceholder from '../components/UI/CardPlaceholder.vue';

    export default {
    setup() {
        const { currentTheme } = useDarkMode();
        let newCoursesFake = ref(null)
        let learnByGoing = ref(null)
        let modernFullstack = ref(null)
        let newToDevelopment = ref(null)
        let tweets = ref(null)
        let singleLesson = ref({})
        let lessons = ref([])
        onMounted(() => {
            axios.get('https://fireship-6470a-default-rtdb.firebaseio.com/courses.json')
            .then(res => {
                newCoursesFake.value = [res.data[0], res.data[1]];
                learnByGoing.value = [res.data[2], res.data[3]];
                modernFullstack.value = [res.data[4], res.data[5]];
                newToDevelopment.value = [res.data[6], res.data[7]];
            }).catch(err => console.log(err))

            axios.get('https://fireship-6470a-default-rtdb.firebaseio.com/tweets.json')
            .then(res => {
                tweets.value = res.data
            }).catch(err => console.log(err))

            axios.get('https://fireship-6470a-default-rtdb.firebaseio.com/lessons.json')
            .then(res => {
                singleLesson.value = res.data[0]
                res.data.map((item, index) => {
                    if (index < 7 && index !== 0) {
                        lessons.value.push(item)
                    }
                })

            }).catch(err => console.log(err))
        })

        return {
            currentTheme,
            newCoursesFake,
            learnByGoing,
            modernFullstack,
            newToDevelopment,
            lessons,
            singleLesson,
            tweets
        };
    },
    components: { CourseCard, Tweet, LessonCard, CardPlaceholder, CardPlaceholder, CardPlaceholder }
}

</script>
<template>
    <div class="text-center">
        <section class="row align-items-center m-auto py-5 container fireship-banner" :class="[currentTheme == 'dark' ? 'fireship-banner-dark' : null ]">
            <div class="col-12 col-md-6 text-center text-md-start p-1">
                <h2>BUILD AND SHIP YOUR APP <div>FASTER</div></h2>
                <span><div>Fireship.io is a <span>gateway drug</span> for developers</div> who want to <b>build awesome web & mobile apps.</b></span>
                <div>
                    <router-link to="/lessons"><button class="btn" id="free-lessons">FREE LESSONS</button></router-link>
                    <router-link to="/courses"><button class="btn" id="free-courses">PRO COURSES</button></router-link>
                    
                </div>
            </div>
            <div class="col-12 col-md-6 p-1">
                <img src="/assets/imgs/banner-img.png" alt="banner-img" class="w-75 rounded">
            </div>
        </section>
        <section class="py-5 container">
            <div class="mt-5">
                <h2>NEW COURSES</h2>
                <span>BRAND NEW COURSES AND UPDATES EVERY MONTH</span>
                <div class="row mt-3" v-if="newCoursesFake">
                    <div class="col-12 col-md-6" v-for="course in newCoursesFake">
                        <CourseCard :courseData="course" />
                    </div>
                </div>
                <div class="row mt-3" v-else>
                    <div class="col-12 col-md-6">
                        <CardPlaceholder />
                    </div>
                    <div class="col-12 col-md-6">
                        <CardPlaceholder />
                    </div>
                </div>
            </div>
            <div class="mt-5">
                <h2>LEARN BY GOING</h2>
                <span>FAST, EFFICENT, PROJECT-BASED VIDEO COURSES</span>
                <div class="row mt-3" v-if="learnByGoing">
                    <div class="col-12 col-md-6" v-for="course in learnByGoing">
                        <CourseCard :courseData="course" />
                    </div>
                </div>
                <div class="row mt-3" v-else>
                    <div class="col-12 col-md-6">
                        <CardPlaceholder />
                    </div>
                    <div class="col-12 col-md-6">
                        <CardPlaceholder />
                    </div>
                </div>
            </div>
            <div class="mt-5">
                <h2>MODERN FULLSTACK</h2>
                <span>DEVELOP FASTER WITH SCALABLE CLOUD INFRASTRUCTURE</span>
                <div class="row mt-3" v-if="modernFullstack">
                    <div class="col-12 col-md-6" v-for="course in modernFullstack">
                        <CourseCard :courseData="course" />
                    </div>
                </div>
                <div class="row mt-3" v-else>
                    <div class="col-12 col-md-6">
                        <CardPlaceholder />
                    </div>
                    <div class="col-12 col-md-6">
                        <CardPlaceholder />
                    </div>
                </div>
            </div>
            <div class="mt-5">
                <h2>NEW TO DEVELOPMENT</h2>
                <span>MASTER THE BASICS FIRST 👇</span>
                <div class="row mt-3" v-if="modernFullstack">
                    <div class="col-12 col-md-6" v-for="course in newToDevelopment">
                        <CourseCard :courseData="course" />
                    </div>
                </div>
                <div class="row mt-3" v-else>
                    <div class="col-12 col-md-6">
                        <CardPlaceholder />
                    </div>
                    <div class="col-12 col-md-6">
                        <CardPlaceholder />
                    </div>
                </div>
            </div>
        </section>
        <section class="py-5">
            <router-link to="/courses"><button class="all-pro-course btn">ALL PRO COURSES</button></router-link>
        </section>
        <section class="py-5 tweets-title">
            <div>
                <h2>💖 Loved by Developers since <span>2017</span></h2>
                <span>"I HAVE A JOB THANKS TO YOU"</span>
            </div>
            <img src="/assets/imgs/tweets-banner.png" class="w-75" />
        </section>
        <section>
            <div class="row container m-auto" v-if="tweets">
                <div class="col-12 col-md-4" v-for="tweet in tweets">
                    <Tweet :tweetData="tweet" />
                </div>
            </div>
            <div class="row mt-3 container m-auto" v-else>
                <div class="col-12 col-md-4" v-for="tweet in [0,1,2,3,4,5]">
                    <CardPlaceholder :isCard="true"/>
                </div>
            </div>
        </section>
        <section class="py-5">
            <h2>EXTRAORDINARY CODE TUTORIALS</h2>
            <span>FAST-PACED SOFTWARE DEV CONTENT YOU'LL ACTUALLY ENJOY WATCHING</span>
            <div class="my-5">
                <div class="row my-3 m-0">
                    <div class="col-12 col-md-3"></div>
                    <div class="col-12 col-md-6" v-if="singleLesson.title">
                        <LessonCard :lessonData="singleLesson" :lessonShort="true"/>
                    </div>
                    <div class="col-12 col-md-6" v-else>
                         <CardPlaceholder />
                    </div>
                    <div class="col-12 col-md-3"></div>
                </div>
                <div class="row container m-auto" v-if="lessons[0]">
                    <div class="col-12 col-md-6" v-for="lesson in lessons">
                        <LessonCard :lessonData="lesson" :lessonShort="false"/>
                    </div>
                </div>
                <div class="row container m-auto" v-else>
                    <div class="col-12 col-md-6" v-for="lesson in [0, 1, 2, 3, 4, 5]">
                        <CardPlaceholder :isCard="true" />
                    </div>
                </div>
            </div>
        </section>
        <section class="py-5">
            <h2>MULTIPLE LEARNING FORMATS</h2>
            <span>CONTENT FOR COMPLETE BEGINNERS AND EXPERIENCED ENGINEERS</span>
            <div class="row container m-auto mt-3 direct-btns" :class="[currentTheme === 'dark' ? 'direct-btns-dark' : null]">
                <div class="col-12 col-md-4">
                    <router-link to="/courses"><button class="btn" id="full-course-btn">FULL COURSES</button></router-link>
                </div>
                <div class="col-12 col-md-4">
                    <router-link to="/lessons"><button class="btn" id="single-lesson-btn">SINGLE LESSONS</button></router-link>
                </div>
                <div class="col-12 col-md-4">
                    <router-link to="/tags"><button class="btn" id="quick-tag-btn">QUICK FIND</button></router-link>
                </div>
            </div>
        </section>
        <section class="py-5">
            <div class="row about-me m-0 align-items-center">
                <div class="col-12 col-md-6">
                    <img src="/assets/imgs/me.jpeg" class="w-50 rounded-circle border" />
                </div>
                <div class="col-12 col-md-6 text-start">
                    <h2>🎙️ YOUR HOST</h2>
                    <p>Hi, I'm <span>Shayan Vosoughi</span> and the only thing I know is that I know nothing. I've been building software for over 3 years and started this project with a simple mission... 👉 create practical content that <b>increases developer happiness and productivity</b> 🚀</p>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.fireship-banner {
    h2 {
        font-size: 2.5rem;
        font-weight: bold;
    }
    span {
        font-size: 1.5rem;
        color: $secondary_dark;
        span {
            background-image: linear-gradient(90deg,rgb(250,128,67), rgb(255,66,135));
            color: $primary_dark;
            padding: .2rem;
            border-radius: 8px;
            font-weight: bold;
        }
        b {
            color: $primary_dark;
        }
    }
    button {
        margin-top: 2rem;
        color: $primary_dark;
        margin: .5rem;
        padding: .5rem 1rem;
    }

    #free-lessons {
        border: 2px solid $primary_orange;
       transition: .3s;
       &:hover {
           @include transformY(-3px);
            background-color: $primary_orange;
            color: $primary_white;
       }
    }

    #free-courses {
        border: 2px solid $primary_green;
       transition: .3s;
       &:hover {
           @include transformY(-3px);
            background-color: $primary_green;
            color: $primary_white;
       }
    }
}

.fireship-banner-dark {
    span {
        font-size: 1.5rem;
        color: $secondary_white;
        span {
            background-image: linear-gradient(90deg,rgb(250,128,67), rgb(255,66,135));
            color: $primary_white;
            padding: .4rem;
            border-radius: 8px;
            font-weight: bold;
        }
        b {
            color: $primary_white;
        }
    }
    button {
        margin-top: 2rem;
        color: $primary_white;
        margin: .5rem;
        padding: .5rem 1rem;
    }
    
}

.all-pro-course {
    color: $primary_white;
    background-color: $primary_green;
    padding: 2rem 5rem;
    border: none;
    transition: .3s;
    &:hover {
        @include transformY(-3px);
    }
}

.tweets-title {
    span {
        font-family: monospace;
    }
}

.direct-btns {
    button {
        padding: 2rem 4rem;
        color: $secondary_dark;
        font-weight: bold;
        transition: .3s;
        margin: .5rem;
        &:hover {
            color: $secondary_white;
            @include transformY(-3px);
        }
    }
    #full-course-btn {
        border: 2px solid $primary_purple;
        transition: .3s;
        &:hover {
            background-color: $primary_purple;
        }
    }
    #single-lesson-btn {
        border: 2px solid $primary_green;
        transition: .3s;
        &:hover {
            background-color: $primary_green;
        }
    }
    #quick-tag-btn {
        border: 2px solid $primary_blue;
        transition: .3s;
        &:hover {
            background-color: $primary_blue;
        }
    }
}

.direct-btns-dark {
    button {
        padding: 2rem 4rem;
        color: $secondary_white;
        font-weight: bold;
        transition: .3s;
        &:hover {
            color: $secondary_white;
        }
    }
}

.about-me {
    h2 {
        font-size: 2.5rem;
        font-weight: bold;
    }
    p {
        font-size: 1.6rem;
        span {
            background-image: linear-gradient(90deg,rgb(250,128,67), rgb(255,66,135));
            color: $primary_white;
            padding: .4rem;
            border-radius: 8px;
            font-weight: bold;
        }
    }
}

</style>