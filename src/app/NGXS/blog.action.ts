import { Post } from "../interfaces/post";
import { Reply } from "../interfaces/reply";

export class GetPosts {
    static type = '[PostService] get posts';
}
export class GetPostsSuccess {
    static type = '[PostService] get postsSuccess';
    constructor(public posts: Post[]) { }
}
export class GetPostsFail {
    static type = '[PostService] get postsFail';
    constructor(public err: any) { }
}
export class GetCategorysPosts {
    static type = '[PostService] get categorysPosts';
}
export class GetCategorysPostsSuccess {
    static type = '[PostService] get categorysPostsSuccess';
    constructor(public posts: Post[]) { }
}
export class GetCategorysPostsFail {
    static type = '[PostService] get categorysPostsFail';
    constructor(public err: any) { }
}
export class SendPost {
    static type = '[PostService] send post';
    constructor(public post: Post) { }
}
export class SendPostSuccess {
    static type = '[PostService] send postSuccess';
    constructor(public post: Post) { }
}
export class SendPostFail {
    static type = '[PostService] send postFail';
    constructor(public err: any) { }
}
export class SendReply {
    static type = '[PostService] send reply';
    constructor(public reply: Reply) { }
}
export class SendReplySuccess {
    static type = '[PostService] send replySuccess';
    constructor(public reply: Reply) { }
}
export class SendReplyFail {
    static type = '[PostService] send replyFail';
    constructor(public err: any) { }
}
export class CategoryId {
    static type = '[BlogComponent] send cateoryId';
    constructor(public categoryId: number) { }
}
export class GetRepliesById {
    static type = '[PostService] get repiesById';
    constructor(public reply: Reply) { }
}
export class GetRepliesByIdSuccess {
    static type = '[PostService] get repiesByIdSuccess';
    constructor(public reply: Reply) { }
}
export class GetRepliesByIdFail {
    static type = '[PostService] get repiesByIdFail';
    constructor(public err: any) { }
}
