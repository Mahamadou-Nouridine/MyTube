import React from 'react';

const PlayingVid = ({video}) => {
    if (!video) {
        return <div className="col s12 m8">
           <h1>Entrez un mot clé...</h1>
           <br></br>
        </div>;
      }
    return (
        <>
            <div className="col s12 m8">
                <iframe style={{ width: '100%', height: "500px" }} src={`https://www.youtube.com/embed/${video.id.videoId}`} title="YouTube video player" allowFullScreen></iframe>
                <div className="z-depth-2" style={{ padding: 10, maxHeight: 185 }}>
                    <h5>{video.snippet.title}</h5>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        </>
    );
};

export default PlayingVid;