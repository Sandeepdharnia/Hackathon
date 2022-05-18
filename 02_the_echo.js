const yodel = "Yodelayheeeeehooooo";

const checkEcho = word => {
  let newWord = "";
  if (word.length === 1) {
    return word;
  }

  newWord = word.slice(0, word.length - 2);
  console.log(newWord);
  checkEcho(newWord);
};

checkEcho(yodel); // "Yodelayheeeeehooooo", "Yodelayheeeeehooo", "Yodelayheeeeeho", "Yodelayheeeee" ... until "Y"
