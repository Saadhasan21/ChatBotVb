
var data = [
  { message: 'Hi user', sender: 'agent', createdAt: '', },
  { message: 'How are you doing today', sender: 'user', createdAt: '' },
  { message: 'I am good, how about you', sender: 'agent', createdAt: '' },
  { message: 'I am good, thanks for asking', sender: 'user', createdAt: '' },
  { message: 'How can I help you today?', sender: 'agent', createdAt: '' },
]



function getDataFromServer() {
  return data;
}

function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

var messages = getDataFromServer();


for (var i = 0; i < messages.length; i++) {
  messages[i].createdAt = new Date()
  console.log(messages[i].message+" :Created At: " + messages[i].createdAt);
  messages[i].timeAgoStr = timeSince(messages[i].createdAt)
}




function chatMsg() {
  for (var j = 0; j < data.length; j++) {
    if (j % 2 === 0) {
      var divEle = $('<div class = "bot-chat"></div>').text(data[j].message);
      $('.chats').append(divEle);
    }
    else {
      var divEle = $('<div class = "my-chat"></div>').text(data[j].message);
      $('.chats').append(divEle);
    }
  }
}
chatMsg();

$('.send-btn').click(function () {

  if ($('input').val() !== '') {
    var msgObj = { message: $('input').val(), sender: 'user', createdAt: new Date(), }
    msgObj.timeAgoStr = timeSince(msgObj.createdAt)
    data.push(msgObj);

    console.log(data);
    console.log(msgObj.message+" :Created At: " + msgObj.createdAt);
    
    var divEle = $('<div class = "my-chat"></div>').text(msgObj.message);
    $('.chats').append(divEle);
    
    $('input').val('');

  }
})

