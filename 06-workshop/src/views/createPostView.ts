import { HtmlRenderer } from "../utils/html";
import { PostService } from "../services/postsService";

const postsService = new PostService()

export async function createPostView(): Promise<void> {
    const template = `
    <form id="create-post-form">
        <div>
            <label for="title">Title</label>
            <input type="text" name="title" id="title" value="">
        </div>

            <div>
            <label for="body">Body</label>
            <input type="text" name="body" id="body" value="">
        </div>

        <button type="submit">Create Post</button>
    </form>
    `;

    HtmlRenderer.render(template);

    const formEl = document.getElementById('create-post-form');
    if(formEl){
        formEl.addEventListener('submit', createPost)
    }

}

async function createPost(event: Event) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const title = formData.get('title') as string;
    const body = formData.get('body') as string;

    const result = await postsService.create({
        userId: 1,
        title: title,
        body: body,
    });

    console.log(result);
    
}