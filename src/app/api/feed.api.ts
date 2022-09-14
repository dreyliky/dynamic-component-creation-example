import { Injectable } from '@angular/core';
import { FeedItemEnum } from '@enums';
import { Ad, Post, ShortVideo, Video } from '@interfaces';
import { FeedItem } from '@models';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FeedApi {
    public getAll(): Observable<FeedItem<unknown>[]> {
        return of([
            new FeedItem<Video>(FeedItemEnum.Video, {
                title: `I'm SHOCKED! $11,000 Mac Pro vs $11,000 PC!`,
                previewUrl: 'https://i.ytimg.com/vi/jzT0-t-7-PA/hq720.jpg',
                duration: '14:18',
                author: {
                    name: 'Snazzy Labs',
                    avatarUrl: 'https://yt3.ggpht.com/ytc/AMLnZu_mlv5gj5YX0Zoc5VoadRftqG1-XU4H2Q70PA0HsQ=s68-c-k-c0x00ffffff-no-rj'
                }
            }),
            new FeedItem<Video>(FeedItemEnum.Video, {
                title: 'Front-end dev reacts to amazing CSS-only Codepens',
                previewUrl: 'https://i.ytimg.com/vi/CG__N4SS1Fc/hq720.jpg',
                duration: '11:51',
                author: {
                    name: 'Kevin Powell',
                    avatarUrl: 'https://yt3.ggpht.com/ytc/AMLnZu8t-B0GQmkMnHoxqlEv78fWiS4hTMUe8wELLwYvvA=s68-c-k-c0x00ffffff-no-rj'
                }
            }),
            new FeedItem<Post>(FeedItemEnum.Post, {
                message: 'WE DID IT! WE HIT OUR GOAL OF REMOVING 30,000,000 POUNDS OF TRASH FROM THE OCEAN WITH TEAMSEAS! YOU GUYS ARE INCREDIBLE ❤️',
                imageUrl: 'https://yt3.ggpht.com/VKFcAqMbqCBJT2LuXsUzoIiiMvd0ElGiF6QsjAlrgwaSjvsqTgKrpQs6Xv635WScNV5659XFuxLV9w=s797-c-fcrop64=1,28ce0000d731ffff-nd-v1',
                author: {
                    name: 'MrBeast',
                    avatarUrl: 'https://yt3.ggpht.com/ytc/AMLnZu_NBXmT9J0H9uL94tZm6YxOGdMn0utqYJh1aQlv4A=s76-c-k-c0x00ffffff-no-rj-mo'
                }
            }),
            new FeedItem<ShortVideo>(FeedItemEnum.ShortVideo, {
                title: 'When you argue with your NPC girlfriend pt.4',
                previewUrl: 'https://i.ytimg.com/vi/XH461IQq1ME/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLA3FG6Q0PdFmAI2A29Ec52OtMCgig',
                viewsCount: 258122
            }),
            new FeedItem<Ad>(FeedItemEnum.Ad, {
                title: 'Діліться з близькими: у сімейний план можна додати до 6 особистих облікових записів.',
                imageUrl: 'https://www.gstatic.com/youtube/img/promos/growth/864dc47e45a7a0b06602f73155980de282b939a6d0adc7bdcda231f965bf796a_640x48.png',
                resourceUrl: 'https://youtube.com'
            })
        ]);
    }
}
