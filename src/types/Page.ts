export interface Page {
    id: number;

    slug: string;
    title: string;
    content: string;

    description?: string;
    publishedOn?: string;
    updatedOn?: string;
    expiresOn?: string;
}
