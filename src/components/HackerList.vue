<script setup lang='ts'>
    import { 
        IonItem, 
        IonLabel, 
        IonList 
    } from '@ionic/vue';
</script>

<style scoped lang='scss'>
    .list-container {
        padding: 0 env(safe-area-inset-left);
    }
</style>

<template>
    <div class='list-container'>
        <ion-list>
            <ion-item>
                <ion-label>1</ion-label>
            </ion-item>
            <ion-item>
                <ion-label>2</ion-label>
            </ion-item>
        </ion-list>
    </div>
</template>