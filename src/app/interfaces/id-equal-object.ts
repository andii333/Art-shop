import { Painting } from "./paintings";
import { Post } from "./post";
import { Reply } from "./reply";

export interface IdEqualPainting {
   [id: number]: Painting
}
export interface IdEqualPost {
   [id: number]: Post
}
export interface IdEqualReply {
   [id: number]: Reply
}
export interface IdCategoryEqualPaintingsIdSet {
   [id: number]: Set<number>
}

export interface IdEqualCategory {
  [id: number]: string
}
