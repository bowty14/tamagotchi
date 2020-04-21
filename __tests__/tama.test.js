import { Tama } from './../src/tama.js';

describe("Tama", () => {
  jest.useFakeTimers();
  let tama;
  beforeEach(() => {
    tama = new Tama();
    tama.setSleep();
    tama.setHunger();
    tama.setAttention();
    tama.setPlay();
    tama.resetP();
    tama.resetA();
    tama.resetH();
    tama.resetS();
    

  })
    test("there is a tamagotchi object with multiple properties", () => {
    expect(tama.sleepLvl).toEqual(0);
    expect(tama.attentionLvl).toEqual(20);
    expect(tama.playLvl).toEqual(20);
    expect(tama.hungerLvl).toEqual(20);
//   tama = new Tama ();
    })
  test('sleepLvl should be 3 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(60001);
    expect(tama.sleepLvl).toEqual(1);
  });
  test('hungerLvl should be 17 after 3001 milliseconds', () => { 
    jest.advanceTimersByTime(60001);
    expect(tama.hungerLvl).toEqual(19);
  });
  test('attentionLvl should be 17 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(60001);
    expect(tama.attentionLvl).toEqual(19);
  });
  test('playLvl should be 17 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(60001);
    expect(tama.playLvl).toEqual(19);
  });
  test('reset, resets the value of the property play after the set interval',() => {
    expect(tama.playLvl).toEqual(20);
  });
  test('reset, resets the value of the property sleep after the set interval', () => {
    expect(tama.sleepLvl).toEqual(0);
  });
  test('reset, resets the value of the property attention after the set interval', () => {
    expect(tama.attentionLvl).toEqual(20);
  });
  test('reset, resets the value of the property hunger after the set interval', () => {
    expect(tama.hungerLvl).toEqual(20);
  });
});
