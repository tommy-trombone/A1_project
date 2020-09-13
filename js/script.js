// event handlers for app projects
$(document).ready(function () {
  // Pokedex app event handler
  $('#pokedex-app').on('click', () => {
    var targetSelector = $(this).attr('data-target');
    $('#workModal .modal-title').text('Pokedex');
    $('#workModal #img').attr('src', 'img/pokedex.png');
    $('#workModal .modal-text').text(
      'A web application with HTML, CSS, JQuery, and JavaScript that loads data from an external API and enables the viewing of a pokemon of choice in an info modal.'
    );
    $('#workModal #button-code').attr(
      'href',
      'https://github.com/fratzio/pokedex_jquery'
    );
    $('#workModal #button-demo').attr(
      'href',
      'https://fratzio.github.io/pokedex_jquery/'
    );
    $(targetSelector).modal('show');
  });
  // Movie app event handler
  $('#movie-app').on('click', () => {
    var targetSelector = $(this).attr('data-target');
    $('#workModal .modal-title').text('Movie app');
    $('#workModal #img').attr('src', 'img/movie_app.png');
    $('#workModal .modal-text').text(
      'A REST API web application using MERN and Redux providing customers users with access to information about different movies, directors, and genres. Users will be able to sign up, update their personal information, and create a list of their favorite movies. Implementing the design pattern (MVC).'
    );
    $('#workModal #button-code').attr(
      'href',
      'https://github.com/fratzio/movie_api'
    );
    $('#workModal #button-demo').attr('href', 'https://vfa.herokuapp.com/');
    $(targetSelector).modal('show');
  });
  // to-do event handler
  $('#quiz-app').on('click', () => {
    var targetSelector = $(this).attr('data-target');
    $('#workModal .modal-title').text('Quiz app');
    $('#workModal #img').attr('src', 'img/quiz_app.png');
    $('#workModal .modal-text').text(
      'A basic quiz app using Angular and TypeScript'
    );
    $('#workModal #button-code').attr(
      'href',
      'https://github.com/fratzio/quiz_app'
    );
    $('#workModal #button-demo').attr(
      'href',
      'https://fratzio.github.io/quiz_app/'
    );
    $(targetSelector).modal('show');
  });
  // to-do event handler
  $('#to-do').on('click', () => {
    var targetSelector = $(this).attr('data-target');
    $('#workModal .modal-title').text('To-do');
    $('#workModal #img').attr('src', 'img/to_do.png');
    $('#workModal .modal-text').text(
      'A basic To-Do list application using Vue.js and implementing the design pattern (MVVM) and Material Design via Vue Material.'
    );
    $('#workModal #button-code').attr(
      'href',
      'https://github.com/fratzio/to-do/'
    );
    $('#workModal #button-demo').attr(
      'href',
      'https://fratzio.github.io/to-do'
    );
    $(targetSelector).modal('show');
  });
  // meetup event handler
  $('#meetup').on('click', () => {
    var targetSelector = $(this).attr('data-target');
    $('#workModal .modal-title').text('Meet up');
    $('#workModal #img').attr('src', 'img/meetup.png');
    $('#workModal .modal-text').text(
      'A serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Meetup API to fetch upcoming events for a selected city. Leveraging rechart library graphs for visualistion fo data.'
    );
    $('#workModal #button-code').attr(
      'href',
      'https://github.com/fratzio/meetup/'
    );
    $('#workModal #button-demo').attr(
      'href',
      'https://fratzio.github.io/meetup'
    );
    $(targetSelector).modal('show');
  });
  // chat app event handler
  $('#chat-app').on('click', () => {
    var targetSelector = $(this).attr('data-target');
    $('#workModal .modal-title').text('Chat App');
    $('#workModal #img').attr('src', 'img/chat_app.png');
    $('#workModal .modal-text').text(
      'The Chat app is a React-Native Chat app leveraging the Gifted Chat library. It features offline-storage, cloud-based file and message storage in Firebase, offline viewing of chat messages and the ability to send your location or a photo off your mobile.'
    );
    $('#workModal #button-code').attr(
      'href',
      'https://github.com/fratzio/chatApp'
    );
    $('#workModal #button-demo').attr(
      'href',
      'https://github.com/fratzio/chatApp/blob/master/README.md'
    );
    $(targetSelector).modal('show');
  });
});
