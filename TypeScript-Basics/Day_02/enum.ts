
/**
 * Enum representing different sizes.
 * 
 * @enum {string}
 * @property {string} SMALL - Represents the small size.
 * @property {string} MEDIUM - Represents the medium size.
 * @property {string} LARGE - Represents the large size.
 */

/**
 * Logs the values of the Size enum to the console.
 * 
 * @example
 * console.log(Size.SMALL); // Output: 'a'
 * console.log(Size.MEDIUM); // Output: 'b'
 * console.log(Size.LARGE); // Output: 'c'
 */

/**
 * Function to get the description of a given size.
 * 
 * @param {Size} size - The size to get the description for.
 * @returns {string} The description of the given size.
 * 
 * @example
 * console.log(getSizeDescription(Size.MEDIUM)); // Output: 'Medium size'
 */


const small = 1;
const medium = 2;
const large = 3; 

const enum Size{
    SMALL = 'a',
    MEDIUM = 'b',
    LARGE = 'c'
}

const mySize = Size.MEDIUM

console.log(Size.SMALL);
console.log(Size.MEDIUM);
console.log(Size.LARGE);

// function getSizeDescription(size: Size): string {
//     switch (size) {
//         case Size.SMALL:
//             return 'Small size';
//         case Size.MEDIUM:
//             return 'Medium size';
//         case Size.LARGE:
//             return 'Large size';
//         default:
//             return 'Unknown size';
//     }
// }

// console.log(getSizeDescription(mySize)); // Output: 'Medium size'