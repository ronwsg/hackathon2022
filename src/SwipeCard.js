import TinderCard from 'react-tinder-card';

function SwipeCard(props){
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction, props);
        props.triggerNextStep({
            value: direction,
            trigger: `${props.step.id}-${direction}`
        })
      }
      
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }
    return (
        <TinderCard onSwipe={(onSwipe)} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
            <img src="/exercise.jpg" alt="exercise"></img>
        </TinderCard>
    )
}

export default SwipeCard;