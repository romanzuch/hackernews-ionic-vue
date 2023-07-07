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
        <!-- TODO: add a <ion-refresher> here -->
        <div class="story-header">
            <h1 class="story-title"> {{  story.title }}</h1>
            <div class="story-link-container">
                <a :href="story.url" class="story-link">{{ story.url }}</a>
            </div>
        </div>
        <div class="story-comments">
            <div class="story-comments-header">
                <ion-label class="story-comments-title">Comments</ion-label>
                <ion-label class="story-comments-count">{{ props.story.kids.length }}</ion-label> 
                <ion-button :onclick="viewmodel.toggleCommentSection">
                    <ion-icon :icon="chevronDown"/>  
                </ion-button>
            </div>
            <div class="story-comments-list" :v-if="viewmodel.commentSectionIsToggled">
                <div class="story-comment" v-for="comment in viewmodel.list" :key="props.story.id">
                    <ion-label >{{ comment.text }}</ion-label>
                    <ion-icon :icon="chevronDown"/>
                </div>
            </div>
        </div>
    </ion-content>
</template>

<script setup lang="ts">
    import { IonHeader, IonTitle, IonToolbar, IonContent, IonButtons, IonBackButton, IonButton } from '@ionic/vue';
    import { IonLabel } from '@ionic/vue';
    import { IonIcon } from '@ionic/vue';
    import { chevronDown, chevronUp } from 'ionicons/icons';
    import { onMounted } from 'vue';
    import Story from '@/models/Story';
    import StoryViewModel from './StoryViewModel';
    const viewmodel = new StoryViewModel();
    const props = defineProps({
        story: {
            type: Object as () => Story,
            required: true
        }
    });
    onMounted(() => {
        viewmodel.fetchComments(props.story.kids);
    });
</script>

<style scoped lang="scss">
.story-header {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
}
.story-link {
    font-size: 0.8rem;
}

.story-comments-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* padding: 8px 12px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.13); */
}
.story-comments-title {
    font-weight: bold;
}

.story-comments-count {
    font-size: 0.8rem;
}

.story-comments-list {
    padding: 1rem 0;
}

.story-comment {
    padding: 8px 12px;
    border-bottom: 1px solid gray;
    margin-bottom: 12px;
    font-size: 0.8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.story-comment ion-icon {
    color: gray;
}
</style>./StoryViewModel.ts