"use strict";

const pii = (function () {
  let ssn = "001912929";
  return {
    name: "Mateo Ospina",
    getName(name) {
      return this.getName;
    },
  };
})();

pii.ssn = `Look somewhere else for the SSN`;

console.log(pii.name);
console.log(pii.ssn);
