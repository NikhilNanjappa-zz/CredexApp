'use strict';

/**
 * @ngdoc function
 * @name panthaProfileApp.controller:EggCtrl
 * @description
 * # MainCtrl
 * Controller of the panthaProfileApp
 */
angular.module('credexApp')
  .controller('EggCtrl', function ($scope, $http) {

  $http.get('https://data.gov.in/api/datastore/resource.json?resource_id=36114153-8213-4845-ba41-4e3e8249f9c5&api-key=e385932c4cc4ed1b02ae29633754e999').then(function(response) {
    var karnataka_details = $.grep(response.data.records, function(e){ return e.id == 12; });
    var assam_details = $.grep(response.data.records, function(e){ return e.id == 3; });
    var delhi_details = $.grep(response.data.records, function(e){ return e.id == 33; });
    $scope.renderChart(karnataka_details);
    $scope.renderChart(assam_details);
    $scope.renderChart(delhi_details);
  });

  // one single fundtion to render all the charts including the dynamic state names and dynamic div ID 
  $scope.renderChart = function(state_details) {

  	//using the unique ID to rnder the charts separately
	Highcharts.chart('highcharts'+state_details[0].id, {
        title: {
            text: 'Egg production - ' + state_details[0]['States/UTs'] + ', 2007 - 2012'
        },
	    xAxis: {
            title: {
                text: 'Years from 2007-2012'
            },
	        categories: ['2007-08', '2008-09', '2009-10', '2010-11', '2011-12']
	    },
        yAxis: {
            title: {
                text: 'Egg Production in Lakhs'
            }
        },
	    series: [{
	    	showInLegend: false,
	    	//values of the respective states for each year
	        data: [
	        parseInt(state_details[0][ 'Egg Production 2007-08 (Lakh Numbers)' ]),
	        parseInt(state_details[0][ 'Egg Production2008-09 (Lakh Numbers)' ]),
	        parseInt(state_details[0][ 'Egg Production 2009-10 (Lakh Numbers)' ]),
	        parseInt(state_details[0][ 'Egg Production 2010-11 (Lakh Numbers)' ]),
	        parseInt(state_details[0][ 'Egg Production 2011-12 (Lakh Numbers)' ])
	        ]
	    }]
	});

  };

});



