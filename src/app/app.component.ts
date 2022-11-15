import { Component, OnInit } from '@angular/core';
import * as dashjs from 'dashjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit(): void {


    var protData = {
      "com.widevine.alpha": {
          "serverURL": "https://drm-widevine-licensing.axtest.net/AcquireLicense",
          "httpRequestHeaders": {
              "X-AxDRM-Message": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiYjMzNjRlYjUtNTFmNi00YWUzLThjOTgtMzNjZWQ1ZTMxYzc4IiwibWVzc2FnZSI6eyJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsImZpcnN0X3BsYXlfZXhwaXJhdGlvbiI6NjAsInBsYXlyZWFkeSI6eyJyZWFsX3RpbWVfZXhwaXJhdGlvbiI6dHJ1ZX0sImtleXMiOlt7ImlkIjoiOWViNDA1MGQtZTQ0Yi00ODAyLTkzMmUtMjdkNzUwODNlMjY2IiwiZW5jcnlwdGVkX2tleSI6ImxLM09qSExZVzI0Y3Iya3RSNzRmbnc9PSJ9XX19.FAbIiPxX8BHi9RwfzD7Yn-wugU19ghrkBFKsaCPrZmU"
          },
          priority: 0
      }
  };
  let video,
      player;

      const url = "https://media.axprod.net/TestVectors/v7-MultiDRM-SingleKey/Manifest_1080p.mpd";

  video = document.querySelector("video");
  player = dashjs.MediaPlayer().create();
  player.initialize(video!, url, true);
  player.setProtectionData(protData);


    // var url2 = "https://livesim.dashif.org/livesim/chunkdur_1/ato_7/testpic4_8s/Manifest.mpd";
    //             var player2 = dashjs.MediaPlayer().create();
    //             player2.initialize(document.querySelector("#videoPlayer") as HTMLElement, url, true);


  }
  title = 'dashtestapp1';
}
