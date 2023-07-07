<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons>
                <ion-back-button />
            </ion-buttons>
            <ion-title>{{ story.title }}</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <p class="story-title-header">Title</p>
        <h1 class="story-title"> {{  story.title }}</h1>
        <a :href="story.url" class="story-link">{{ story.url }}</a>
    </ion-content>
</template>

<script setup lang="ts">
    import { IonHeader, IonTitle, IonToolbar, IonContent, IonButtons, IonBackButton } from '@ionic/vue';
    import Story from '@/models/Story';
    const props = defineProps({
        story: {
            type: Object as () => Story,
            required: true
        }
    });
</script>

<style scoped lang="scss">
.story-title-header {
    margin-bottom: -16px;
    font-size: 0.8rem;
}
.story-link {
    font-size: 0.8rem;
}
</style>