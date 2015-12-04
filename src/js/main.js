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

  .controller('questionList', function($scope, $routeParams, $http){  //CONTROLLER FOR POPULATING TOP QUESTIONS
    $http.get('https://stackundertow.herokuapp.com/questions')
      .then(function(response){
        $scope.questions = response.data;
      })

    $scope.submitQuestion = function(puzzle, detail) {
      $scope.question = {
        query: puzzle,
        description: detail,
        user_id: $scope.id
      }
      $http.post('https://stackundertow.herokuapp.com/questions', $scope.question)
        .then(function(){
          $scope.question = {
            query: '',
            description: ''
          }
        })
    };
  })//CONTROLLER FOR POPULATING TOP QUESTIONS

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
      $scope.answers =  {
        user_id: $scope.id,
        question_id: id,
        description: deets
      }
      $http.post('https://stackundertow.herokuapp.com/answers', $scope.answers)
      .then(function(){
        $scope.answers = {
          description: ''
        }
      })
    };
  })//CONTROLLER FOR submitting answer

  .controller('vote', function($scope, $http) {

    $scope.upVote = function() {
    var id = $scope.answer.id;
      $http.patch('https://stackundertow.herokuapp.com/answers/'+ id +'/upvote')
        $scope.answer.votes_quality +=1;
    };

    $scope.downVote = function() {
    var id = $scope.answer.id;
      $http.patch('https://stackundertow.herokuapp.com/answers/'+ id +'/downvote')
        $scope.answer.votes_quality -=1;

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
