import Webservice from '@/services/webservice';
import Comment from '@/models/Comment';
import { reactive, ref } from 'vue';

class CommentViewModel {
    public list = reactive<Comment[]>([]);
    private commentSectionIsToggled = ref<Boolean>(false);

    async fetchComments(idList: number[]) {
        try {
            const webservice = new Webservice();
            for (const id of idList) {
              const comment = await webservice.fetchComment(id);
              this.list.push(comment);
            }
          } catch (error) {
            console.error('Fehler beim Abrufen der Kommentare:', error);
          }
    }

    toggleCommentSection() {
      this.commentSectionIsToggled.value = !this.commentSectionIsToggled.value;
    }

    getCommentSectionIsToggled(): Boolean {
      return this.commentSectionIsToggled.value;
    }
}

export default CommentViewModel;