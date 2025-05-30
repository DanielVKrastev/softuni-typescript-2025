// ! Mapped types using generics

type User = {
    id: number;
    username: string;
    email: string;
};

type Point = {
    x: number;
    y: number;
};

type MakeOptionalProperties<T> = {
    [K in keyof T]?: T[K];
};

type PartialUser = MakeOptionalProperties<User>;
type PartialPoint = MakeOptionalProperties<Point>;