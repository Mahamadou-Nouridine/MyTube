import React from 'react';
import Video from './Video';

const VideoLists = ({videos, selectVideo}) => {

    return (
        <>
            <div className="col s12 m4" style={{ overflow: "scroll", height: "660px" }}>
                {videos.map(item => <Video key={item.etag} selectVideo = {selectVideo} video = {item} />)}
            </div>
        </>
    );
};

export default VideoLists;