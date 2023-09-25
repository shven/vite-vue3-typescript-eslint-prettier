import { describe, expect, test } from 'vitest';
import wait from './wait'; // Import your wait utility function

describe('wait utility function tests', () => {
    test('waits for the specified number of seconds', async () => {
        const startTime = Date.now();
        const secondsToWait = 2;
        await wait(secondsToWait);

        const endTime = Date.now();
        const elapsedTimeInSeconds = (endTime - startTime) / 1000;

        // Check if the elapsed time is approximately equal to the specified seconds
        expect(Math.round(elapsedTimeInSeconds)).toBe(secondsToWait);
    });
});
