import { TileStatusType } from "../constants/tileConstants";

export const getTileStatuses = (guessArray: Array<string>, word: string) => {
  let updatingWord = word;

 return guessArray.map((guess, index) => {
  const wordArray = updatingWord.split('');

    if (guess === wordArray[index]) {
      updatingWord = updatingWord.replace(guess, ' ');
      return TileStatusType.TILE_STATUS_CORRECT;
    }
    if (updatingWord.includes(guess)) {
      updatingWord = updatingWord.replace(guess, ' ');
      return TileStatusType.TILE_STATUS_PRESENT;
    }

    return TileStatusType.TILE_STATUS_ABSENT;
  });
}


export const getKeyStatuses = (guessArray: Array<string>, word: string) => {
  const keysObj: { [key: string]: TileStatusType } = {};
  const wordArray = word.split('');

  guessArray.forEach((guess) => {
    guess.split('').forEach((letter, i) => {

      if (letter === wordArray[i]) {
        return (keysObj[letter] = TileStatusType.TILE_STATUS_CORRECT);
      }

      if (word.includes(letter)) {
        return (keysObj[letter] = TileStatusType.TILE_STATUS_PRESENT);
      }
     
        return (keysObj[letter] = TileStatusType.TILE_STATUS_ABSENT);
    })
  })

  return keysObj;
}