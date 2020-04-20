import $ from 'jquery';
import './../src/style.css';
import { Tama } from './tama.js';


$(document).ready(function () {
  $("#play").click(function(event){
    event.preventDefault();
    let tama = new Tama();
    tama.setSleep();
    tama.setHunger();
    tama.setAttention();
    tama.setPlay();
    console.log(tama);
 
  });
});