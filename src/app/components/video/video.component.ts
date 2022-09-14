import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Video } from '@interfaces';
import { BaseFeedItemComponent } from '../base-feed-item.component';

@Component({
    selector: 'feed-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoComponent extends BaseFeedItemComponent<Video> {}
