import Webservice from '@/services/webservice';
import Endpoint from '@/models/Endpoint';
import Story from '@/models/Story';
import { reactive } from 'vue';

class BestStoriesComponent {
    public list = reactive<Story[]>([]);
    async fetchStories() {
        try {
            const webservice = new Webservice();
            const idList = await webservice.fetchList(Endpoint.best);
            for (const id of idList) {
              const story = await webservice.fetchItem(id);
              this.list.push(story);
            }
          } catch (error) {
            console.error('Fehler beim Abrufen der Geschichten:', error);
          }
    }
}

export default BestStoriesComponent;