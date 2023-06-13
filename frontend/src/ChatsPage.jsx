/* eslint-disable react/prop-types */
import React from 'react';
import { PrettyChatWindow} from 'react-chat-engine-pretty';

const ChatsPage = (props) => {

    
    return (
        <div style={{height: '100vh'}}>
            <PrettyChatWindow 
            projectId='65d09dbc-6e04-4019-8a75-7f6b1881efc2'
            username={props.user.username} 
            secret={props.user.secret} 
            style={{ height: '100%' }} 
            /> 
        </div>
    );
};

export default ChatsPage;