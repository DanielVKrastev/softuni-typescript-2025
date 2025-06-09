import { log } from "../decorators";

export abstract class ApiService<T> {
    protected baseServiceUrl: string;

    constructor(url: string) {
        this.baseServiceUrl = url;
    }

    @log
    async getAll(): Promise<T[]> {
        const res = await fetch(this.baseServiceUrl);
        return await res.json();
    }

    @log
    async create(item: T): Promise<T> {
        const res = await fetch(this.baseServiceUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        });

        return await res.json();
    }

    @log
    async update(id: number, item: T): Promise<T> {
        const res = await fetch(`${this.baseServiceUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        });

        return await res.json();
    }

    @log
    async delete(id: number): Promise<void> {
        await fetch(`${this.baseServiceUrl}/${id}`, {
            method: 'DELETE',
        });
    }
}