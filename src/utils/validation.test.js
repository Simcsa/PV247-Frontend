import { validateNonEmptyness } from "./validation";

const fullName = 'fullName';

describe('validateNonEmptyness', () => {
    it('should validate empty string as empty', () => {
        expect(validateNonEmptyness(fullName)('')).toEqual(`Provide us with a ${fullName}`);
    });
    it('should validate null as empty', () => {
        expect(validateNonEmptyness(fullName)(null)).toEqual(`Provide us with a ${fullName}`);
    });
    it('should validate unempty string without message', () => {
        expect(validateNonEmptyness(fullName)('Janko')).toEqual(undefined);
    })
});