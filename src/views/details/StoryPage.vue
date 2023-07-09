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
            <h1 class="story-title" v-html="story.title"></h1> 
            <div class="story-link-container">
                <a :href="story.url" class="story-link">{{ story.url }}</a>
            </div>
        </div>
        <div class="story-comments">
            <div class="story-comments-header">
                <ion-label class="story-comments-title">{{ viewmodel.list.length > 0 ? "Comments" : "No comments" }}</ion-label>
                <ion-icon 
                    :icon="viewmodel.getCommentSectionIsToggled() ? chevronUp : chevronDown" 
                    :onclick="() => { viewmodel.toggleCommentSection() }"
                    v-if="viewmodel.list.length > 0"
                />
            </div>
            <div 
                class="story-comments-list" 
                v-if="viewmodel.list.length > 0 && viewmodel.getCommentSectionIsToggled()"
            >
                <div 
                    class="story-comment" 
                    v-for="comment in viewmodel.list" :key="props.story.id"
                >
                    <CommentView 
                        :item="comment" 
                    />
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
    @import './StoryPage.scss';
</style>./StoryViewModel.ts