import swal from 'sweetalert2';
import './../src/bootstrap.css';
import './../src/style.css';
import $ from 'jquery';
import { Tama } from './tama.js';


$(document).ready(function () {
  $("#play").click(function (event) {
    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/search?q=light-fury-sticker&api_key=${process.env.API_KEY}&limit=3&offset=2&rating=G&lang=en`
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
  
    request.open("GET", url, true);
    request.send();
  
    let getElements = function(response) {
      $('.light-fury').append("<img src='" +`${response.data[0].images.downsized_large.url}` + "' alt='light-fury'>");
    };

    let tama = new Tama();
    tama.setSleep();
    tama.setHunger();
    tama.setAttention();
    tama.setPlay();
    $("#play").hide();
    $("#intro").hide();
    $("#resetS").show();
    $("#resetH").show();
    $("#resetA").show();
    $("#resetP").show();
    swal.fire("You're Tamagotchi is alive! Make sure to give it food and attention often otherwise it won't be very happy with you!");
    // Object.entries --> array of key/value pair arrays
    // Object.keys --> array of keys
    // Object.values --> array of the values
    
    setInterval(() => {
      $("#stats").html("");
      Object.entries(tama).forEach((keyValuePair) => {
        $("#stats").append("<p id='" + keyValuePair[0] + "'>" + keyValuePair[0] + ": " + keyValuePair[1] + "</p>");
        
        if (tama.attentionLvl === 10) {
          swal.fire("Your Tamagotchi is getting lonely :(");
        }
        if (tama.hungerLvl === 12) {
          swal.fire("Your Tamagotchi is hungry!");
        }
        if (tama.playLvl === 6) {
          swal.fire("Your Tamagotchi is getting bored");
        }
        if (tama.sleepLvl === 15){
          swal.fire("Your Tamagotchi is exhasted!! They're seeing things!!");
        } else if (tama.sleepLvl === 8){
          swal.fire("Your Tamagotchi could use a nap");
        }
        if (tama.hungerLvl <= 0 && tama.attentionLvl <= 0 && tama.sleepLvl <= 20){
          swal.fire("Your Tamagotchi has died!");
            $("#playAgain").show();
            $("#play").hide();
            $("#tamagotchi").hide();
            $("#resetS").hide();
            $("#resetH").hide();
            $("#resetA").hide();
            $("#resetP").hide();
          }

         
        event.preventDefault();
        });
      }, 1000);
    
    console.log(tama);
    $("#resetS").click(function (event) {
      tama.resetS();
      console.log(tama);
      event.preventDefault();
      swal.fire("you have put your Tamagotchi to sleep.");
    });
    $("#resetH").click(function(event){
      tama.resetH();
      console.log(tama);
      swal.fire("you have feed your Tamagotchi");
      event.preventDefault();
      
    });
    $("#resetA").click(function(event){
      tama.resetA();
      console.log(tama);
      swal.fire("your Tamagotchi appreciates the attention!");
      event.preventDefault();
    });
    $("#resetP").click(function(event){
      tama.resetP();
      console.log(tama);
      swal.fire("you have thrown a ball for your Tamagotchi");
      event.preventDefault();
    });
  });
});


