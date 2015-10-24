/* PSEUDO CODE FOR LOGIN MENU

1. COLLECT DATA ENTERED INTO THE <INPUT>
2. WHEN .LOGIN-SUBMIT IS 'CLICKED'  `GET/users/id` TO DATABASE TO BE VERIFIED?
*/


;(function(){
  angular.module('Front-Rails', [ ])

.run(function($http, $rootScope) {
  $http.get('https://stackundertow.herokuapp.com/questions')
    .then(function(response){
      // $rootScope.query = "hello";

       $rootScope.query = response.data[0].query;

      // $rootScope.questions = response.data;
    })

})


})();

/* Signup and Login menu drop down*/
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
  console.log("HEY");
    $('.active').removeClass('active');
});

$('aside').on('click', function(event){
  event.preventDefault();
  console.log("HEY");
    $('.active').removeClass('active');
});
/* Signup and Login menu drop down*/
