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
  setHunger() {
    setInterval(() => {
      this.hungerLvl--;
    }, 1000);
  };
};