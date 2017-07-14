import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

// import App from './components/Main';
// import Basic from './components/BasicComponent';
import Basic from './components/Main';


// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Basic />, document.querySelector('#container'));

let count = 0;

$(function(){
var hh = $('nav').height();
var fh = $('footer').height();
var wh = $(window).height();
var ch = wh - hh - fh;
$('section').css('height', ch);
$('section').css('min-height', ch+55);
//
// // $('.blurBack').css('max-height', ch+55);
$('.content').css('max-height', ch);
$('.content').css('height', ch);
});

$(document).ready(function(){
  $('.mainMenu a').on('click', function(){
    count += 1;
    if (count < 2) {
      $('.fullscreen')[0].play();
    }
  });

  $('form').submit(function(){
    var th = $(this);
    $.ajax({
      type: 'POST',
      url: '/php/mail.php',
      data: th.serialize()
    }).done(function(){
      alert('Thank you!');
      setTimeout(function(){
        th.trigger('reset');
      }, 1000);
    });
    return false;
  });

  $('.portfolio .luks').hover(
  	function(){
  		$(this).css('flex-grow', 2);
  	}, function(){
  		$(this).css('flex-grow', 0);
  	});


});

$('video').bind('ended', function(){
  $('.content').css({
    'background': 'hsla(0,0%,100%,.5)'
  }).fadeTo(2000, 1);
});


