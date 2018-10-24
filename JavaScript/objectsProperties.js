// Objects and Properties

$(function() {
    var jason = test();
    console.log("My name is " + jason.name + " and my favorite team is the " + jason.favorite_team + "... my country is the good ole " + jason.country);
  
    var birthday = new Date("December 25, 2017")
    console.log("Birthday " + birthday);
  });
  
  function test() {
    var person = {
      name: "jason",
      age: 42,
      city: "Phoenix",
      state: "AZ",
      favorite_team: "Arizona"
    }
    person.age > 50 ? person.country = "canada" : person.country = "USA";
    return person;
  }