/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
// jQuery to collapse the name box to intials Box on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }

    if ($("#nameheader").offset().top > 75) {
        // $(".navbar-brand").addClass("nameheader-collapse");
        $("span.lower").fadeOut(100);
       $("span#nameheader").html('[<span class="light">B</span>Y]');
    } else {
        // $(".navbar-brand").removeClass("nameheader-collapse");
       $("span#nameheader").html('<span class="light">Bhavish</span> Yalamanchi');
       $("span.lower").fadeIn(100);
    }
});

var showCreations = function() {
    // console.log("creations clicked");
    var speed = 'slow';
    $('#projects_panel').fadeOut(speed ,function(){
        // console.log("projects fade out");
        $('#creations_panel').fadeIn(speed);
        $('#nav-projects').text("Creations");
        $('li#slider_projects').removeClass("current");
        $('li#slider_creations').addClass("current");
    });
};

var showProjects = function() {
    // console.log("projects clicked");
    var speed = 'slow';
    $('#creations_panel').fadeOut(speed ,function(){
        // console.log("creations fade out");
        $('#projects_panel').fadeIn(speed);
        $('#nav-projects').text("Projects");
        $('li#slider_creations').removeClass("current");
        $('li#slider_projects').addClass("current");
    });
};

$(document).ready(function(){
    $('li#slider_creations').click(showCreations);
    $('li#slider_projects').click(showProjects);
    $('a#creations_click').click(showCreations);

	$("#creationsmenu h4:nth-child(1)").hover(function () {
		$("#menuline div:nth-child(1)").stop().animate({
			opacity: "1"
		}, "fast");
	}, function () {
		$("#menuline h4:nth-child(1)").stop().animate({
			opacity: ".5"
		}, "slow");
	});
	$("#creationsmenu h4:nth-child(2)").hover(function () {
		$("#menuline div:nth-child(2)").stop().animate({
			opacity: "1"
		}, "fast");
	}, function () {
		$("#menuline div:nth-child(2)").stop().animate({
			opacity: ".5"
		}, "slow");
	});
    $('#creationsmenu h4').click(function(){
		var speed = 'slow';
		var panels = [$('#soundcloud_panel'),$('#slydes_panel')];
		var index = $(this).index();
		if($('.creations_box:visible').index()!=(index+1)){
			$('.creations_box:visible').fadeOut(speed ,function(){
				panels[index].fadeIn(speed);
			});
		}
	});
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}
