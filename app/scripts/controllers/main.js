'use strict';

/**
 * @ngdoc function
 * @name panthaProfileApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the panthaProfileApp
 */
angular.module('credexApp')
  .controller('MainCtrl', function ($scope, $http) {

  $http.get('/scripts/tweet.json').then(function(response) {
    $scope.tweets = response.data.tweets;
  });

  $(document).on("click", ".reverse-button", function(e) {
    var prev_text = $( this ).next().text();
    var reverse_text = prev_text.split('').reverse().join(''); //logic to reverse the text
    $(this).next().text(reverse_text); //replace the text with the reversed text
    
    // Just to toggle the text of the button
    if($(this).text() !== "Normal Tweet") { 
      $(this).text("Normal Tweet"); 
    } else { 
      $(this).text("Reverse Tweet"); 
    }
  });

});
