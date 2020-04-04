let passworchecker = require("../src/passwordchecker")


describe("password is Valid function", () =>  {
    it(`should return password Valid`, () => {
        expect(password_is_Valid("")).toBe(`password should exist`)
});
it(`should return password is Valid`, () => {
    expect(password_is_Valid).toBe(`password hve eight characters`)
});
it(`should return password is Vlid`, () => {
    exepect(password_is_Valid('Yangaaa1@')).toBe(`password should have have at least one lowercase letter`)
});
it(`should return password is Valid`, () => {
    expect(password_is_Valid(`should have at least one uppercase letter`))
});
it(`should return password is Valid`, () => {
    expect(password_is_Valid(`should have  at least have one digit`))
});
it(`should return password is Valid`, () => {
    expect(password_is_Valid(`should have  at least one special character`))
});
});