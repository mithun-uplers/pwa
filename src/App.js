import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import axios from 'axios';
//import { useState, useEffect } from 'react';
const $ = window.jQuery;

function App() {
  
  //const [video_list, setVideo_list] = useState([]);

  // useEffect(() => {
  //   //loadAboutData();
  //   //document.querySelector('.plybtn').addEventListener("click", togglePlay);

  //   axios
  //     .get('https://live.screendollars.com/sd_api/pwa/?api_token=testing')
  //     .then((res) => {
  //       setVideo_list(res.data);
  //       //setFilmDetailsDataLoaded(true);
  //     })
  //     .catch((err) => console.log(err));
   
  // }, []);
/*

  const initVideoElement = (video) => {
    video.playsinline = true;
    video.muted = false;
    video.preload = 'auto'; //but do not set autoplay, because it deletes preload

    //loadedmetadata is wrong because if we use it then we get endless loop
    video.onplaying = function(e)
    {
        output.innerHTML = 'Current video source index: ' + nextActiveVideo;

        //select next index. If is equal vidSources.length then it is 0
        nextActiveVideo = ++nextActiveVideo % vidSources.length;

        //replace the video elements against each other:
        if(this.inx == 0)
            nextVideo = videoObjects[1];
        else
            nextVideo = videoObjects[0];

        nextVideo.src = vidSources[nextActiveVideo];
        nextVideo.pause();
    };

    video.onended = function(e) {
        this.style.display = 'none';
        nextVideo.style.display = 'block';
        nextVideo.play();
    };

    const togglePlay = () => {
      if (video.paused || video.ended) {
        video.play();
        this.style.display="none"
      } else {
        //video.pause();
        this.style.display="none"
      }
    }

    const btn = document.getElementById('plybtn');

      console.log(btn); // null

      // ✅ Check if element exists before calling addEventListener()
      if (btn) {
        // Not called
        btn.addEventListener('click', () => {
          togglePlay() 
        });
      }

    //document.querySelector('.plybtn').addEventListener("click", togglePlay);

    
}

 
  var videoContainer = document.getElementById('videoContainer'),
    output = document.getElementById('output'),
    nextVideo,
    videoObjects =
    [
        document.createElement('video'),
        document.createElement('video')
    ],
    vidSources = [
      "https://live.screendollars.com/wp-content/uploads/2023/05/SampleVideo_1280x720_1mb.mp4", 
      "https://live.screendollars.com/wp-content/uploads/2023/05/SampleVideo_1280x720_1mb.mp4", 
      "https://live.screendollars.com/wp-content/uploads/2023/05/SampleVideo_1280x720_1mb.mp4"
    ],
   
    //random starting point
    nextActiveVideo = Math.floor((Math.random() * vidSources.length));
    videoObjects[0].inx = 0; //set index
    videoObjects[1].inx = 1;
    initVideoElement(videoObjects[0]);
    initVideoElement(videoObjects[1]);
    videoObjects[0].autoplay = true;
    videoObjects[0].src = vidSources[nextActiveVideo];
    //videoContainer.appendChild(videoObjects[0]);
    videoObjects[1].style.display = 'none';
    //videoContainer.appendChild(videoObjects[1]);


*/

  return (
    <div className="videoplay">
		<video controls autoplay loop preload="auto" >
      
        {/* {video_list.map((item, index) => {
          return ( 
		        <source src={item} type="video/mp4" /> */}
		        <source src='https://live.screendollars.com/wp-content/uploads/2023/06/POSTER-2023.mp4' type="video/mp4" />
        {/* );
    })} */}
    
		</video>
	</div>
  // <>
  //     <b id="output" ></b>
	//     <div id="videoContainer" ></div>
	//     <div><button className="plybtn" id="plybtn">▶</button></div>
  // </>
  );
}

export default App;
