

function letterFinder(word, match) {
    // condition1 and condition2 used to impliment defensive programming, assuming the inputs are wrong and or wrong type and checking it before program execution 
    var condition1 = typeof (word) === 'string' && word.length > 2;
    var condition2 = typeof (match) === 'string' && match.length === 1;
    if (condition1 == true && condition2 == true) { //condition checkment
        for (var i = 0; i < word.length; i++) {
            if (word[i] == match) {
                // checks if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i);
            } else {
                console.log('---No match found at', i);
            }
        }
    }else{
        console.log('Please pass correct arguments to the function');
    }

}


// for failing test
letterFinder(1, 2);


// function involking
letterFinder('cat', 'a');