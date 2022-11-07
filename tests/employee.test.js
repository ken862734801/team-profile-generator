const Employee = require("../lib/employee");

test("set the first name by passing a constructor argument", () => {
    const employee = new Employee("Cesar");
    expect(employee.firstName).toBe("Cesar");
});

test("set the last name by passing a second constructor argument", () => {
    const employee = new Employee("Cesar", "Alvarez");
    expect(employee.lastName).toBe("Alvarez");
});

test("set the employee id by pass a third constructor argument", () => {
    const employee = new Employee("Cesar", "Alvarez", "0333");
    expect(employee.id).toBe("0333");
});

test("set the employee email by passing a fourth constructor argument", () => {
    const employee = new Employee("Cesar", "Alvarez", "0333", "cesaralvarez@gmail.com");
    expect(employee.email).toBe("cesaralvarez@gmail.com");
});


