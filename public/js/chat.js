import * as date from './utils/date.js';

const clientIo = io('http://localhost:1004/chat'); 

const chatBox = document.getElementById('chatBox');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

//******* method *******
const printMessage = (obj) =>{
    // obj.sendTime;
    // obj.message;
    // obj.socketId;
}


//******* event *******
sendBtn.addEventListener('click', async () => {
    let sendTime = await date.getCurrentTime().then(result => { return result.currentTime });
    let data = {
        "operation" : "sendMessage",
        "message" : chatInput.value,
        "sendTime" : sendTime
    }
    console.log('==== 요청 ====');
    console.log(data);
    clientIo.emit('chat', data)
})

//****** receive ******
clientIo.on('chat', async result => {
    console.log('==== 응답 ====');
    console.log(result)

    switch(result.operation){
        case 'receiveMessage':
            printMessage(result);
            break; 
    }

});