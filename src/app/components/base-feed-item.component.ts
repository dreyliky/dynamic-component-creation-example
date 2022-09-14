import { Directive, Input } from '@angular/core';

@Directive()
export abstract class BaseFeedItemComponent<T = unknown> {
    @Input()
    public data!: T;
}
