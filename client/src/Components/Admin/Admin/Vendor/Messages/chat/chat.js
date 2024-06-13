import React,{useState, useEffect} from 'react';
import './chat.css'
import $ from 'jquery'; // Import jQuery if not already imported
function Chat({ setEditModal }){
  console.log("jjjlfk")
  useEffect(() => {
    const updateScrollbar = () => {
      const messagesContent = document.querySelector('.messages-content');
      messagesContent.scrollTop = messagesContent.scrollHeight;
    };

    const setDate = () => {
      const messages = document.querySelectorAll('.message');
      const lastMessage = messages[messages.length - 1];
      const timestamp = document.createElement('div');
      const now = new Date();
      const time = `${now.getHours()}:${(now.getMinutes() < 10 ? '0' : '') + now.getMinutes()}`;
      timestamp.classList.add('timestamp');
      timestamp.textContent = time;
      lastMessage.appendChild(timestamp);
    };

    const insertMessage = () => {
      const messageInput = document.querySelector('.message-input');
      const messageContent = messageInput.value.trim();
      if (!messageContent) return;
      
      const messagesContainer = document.querySelector('.messages-content');
      const message = document.createElement('div');
      message.classList.add('message', 'message-personal');
      message.textContent = messageContent;
      messagesContainer.appendChild(message);

      setDate();
      messageInput.value = '';
      updateScrollbar();

      setTimeout(() => {
        fakeMessage();
      }, 1000 + (Math.random() * 20) * 100);
    };

    const fakeMessage = () => {
      const messageInput = document.querySelector('.message-input');
      if (messageInput.value.trim() !== '') return;

      const messagesContainer = document.querySelector('.messages-content');
      const message = document.createElement('div');
      message.classList.add('message', 'new');
      message.textContent = Fake[Math.floor(Math.random() * Fake.length)];
      messagesContainer.appendChild(message);

      setDate();
      updateScrollbar();
    };

    const handleSendMessage = () => {
      insertMessage();
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        insertMessage();
      }
    };

    const handleButtonClick = () => {
      const itemsSpan = document.querySelector('.menu .items span');
      const button = document.querySelector('.menu .button');
      itemsSpan.classList.toggle('active');
      button.classList.toggle('active');
    };

    const messagesContent = document.querySelector('.messages-content');
    const Fake = [
      'Hi there, I\'m Jesse and you?',
      'Nice to meet you',
      'How are you?',
      'Not too bad, thanks',
      'What do you do?',
      'That\'s awesome',
      'Codepen is a nice place to stay',
      'I think you\'re a nice person',
      'Why do you think that?',
      'Can you explain?',
      'Anyway I\'ve gotta go now',
      'It was a pleasure chat with you',
      'Time to make a new codepen',
      'Bye',
      ':)'
    ];

    messagesContent.scrollTop = messagesContent.scrollHeight;

    document.querySelector('.button').addEventListener('click', handleButtonClick);
    document.querySelector('.message-submit').addEventListener('click', handleSendMessage);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.querySelector('.button').removeEventListener('click', handleButtonClick);
      document.querySelector('.message-submit').removeEventListener('click', handleSendMessage);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <section className="avenue-messenger">
      <div className="menu">
        <div className="items">
          <span>
            <a href="#" title="Minimize">&mdash;</a><br />
            <a href="#" title="End Chat">&#10005;</a>
          </span>
        </div>
        <div className="button">...</div>
      </div>
      <div className="agent-face">
        <div className="half">
          <img className="agent circle" src="http://askavenue.com/img/17.jpg" alt="Jesse Tino" />
        </div>
      </div>
      <div className="chat">
        <div className="chat-title">
          <h1>Jesse Tino</h1>
          <h2>RE/MAX</h2>
        </div>
        <div className="messages">
          <div className="messages-content"></div>
        </div>
        <div className="message-box">
          <textarea type="text" className="message-input" placeholder="Type message..."></textarea>
          <button type="submit" className="message-submit">Send</button>
        </div>
      </div>
    </section>
  );
}


// var $messages = $('.messages-content'),
//     d, h, m,
//     i = 0;

// $(window).load(function() {
//   $messages.mCustomScrollbar();
//   setTimeout(function() {
//     fakeMessage();
//   }, 100);
// });


// function updateScrollbar() {
//   $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
//     scrollInertia: 10,
//     timeout: 0
//   });
// }

// function setDate(){
//   d = new Date()
//   if (m != d.getMinutes()) {
//     m = d.getMinutes();
//     $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
//     $('<div class="checkmark-sent-delivered">&check;</div>').appendTo($('.message:last'));
//     $('<div class="checkmark-read">&check;</div>').appendTo($('.message:last'));
//   }
// }

// function insertMessage() {
//   msg = $('.message-input').val();
//   if ($.trim(msg) == '') {
//     return false;
//   }
//   $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
//   setDate();
//   $('.message-input').val(null);
//   updateScrollbar();
//   setTimeout(function() {
//     fakeMessage();
//   }, 1000 + (Math.random() * 20) * 100);
// }

// $('.message-submit').click(function() {
//   insertMessage();
// });

// $(window).on('keydown', function(e) {
//   if (e.which == 13) {
//     insertMessage();
//     return false;
//   }
// })

// var Fake = [
//   'Hi there, I\'m Jesse and you?',
//   'Nice to meet you',
//   'How are you?',
//   'Not too bad, thanks',
//   'What do you do?',
//   'That\'s awesome',
//   'Codepen is a nice place to stay',
//   'I think you\'re a nice person',
//   'Why do you think that?',
//   'Can you explain?',
//   'Anyway I\'ve gotta go now',
//   'It was a pleasure chat with you',
//   'Time to make a new codepen',
//   'Bye',
//   ':)'
// ]

// function fakeMessage() {
//   if ($('.message-input').val() != '') {
//     return false;
//   }
//   $('<div class="message loading new"><figure class="avatar"><img src="http://askavenue.com/img/17.jpg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
//   updateScrollbar();

//   setTimeout(function() {
//     $('.message.loading').remove();
//     $('<div class="message new"><figure class="avatar"><img src="http://askavenue.com/img/17.jpg" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
//     setDate();
//     updateScrollbar();
//     i++;
//   }, 1000 + (Math.random() * 20) * 100);

// }

// $('.button').click(function(){
//   $('.menu .items span').toggleClass('active');
//    $('.menu .button').toggleClass('active');
// });

// export default Chat;