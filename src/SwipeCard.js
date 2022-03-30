import TinderCard from 'react-tinder-card';
import ReactPlayer from 'react-player';
import './SwipeCard.css';

function SwipeCard(props){
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction, props);
        if (direction === 'right') {
            props.onSwipeRight(props.videoData.url);
        }
        props.triggerNextStep({
            value: direction,
            trigger: props.nextId
        })
      }
      
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }
    return (
        <TinderCard className="tinderCardContainer" onSwipe={(onSwipe)} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
           <h6 className="text">{props.videoData.title}</h6>
           <ReactPlayer className="videoPlayer" url={props.videoData.url} width="250px" height="100px"/>
        </TinderCard>
    )
}

export default SwipeCard;