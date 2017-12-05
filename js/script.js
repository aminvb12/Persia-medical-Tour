var carouselRunning=(function () {


    return function () {
        $('.carousel').carousel({
            interval: 5000
        });
    }
})();
carouselRunning();


var modalRunning=(function () {
    return function () {

        setTimeout(function () {
            $("#modalLRForm").modal('show');
        },5000);

    }
})();


modalRunning();

$(document).ready(function() {
    $('.mdb-select').material_select();
});


var removeclassAnimated=(function () {
    return function () {
        $('#getNewsLetter').click(function () {

            $('div').removeClass('animated');


        });

    }
})();


removeclassAnimated();


var scrollPosition=(function () {

    var execute=function () {
        $(document).ready(function(){
            var scroll_pos = 0;
            $(document).scroll(function() {
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 600) {
                    $("#Nav").attr('class', 'navbar fixed-top navbar-expand-lg navbar-dark blue-grey lighten-3 scrolling-navbar');
                } else {
                    $("#Nav").attr('class', 'navbar fixed-top navbar-expand-lg navbar-dark transparent scrolling-navbar');
                }
            });
        });
    };


    return function () {
        execute();


    }
})();

scrollPosition();

window.onload();











var executeMap=(function () {




    return function () {
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition, showError);
            } else {
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        }

        function showPosition(position) {
            var latlon = position.coords.latitude + "," + position.coords.longitude;
            var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
                +latlon+"&zoom=14&size=400x300&key=AIzaSyCyVSb67L-XC8tCnuZahsHOV__VEQ27HLg";
            document.getElementById("map-container").innerHTML = "<img src='"+img_url+"'>";
            console.log(1);
        }
//To use this code on your website, get a free API key from Google.
//Read more at: https://www.w3schools.com/graphics/google_maps_basic.asp

        function showError(error) {
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    x.innerHTML = "User denied the request for Geolocation."
                    break;
                case error.POSITION_UNAVAILABLE:
                    x.innerHTML = "Location information is unavailable."
                    break;
                case error.TIMEOUT:
                    x.innerHTML = "The request to get user location timed out."
                    break;
                case error.UNKNOWN_ERROR:
                    x.innerHTML = "An unknown error occurred."
                    break;
            }
        }

    }
})();






window.onload(executeMap());







