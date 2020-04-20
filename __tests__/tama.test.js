import { Tama } from './../src/tama.js';

describe("Tama", () => {
  
  let tama;
  beforeEach(() => {
    tama = new Tama ();

  })
    test("there is a tamagotchi object with multiple properties", () => {
    expect(tama.sleepLvl).toEqual(0);
    expect(tama.attentionLvl).toEqual(20);
    expect(tama.playLvl).toEqual(20);
    expect(tama.hungerLvl).toEqual(20);
//   tama = new Tama ();
    })
  });
  