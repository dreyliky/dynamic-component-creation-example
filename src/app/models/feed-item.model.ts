import { FeedItemEnum } from '@enums';

export class FeedItem<T = unknown> {
    constructor(
        public readonly type: FeedItemEnum,
        public readonly data: T
    ) {}
}
