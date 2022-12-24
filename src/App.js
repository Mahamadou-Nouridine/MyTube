import { useState } from "react";
import PlayingVid from "./Components/PlayingVid";
import SearchBar from "./Components/SearchBar";
import VideoLists from "./Components/VideoLists";
import Youtube from './Components/Youtube'


function App() {
  const [videos, setVideos] = useState([])
  const [selected, setSelected] = useState(null)


  const selectVideo = (video) => {
    setSelected(video)
  }

  const submit = async (keyword) => {
    const response = await Youtube.get("/search", {
      params: {
        q: keyword
      }
    })
    setVideos(response.data.items)
    console.log(response.data);
  }

  return (
    <div className="container" style={{ maxWidth: 1000 }}>
      <SearchBar submit={submit} />
      <div className="row" style={{ padding: 10, border: "grey 1px solid", height: "" }}>
        <PlayingVid video={selected} />
        <VideoLists videos={videos} selectVideo={selectVideo} />
      </div>
    </div>
  );
}

export default App;
