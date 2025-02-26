/* 
The value of __proto__ on any instance of the constructor, is a direct reference to the constructor's prototype!

Since all instances have access to the prototype, it's easy to add properties to the prototype even after creating the instances.
*/

class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return console.log('Woof!');
  }
}

const dog1 = new Dog('Daisy');
const dog2 = new Dog('Max');

// Dog.prototype === dog1.__proto__
console.log(Dog.prototype);
console.log(dog1.__proto__);

Dog.prototype.play = () => console.log('Playing now!');
console.log(dog1.play());

/* 
We have access to the bark method, as we extended the Dog class. The value of __proto__ on the protype of SuperDog (SuperDog.prototype.__proto__) points to the Dog.prototype object!
*/
class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }

  fly() {
    return console.log('Flying!');
  }
}

const dog3 = new SuperDog('Spot');
dog3.bark(); // SuperDog.prototype.__proto__
dog3.fly();

/* 
Here, the Object.create method lets us create a new object which we can explicitly pass the value of its prototype. It's a simple way to let objects directly inherit properties from other objects, by specifying the newly created object's prototype.

ALthough pet1 itself doesn't have any propeties, it does have access to properties on its prototypee chain.

*/
const dog = {
  bark() {
    return console.log('Woof!');
  },
};

const pet1 = Object.create(dog);
pet1.bark();
console.log('direct properties on pet1: ', Object.keys(pet1)); // none
console.log("properties on pet1's prototype: ", pet1.__proto__); // bark
