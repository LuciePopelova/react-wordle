import { TileStatusType } from "../constants/tileConstants";

export const getTileStatuses = (guessArray: Array<string>, word: string) => {
  const wordArray = word.split('');

 return guessArray.map((guess, index) => {
    if (guess === wordArray[index]) {
      return TileStatusType.TILE_STATUS_CORRECT;
    }
    if (word.includes(guess)) {
      return TileStatusType.TILE_STATUS_PRESENT;
    }

    return TileStatusType.TILE_STATUS_ABSENT;
  });
}


export const getKeyStatuses = (guessArray: Array<string>, word: string) => {
  const wordArray = word.split('');
  const keysObj: { [key: string]: TileStatusType } = {}

  guessArray.forEach((guess) => {
    guess.split('').forEach((letter, i) => {
      if (letter === wordArray[i]) {
        return (keysObj[letter] = TileStatusType.TILE_STATUS_CORRECT)
      }

      if (word.includes(letter)) {
        return (keysObj[letter] = TileStatusType.TILE_STATUS_PRESENT)
      }
     
        return (keysObj[letter] = TileStatusType.TILE_STATUS_ABSENT);
    })
  })

  return keysObj;
}