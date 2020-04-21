
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
    }, 900000);
    
  }
  resetS() {
    this.sleepLvl = 0;
  }
  setHunger() {
    setInterval(() => {
      this.hungerLvl--;
    }, 600000);
  }
  resetH() {
    this.hungerLvl = 20;
  }
  setAttention() {
    setInterval(() => {
      this.attentionLvl--;
    },300000);
  }
  resetA() {
    this.attentionLvl = 20;
  }
  setPlay() {
    setInterval(() => {
      this.playLvl--;
    },240000);
  }
  resetP() {
    this.playLvl = 20;
  }
  


}

