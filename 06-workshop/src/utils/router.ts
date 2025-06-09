import type { Routes } from "../interfaces/Route";

export class Router {
    private routes: Routes;

    constructor(routes: Routes){
        this.routes = routes;
        this.navigate(window.location.pathname);
    }

    navigate(pathName: string) {
        history.pushState({}, '', pathName);

        const templateFunc = this.routes[pathName];

        if(templateFunc) {
            templateFunc();
        }
    }
}