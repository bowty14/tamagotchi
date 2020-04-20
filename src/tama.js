export class Tama {
  constructor(){
    this.sleepLvl = 0;
    this.attentionLvl = 20;
    this.playLvl = 20;
    this.hungerLvl = 20;
  }

  setSleep() {
    setInterval(() => {
      this.sleepLvl++;
    }, 1000);
  };
  resetS() {
    let sleep = this.sleepLvl;
    return sleep;
  }
  setHunger() {
    setInterval(() => {
      this.hungerLvl--;
    }, 1000);
  };
  resetH() {
    let hunger = this.hungerLvl;
    return hunger;
  }
  setAttention() {
    setInterval(() => {
      this.attentionLvl--;
    },1000);
  };
  resetA() {
    let att = this.attentionLvl;
    return att;
  }
  setPlay() {
    setInterval(() => {
      this.playLvl--;
    },1000);
  };
  resetP() {
    let play = this.playLvl;
    return play;
  }
};


// var foodTimer = new Food(function() {
//    setHunger() {
//     setInterval(() => {
//       this.hungerLvl--;
//     }, 1000);
//   };
// })

// foodTimer.reset(1000)