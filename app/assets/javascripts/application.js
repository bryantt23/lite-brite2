// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function () {

    // Produce initial 16 x 16 grid
    for(var i=1; i <= 16; i++) {
        for(var j=1; j <= 16; j++) {

            $('<div>').attr({
                "id": "divGrid " + i + "-" + j,
                "class": "divGrid",
                }).appendTo("#gridWrapper");

        }
    $("#gridWrapper").append("<br>")
    }

    // Grid size adjustment button event handler
    $("#adjustGridSize").click(function() {
        var rows = prompt("How many rows?");
        var columns = prompt("How many columns?");
        $(".divGrid").remove();
        $("#gridWrapper > br").remove();
        $("#gridWrapper").height(rows * 12);
        $("#gridWrapper").width(columns * 12);

        // Produces the new grid
        for(var i=1; i <= rows; i++) {
            for(var j=1; j <= columns; j++) {

                $('<div>').attr({
                    "id": "divGrid " + i + "-" + j,
                    "class": "divGrid",
                    }).appendTo("#gridWrapper");
            }
        $("#gridWrapper").append("<br>");
        }

        // Need to reset the drawing method since we've dynamically created new HTML elements
        setSingleDraw();
    });

    // Clear button event handler
    $("#clear").click(function() {
        // $(".divGrid").css({"background-color" : "#FFF", "border-color" : "#FFF"});
            $(".divGrid").css({"background-color" : "#000", "border-color" : "#FFF"});
    });

    // Random colors button event handler
    $("#randomColors").click(function() {
        setRandomDraw();
    });

    // Color menu event handler
    $(".colorGrid").click(function() {
        color = $(this).css("background-color");
        setColorDraw();
    });

    function setSingleDraw() {

        // Establishes the initial black-only coloring method
        // $(".divGrid").on("mouseenter", function() {
        $(".divGrid").click(function() {
            // $(this).css({"background-color" : "#000", "border-color" : "#000"});
            $(this).css({"background-color" : "#F00", "border-color" : "#000"});
        });
    }

    // We set to color black-only by default
    setSingleDraw();

    function randomColorGen() {

        var randomColor = "#"
        var colorString = "0123456789ABCDEF";
        for(i = 1; i <= 6; i++) {
            var randomGen = Math.floor(Math.random() * 16);
            randomColor += colorString.substring(randomGen, randomGen + 1);
        }
        return randomColor;
    }

    function setRandomDraw() {
    $(".divGrid").click(function() {
        // $(".divGrid").off("mouseenter");
        // $(".divGrid").on("mouseenter", function() {
            var color = randomColorGen();
            $(this).css({"background-color" : color, "border-color" : color});
        });
    }

    function setColorDraw() {
    $(".divGrid").click(function() {
        // $(".divGrid").off("mouseenter");
        // $(".divGrid").on("mouseenter", function() {
            $(this).css({"background-color" : color, "border-color" : color});
        });
    }

});
