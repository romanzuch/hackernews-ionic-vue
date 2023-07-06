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
</script>

<style scoped lang='scss'>
</style>

<template>
    <ion-list :inset="true">
        <ion-item v-for="story in props.stories" :key="story">
            <ion-label>{{ story }}</ion-label>
        </ion-item>
    </ion-list>
</template>