
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
    }, 60000);
    
  }
  resetS() {
    this.sleepLvl = 0;
  }
  setHunger() {
    setInterval(() => {
      this.hungerLvl--;
    }, 60000);
  }
  resetH() {
    this.hungerLvl = 20;
  }
  setAttention() {
    setInterval(() => {
      this.attentionLvl--;
    },60000);
  }
  resetA() {
    this.attentionLvl = 20;
  }
  setPlay() {
    setInterval(() => {
      this.playLvl--;
    },60000);
  }
  resetP() {
    this.playLvl = 20;
  }
}