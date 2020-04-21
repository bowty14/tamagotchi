import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './../src/style.css';
import $ from 'jquery';
import { Tama } from './tama.js';


$(document).ready(function () {
  $("#play").click(function(event){
    let tama = new Tama();
    tama.setSleep();
    tama.setHunger();
    tama.setAttention();
    tama.setPlay();
    $("#play").hide();
    $("#resetS").show();
    // Object.entries --> array of key/value pair arrays
    // Object.keys --> array of keys
    // Object.values --> array of the values
    $("#stats").html("");
    Object.entries(tama).forEach((keyValuePair) => {
      $("#stats").append("<p id='" + keyValuePair[0] + "'>" + keyValuePair[0] + ": " + keyValuePair[1] + "</p>");
    
      // $("#stats").html(tama);
      event.preventDefault();
    });
    console.log(tama);
    $("#resetS").click(function (event) {
      tama.resetS();
      

      console.log(tama);
      event.preventDefault();
      
    });
    $("#resetH").click(function(event){
      tama.resetH();
      console.log(tama);
      event.preventDefault();
      
    });
    $("#resetA").click(function(event){
      tama.resetA();
      console.log(tama);
      event.preventDefault();
    });
    $("#resetP").click(function(event){
      tama.resetP();
      console.log(tama);
      event.preventDefault();
    });
    //  $(#stats).html(tama);
  });

});