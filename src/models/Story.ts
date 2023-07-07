class Story {
    by: string;
    descendants: number;
    id: number;
    kids: number[];
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;

    constructor() {
        this.by = "";
        this.descendants = 0;
        this.id = 0;
        this.kids = [0];
        this.score = 0;
        this.time = 0;
        this.title = "";
        this.type = "";
        this.url = "";
    }
}

export default Story;