const Engineer = require("../lib/engineer");

test("set the github username by passing a fifth argument", () => {
    const engineer = new Engineer("Cesar", "Alvarez", "0333", "cesaralvarez@gmail.com", "cesaralv");
    expect(engineer.github).toBe("cesaralv");
});

