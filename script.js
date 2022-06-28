

const txtInput = document.querySelector('.inputs input'),
    checkBtn = document.querySelector('.inputs button'),
    infoTxt = document.querySelector('.info-text');
let filterInput;

checkBtn.addEventListener('click', () => {
    //splitting user input character, reversing them,
    // and joining them in a single word
    
    let reverseInput = filterInput.split('').reverse().join('');  // split('') method split the string into array of string by separating string into sub strings, reverse() method reverses an array. join('') method joins all elements of an array into a string.
    infoTxt.style.display = 'block';
    if (filterInput != reverseInput) {
        return infoTxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome!`;
    }
    infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!`;
})

txtInput.addEventListener('keyup', () => {

    // removing all spaces and special charecters from entered value
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if (filterInput) {
        checkBtn.classList.add('active');
    } else {
        checkBtn.classList.remove('active');
        infoTxt.style.display = 'none';
    }


})