const cutting = require('./forum');

test('returns "Andersen We"', () => {
    expect(cutting('Andersen We Test Programmers', 14)).toBe("Andersen We")
});


test('returns "Andersen"', () => {
    expect(cutting('Andersen We Test Programmers', 10)).toBe("Andersen")
});


test('returns "   Andersen"', () => {
    expect(cutting('   Andersen We Test Programmers   ', 16)).toBe("   Andersen We")
});

