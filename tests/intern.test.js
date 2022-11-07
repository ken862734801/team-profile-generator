const Intern = require("../lib/intern");

test("set the university by passing a fifth argument", () => {
    const intern = new Intern("Cesar", "Alvarez", "0333", "cesaralvarez@gmail.com", "University of Florida");
    expect(intern.school).toBe("University of Florida");
});