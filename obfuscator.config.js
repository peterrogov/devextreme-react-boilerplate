/**
 * https://github.com/javascript-obfuscator/javascript-obfuscator#medium-obfuscation-optimal-performance
 */

module.exports = {
    /**
     * Compact code output on one line.
     */
    compact: true,
    /**
     * Enables code control flow flattening. Control flow flattening is a structure 
     * transformation of the source code that hinders program comprehension.
     */
    controlFlowFlattening: false,
    /**
     * Type: number Default: 0.75 Min: 0 Max: 1
     * The probability that the controlFlowFlattening transformation will be 
     * applied to any given node.
     */
    controlFlowFlatteningThreshold: 0,
    /**
     * Dramatically increases size of obfuscated code (up to 200%), use only if 
     * size of obfuscated code doesn't matter. Use deadCodeInjectionThreshold to set 
     * percentage of nodes that will affected by dead code injection.
     * 
     * This option forcibly enables stringArray option.
     * 
     * With this option, random blocks of dead code will be added to the obfuscated code.
     */
    deadCodeInjection: true,
    /**
     * Type: number Default: 0.4 Min: 0 Max: 1
     * Allows to set percentage of nodes that will 
     * affected by deadCodeInjection.
     */
    deadCodeInjectionThreshold: 0.25,
    /**
     * Can freeze your browser if you open the Developer Tools.
     * This option makes it almost impossible to use the debugger function of the 
     * Developer Tools (both on WebKit-based and Mozilla Firefox).
     */
    debugProtection: true,
    /**
     * If checked, an interval is used to force the debug mode on the Console tab, 
     * making it harder to use other features of the Developer Tools. 
     * Works if debugProtection is enabled.
     */
    debugProtectionInterval: false,
    /**
     * Disables the use of console.log, console.info, console.error, console.warn, 
     * console.debug, console.exception and console.trace by replacing them with 
     * empty functions. This makes the use of the debugger harder.
     */
    disableConsoleOutput: true,
    /**
     * Sets identifier names generator.
     * 
     * Available values:
     * - `dictionary`: identifier names from identifiersDictionary list
     * - `hexadecimal`: identifier names like _0xabc123
     * - `mangled`: short identifier names like a, b, c
     * - `mangled-shuffled`: same as mangled but with shuffled alphabet
    */
    identifierNamesGenerator: 'mangled',
    /**
     * Enables numbers conversion to expressions
     */
    numbersToExpressions: false,
    /**
     * (!) This option can break your code. 
     * 
     * Enables obfuscation of global variable and function names with declaration.
     */
    renameGlobals: false,
    /**
     * https://github.com/javascript-obfuscator/javascript-obfuscator#selfdefending
     * This option makes the output code resilient against formatting and variable 
     * renaming. If one tries to use a JavaScript beautifier on the obfuscated code, 
     * the code won't work anymore, making it harder to understand and modify it.
     */
    selfDefending: true,
    /**
     * Enables additional code obfuscation through simplification.
     */
    simplify: true,
    /**
     * Splits literal strings into chunks with length of splitStringsChunkLength 
     * option value.
     */
    splitStrings: false,
    /**
     * Sets chunk length of splitStrings option.
     */
    splitStringsChunkLength: 10,
    /**
     * Removes string literals and place them in a special array. For instance, 
     * the string "Hello World" in `var m = "Hello World";` will be replaced with 
     * something like `var m = _0x12c456[0x1];`
     */
    stringArray: true,
    /**
     * Encode all string literals of the stringArray using base64 or rc4 and inserts 
     * a special code that used to decode it back at runtime.
     * 
     * Each stringArray value will be encoded by the randomly picked encoding from 
     * the passed list. This makes possible to use multiple encodings.
     * 
     * Available values:
     * 
     * 'none' (boolean):    doesn't encode stringArray value
     * 
     * 'base64' (string):   encodes stringArray value using base64
     * 
     * 'rc4' (string):      encodes stringArray value using rc4. About 30-50% slower 
     *                      than base64, but more harder to get initial values.  
     *                      It's recommended to disable unicodeEscapeSequence option 
     *                      when using rc4 encoding to prevent very  large size of 
     *                      obfuscated code.
     */
    stringArrayEncoding: ['base64', 'rc4'],
    /**
     * Enables additional index shift for all string array calls
     */
    stringArrayIndexShift: true,
    /**
     * Shift the stringArray array by a fixed and random (generated at the code obfuscation) 
     * places. This makes it harder to match the order of the removed strings to their 
     * original place.
     */
    stringArrayRotate: true,
    /**
     * Randomly shuffles the stringArray array items.
     */
    stringArrayShuffle: true,
    /**
     * Sets the count of wrappers for the string array inside each root or function 
     * scope. The actual count of wrappers inside each scope is limited by a count 
     * of literal nodes within this scope.
     */
    stringArrayWrappersCount: 2,
    /**
     * Enables the chained calls between string array wrappers.
     */
    stringArrayWrappersChainedCalls: true,
    /**
     * Allows to control the maximum number of string array wrappers parameters. 
     * Default and minimum value is 2. Recommended value between 2 and 5.
     */
    stringArrayWrappersParametersMaxCount: 4,
    /**
     * Allows to select a type of the wrappers that are appending by the 
     * stringArrayWrappersCount option.
     * 
     * Available values:
     * 'variable':  appends variable wrappers at the top of each scope. Fast performance.
     * 'function':  appends function wrappers at random positions inside each scope. 
     *              Slower performance than with variable but provides more strict obfuscation.
     * 
     * Highly recommended to use function wrappers for higher obfuscation when a performance 
     * loss doesn't have a high impact on an obfuscated application.
     */
    stringArrayWrappersType: 'function',
    /**
     * You can use this setting to adjust the probability (from 0 to 1) that a string 
     * literal will be inserted into the stringArray.
     * 
     * This setting is especially useful for large code size because it repeatedly calls 
     * to the string array and can slow down your code.
     */
    stringArrayThreshold: 0.75,
    /**
     * Enables transformation of object keys.
     */
    transformObjectKeys: true,
    /**
     * Allows to enable/disable string conversion to unicode escape sequence.
     * 
     * Unicode escape sequence increases code size greatly and strings easily can be reverted 
     * to their original view. Recommended to enable this option only for small source code.
     */
    unicodeEscapeSequence: false
}