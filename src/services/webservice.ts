import axios, { AxiosResponse } from 'axios';
import Endpoint from '@/models/Endpoint';
import Story from '@/models/Story';
import Comment from '@/models/Comment';

class Webservice {

    private BASE_URL: string = 'https://hacker-news.firebaseio.com/v0';
    private OPTIONS = {
        params: {
            print: 'pretty'
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
        }
    }

    private getPath(endpoint: Endpoint): string {
        switch (endpoint) {
            case Endpoint.best: return "beststories";
            case Endpoint.new: return "newstories";
            case Endpoint.item: return "item";
        }
    }

    private buildURL(endpoint: Endpoint, id?: number): string {
        const path: string = this.getPath(endpoint);
        return id ? `${this.BASE_URL}/${path}/${id}.json` : `${this.BASE_URL}/${path}.json`
    }

    async fetchList(endpoint: Endpoint, id?: number): Promise<number[]> {
        const url: string = this.buildURL(endpoint, id);
        try {
            const response: AxiosResponse = await axios.get(url, this.OPTIONS);
            return response.data;
        } 
        catch (error) {
            console.error('Error fetching data: ', error);
            throw error;
        }
    }

    async fetchItem(id: number): Promise<Story> {
        const url: string = this.buildURL(Endpoint.item, id);
        try {
            const response: AxiosResponse = await axios.get(url, this.OPTIONS);
            return response.data as Story;
        } catch (error) {
            console.error('Error fetching the story: ', error);
            throw error;
        }
    }

    async fetchComment(id: number): Promise<Comment> {
        const url: string = this.buildURL(Endpoint.item, id);
        try {
            const response: AxiosResponse = await axios.get(url, this.OPTIONS);
            return response.data as Comment;
        } catch (error) {
            console.error('Error fetching the comment: ', error);
            throw error;
        }
    }

    async fetchItems(ids: number[]): Promise<Story[]> {
        var stories: Story[] = [];
        for (let id of ids) {
            const url: string = this.buildURL(Endpoint.item, id);
            try {
                const response: AxiosResponse = await axios.get(url, this.OPTIONS);
                console.info(`Adding element to the list ${response.data}`);
                stories.push(response.data as Story);
            } catch (error) {
                console.error('Error fetching the story: ', error);
                throw error;
            }
        }
        return stories;
    }
}

export default Webservice;