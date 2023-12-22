import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import { ActionProvider } from './ActionProvider';
import ChatOption from './components/ChatOption/ChatOption';
import DatesOption from './components/Carousel/DatesOption';

export const config = {

  botName:"ChatAPP",

  actionProvider: new ActionProvider(),
  initialMessages: [ 
    createChatBotMessage('Hello, Welcome to Student Info System', { delay: 3000, widget:'chatOption'}),
  ],
  

  widgets:[{
    widgetName:"chatOption",
    widgetFunc: (props) => <ChatOption {...props}/>
  },
  {
    widgetName:"gotIt",
    widgetFunc: (props) => <DatesOption {...props}/>,
  },
],
};

export default config;