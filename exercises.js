
const form = document.querySelector('.form1');
const inputStr = form.querySelector('.inputStr')
const resultStr = form.querySelector('.resultStr')
const inputNum = form.querySelector('.inputNum')
const resultNum = form.querySelector('.resultNum')
const inputSen = form.querySelector('.inputSen')
const resultSen = form.querySelector('.resultSen')
const numberChunk = form.querySelector('.numberChunk')
const inputline = form.querySelector('.inputline')
const resultline = form.querySelector('.resultline')
const inputvowel = form.querySelector('.inputvowel')
const resultvowel = form.querySelector('.resultvowel')
const inputBinary = document.querySelector('.binary1')
const resultBinary = document.querySelector('.resultbin')
// Array Main 
const products = [
    {
        title: "Product 1",
        price: 323.43,
        sales: 13
    },
    {
        title: "Product 2",
        price: 134,
        sales: 7
    },
    {
        title: "Product 3",
        price: 245.43,
        sales: 4
    },
    {
        title: "Product 4",
        price: 106.43,
        sales: 20
    }
]

// ============
// Exercise ======= 2 =========
// ============

form.addEventListener('submit', function (e) {
    e.preventDefault();
    resultStr.textContent = ''
    resultNum.textContent = ''
    resultSen.textContent = ''
    resultStr.textContent = reverseWord(inputStr.value)
    resultNum.textContent = reverseNumber(inputNum.value)
    resultSen.textContent = chunk(inputSen.value, Number(numberChunk.value))
    printTriangle(inputline.value)
    vowelCount(inputvowel.value)
    resultBinary.textContent = binarySearch('', Number(inputBinary.value))

})



// revers word 
function reverseWord(string) {
    // if word more than four characters reverseWord
    if (string.length >= 4) {
        string = string.split('').reduce((rev, char) => char + rev, '')
        string = string.charAt(0).toUpperCase() + string.slice(1)
        return string
    }
    // if string less than four characters do not reverse
    else {
        return string
    }
}

// Reverse the Number without change typeof
function reverseNumber(num) {
    return Number(String(num).split("").reverse().join(""))
}

// =================
// Exercise 3
// =================

//capitalize every word from that sentence
function capitalize(mySentence) {
    // The first step we take is to split the sentence into an array of words
    const words = mySentence.split(" ");
    // Iterate over each word
    for (let i = 0; i < words.length; i++) {
        // loop over the array of words and capitalize the first letter of each word.
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    // return the sentence as a string
    return words.join(' ')
}

// What is the above code doing? It iterates over each word, and it replaces it with the uppercase of the first letter + the rest of the string.
// If we take "freeCodeCamp" as an example, it looks like this freeCodeCamp = F + reeCodeCamp
// After it iterates over all the words, the words array is ["FreeCodeCamp", "Is", "An", "Awesome", "Resource"]. However, we have an array, not a string, which is not what we want.
// The last step is to join all the words to form a sentence. So, how do we do that?
// اخر شي حصلنا على مصفوفه ونريد تحويلها الى سترينق بعمل ميثود لها وهي join


function chunk(mySentence, n) {
    // The first step we take is to split the sentence into an array of words
    const words = mySentence.split(" ");
    // create a new array of words
    let res = [];
    // Iterate over each word
    for (let i = 0; i < n; i++) {
        // loop over the array in mySentence depend on n numbers
        const item = words[i]
        // if not found n or words length equal to n push item 
        if (!n || words.length === n) {
            res.push(item)
        }
        else {
            res.push(item)
        }
    }
    return res
}

// ============
// Exercise ======= 4 =========
// ============

// print inverted triangle 
function printTriangle(length) {
    let line = "";
    // Iterate over each length 
    for (var i = 1; i <= length; i++) {
        line += "#".repeat(i) + "\n";
    }
    // inverted triangle 
    line = line.split('').reverse().join('')
    // add line in element and return
    return resultline.innerHTML = line + '\n';

}

// create a function that test a string if it exists vowel characters
function vowelCount(str) {
    // if not already string requested message
    if (str === '' || str === null) {
        return null
    }
    // Match the vowel characters in the string
    let vowels = /[aeiou]/gi;
    // extract the vowels characters 
    let result = str.match(vowels);
    // show the length of the vowel characters
    let count = result.length;
    // if the count is exists or more than zero show the length
    if (count < 1) {
        return resultvowel.textContent = `There aren't any vowel characters`

    }
    // otherwise show this message
    else {
        return resultvowel.textContent = `There are ${count} vowel characters`

    }
}

// ============
// Exercise ======= 5 =========
// ============

function fixSortedArray(arr) {
    arr = [1, 2, 4, 9, 20, 65, 10, 70, 90, 2]
    // Duplicate numbers will be deleted
    arr = Array.from(new Set(arr))
    // sort the numbers from smallest to largest
    let mySorted = arr.sort((a, b) => a - b)
    return mySorted
}


function binarySearch(sortedArray, value) {
    sortedArray = fixSortedArray(sortedArray)
    let left = 0;
    let right = sortedArray.length - 1;

    while (left <= right) {
        console.log('Search operation from binary on a sortd array')
        const mid = Math.floor((left + right) / 2)
        const midValue = sortedArray[mid]

        if (midValue === value) {
            return mid
        }
        else if (midValue < value) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }
    return - 1 + " Isn't there"
}

// ============
// Exercise ======= 6 =========
// ============

function merge(a, b) { }

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function sumAverage(arr) {
    // selectionSort

    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        let array = arr[i]
        for (let j = 0; j < array.length; j++) {
            sum += array[j] / 2
            sum = Number(sum.toFixed(2))
        }
        array.unshift(sum)
    }

    return arr
}


function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swapIdx = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[swapIdx]) {
                swapIdx = j
            }
        }
        swap(arr, i, swapIdx)
    }
    return arr
}

// Sort String 
function sortText(text) {

    let array = text.toLowerCase().split(' ')

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        for (let j = 0; j < element.length - 1; j++) {
            const element = array[j];
            if (array[j][0] > array[j + 1][0]) {
                [array[j + 1], array[j]] = [array[j], array[j + 1]]
            }
        }
    }
    console.log(array.join(' '))
}

function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        const temp = array[i];
        let j = i - 1

        while (array[j] > temp) {
            array[j + 1] = array[j]
            j--
        }
        j++
        array[j] = temp
    }

    return array
}

function insertionSortInput() {
    let array = []

    while (true) {
        let input = prompt('Enter')
        array.push(input)
        if (input === '' || input === '.') {
            break;
        }
        let i = array.length
        let j = i - 1

        while (array[j - 1] > array[j]) {
            [array[j - 1], array[j]] = [array[j], array[j - 1]]
            j--
        }
        console.log(array)
    }

}
// insertionSortInput()
//     (function test() {
//         var testArray = [3, 4, 2, 1]
//         console.log(insertionSort(testArray))
//     })()


function quickSort(array, left, right) {
    left = left || 0;
    right = right || array.length - 1;

    const pivot = partitionHoare(array, left, right);

    if (left < pivot - 1) {
        quickSort(array, left, pivot - 1);
    }

    if (right > pivot) {
        quickSort(array, pivot, right);
    }

    return array;
}


function partitionHoare(array, left, right) {
    const pivot = Math.floor((left + right) / 2);

    while (left <= right) {
        while (array[left].sales > array[pivot].sales) {
            left++;
        }

        while (array[right].sales < array[pivot].sales) {
            right--;
        }

        if (left <= right) {
            [array[left], array[right]] = [array[right], array[left]];
            left++;
            right--;
        }
    }

    return left;
}


(function test() {
    const testArray1 = [4, 5, 2, 1, 3, 8]
    const testArray2 = [5, 5, 6, 100, 3, 5, 2, 1, 5, 7, 8888, 4]
    const testArray3 = [2, 1]

    console.log(quickSort(products))
})()