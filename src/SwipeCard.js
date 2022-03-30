import TinderCard from 'react-tinder-card';
import ReactPlayer from 'react-player';
import './SwipeCard.css';

function SwipeCard(props){
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction, props);
        if (direction === 'right') {
            props.onSwipeRight(props.url);
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
        <TinderCard onSwipe={(onSwipe)} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
           <ReactPlayer className="videoPlayer" url={props.url} width="250px" height="100px"/>
           <h5 className="text">some random text</h5>
        </TinderCard>
    )
}

export default SwipeCard;