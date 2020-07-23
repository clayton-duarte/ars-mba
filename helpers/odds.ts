import { Character } from "../types";

export function useOdds(char: Character) {
  const { endurance, strength, accuracy, mobility } = char;

  // UTIL
  const rollDices = (quantity: number) => {
    const dice = () => Math.ceil(Math.random() * 6);
    const rolls = [...Array(quantity)].map(dice);

    const isOdd = (num: number) => num % 2;
    const reduceRolls = (prev, curr) => prev + isOdd(curr);
    const total = rolls.reduce(reduceRolls, 0);

    return {
      total,
      rolls,
    };
  };

  // STATS
  const rollEndurance = () =>
    alert(JSON.stringify(rollDices(endurance), null, 2));
  const rollStrength = () =>
    alert(JSON.stringify(rollDices(strength), null, 2));
  const rollAccuracy = () =>
    alert(JSON.stringify(rollDices(accuracy), null, 2));
  const rollMobility = () =>
    alert(JSON.stringify(rollDices(mobility), null, 2));

  // ACTIONS
  const rollParry = () =>
    alert(JSON.stringify(rollDices(endurance + strength), null, 2));
  const rollEvade = () =>
    alert(JSON.stringify(rollDices(mobility + accuracy), null, 2));
  const rollShot = () =>
    alert(JSON.stringify(rollDices(endurance + accuracy), null, 2));
  const rollHit = () =>
    alert(JSON.stringify(rollDices(mobility + strength), null, 2));

  return {
    rollDices,
    rollEndurance,
    rollStrength,
    rollAccuracy,
    rollMobility,
    rollParry,
    rollEvade,
    rollShot,
    rollHit,
  };
}
