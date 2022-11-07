const Manager = require("../lib/manager");

test("set the office number by passing a fifth argument", () => {
    const manager = new Manager("Cesar", "Alvarez", "0333", "cesaralvarez@gmail.com", "012");
    expect(manager.officeNumber).toBe("012");
});
