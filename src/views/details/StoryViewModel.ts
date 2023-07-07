import Webservice from '@/services/webservice';
import { reactive, ref } from 'vue';

class StoryViewModel {
    public list = reactive<Comment[]>([]);
    public commentSectionIsToggled = ref<Boolean>(false); // this doesn't work

    async fetchComments(idList: number[]) {
        try {
            const webservice = new Webservice();
            for (const id of idList) {
              const comment = await webservice.fetchComment(id);
              this.list.push(comment);
            }
          } catch (error) {
            console.error('Fehler beim Abrufen der Geschichten:', error);
          }
    }

    toggleCommentSection() {
      console.info(`Current value: ${this.commentSectionIsToggled}`); // this doesn't work
    }
}

export default StoryViewModel;