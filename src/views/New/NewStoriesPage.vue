<template>
    <ion-page>
        <ion-nav :root="NewStoriesListPage"></ion-nav>
    </ion-page>
</template>

<script setup lang="ts">
    import { IonPage, IonNav } from '@ionic/vue';
    import NewStoriesListPage from './NewStoriesListPage.vue';
</script>

<style scoped lang="scss">

</style>