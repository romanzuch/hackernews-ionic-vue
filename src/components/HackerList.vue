<script setup lang='ts'>
    import { 
        IonItem, 
        IonLabel, 
        IonList 
    } from '@ionic/vue';
    const props = defineProps({
        stories: {
            type: Array as () => Story[],
            required: true
        }
    });
    import { IonNavLink, IonIcon } from '@ionic/vue';
    import { chevronForward } from 'ionicons/icons';
    import StoryPage from '@/views/details/StoryPage.vue';
    import Story from '@/models/Story';
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
        <ion-item v-for="story in props.stories" :key="story.id">
            <ion-nav-link router-direction="forward" :component="StoryPage" :component-props="{ story: story }">
                <ion-label v-html="story.title" />
                <ion-icon :icon="chevronForward" />
            </ion-nav-link>
        </ion-item>
    </ion-list>
</template>