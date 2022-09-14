import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AdComponent, PostComponent, ShortVideoComponent, VideoComponent } from './components';

@NgModule({
    declarations: [
        AppComponent,
        VideoComponent,
        AdComponent,
        ShortVideoComponent,
        PostComponent
    ],
    imports: [
        BrowserModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
