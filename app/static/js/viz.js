/*

COLOR PALETTES:

US : #FF7C16  UK: #5BAFE2   AU: #FFD32E   SA: #53BD24   NZ: #781513
*/
var handle;
var x;
var browserWidth;
var browserHeight;
var margin = {right: 5, left: 5};




var dateFormatSpecifier = "%Y-%m-%d";  
var dateFormatParser = d3.timeFormat("%Y-%m-%d");



var splash;
var res_d

(function () {
   $( "#custom-click" ).click(function() {
  		console.log('Go Clicked');
	});
  })();

function updateFirstDerivative(){
	var QUEUE = MathJax.Hub.queue;  // shorthand for the queue
    var f1d = null;                // the element jax for the math output.

    //
    //  Get the element jax when MathJax has produced it.
    //
    QUEUE.Push(function () {
      f1d = MathJax.Hub.getAllJax("sample-first-derivative")[0];
    });

    //
    //  The onchange event handler that typesets the
    //  math entered by the user
    //
    window.UpdateF1 = function (TeX) {
      QUEUE.Push(["Text",f1d,"\\displaystyle{"+TeX+"}"]);
    }	
}


function updateSecondDerivative(){
	var QUEUE = MathJax.Hub.queue;  // shorthand for the queue
    var f2d = null;                // the element jax for the math output.

    //
    //  Get the element jax when MathJax has produced it.
    //
    QUEUE.Push(function () {
      f2d = MathJax.Hub.getAllJax("sample-second-derivative")[0];
    });

    
    window.UpdateF2 = function (TeX) {
      QUEUE.Push(["Text",f2d,"\\displaystyle{"+TeX+"}"]);
    }	
}

function updateCustomFirstDerivative(){
	var QUEUE = MathJax.Hub.queue;  // shorthand for the queue
    var f1d = null;                // the element jax for the math output.

    //
    //  Get the element jax when MathJax has produced it.
    //
    QUEUE.Push(function () {
      f1d = MathJax.Hub.getAllJax("custom-first-derivative")[0];
    });

    //
    //  The onchange event handler that typesets the
    //  math entered by the user
    //
    window.customUpdateF1 = function (TeX) {
      QUEUE.Push(["Text",f1d,"\\displaystyle{"+TeX+"}"]);
    }	
}


function updateCustomSecondDerivative(){
	var QUEUE = MathJax.Hub.queue;  // shorthand for the queue
    var f2d = null;                // the element jax for the math output.

    //
    //  Get the element jax when MathJax has produced it.
    //
    QUEUE.Push(function () {
      f2d = MathJax.Hub.getAllJax("custom-second-derivative")[0];
    });

    
    window.customUpdateF2 = function (TeX) {
      QUEUE.Push(["Text",f2d,"\\displaystyle{"+TeX+"}"]);
    }	
}


function updateProjectileValues(){
	var QUEUE = MathJax.Hub.queue;  // shorthand for the queue
    var t_max = null;                // the element jax for the math output.
    var r_max = null;

    //
    //  Get the element jax when MathJax has produced it.
    //
    QUEUE.Push(function () {
      r_max = MathJax.Hub.getAllJax("projectile_answer")[0];
      t_max = MathJax.Hub.getAllJax("projectile_answer")[1];
    });

    
    window.UpdateProjectile = function (r_value,t_value) {
    	console.log(r_value,t_value)
      QUEUE.Push(["Text",r_max,"\\displaystyle{"+r_value+"}"]);
      QUEUE.Push(["Text",t_max,"\\displaystyle{"+t_value+"}"]);
    }	
}

function univariate_function(){
	console.log($('#univariate').width())

	var data ;
	updateFirstDerivative();
	updateSecondDerivative();
	var data = {"init_func":'x^3+5*x^2+12'}; 
	$.ajax({
	    type: 'POST',
	    contentType: 'application/json',
	    url: '/get_foc',
	    dataType : 'json',
	    data : JSON.stringify(data),
	    success : function(result) {
	    	res_d = result['data']; 
	    	setTimeout(updatesFs, 3000);
	    },error : function(result){
	       //console.log(result);
	    }
	});
	
	//get data
		/*
			function values
			first derivative
			second derivative
		*/

	//crossfilter data

	//dc composite chart

}

function drawStaticGraphs(dataForViz){
	var margin =10;
	var div_width = ($('#chart1').width());
	var option_chart1 = {title:'Functions and Derivatives',
				legend:'bottom',
				hAxis: {
                  title: 'X',
                  minValue: -7,
                  maxValue: 7
               },
               vAxis: {
                  title: 'Y'
               },
               curveType: 'function',
                width:math.round(div_width) ,
                height:math.round(div_width),
                interpolateNulls: true
                };
	var None = null                
    var function_table =  new google.visualization.DataTable();
    function_table.addColumn('number', 'X');
    function_table.addColumn('number', 'F(X)');
    function_table.addColumn('number','First Derivative');
    function_table.addColumn('number','Second Derivative');
    function_table.addColumn('number','Epigraph');
    function_table.addRows(eval(dataForViz));

    var chart = new google.visualization.LineChart(document.getElementById('chart1'));
    chart.draw(function_table, option_chart1);

    var option_chart2 = {title:'Monotonically non-decreasing function',
				legend:'bottom',
				hAxis: {
                  title: 'X',
                  minValue: -7,
                  maxValue: 7
               },
               colors:['#3366CC','#DC3912','#109618'],
               vAxis: {
                  title: 'Y'
               },
               curveType: 'function',
                width:math.round(div_width) ,
                height:math.round(div_width)
                };
    function_table.removeColumn(3);
	var chart = new google.visualization.LineChart(document.getElementById('chart2'));
    chart.draw(function_table, option_chart2);    


    var option_chart3 = {title:'Epigraph',
				legend:'bottom',
				hAxis: {
                  title: 'X',
                  minValue: -7,
                  maxValue: 7
               },
               vAxis: {
                  title: 'Y'
               },
               colors : ['#3366CC','#109618'],

               interpolateNulls: true,
               curveType: 'function',
                width:math.round(div_width) ,
                height:math.round(div_width)
                };
    function_table.removeColumn(2);
	var chart = new google.visualization.LineChart(document.getElementById('chart3'));
    chart.draw(function_table, option_chart3); 
   /* $.ajax({
	    type: 'POST',
	    contentType: 'application/json',
	    url: '/get_foc',
	    dataType : 'json',
	    data : JSON.stringify(data),
	    success : function(result) {
	    	res_d = result['data'];
	    	setTimeout(updatesFs, 3000);
	    },error : function(result){
	       console.log(result);
	    }
	});*/

}

function drawCustomStaticGraphs(dataForViz){
	var margin =10;
	var div_width = ($('#chart1').width());
	var option_chart1 = {title:'Functions and Derivatives',
				legend:'bottom',
				hAxis: {
                  title: 'X'
               },
               vAxis: {
                  title: 'Y'
               },
               curveType: 'function',
                width:math.round(div_width) ,
                height:math.round(div_width)
                };
    None = null;
    var function_table =  new google.visualization.DataTable();
    function_table.addColumn('number', 'X');
    function_table.addColumn('number', 'F(X)');
    function_table.addColumn('number','First Derivative');
    function_table.addColumn('number','Second Derivative');
    function_table.addColumn('number','Epigraph');
    
    function_table.addRows(eval(dataForViz));

    var chart = new google.visualization.LineChart(document.getElementById('custom-chart1'));
    chart.draw(function_table, option_chart1);

    var option_chart2 = {title:'Monotonically non-decreasing function',
				legend:'bottom',
				hAxis: {
                  title: 'X'
               },
               colors:['#3366CC','#DC3912','#109618'],
               vAxis: {
                  title: 'Y'
               },
               curveType: 'function',
                width:math.round(div_width) ,
                height:math.round(div_width)
                };
    function_table.removeColumn(3);
	var chart = new google.visualization.LineChart(document.getElementById('custom-chart2'));
    chart.draw(function_table, option_chart2);   


    var option_chart3 = {title:'Epigraph',
				legend:'bottom',
				hAxis: {
                  title: 'X',
                  minValue: -7,
                  maxValue: 7
               },
               colors : ['#3366CC','#109618'],
               vAxis: {
                  title: 'Y'
               },
               interpolateNulls: true,
               curveType: 'function',
                width:math.round(div_width) ,
                height:math.round(div_width)
                };
    function_table.removeColumn(2);
	var chart = new google.visualization.LineChart(document.getElementById('custom-chart3'));
    chart.draw(function_table, option_chart3);  
   

}


function updatesFs(){
	UpdateF1(res_d['d1']);
	UpdateF2(res_d['d2']);
	google.charts.setOnLoadCallback(drawStaticGraphs(res_d['forViz']));
	//google.charts.setOnLoadCallback(drawProjectileGraph);
}

function updatesCustomFs(){
	customUpdateF1(res_d['d1']);
	customUpdateF2(res_d['d2']);
	google.charts.setOnLoadCallback(drawCustomStaticGraphs(res_d['forViz']));
	//google.charts.setOnLoadCallback(drawProjectileGraph);
}


function projectile_motion(){
	ga_button = document.getElementById('grad_asc')
	ga_button.disabled = true;
	$.ajax({
	    type: 'POST',
	    contentType: 'application/json',
	    url: '/get_projectile',
	    dataType : 'json',
	    //data : JSON.stringify(data),
	    success : function(result) {
	    	google.charts.setOnLoadCallback(drawProjectileGraph(result['projectile_points']));
	    	window.projectile = result;
	    	ga_button.disabled = false;
	    },error : function(result){
	       console.log(result);
	    }
	});
}

function drawProjectileGraph(dataForViz){
	//console.log($('#univariate').width())
	var margin =10;
	var div_width = ($('#static_projectile_angle').width());
	var option_chart1 = {title:'Finding the maximum projectile angle',
				legend:'bottom',
				hAxis: {
                  title: 'Projectile angle',
                  maxValue: 90,
                  minValue:-10
               },
               animation: {
        		duration: 1000,
        		easing: 'in'
      			},
               vAxis: {
                  title: 'Distance covered by the projectile'
               },
               curveType: 'function',
                width:math.round(div_width),
                height:math.round(div_width)
                };
    /*var projectile_table =  new google.visualization.DataTable();
    projectile_table.addColumn('number', 'Range');
    projectile_table.addColumn('number','motion');*/
    var projectile_table =  new google.visualization.DataTable();
    projectile_table.addColumn('number', 'Projection Angle');
    projectile_table.addColumn('number', 'Distance');
    
    projectile_table.addRows(eval(dataForViz));

    var chart = new google.visualization.LineChart(document.getElementById('static_projectile_angle'));
    chart.draw(projectile_table, option_chart1);
    
}

function gradient_ascent(){
	console.log('clicked and forwarded to gradient ascetn')
	updateProjectileValues();
	google.charts.setOnLoadCallback(drawGradientAscentGraph(projectile));
}


function drawGradientAscentGraph(projectile){
	var margin =10;
	var div_width = ($('#gd_projectile_angle').width());
	var option_chart1 = {title:'Finding the maximum projectile angle',
				legend:'bottom',
				hAxis: {
                  title: 'Projectile angle',
                  maxValue: 90,
                  minValue:-10
               },
               animation: {
        		duration: 100
        		
      			},
      			colors: ['#DC3912'],
      			pointSize: 1,
      			pointShape: { type: 'triangle', rotation: 180 } ,
			
               vAxis: {
                  title: 'Distance covered by the projectile'
               },
               curveType: 'function',
                width:math.round(div_width),
                height:math.round(div_width)
                };
    /*var projectile_table =  new google.visualization.DataTable();
    projectile_table.addColumn('number', 'Range');
    projectile_table.addColumn('number','motion');*/
    console.log(projectile)
    var projectile_table =  new google.visualization.DataTable();
    projectile_table.addColumn('number', 'Projection Angle');
    projectile_table.addColumn('number', 'Distance');
    projectile_table.addColumn('number','Gradient Ascent')
    data = eval(projectile['projectile_points'])
    data.forEach(function(d){
    	d.push(null);
    })
	projectile_table.addRows(data);

    historical_data = eval(projectile['history']);

    additional_rows = new Array()
    historical_data.forEach(function(d){ additional_rows.push([d[0],null, d[1]])})

    projectile_table.addRows(additional_rows)
    projectile_table.removeColumn(1)
    var chart = new google.visualization.LineChart(document.getElementById('gd_projectile_angle'));
    chart.draw(projectile_table, option_chart1);
    r_max = eval(projectile['max_range'])
    t_max = eval(projectile['theta_max'])
    UpdateProjectile(r_max,t_max)
    /*function drawChart() {
      var button = document.getElementById('grad_asc');
      // Disabling the button while the chart is drawing.
      button.disabled = true;
      google.visualization.events.addListener(chart, 'ready',
          function() {
            console.log('should be plotting')
          });
      chart.draw(projectile_table, options_chart1);
    }*/
    	
    
   /* historical_data.forEach(function(d){
    	//console.log('each')
    	setTimeout(3000)
    	//console.log(d)
    	projectile_table.addRows([d]);
    	google.visualization.events.addListener(chart, 'ready', function(){console.log('function ready')});
    	console.log('printing')
    	chart.draw(data, options);
    	console.log('done plotting')
    })*/

    
    //chart.draw(projectile_table, option_chart1);
}

function custom_math_function(){
	// check if convex or not and possible to calculate soc
	var data;
	if ($('#custom-function').val() === ""){
		data={'init_func': $('#custom-function').attr('placeholder')};
	}
	else{
		data = {'init_func':$('#custom-function').val()};
	}
	updateCustomFirstDerivative();
	updateCustomSecondDerivative();
	$.ajax({
	    type: 'POST',
	    contentType: 'application/json',
	    url: '/get_foc',
	    dataType : 'json',
	    data : JSON.stringify(data),
	    success : function(result) {
	    	res_d = result['data']; 
	    	setTimeout(updatesCustomFs, 3000);
	    },error : function(result){
	       alert("Ran into error for custom function");
	    }
	});

	//get data
		/*
			function values
			first derivative
			second derivative
		*/

	//crossfilter data

	//dc composite chart
} 


document.addEventListener('DOMContentLoaded', function() {
  startViz();
},false)

function startViz() {
	$( "#custom-click" ).click(function() {
  		console.log('Go Clicked');
  		custom_math_function();
	});
	document.getElementById("fun_1").addEventListener("click", function(){$('#custom-function').val('sin(2*x) + cos(2*x)') });
	document.getElementById("fun_2").addEventListener("click", function(){$('#custom-function').val('x^3+2*x^2+12') });
	document.getElementById("fun_3").addEventListener("click", function(){$('#custom-function').val('cos(2*x) + 5*x^2') });
	document.getElementById("grad_asc").addEventListener("click", function(){gradient_ascent();});

    clientWidth = document.body.clientWidth;
    clientHeight = document.body.clientHeight;
   
    univariate_function();
    projectile_motion();

    
}