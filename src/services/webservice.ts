import axios, { AxiosResponse } from 'axios';
import Endpoint from '@/models/Endpoint';

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

    async fetchList(endpoint: Endpoint, id?: number): Promise<Array<number>> {
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
}

export default Webservice;