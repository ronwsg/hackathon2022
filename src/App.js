// import logo from './logo.svg';
import './App.css';
// import 'react-chatbot-kit/build/main.css'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import SwipeCard from './SwipeCard';
import ResultPlaylist from './ResultPlaylist';
import Review from './Review';
import Video from './Video';

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
        message: 'What is your full name?',
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
        trigger: '6',
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
        id: '6',
        message: 'What is your email?',
        trigger: 'email',
      },
      {
        id: 'email',
        user: true,
        trigger: '8',
        validator: (value) => {
          if (!value.includes('@')) {
            return 'Email must contain @'
          }
          return true;
        }
      },
      {
        id: '8',
        message: 'What is your phone number',
        trigger: 'phone',
      },
      {
        id: 'phone',
        user: true,
        trigger: '7',
        validator: (value) => {
          if (isNaN(value)) {
            return 'Phone number is require'
          }
          return true;
        }
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
          { value: 'name', label: 'Update your first name', trigger: 'update-name' },
          { value: 'gender', label: 'Update your gender', trigger: 'update-gender' },
          { value: 'age', label: 'Update your age', trigger: 'update-age' },
          { value: 'phone', label: 'Update your phone number', trigger: 'update-phone' },
          { value: 'email', label: 'Update your email', trigger: 'update-email' },
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
        id: 'update-phone',
        update: 'phone',
        trigger: '7',
      },
      {
        id: 'update-email',
        update: 'email',
        trigger: '7',
      },
      {
        id: 'end-message',
        message: 'Thanks! Your data was submitted successfully!',
        trigger: 'check-eligibility',
      },
      {
        id: 'check-eligibility',
        message: "We have found you in our list! But it appears your name spelling is written differently...",
        trigger: 'update-eligibility-fields',
      },
      {
        id: 'update-eligibility-fields',
        message: 'Please update your name',
        trigger: 'eligible-name',
      },
      {
        id: 'eligible-name',
        user: true,
        trigger:'success-eligibility'
      },
      {
        id: 'success-eligibility',
        message: "Thanks! Your data was submitted successfully!",
        trigger: 'feel-qty-1',
      },
      {
        id: 'feel-qty-1',
        message: "Here at Dario, we help people with their chronic issues.How do you feel? Talk to us :)",
        trigger: 'feel-user-answer-1',
      },
      {
        id: 'feel-user-answer-1',
        user: true,
        trigger: 'feel-chatbot-answer-1',
      },
      {
        id: 'feel-chatbot-answer-1',
        message: "Ouch...and is this because you have any body pain?",
        trigger: 'feel-user-answer-2'
      },
      {
        id: 'feel-user-answer-2',
        user: true,
        trigger: 'choose-exercise-message-2',
      },
      {
        id: 'choose-exercise-message-2',
        message: `We have lot of experience to help people with stress issues.
        I will suggest to you some videos:
        swipe "right"...it's in your playlist!
        swipe "left" it won't be there!
        At the end, you will get playlist with selected videos.`,
        trigger: 'choose-exercise-1',
      },
      {
        id: 'choose-exercise-1',
        waitAction: true,
        component: (<SwipeCard videoData={videoData.bh[0]} onSwipeRight={onSwipeRight} nextId="choose-exercise-1-result"/>), 
      },
      {
        id: 'choose-exercise-1-result',
        message: 'You swiped {previousValue}',
        trigger:'choose-exercise-2'
      },
      {
        id: 'choose-exercise-2',
        waitAction: true,
        component: (<SwipeCard videoData={videoData.bh[1]} onSwipeRight={onSwipeRight} nextId="choose-exercise-2-result"/>), 
      },
      {
        id: 'choose-exercise-2-result',
        message: 'You swiped {previousValue}',
        trigger:'choose-exercise-3'
      },
      {
        id: 'choose-exercise-3',
        waitAction: true,
        component: (<SwipeCard videoData={videoData.bh[2]} onSwipeRight={onSwipeRight} nextId="choose-exercise-3-result"/>), 
      },
      {
        id: 'choose-exercise-3-result',
        message: 'You swiped {previousValue}',
        end: true
      },
      // {
      //   id: 'video-options',
      //   message: 'Choose video category',
      //   trigger: 'video-categories',
      // },
      // {
      //   id: 'video-categories',
      //   options: [
      //     // { value: 'msk', label: 'MSK', trigger: 'msk-video' },
      //     { value: 'bh', label: 'BH', trigger: 'bh-video' },
      //     { value: 'metabolic', label: 'Metabolic', trigger: 'metabolic-video' },
      //   ]
      // },
      // {
      //   id: 'bh-video',
      //   component: (<Video url="https://www.tiktok.com/@physicaltherapylife/video/6977895036285373697"></Video>),
      //   trigger:'bh-video-1'
      //   // end: true
      // },
      // {
      //   id: 'metabolic-video',
      //   component: (<Video url="https://www.tiktok.com/@kaelimaee/video/6988657706668428550?is_copy_url=1&is_from_webapp=v1&q=diabetic&t=1648552583509"></Video>),
      //   end: true
      // },
      // {
      //   id: 'bh-video-1',
      //   message: 'More BH videos ?',
      //   trigger:'more-video'
      //   // end: true
      // },
      // {
      //   id: 'more-video',
      //   options: [
      //     { value: 'yes', label: 'YES', trigger: 'bh-video-2' },
      //     { value: 'no', label: 'NO', trigger: 'video-categories' },
      //   ]
      // },
      // {
      //   id: 'bh-video-2',
      //   component: (<Video url="https://www.tiktok.com/music/original-sound-7065207889099131649"></Video>)
      // },
      // {
      //   id: 'choose-exercise-5',
      //   waitAction: true,
      //   component: (<SwipeCard videoData={videoData.bh[4]} onSwipeRight={onSwipeRight} nextId="playlist-message"/>), 
      // },
      // {
      //   id: 'playlist-message',
      //   message: 'Here is your playlist',
      //   trigger: 'show-playlist',
      // },
      // {
      //   id: 'show-playlist',
      //   waitAction: true,
      //   component: (<ResultPlaylist selectedVideos={selectedVideos} />), 
      // },
  ];


  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <ChatBot
            steps={steps} botAvatar="/dario1.png" customDelay="70" headerTitle="Dariothon Chatbot" speechSynthesis={{ enable: true, lang: 'en' }}
            width="100vw" height="100vh"
            style={{width: '100%', padding: '0px',margin: '0px', position: 'relative'}}
          />
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
