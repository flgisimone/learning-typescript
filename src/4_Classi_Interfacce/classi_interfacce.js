var Department = /** @class */ (function () {
    function Department(nameDep, numPeople) {
        this.name = nameDep;
        this.numPeople = numPeople;
    }
    return Department;
}());
var accountingDepartment = new Department("Accounting", 10);
console.log(accountingDepartment);
