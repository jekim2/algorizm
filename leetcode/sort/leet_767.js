/* 767. Reorganize String

Share
Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

If possible, output any possible result.  If not possible, return the empty string.

Example 1:

Input: S = "aab"
Output: "aba"
Example 2:

Input: S = "aaab"
Output: "" */

/**
 * @param {string} S
 * @return {string}
 */
// var reorganizeString = function(S) {
//     var prev_array = S.split("").slice(0, Math.floor(S.length/2)).sort((a,b) => { if (a < b) return -1; else if (a > b) return 1; else return 0;});
//     var after_Array = S.split("").slice(Math.floor(S.length/2), S.length).sort((a,b) => { if (a < b) return 1; else if (a > b) return -1; else return 0;});

//     var result = [];

//     console.log(prev_array);
//     console.log(after_Array);

//     result.push(prev_array[0]);

// //     for (var i =0; i< result.length; i++) {
// //         result.push(prev_array[i]);
// //         for (var j =0; j< after_Array.length; i++) {
// //             if (prev_array[i] !== after_Array[j]) {
// //                 result.push(after_Array[j]);
// //                 break;
// //             }
// //         }
// //     // for (var i =0; i< S.length; i++) {
// //     //     result.push(prev_array[i]);
// //     //     result.push(after_Array[i]);
// //     // }
// // //   s.split("").map((x)=> {

// // //   });
// //     };
// }

var reorganizeString = function(S) {
    if (S.length  < 1) return "";
    var obj = {};
    for(var char of S){
        obj.hasOwnProperty(char) ?  obj[char] += 1 : obj[char] = 1;
    }
    console.log('obj >> ', obj);
    var temp_array = [];
    temp_array = Object.entries(obj).sort((a,b) => b[1] - a[1]);
    console.log('temp_array >> ', temp_array);

    if (temp_array.length == 1) return "";

    var idx = 0;
    // var prevLetter;
    var result = new Array(S.length);
    // var result = [];
    for (var i =0 ; i < temp_array.length ; i++) {
        var count = temp_array[i][1];

        // 처음에 문자는 그냥 넣기
        if (i !== 0) {
            idx = result.findIndex(e => e === undefined);
        }
        console.log('idx >> ' , idx);

        // if (!idx) {
        //     console.log('result >> ' , result.join(""));
        //     return '';
        // }

        while(count > 0) {
            // prevLetter = temp_array[i][0];
            result[idx] =  temp_array[i][0];
            idx += 2;
            count --;
        }

    }

    if (result.includes(undefined)) return "";
    console.log('result >> ' , result);
    console.log('result >> ' , result.join(""));

    return result.join("");

}

// reorganizeString("ab");
reorganizeString("tndsewnllhrtwsvxenkscbivijfqnysamckzoyfnapuotmdexzkkrpmppttficzerdndssuveompqkemtbwbodrhwsfpbmkafpwyedpcowruntvymxtyyejqtajkcjakghtdwmuygecjncxzcxezgecrxonnszmqmecgvqqkdagvaaucewelchsmebikscciegzoiamovdojrmmwgbxeygibxxltemfgpogjkhobmhwquizuwvhfaiavsxhiknysdghcawcrphaykyashchyomklvghkyabxatmrkmrfsppfhgrwywtlxebgzmevefcqquvhvgounldxkdzndwybxhtycmlybhaaqvodntsvfhwcuhvuccwcsxelafyzushjhfyklvghpfvknprfouevsxmcuhiiiewcluehpmzrjzffnrptwbuhnyahrbzqvirvmffbxvrmynfcnupnukayjghpusewdwrbkhvjnveuiionefmnfxao");
let reorganizeString = function (S) {
    let frequencyMap = generateFrequencyMap(S);

    let charactersByFrequency = Object.keys(frequencyMap).sort((a, b) => frequencyMap[b] - frequencyMap[a]);

    let res = new Array(S.length); // the result will be the size of S since we have to use all the same characters. Technically we could initialize it as empty []
    let characterIndex = 0;

    // go through every character in S.length
    for (let i = 0; i < S.length; i++) {
        // select a character, starting with the most frequently occuring one
        const totalOccurrences = frequencyMap[charactersByFrequency[i]];

        // place all occurrences of the total character in an either even or odd position.
        // we fill all the even spaces up in the array first, then all the odd
        for (let j = 0; j < totalOccurrences; j++) {

            // if fill all the evens, and are about to exceed the length of our array, we need to start filling the odds
            // the odds start at 1, so we set our character index there.
            // We will never exceed S.length when we are filling the odd indexes up, because there are not enough characters to do that
            if (characterIndex >= S.length) {
                characterIndex = 1;
            }

            // set the result at characterIndex to the current character
            res[characterIndex] = charactersByFrequency[i];

            // whether we are currently filling odds or evens, we need to iterate by 2.
            characterIndex += 2;
        }
    }

    // check if the same character appears twice in a row
    for (let i = 1; i < res.length; i++) {
        if (res[i] === res[i - 1]) {
            return "";
        }
    }

    // return in string form
    return res.join('');
};

function generateFrequencyMap(str) {
    let map = {};
    for (let i = 0; i < str.length; i++) {
        if (map[str[i]] !== undefined) {
            map[str[i]]++;
        } else {
            map[str[i]] = 1;
        }
    }
    return map;
}

/*
    Given string: "avabapaqv"
    1.) Fill all the evens to size S, with highest occurring. Until we run out of room, in this example we run out of room after length 9.
    [a_a_a_a__]
    -> next character, 2 v's
    [a_a_a_a_v] (note: only 1 of 2 v's)
    -> character index has exceeded the length. We need to start placing characters starting from the first odd (1)

    2.) Now that we have all the evens filled up, lets start on the odds, fill up the rest of the odds
    [ava_a_a_v]
    -> v's are done, keep moving along
    [avaba_a_v]
    -> b's done
    [avabapa_v]
    -> p's done
    [avabapaqv] (this is the result)
    -> q's done

    done!
*/