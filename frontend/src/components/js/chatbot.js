/*import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

// all available props
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

const steps = [
    {
        id: '1',
        message: 'What is your name?',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'Hi {previousValue}, nice to meet you!',
        //end: true,
        trigger: '4',
      },
      {
          id: '4',
          message: 'Do you need some help?',
          trigger: '5',
      },
      {
          id: '5',
          options: [
               { value: 1, label: 'Yes', trigger: '6' },
               { value: 2, label: 'No', trigger: '7'}
          ],
      },
      {
          id: '7',
          message: 'Okay,Bye',
          end: true,
      },
      {
          id: '6',
          message: 'Great, I am very glad to help you',
         // end: true,
          trigger: '8',
      },
      {
        id: '8',
        message: 'What do you want to know? Select your option',
       // message: 'Select your option',
        //end: true,
        trigger: '9',
      },
      {
        id: '9',
        options: [
          {value: 1, label:'Know about packages',trigger: '10'},
          {value: 2, label:'Know about services', trigger: '11' },
        ],
      },
      {
        id: '10',
        message: 'Okay, I will redirect you to packages page',
        end: true
      },
      {
        id: '11',
        message: 'Okay',
        end: true,
      }
];

const ThemedExample = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} />;
  </ThemeProvider>
);

export default ThemedExample;*/

import React from 'react';
import { Component } from 'react';

export default class ThemedExample extends Component{
    render(){
      return null;
    }
    }