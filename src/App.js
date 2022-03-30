// import logo from './logo.svg';
import './App.css';
// import 'react-chatbot-kit/build/main.css'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import SwipeCard from './SwipeCard';
import ResultPlaylist from './ResultPlaylist';
import Review from './Review';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const videoData = {
  bh: [
    {
      url: "https://www.youtube.com/watch?v=KMM93NiLAqM",
      title: "Relaxing Music",
    },
    {
      url: "https://www.youtube.com/watch?v=sTANio_2E0Q",
      title: "Stretch/Yoga for stress & anxiety",
    },
    {
      url: "https://www.youtube.com/watch?v=8TuRYV71Rgo",
      title: "10 Minute Yoga",
    },
    {
      url: "https://www.youtube.com/watch?v=hJbRpHZr_d0",
      title: "Yoga For Anxiety and Stress",
    },
    {
      url: "https://www.youtube.com/watch?v=z6X5oEIg6Ak",
      title: "Meditation For Stress",
    }
  ]
}
const onSwipeRight = (videoUrl) => {
  selectedVideos.push(videoUrl);
}

const selectedVideos = [];

function App() {

  const steps = [
      {
        id: '1',
        message: 'What is your name?',
        trigger: 'name',
      },
      {
        id: 'name',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'Hi {previousValue}! What is your gender?',
        trigger: 'gender',
      },
      {
        id: 'gender',
        options: [
          { value: 'male', label: 'Male', trigger: '5' },
          { value: 'female', label: 'Female', trigger: '5' },
        ],
      },
      {
        id: '5',
        message: 'How old are you?',
        trigger: 'age',
      },
      {
        id: 'age',
        user: true,
        trigger: '7',
        validator: (value) => {
          if (isNaN(value)) {
            return 'value must be a number';
          } else if (value < 0) {
            return 'value must be positive';
          } else if (value > 120) {
            return `${value}? Come on!`;
          }
  
          return true;
        },
      },
      {
        id: '7',
        message: 'Great! Check out your summary',
        trigger: 'review',
      },
      {
        id: 'review',
        component: <Review />,
        asMessage: true,
        trigger: 'update',
      },
      {
        id: 'update',
        message: 'Would you like to update some field?',
        trigger: 'update-question',
      },
      {
        id: 'update-question',
        options: [
          { value: 'yes', label: 'Yes', trigger: 'update-yes' },
          { value: 'no', label: 'No', trigger: 'end-message' },
        ],
      },
      {
        id: 'update-yes',
        message: 'What field would you like to update?',
        trigger: 'update-fields',
      },
      {
        id: 'update-fields',
        options: [
          { value: 'name', label: 'Name', trigger: 'update-name' },
          { value: 'gender', label: 'Gender', trigger: 'update-gender' },
          { value: 'age', label: 'Age', trigger: 'update-age' },
        ],
      },
      {
        id: 'update-name',
        update: 'name',
        trigger: '7',
      },
      {
        id: 'update-gender',
        update: 'gender',
        trigger: '7',
      },
      {
        id: 'update-age',
        update: 'age',
        trigger: '7',
      },
      {
        id: 'end-message',
        message: 'Thanks! Your data was submitted successfully!',
        trigger: 'choose-exercise-message',
      },
      {
        id: 'choose-exercise-message',
        message: 'Please select your playlist. Swipe left to reject. Swipe right to accept.',
        trigger: 'choose-exercise-1',
      },
      {
        id: 'choose-exercise-1',
        waitAction: true,
        component: (<SwipeCard videoData={videoData.bh[0]} onSwipeRight={onSwipeRight} nextId="choose-exercise-2"/>), 
      },
      {
        id: 'choose-exercise-2',
        waitAction: true,
        component: (<SwipeCard videoData={videoData.bh[1]} onSwipeRight={onSwipeRight} nextId="choose-exercise-3"/>), 
      },
      {
        id: 'choose-exercise-3',
        waitAction: true,
        component: (<SwipeCard videoData={videoData.bh[2]} onSwipeRight={onSwipeRight} nextId="choose-exercise-4"/>), 
      },
      {
        id: 'choose-exercise-4',
        waitAction: true,
        component: (<SwipeCard videoData={videoData.bh[3]} onSwipeRight={onSwipeRight} nextId="choose-exercise-5"/>), 
      },
      {
        id: 'choose-exercise-5',
        waitAction: true,
        component: (<SwipeCard videoData={videoData.bh[4]} onSwipeRight={onSwipeRight} nextId="show-playlist"/>), 
      },
      {
        id: 'show-playlist',
        waitAction: true,
        component: (<ResultPlaylist selectedVideos={selectedVideos} />), 
      },
  ];


  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <ChatBot steps={steps} botAvatar="/dario1.png" customDelay="70" headerTitle="Dariothon Chatbot" speechSynthesis={{ enable: true, lang: 'en' }}/>
        </ThemeProvider>
      </header>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
