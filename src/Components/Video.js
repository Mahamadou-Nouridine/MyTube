import React from 'react';

const Video = ({video, selectVideo}) => {
    return (
        <>
            <div onClick = {() => selectVideo(video)} style = {{display : "flex", padding: 5}}>
              <div >
                <img width = '100' src = {video.snippet.thumbnails.medium.url ? video.snippet.thumbnails.medium.url: video.snippet.thumbnails.default.url} alt={video.snippet.title} />
              </div>
              <div >
                <h6 style={{paddingLeft: 5}}>{video.snippet.title}</h6>
              </div>
            </div>
            <div className="divider"></div>
        </>
    );
};

export default Video;