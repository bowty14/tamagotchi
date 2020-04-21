# Tamagotchi 

#### JavaScript & jQuery Project for Epicodus, 04.08.2020

#### By **Mai Cook & Tyler Bowerman**

## Description

A site to play a game. Practicing our use of jQuery & JavaScript. 

## Specifications

|   Behavior Description   |  Input Ex.   |        Output Ex.        |
|------------------------------|--------------|--------------------------|
| 1.[x]   there is a Tamagotchi Object, which has  sleep,play,attention and food properties.
| 2.[x]   create button that starts Tamagotchi and starts property intervals either (+ or -)
| 3.[x]   create functions that will reset hunger/attention/play/sleep property intervals
| 4.[x]   create buttons that reset the property values.
| 5.[x]   create swal alerts to the user when they press the feed/play/attention/sleep buttons
| 5.[x]   create alerts that pop up when hunger/attention properies start to get low
| 6.[x]   create alert when hunger/attention hit zero that the tamagotchi has died.
| 7.[]
| 8.[]

class Tama {}
constructor(){
  this.sleepLvl = 0;
  this.attentionLvl = 20;
  this.playLvl = 20;
  this.hungerLvl = 20;
}

export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }
}


test('should have a food level of 7 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(3001);
    expect(fuzzy.foodLevel).toEqual(7);
tama

button(start!)
tama.setHunger()







## Setup/Installation Requirements

* Clone this repository
* Open index.html in a web browser

## Technologies Used

* HTML
* CSS
* Bootstrap 4.4.1
* jQuery 3.4.1
* JavaScript


### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **Mai Cook & Tyler Bowerman**