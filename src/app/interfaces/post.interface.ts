import { Author } from './author.interface';

export interface Post {
    readonly message: string;
    readonly imageUrl: string;
    readonly author: Author;
}
