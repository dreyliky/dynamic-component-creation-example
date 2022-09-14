import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    Type,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import { FeedItem } from '@models';
import { FeedService } from '@services';
import { BaseFeedItemComponent } from './components/base-feed-item.component';
import { FEED_ITEM_COMPONENT_MAP } from './data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
    @ViewChild('feedContainer', { read: ViewContainerRef })
    private readonly feedViewContainerRef!: ViewContainerRef;

    constructor(
        private readonly feedService: FeedService
    ) {}

    public ngAfterViewInit(): void {
        this.initFeedItemsObserver();
    }

    private initFeedItemsObserver(): void {
        this.feedService.getAll()
            .subscribe((feedItems) => this.generateFeedComponentsAndAttachToContainerRef(feedItems));
    }

    private generateFeedComponentsAndAttachToContainerRef(feedItems: FeedItem[]): void {
        feedItems.forEach((feedItem) => {
            const FeedItemComponent = FEED_ITEM_COMPONENT_MAP.get(feedItem.type) as Type<unknown>;
            const feedItemComponentRef = this.feedViewContainerRef.createComponent(FeedItemComponent);
            const feedItemInstance = feedItemComponentRef.instance as BaseFeedItemComponent;
            feedItemInstance.data = feedItem.data;

            feedItemComponentRef.changeDetectorRef.detectChanges();
        });
    }
}
