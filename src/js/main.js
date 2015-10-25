;(function(){

  angular.module('Front-Rails', ['ngRoute'], function($routeProvider){
  $routeProvider
    .when('/', {
      redirectTo: "top-questions"
    })
    .when('/top-questions', {
      templateUrl: 'top-questions.html',  // controller: 'questionList'
    })

    .when('/question', {
      templateUrl: 'question.html',  // controller: 'questionPage'
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

  .controller('loginCtrl', function($scope, $http){//CONTROLLER FOR LOGIN
    $scope.user = {
      email: '',
      password: '',
    }
    $scope.submit= function(){
      $http.post('https://stackundertow.herokuapp.com/sessions', $scope.user)
      console.log($scope.user);
      // this.login = {};
    }
  })//CONTROLLER FOR LOGIN

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

  $('.search a[href]').on('click', function(event){
    event.preventDefault();
      $(this).add(this.hash)
      .toggleClass('active')
      .siblings().removeClass('active');
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
