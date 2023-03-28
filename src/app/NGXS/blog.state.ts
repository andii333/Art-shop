import { State, StateContext, Action, Selector, NgxsOnInit } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { CategoryId, GetCategorysPosts, GetCategorysPostsFail, GetCategorysPostsSuccess, GetPosts, GetPostsFail, GetPostsSuccess, SendPost, SendPostFail, SendPostSuccess, SendReply, SendReplyFail, SendReplySuccess } from './blog.action';
import { PostService } from '../services/post.service';
import { IdEqualPost, IdEqualReply } from '../interfaces/id-equal-object';

export interface BlogStateModel {
    loading: boolean;
    loaded: boolean;
    categoryId:number;
    categorysPosts: Post[],
    postsDictionary: IdEqualPost;
    repliesDictionary: IdEqualReply;
    postIdsSet: Set<number>;
}

@State<BlogStateModel>({
    name: 'blog',
    defaults: {
        loading: false,
        loaded: false,
        categoryId:NaN,
        categorysPosts: [],
        postsDictionary: {},
        repliesDictionary: {},
        postIdsSet: new Set(),
    },
})
@Injectable()
export class BlogState implements NgxsOnInit{

    @Selector()
    static loaded(state: BlogStateModel): boolean {
        return state.loaded;
    }

    @Selector()
    static loading(state: BlogStateModel): boolean {
        return state.loading;
    }

    @Selector()
    static posts(state: BlogStateModel): Post[] {
        return Array.from(state.postIdsSet).map(id => state.postsDictionary[id])
    }

    @Selector()
    static categorysPosts(state: BlogStateModel): Post[] {
        return state.categorysPosts
    }
    
    @Selector()
    static randomPost(state: BlogStateModel): Post {
        const rundom = Math.floor(Math.random() * state.postIdsSet.size)+1
        return state.postsDictionary[rundom]
    }
    @Selector()
    static randomPost1(state: BlogStateModel): Post {
        const rundom = Math.floor(Math.random() * state.postIdsSet.size)+1
        return state.postsDictionary[rundom]
    }
    @Selector()
    static randomPost2(state: BlogStateModel): Post {
        const rundom = Math.floor(Math.random() * state.postIdsSet.size)+1
        return state.postsDictionary[rundom]
    }

    @Selector()
    static postIds(state: BlogStateModel): Set<number> {
        return state.postIdsSet;
    }


    constructor(private postService: PostService) { }
    ngxsOnInit(ctx: StateContext<any>): void {
       ctx.dispatch(new GetPosts());
    }

    @Action(GetPosts)
    getPosts(ctx: StateContext<BlogStateModel>) {
        ctx.patchState({
            loading: true,
            loaded: false,
        });
        this.postService.getPosts().subscribe({
            next: response => ctx.dispatch(new GetPostsSuccess(response)),
            error: err => ctx.dispatch(new GetPostsFail(err)),
        });
    }

    @Action(GetPostsSuccess)
    getPostsSuccess(ctx: StateContext<BlogStateModel>, { posts }: GetPostsSuccess) {
        if (posts) {
            const postDictionary: IdEqualPost = {}
            for (let index = 0; index < posts.length; index++) {
            ctx.getState().postIdsSet.add(posts[index].id);
                postDictionary[posts[index].id] = posts[index];
            }
            ctx.patchState({
                loading: false,
                loaded: true,
                postsDictionary: postDictionary,
            });
        }
    }

    @Action(GetPostsFail)
    getPostsFail(ctx: StateContext<BlogStateModel>, { err }: GetPostsFail) {
        ctx.patchState({ loading: false, loaded: false });
        alert(`The list of posts could not be loaded from the server and the following error occurred: ${err}`);
    }
    @Action(GetCategorysPosts)
    getCategorysPosts(ctx: StateContext<BlogStateModel>) {
        ctx.patchState({
            loading: true,
            loaded: false,
        });
        this.postService.getCategoryPosts(ctx.getState().categoryId).subscribe({
            next: response => ctx.dispatch(new GetCategorysPostsSuccess(response)),
            error: err => ctx.dispatch(new GetCategorysPostsFail(err)),
        });
    }

    @Action(GetCategorysPostsSuccess)
    getCategorysPostsSuccess(ctx: StateContext<BlogStateModel>, { posts }: GetCategorysPostsSuccess) {
        if (posts) {

            ctx.patchState({
                loading: false,
                loaded: true,
                categorysPosts: [...posts]
            });
        }
    }

    @Action(GetCategorysPostsFail)
    getCategorysPostsFail(ctx: StateContext<BlogStateModel>, { err }: GetCategorysPostsFail) {
        ctx.patchState({ loading: false, loaded: false });
        alert(`The list of posts could not be loaded from the server and the following error occurred: ${err}`);
    }

    @Action(SendPost)
    sendPost(ctx: StateContext<BlogStateModel>, { post }: SendPost) {
        ctx.patchState({
            loading: true,
            loaded: false,
        });
        this.postService.sendPost(post).subscribe({
            next: response => ctx.dispatch(new SendPostSuccess(response)),
            error: err => ctx.dispatch(new SendPostFail(err)),
        });
    }

    @Action(SendPostSuccess)
    sendPostSuccess(ctx: StateContext<BlogStateModel>, { post }: SendPostSuccess) {
        if (post) {
            const postDictionary: IdEqualPost = {}
            postDictionary[post.id] = post;
            ctx.getState().postIdsSet.add(post.id)
            Object.assign((ctx.getState().postsDictionary), postDictionary)
            ctx.patchState({
                loading: false,
                loaded: true,
            });
        }
    }

    @Action(SendPostFail)
    sendPostFail(ctx: StateContext<BlogStateModel>, { err }: SendPostFail) {
        ctx.patchState({ loading: false, loaded: false });
        alert(`The post was not sent because the following error occurred:: ${err}`);
    }

    // @Action(SendReply)
    // sendReply(ctx: StateContext<BlogStateModel>, { reply }: SendReply) {
    //     ctx.patchState({
    //         loading: true,
    //         loaded: false,
    //     });
    //     this.postService.sendReply(reply, '1').subscribe({
    //         next: response => ctx.dispatch(new SendReplySuccess(response)),
    //         error: err => ctx.dispatch(new SendReplyFail(err)),
    //     });
    // }

    // @Action(SendReplySuccess)
    // sendReplySuccess(ctx: StateContext<BlogStateModel>, { reply }: SendReplySuccess) {
    //     if (reply) {
    //         const repliesDictionary: IdEqualReply = {}
    //         repliesDictionary[reply.id] = reply;
    //         ctx.getState().postIdsSet.add(reply.id)
    //         Object.assign((ctx.getState().repliesDictionary), repliesDictionary)
    //         ctx.patchState({
    //             loading: false,
    //             loaded: true,
    //         });
    //     }
    // }

    // @Action(SendReplyFail)
    // sendReplyFail(ctx: StateContext<BlogStateModel>, { err }: SendReplyFail) {
    //     ctx.patchState({ loading: false, loaded: false });
    //     alert(`The reply was not sent because the following error occurred:: ${err}`);
    // }

    @Action(CategoryId)
    categoryId(ctx: StateContext<BlogStateModel>, { categoryId }: CategoryId) {
        ctx.patchState({ categoryId: categoryId });
    }

}
