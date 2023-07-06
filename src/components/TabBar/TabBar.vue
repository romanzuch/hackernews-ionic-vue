<template>
    <ion-tabs>
        <ion-router-outlet></ion-router-outlet>

        <!-- Tab bar -->
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="best" href='best'>
            <ion-icon :icon="home"></ion-icon>
            <ion-label>Best</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="new" href='new'>
            <ion-icon :icon="newspaper"></ion-icon>
            <ion-label>New</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="more" href='more'>
            <ion-icon :icon="reorderThree"></ion-icon>
            <ion-label>More</ion-label>
          </ion-tab-button>
        </ion-tab-bar>

    </ion-tabs>
</template>
  
<script setup lang="ts">
  import { IonIcon, IonTabBar, IonTabButton, IonTabs, IonLabel, IonRouterOutlet } from '@ionic/vue';
  import { home, newspaper, reorderThree } from 'ionicons/icons';
</script>
  
<style scoped lang='scss'>
</style>