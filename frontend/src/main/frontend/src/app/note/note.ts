export class Note {
    id: number;
    title: string;
    body: string;
    createdAt: Date;
    modifiedAt: Date;
    tags: Array<string> = [];
}
