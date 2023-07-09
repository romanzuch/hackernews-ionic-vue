<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>New Stories</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse='condense'>
        <ion-toolbar>
          <ion-title size='large'>New Stories</ion-title>
        </ion-toolbar>
      </ion-header>
      <div>
        <div class='list-container'>
          <hacker-list :stories="viewModel.list"/>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang='ts'>
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import HackerList from '@/components/HackerList.vue';
  import StoriesViewModel from '@/utils/StoriesViewModel';
  import { onMounted } from 'vue';
  import Endpoint from '@/models/Endpoint';
  const viewModel = new StoriesViewModel(Endpoint.new);
  onMounted(() => {
    viewModel.fetchStories();
  });
</script>

<style scoped lang="scss">
  @import '@/views/shared/StoryTab.scss';
</style>