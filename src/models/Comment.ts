class Comment {
    by: string;
    descendants: number;
    id: number;
    kids: number[];
    parent: number;
    time: number;
    text: string;
    type: string;

    constructor() {
        this.by = "";
        this.descendants = 0;
        this.id = 0;
        this.kids = [0];
        this.parent = 0;
        this.time = 0;
        this.text = "";
        this.type = "";
    }
}

export default Comment;