import { UsersService } from "../services/usersService";
import type { User } from "../interfaces/User";
import { HtmlRenderer } from "../utils/html";

const usersService = new UsersService();

export async function usersTemplate(): Promise<void> {
    const users = await usersService.getAll();

    const template = `
        <h1>Users</h1>
        <ul>
            ${users.map(u => singlePostTemplate(u)).join('')}
        </ul>
    `;

    HtmlRenderer.render(template);
}

function singlePostTemplate(user: User) {
    return `
        <li>
            <h3>${user.name}</h3>
            <p>${user.phone}</p>
            <p>${user.email}</p>
        </li>
    `;
}