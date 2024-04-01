function change(Enter){
return Enter.split('').map(letter => {
    if (letter === letter.toUpperCase()){
        return letter.toLowerCase();//it will change all uppercase letters to lowercase
    }else {
        return letter.toUpperCase();//this will do the vise versa
    }
}) .join('');   //It will join all the words without spacings
}
const Enter = 'The Quick Brown Fox';
const result = change(Enter);//This will change the above words according to the given function
console.log(result);