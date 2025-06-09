import { ApiService } from "./api";
import type { CreatePost, Post } from "../interfaces/Post";
import { BASE_URL } from "../constants";

export class PostService extends ApiService<Post, CreatePost> {
    constructor() {
        super(`${BASE_URL}/posts`);
    }
}