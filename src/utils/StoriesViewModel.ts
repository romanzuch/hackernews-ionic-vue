import Webservice from '@/services/webservice';
import Endpoint from '@/models/Endpoint';
import Story from '@/models/Story';
import { reactive } from 'vue';

class StoriesViewModel {

    public list = reactive<Story[]>([]);
    private endpoint: Endpoint;

    constructor(endpoint: Endpoint) {
      this.endpoint = endpoint;
    }
    async fetchStories() {
        try {
            const webservice = new Webservice();
            const idList = await webservice.fetchList(this.endpoint);
            if (idList.length > 0) {
              for (const id of idList) {
                const story = await webservice.fetchItem(id);
                this.list.push(story);
              }
            }
          } catch (error) {
            console.error('Fehler beim Abrufen der Geschichten:', error);
          }
    }
}

export default StoriesViewModel;