let sum = (num1, num2) => num1 + num2;

describe("Practice Tests", () => {
    test("Sum function add 1+2 to equal 3", () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('null', () => {
        const n = null;
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();
    });

    test('zero', () => {
        const z = 0;
        expect(z).not.toBeNull();
        expect(z).toBeDefined();
        expect(z).not.toBeUndefined();
        expect(z).not.toBeTruthy();
        expect(z).toBeFalsy();
    });

    test('two plus two', () => {
        const value = 2 + 2;
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(3.5);
        expect(value).toBeLessThan(5);
        expect(value).toBeLessThanOrEqual(4.5);

        // toBe and toEqual are equivalent for numbers
        expect(value).toBe(4);
        expect(value).toEqual(4);
    });

    test('adding floating point numbers', () => {
        const value = 0.1 + 0.2;
        //expect(value).toBe(0.3); //This won't work because of rounding error
        expect(value).toBeCloseTo(0.3); // This works.
    });

    test('there is no I in team', () => {
        expect('team').not.toMatch(/I/);
    });

    test('but there is a "stop" in Christoph', () => {
        expect('Christoppppph').toMatch(/stop+/);
    });

    const shoppingList = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'milk'];

    test('the shopping list has milk on it', () => {
        expect(shoppingList).toContain('milk');
        expect(new Set(shoppingList)).toContain('milk');
    });
});