import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShortVideo } from '@interfaces';
import { BaseFeedItemComponent } from '../base-feed-item.component';

@Component({
    selector: 'feed-short-video',
    templateUrl: './short-video.component.html',
    styleUrls: ['./short-video.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShortVideoComponent extends BaseFeedItemComponent<ShortVideo> {}
