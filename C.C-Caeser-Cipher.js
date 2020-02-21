// return character 13 place after so if "A" return "N" [65+13=78]


function rot13(str){
    console.log(str);
    console.log(str.charCodeAt())//65
    
    let result =""

    for (let index = 0; index < str.length; index++) {
        let ascii = str[index].charCodeAt()
        if(ascii>=65&&ascii<=77){
          result+= String.fromCharCode(ascii+13)

        }else if(ascii>=78&& ascii<=90){
            result+= String.fromCharCode(ascii-13)
        }
        else{
            result+=str[index]
        }        
        
    }
    return result
    
}

console.log(rot13("SERR PBQR PNZC"));

