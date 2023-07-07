<script setup lang='ts'>
    import { 
        IonItem, 
        IonLabel, 
        IonList 
    } from '@ionic/vue';
    const props = defineProps({
        stories: {
            type: Array<number>,
            required: true
        }
    });
    import { IonNavLink, IonIcon } from '@ionic/vue';
    import { chevronForward } from 'ionicons/icons';
    import StoryPage from '@/views/details/StoryPage.vue';
    import Story from '@/models/Story';
    const storyData = {
        by: "Xeophon",
        descendants: 1238,
        id: 36580192,
        kids: [
            36583500,
            36582568,
            36580973,
            36581163,
            36581103
        ],
        score: 1037,
        time: 1688427104,
        title: "Threads, an Instagram app",
        type: "story",
        url: "https://apps.apple.com/us/app/threads-an-instagram-app/id6446901002"
    }
</script>

<style scoped lang='scss'>
    ion-nav-link {
        max-width: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    ion-nav-link ion-icon {
        color: gray;
    }
</style>

<template>
    <ion-list :inset="true">
        <ion-item v-for="story in props.stories" :key="story">
            <ion-nav-link router-direction="forward" :component="StoryPage" :component-props="{ story: storyData }">
                <ion-label>{{ story }}</ion-label>
                <ion-icon :icon="chevronForward" />
            </ion-nav-link>
        </ion-item>
    </ion-list>
</template>