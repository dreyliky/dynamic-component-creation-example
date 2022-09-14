import { Injectable } from '@angular/core';
import { FeedApi } from '@api';
import { FeedItem } from '@models';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FeedService {
    constructor(
        private readonly feedApi: FeedApi
    ) {}

    public getAll(): Observable<FeedItem<unknown>[]> {
        return this.feedApi.getAll();
    }
}
