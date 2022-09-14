import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Post } from '@interfaces';
import { BaseFeedItemComponent } from '../base-feed-item.component';

@Component({
    selector: 'feed-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent extends BaseFeedItemComponent<Post> {}
