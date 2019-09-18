function mutation(arr) {
    let firstWord = arr[0].toLowerCase();
    console.log(firstWord);
    let secondWord = arr[1].toLowerCase()
    console.log(secondWord);

    // for (var i = 0; i < secondWord.length; i++) {
    //     if (firstWord.indexOf(secondWord[i]) === -1) return false

    // }
    // return true

    for(var letter of secondWord ){
        if(firstWord.indexOf(letter)===-1)
        return false
    }
    return true

}

console.log(mutation(['hello', 'hello']));