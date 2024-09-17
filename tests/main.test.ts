import {it, describe, expect, test} from 'vitest';

/*the describe function is used to group tests together
it takes a string as the first argument and a function as the second argument
the string is the description of the group of tests
the function is the test suite that contains the tests
*/

/* the it function is used to write individual tests
it takes a string as the first argument and a function as the second argument
the string is the description of the test
the function is the test itself
 */

describe('group', () => {
    it('should', () => {
        expect(1).toBe(1);
    })
})