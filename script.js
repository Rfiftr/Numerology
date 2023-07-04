// < -- גימטריה -- >
const array_letters = ['א','ב','ג','ד','ה','ו','ז','ח','ט','י','כ','ך','ל','מ','ם','נ','ן','ס','ע','פ','ף','צ','ץ','ק','ר','ש','ת'];
const array_value =   [1,2,3,4,5,6,7,8,9,10,20,20,30,40,40,50,50,60,70,80,80,90,90,100,200,300,400];
let str_numerology = "";
let sum_numerology = 0;



function search() {
    
    str_numerology = document.getElementById("id_numerology_value").value;
    str_numerology = str_numerology.replaceAll(' ', '')

    if (!(isHebrewString(str_numerology))){
        document.getElementById("eroor_numerology").innerHTML = "ניתן להמיר רק מילים בעברית"
        return null
    } else {
        document.getElementById("eroor_numerology").innerHTML = ""
    }

    for (let i = 0; i < str_numerology.length; i++){
        sum_numerology += (array_value[array_letters.indexOf(str_numerology[i])]) 
    }

    console.log(sum_numerology)
    document.getElementById("id_output_numerology").innerHTML = sum_numerology;
    sum_numerology = 0;
}


// < -- הצפנה -- > && < -- פיענוח -- > 
const select = document.getElementById("id_select");
const array_letters_encryption = [' ','א','ב','ג','ד','ה','ו','ז','ח','ט','י','כ','ך','ל','מ','ם','נ','ן','ס','ע','פ','ף','צ','ץ','ק','ר','ש','ת'];


function encode() {
    let str_encryption = document.getElementById("id_encryption_value").value;
    let encryption_key = parseInt(document.getElementById("id_encryption_key").value);
    
    let text_encoded = "";

    for(let i = 0; i < str_encryption.length; i++) {
        let encodedLetter = loopArr(str_encryption[i], encryption_key);
        text_encoded += encodedLetter;
    }
    
    document.getElementById("id_output_encryption").innerHTML = text_encoded
    console.log(text_encoded)
}

function loopArr(letter,iterations) {
    let index = array_letters_encryption.indexOf(letter);
    let loopCircle = index;

    for (let i = 0; i < iterations; i++){
        if (select.value === "encryption"){
            loopCircle = (loopCircle+1) % array_letters_encryption.length;
        } else if (select.value === "decoding"){
            loopCircle = (loopCircle-1 + array_letters_encryption.length) % array_letters_encryption.length;
        }
        
    }

    let encodedLetter = array_letters_encryption[loopCircle];
    return encodedLetter
}

function isHebrewString(str) {
    const hebrewRegex = /^[\u0590-\u05FF\s]+$/;
    return hebrewRegex.test(str);
}

