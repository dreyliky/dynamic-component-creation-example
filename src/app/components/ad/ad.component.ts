import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { Ad } from '@interfaces';
import { BaseFeedItemComponent } from '../base-feed-item.component';

@Component({
    selector: 'feed-ad',
    templateUrl: './ad.component.html',
    styleUrls: ['./ad.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdComponent extends BaseFeedItemComponent<Ad> {
    @HostListener('click')
    public onHostClick(): void {
        window.open(this.data.resourceUrl, '_blank');
    }
}
