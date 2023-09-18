'use strict';

function MakeMultiFilter(originalArray) {
    function arrayFilterer(filterCriteria, callback) {
        let currentArray = originalArray.splice();
        //for loop that runs filterCriteria function
        console.log(currentArray.length);
        for (let i = 0; i < currentArray.length; i++) {
            if (!filterCriteria(currentArray[i])) {
                console.log(currentArray[i]);
                currentArray.splice(i, i);
            }
        }
        console.log(originalArray);
        console.log(currentArray);
        //callback
    }
    return arrayFilterer;
}

const arr = [1, 2, 3];
var arrayFilterer1 = MakeMultiFilter(arr);
arrayFilterer1(function(elem) {return elem !== 2;}, function() {});