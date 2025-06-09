import { PostService } from "./postsService";
import { UsersService } from "./usersService";

const postsService = new PostService();
const usersService = new UsersService();

export const services = {
    postsService,
    usersService,
}