import { Author } from './author.interface';

export interface Video {
    readonly title: string;
    readonly previewUrl: string;
    readonly duration: string;
    readonly author: Author;
}
