
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
    
  }
  // resetS() {
  //   this.sleepLvl = 0;
  // }
  setHunger() {
    setInterval(() => {
      this.hungerLvl--;
    }, 1000);
  }
  // resetH() {
  //   this.hungerLvl = 20;
  // }
  setAttention() {
    setInterval(() => {
      this.attentionLvl--;
    },1000);
  }
  // resetA() {
  //   this.attentionLvl = 20;
  // }
  setPlay() {
    setInterval(() => {
      this.playLvl--;
    },1000);
  }
  // resetP() {
  //   this.playLvl = 20;
  // }
}


// var foodTimer = new Food(function() {
//    setHunger() {
//     setInterval(() => {
//       this.hungerLvl--;
//     }, 1000);
//   };
// })

// foodTimer.reset(1000)