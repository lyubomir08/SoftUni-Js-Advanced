function wordsUppercase(text) {
    let transformedText = text.toUpperCase();
    let wordArr = transformedText.split(/\W+/);
    let filteredArr = wordArr.filter(x => !!x);
    console.log(filteredArr.join(', '));
}

wordsUppercase('Hi, how are you?');
// wordsUppercase('hello');