<template>
    <ion-label v-html="props.item.text" />
    <div class="story-comment-footer">
        <ion-label v-html="item.by" />
        <div 
            class="story-comment-footer-extend" 
            v-if="item.kids && item.kids.length > 0"
            :onclick="() => { viewmodel.toggleCommentSection() }"
        >
            <ion-label>{{ `${item.kids.length}` }}</ion-label>
            <ion-icon 
                :icon="viewmodel.getCommentSectionIsToggled() ? chevronUp : chevronDown"
            />
        </div>
    </div>
    <div 
        class="story-comment-extended" 
        v-for="comment in viewmodel.list" :key="item.id"
        v-if="viewmodel.getCommentSectionIsToggled()"
    >
        <!-- <ion-label v-html="item.text" />
        <div class="story-comment-footer">
            <ion-label v-html="item.by" />
            <div class="story-comment-footer-extend" v-if="item.kids && item.kids.length > 0">
                <ion-label>{{ `${item.kids.length}` }}</ion-label>
                <ion-icon :icon="chevronDown"/>
            </div>
        </div> -->
        <CommentView 
            :item="comment" 
        />
    </div>
</template>

<script setup lang="ts">
    import { IonIcon, IonLabel } from '@ionic/vue';
    import { chevronDown, chevronUp } from 'ionicons/icons';
    import Comment from '@/models/Comment';
    import CommentViewModel from '@/components/comment/CommentViewModel';
    const viewmodel = new CommentViewModel();
    import { onMounted } from 'vue';

    const props = defineProps({
        item: {
            type: Object as () => Comment,
            required: true
        }
    });

    onMounted(() => {
        if (props.item.kids && props.item.kids.length > 0) {
            viewmodel.fetchComments(props.item.kids);
        };
    });
</script>

<style scoped lang="scss">
    @import './CommentView.scss';
</style>