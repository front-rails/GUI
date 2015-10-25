/* PSEUDO CODE FOR LOGIN MENU

1. COLLECT DATA ENTERED INTO THE <INPUT>
2. WHEN .LOGIN-SUBMIT IS 'CLICKED'  `GET/users/id` TO DATABASE TO BE VERIFIED?
*/


;(function(){
  angular.module('Front-Rails', ['ngRoute'], function($routeProvider){
  $routeProvider
    .when('/', {
      redirectTo: "top-questions"
    })
    .when('/top-questions', {
      templateUrl: 'top-questions.html',
      // controller: 'questionList'

    })

    .when('/question', {
      templateUrl: 'question.html',
      // controller: 'questionPage'

    })
})

// .controller('mainController', function($scope, $route, $routeParams, $location){
//   $scope.$route = $route;
//   $scope.$location = $location;
//   $scope.$routeParams = $routeParams;
// })


  // .controller('signupCtrl', function($scope, $http){        //CONTROLLER FOR SIGNUP
  //     this.signup = {
  //       displayName: "",
  //       email: "",
  //       password: "",
  //     };
  //     $scope.submit= function(){
  //       $http.post('https://stackundertow.herokuapp.com/users')
  //       this.signup = {};
  //     }
  //
  //   })



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

.controller('logoutCtrl', function($scope, $http){//CONTROLLER FOR LOGOUT
    $scope.user = {
      email: '',
      password: '',
    }
    $scope.submit= function(){
      $http.delete('https://stackundertow.herokuapp.com/sessions', $scope.user)
      console.log($scope.user);
      // this.login = {};
    }
  })//CONTROLLER FOR LOGOUT



  // .controller('questionPage', function($http, $scope){
  //   $http.get('http://stackundertow.herokuapp.com/question')
  //     .then(function(response){
  //       $scope.questions = response.data;
  //     })
  // })


// .run(function($http, $rootScope) {
//   $http.get('https://stackundertow.herokuapp.com/questions')
//     .then(function(response){
//       $rootScope.questions = response.data;
//     })
// }); //END OF .run

})(); //END OF IFFE







//   .controller('questionList', function ($scope) {
//     $scope.questions = [
//   {
//     "id": 23,
//     "user_id": 3,
//     "query": "What is Fully-configurable 4th generation algorithm?",
//     "description": "No really, what is it?",
//     "upvotes": 83,
//     "downvotes": 5,
//     "votes_quality": 78,
//     "votes_count": 88,
//     "answers": [
//       {
//         "id": 12,
//         "user_id": 3,
//         "question_id": 23,
//         "description": "If we synthesize the system, we can get to the SMS protocol through the cross-platform SSL application!",
//         "upvotes": 94,
//         "downvotes": 39,
//         "accepted": false,
//         "votes_quality": 55,
//         "votes_count": 133
//       },
//       {
//         "id": 16,
//         "user_id": 4,
//         "question_id": 23,
//         "description": "We need to index the solid state HDD transmitter!",
//         "upvotes": 40,
//         "downvotes": 3,
//         "accepted": false,
//         "votes_quality": 37,
//         "votes_count": 43
//       }
//     ]
//   },{
//     "id": 7,
//     "user_id": 3,
//     "query": "What is Robust incremental challenge?",
//     "description": "No really, what is it?",
//     "upvotes": 81,
//     "downvotes": 43,
//     "votes_quality": 38,
//     "votes_count": 124,
//     "answers": [
//       {
//         "id": 41,
//         "user_id": 4,
//         "question_id": 7,
//         "description": "Use the cross-platform JBOD protocol, then you can hack the auxiliary application!",
//         "upvotes": 62,
//         "downvotes": 38,
//         "accepted": false,
//         "votes_quality": 24,
//         "votes_count": 100
//       },
//       {
//         "id": 7,
//         "user_id": 3,
//         "question_id": 7,
//         "description": "Use the online JSON circuit, then you can program the wireless card!",
//         "upvotes": 66,
//         "downvotes": 88,
//         "accepted": false,
//         "votes_quality": -22,
//         "votes_count": 154
//       },
//       {
//         "id": 46,
//         "user_id": 3,
//         "question_id": 7,
//         "description": "You can't transmit the hard drive without copying the solid state AGP alarm!",
//         "upvotes": 25,
//         "downvotes": 55,
//         "accepted": false,
//         "votes_quality": -30,
//         "votes_count": 80
//       },
//       {
//         "id": 59,
//         "user_id": 4,
//         "question_id": 7,
//         "description": "Use the multi-byte HDD capacitor, then you can reboot the redundant capacitor!",
//         "upvotes": 29,
//         "downvotes": 80,
//         "accepted": false,
//         "votes_quality": -51,
//         "votes_count": 109
//       }
//     ]
//   }
//   ];
// })
// .controller('answersToAQuestion', function ($scope) {
//    $scope.answers = [
//      {
//   "id": 1,
//   "user_id": 2,
//   "question_id": 1,
//   "description": "Imagination Land",
//   "upvotes": 30,
//   "downvotes": 6,
//   "accepted": true,
//   "votes_quality": 24,
//   "votes_count": 36
// },
//      {
//   "id": 2,
//   "user_id": 2,
//   "question_id": 1,
//   "description": "Canada",
//   "upvotes": 50,
//   "downvotes": 6,
//   "accepted": true,
//   "votes_quality": 44,
//   "votes_count": 56
// }
//   ];
// });




/* Signup and Login menu drop down*/
$('.user-buttons a[href]').on('click', function(event){
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
