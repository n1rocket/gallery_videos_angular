import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { VideoComponent } from './components/video/video.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { VideoChallengeComponent } from './components/video-challenge/video-challenge.component';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { AudioCardComponent } from './components/audio-card/audio-card.component';
import { RouletteComponent } from './components/roulette/roulette.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, VideoComponent, VideoChallengeComponent, CardComponent, PhotoCardComponent, VideoCardComponent, AudioCardComponent, RouletteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    YouTubePlayerModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
