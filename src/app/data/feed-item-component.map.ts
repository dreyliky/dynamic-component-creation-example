import { Type } from '@angular/core';
import {
    AdComponent,
    PostComponent,
    ShortVideoComponent,
    VideoComponent
} from '@components';
import { FeedItemEnum } from '@enums';

export const FEED_ITEM_COMPONENT_MAP = new Map<FeedItemEnum, Type<unknown>>([
    [FeedItemEnum.Video, VideoComponent],
    [FeedItemEnum.ShortVideo, ShortVideoComponent],
    [FeedItemEnum.Ad, AdComponent],
    [FeedItemEnum.Post, PostComponent]
]);
