import ReactPlayer from "react-player";
import "./ResultPlaylist.css";

function ResultPlaylist(props) {
  const playlist = <div>
    {props.selectedVideos.map((url, index) => {
      return <div className="videoContainer" ><ReactPlayer key={index} url={url} width="250px" height="100px"/></div>
    })}
  </div>;

  return (
    <div className="tinderCardContainer">
      {playlist}
    </div>
  );
}

export default ResultPlaylist;
