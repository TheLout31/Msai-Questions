function Animal(type) {
    this.type = type;
  }
  
  Animal.prototype.sound = function () {
    console.log(`${this.type} ${this.sound}!!`);
  };
  
  function Dog(type, sound) {
    Animal.call(this, type); // inherit properties
    this.sound = sound;
  }
  
  // inherit prototype methods
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  let doggei = new Dog("dog", "barks");
  doggei.sound(); // Output: dog barks!!
  