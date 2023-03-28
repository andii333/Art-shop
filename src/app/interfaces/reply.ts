export interface Reply {
    id:number;
    name:string;
    email:string;
    comment:string;
    date:Date;
    postId:number;
    posts:Reply[]
}
