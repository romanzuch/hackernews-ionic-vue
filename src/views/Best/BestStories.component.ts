import Webservice from '@/services/webservice';
import Endpoint from '@/models/Endpoint';
import { ref } from 'vue';

class BestStoriesComponent {
    public list = ref<Array<number>>([]);
    async fetchStories() {
        try {
            const webservice = new Webservice();
            const stories = await webservice.fetchList(Endpoint.best);
            this.list.value = stories;
          } catch (error) {
            console.error('Fehler beim Abrufen der Geschichten:', error);
          }
    }
}

export default BestStoriesComponent;