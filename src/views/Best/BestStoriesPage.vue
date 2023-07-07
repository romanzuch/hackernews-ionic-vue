<template>
    <ion-page>
        <ion-nav :root="BestStoriesListPage"></ion-nav>
    </ion-page>
</template>

<script setup lang="ts">
    import { IonPage, IonNav } from '@ionic/vue';
    import BestStoriesListPage from './BestStoriesListPage.vue';
</script>

<style scoped lang="scss">

</style>