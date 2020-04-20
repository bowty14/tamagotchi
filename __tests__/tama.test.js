import { Tama } from './../src/tama.js';

describe("Tama", () => {
  jest.useFakeTimers();
  let tama;
  beforeEach(() => {
    tama = new Tama();
    tama.setSleep();
    tama.setHunger();

  })
    test("there is a tamagotchi object with multiple properties", () => {
    expect(tama.sleepLvl).toEqual(0);
    expect(tama.attentionLvl).toEqual(20);
    expect(tama.playLvl).toEqual(20);
    expect(tama.hungerLvl).toEqual(20);
//   tama = new Tama ();
    })
  test('sleepLvl should be 3 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(3001);
    expect(tama.sleepLvl).toEqual(3);
  });
  test('hungerLvl should be 17 after 3001 milliseconds', () => { 
    jest.advanceTimersByTime(3001);
    expect(tama.hungerLvl).toEqual(17);
  });
});
  