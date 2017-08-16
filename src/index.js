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
  if (screen.width > 630) {
  $('.mainMenu a').on('click', function(){
    count += 1;
    if (count < 2) {
      $('.fullscreen')[0].play();
    }
  });
} else {
  $('.mainMenu a').on('click', function(){
    $('.content').css({
    'background': 'hsla(0,0%,100%,.5)'
  }).fadeTo(2000, 1);
  });
}

$('video').bind('ended', function(){
  $('.content').css({
    'background': 'hsla(0,0%,100%,.5)'
  }).fadeTo(2000, 1);
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

});

// document.body.onload = function () {


var
  preloader    = document.getElementById('pagePreloader'),
  video        = document.getElementById('thevideo'),
  perc_display = document.getElementById('loadingStatus'),
  loaded       = 0;


  video.oncanplay = function() {

    // video.load();
    loaded = ( ( (video.buffered.end(0) / video.duration) * 100 ) <<0 );

    // console.log(loaded);
    // console.log(video.buffered.end(0));
    // console.log(video.seekable.end(0));
    perc_display.innerHTML = loaded + '%';

   if ( loaded == 100 ) {
      setTimeout(function(){
        if ( !preloader.classList.contains('done') ) {
          preloader.classList.add('done');
        }
      }, 1000);
    } else {

      setInterval(function(){
          if (loaded == 100) {
            perc_display.innerHTML = loaded + '%';
            clearInterval(this);
            setTimeout(function(){
                if ( !preloader.classList.contains('done') ) {
                preloader.classList.add('done');
                }
              }, 1000);
          }
          else {
            perc_display.innerHTML = loaded++ + '%';
          }
      }, 50);
          
        }

      }
        
  // };

  
// video.addEventListener('loadedmetadata', video_loaded());



