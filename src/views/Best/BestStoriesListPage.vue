<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Best Stories</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse='condense'>
        <ion-toolbar>
          <ion-title size='large'>Best Stories</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- TODO: Add horizontal navigation and navigation links -->
      <div>
        <div class='list-container'>
          <hacker-list :stories="viewComponent.list"/>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang='ts'>
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import HackerList from '@/components/HackerList.vue';
  import BestStoriesListComponent from './BestStoriesListPage.component';

  import { onMounted } from 'vue';
  const viewComponent = new BestStoriesListComponent();
  onMounted(() => {
    viewComponent.fetchStories();
  });
</script>

<style scoped lang="scss">

.list-container {
  margin-left: env(safe-area-inset-left);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
@/views/best/BestStoriesListPage.component