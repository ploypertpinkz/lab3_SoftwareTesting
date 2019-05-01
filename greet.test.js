const greet = require('./greet');

// ---------------------------------------Requirement 1-------------------------------------------------------------------------------
test('Write a method greet(name)', () =>{
    expect(greet("Bob"));
});

test('when name is "Bob", the method should return a string "Hello, Bob."', () =>{
    expect(greet("Bob")).toBe("Hello, Bob.");
});

test('when name is "Ploy", the method should return a string "Hello, Ploy."', () =>{
    expect(greet("Ploy")).toBe("Hello, Ploy.");
});

// ---------------------------------------Requirement 2-------------------------------------------------------------------------------
test('when name is null, then the method should return the string "Hello, my friend."', () =>{
    expect(greet(null)).toBe("Hello, my friend.");
});

// ---------------------------------------Requirement 3-------------------------------------------------------------------------------
test('When name is all uppercase, then the method should shout back to the user.1', () =>{
    expect(greet("BOB")).toBe("HELLO, BOB!");
});

test('When name is all uppercase, then the method should shout back to the user.2', () =>{
    expect(greet("JERRY")).toBe("HELLO, JERRY!");
});

// ---------------------------------------Requirement 4-------------------------------------------------------------------------------
test('When name is an array of two names (or, in languages that support it, varargs or a splat), then both names should be printed.1', () =>{
    expect(greet('["Jill", "Jane"]')).toBe("Hello, Jill and Jane.");
});

test('When name is an array of two names (or, in languages that support it, varargs or a splat), then both names should be printed.2', () =>{
    expect(greet('["Bob", "Ploy"]')).toBe("Hello, Bob and Ploy.");
});

// ---------------------------------------Requirement 5-------------------------------------------------------------------------------
test('When name represents more than two names, separate them with commas and close with an Oxford comma and "and".1', () =>{
    expect(greet('["Amy", "Brian", "Charlotte"]')).toBe("Hello, Amy, Brian, and Charlotte.");
});

test('When name represents more than two names, separate them with commas and close with an Oxford comma and "and".2', () =>{
    expect(greet('["Bee", "Mind", "Ploy"]')).toBe("Hello, Bee, Mind, and Ploy.");
});