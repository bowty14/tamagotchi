import $ from 'jquery';
import './../src/style.css';
import { Tama } from './tama.js';


$(document).ready(function () {
  $("#play").click(function(event){
    event.preventDefault();
    let tama = new Tama();
    tama.setSleep();
    console.log(tama.setSleep());
    console.log(tama);
  });
});