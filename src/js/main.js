;(function(){

  angular.module('Front-Rails', ['ngRoute'], function($routeProvider){
  $routeProvider
    .when('/', {
      redirectTo: "top-questions"
    })
    .when('/top-questions', {
      templateUrl: 'partials/top-questions.html',  // controller: 'questionList'
    })

    .when('/question/:id', {
      templateUrl: 'partials/question.html',  // controller: 'questionPage'
      controller: 'vote',
    })
  }) //END $routeProvider

  .controller('questionList', function($scope, $routeParams, $http){  //CONTROLLER FOR POPULATING TOP QUESTIONS
    $http.get('https://stackundertow.herokuapp.com/questions')
      .then(function(response){
        $scope.questions = response.data;
      })
  })//CONTROLLER FOR POPULATING TOP QUESTIONS

  .controller("SignupController", function($scope, $http){ //CONTROLLER FOR SIGNUP
    $scope.user = {
      name: '',
      email: '',
      password: ''
    }
    $scope.submit = function() {
      $http.post('https://stackundertow.herokuapp.com/users', $scope.user);
    };
    $scope.user = {
      name: '',
      email: '',
      password: ''
    };
  })//CONTROLLER FOR SIGNUP

  .controller("questionAsker", function($scope, $http, $rootScope){ //CONTROLLER FOR submitting answer

    $rootScope.submitQuestion = function(puzzle, detail) {
      $rootScope.question = {
        query: puzzle,
        description: detail,
        user_id: $rootScope.id
      }
      $http.post('https://stackundertow.herokuapp.com/questions', $rootScope.question)
        .then(function(){
          $scope.question = {
            query: '',
            description: ''
          }
        })
    };
  })//CONTROLLER FOR submitting question

  .controller("OfferAnswer", function($scope, $http, $routeParams, $rootScope){ //CONTROLLER FOR submitting answer
      var id = parseInt($routeParams.id, 10);
      var username = $routeParams.username;
      $scope.username = $routeParams.username;
      $scope.id = $routeParams.id;
      $http.get('https://stackundertow.herokuapp.com/questions/' + id + "/")
        .then(function(response){
          $rootScope.question = response.data;
          $rootScope.query = response.data.query;
          $rootScope.description = response.data.description;
      })


    $rootScope.submitAnswer = function(deets) {
      $rootScope.answers =  {
        user_id: $rootScope.id,
        question_id: id,
        description: deets
      }
      $http.post('https://stackundertow.herokuapp.com/answers', $rootScope.answers)
      .then(function(){
        $scope.answers = {
          description: ''
        }
      })
    };
  })//CONTROLLER FOR submitting answer

  .controller('loginCtrl', function($scope, $http, $window, $rootScope){//CONTROLLER FOR LOGIN
    $scope.user = {
      email: '',
      password: ''
    }
    $scope.submit= function(){
      $http.post('https://stackundertow.herokuapp.com/sessions', $scope.user)
        .success(function (data, status, headers, config) {
          $window.sessionStorage.auth_token = data.auth_token;
          $scope.user = {
            email: '',
            password: ''
          }
          $rootScope.name = data.name;
          $rootScope.id = data.id;
          $rootScope.token = data.auth_token;
        })
      .error(function (data, status, headers, config) {
        alert("Error: Invalid user or password");
      });
    }
  })//CONTROLLER FOR LOGIN

  .controller('vote', function($scope, $http) {
    var id = $scope.answer_id;

    $scope.upVote = function() {
      // console.log("UP VOTE");
      $http.patch('https://stackundertow.herokuapp.com/answers/'+ id +'/upvote')
    };

    $scope.downVote = function() {
      // console.log("DOWN VOTE");
      $http.patch('https://stackundertow.herokuapp.com/answers/'+ id +'/downvote')

    };

  })//CONTROLLER FOR VOTING

// .controller('logoutCtrl', function($scope, $http){//CONTROLLER FOR LOGOUT
//     $scope.user = {
//       email: '',
//       password: '',
//     }
//     $scope.submit= function(){
//       $http.delete('https://stackundertow.herokuapp.com/sessions', $scope.user)
//       console.log($scope.user);
//       // this.login = {};
//     }
//   })//CONTROLLER FOR LOGOUT


})(); //END OF IFFE


/* Signup and Login menu drop down*/


;(function(){

  $('.user-buttons a[href]').on('click', function(event){
    event.preventDefault();
      $(this).add(this.hash)
      .toggleClass('active')
      .siblings().removeClass('active');
  });

  $('.submit').on('click', function(){
    $('#login').removeClass('active');
  });

  $('.redirect a[href]').on('click', function(event){
    event.preventDefault();
      $(this).add(this.hash)
      .toggleClass('active')
      .siblings().removeClass('active');
  });

  $('.list').on('click', function(event){
    event.preventDefault();
      $('.active').removeClass('active');
  });

  $('aside').on('click', function(event){
    event.preventDefault();
      $('.active').removeClass('active');
  });
  /* Signup and Login menu drop down*/

})(); //END OF IFFE
