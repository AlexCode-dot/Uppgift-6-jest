 function changeText(text)
    {
    return text.toUpperCase();
    console.log(text);
    }

describe("test suite", () => {
test("test case 1", () => {
    
    const text = "hello world";
    const expectedResult = "HELLO WORLD";
    

    expect(changeText(text)).toBe(expectedResult);

});

});

