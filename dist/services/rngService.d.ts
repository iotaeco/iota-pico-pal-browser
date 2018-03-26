import { IRngService } from "@iota-pico/core/dist/interfaces/IRngService";
/**
 * Implementation of random number generation service.
 */
export declare class RngService implements IRngService {
    /**
     * Create a new instance of RngService.
     */
    constructor(randomSource?: RandomSource);
    /**
     * Generate an array of random numbers.
     * @param length The number of numbers to generate.
     * @returns Array of random number generators.
     */
    generate(length: number): Uint8Array;
}
