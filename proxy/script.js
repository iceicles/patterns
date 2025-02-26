const person = {
  name: 'John Doe',
  age: 42,
  nationality: 'American',
};

/* 
A proxy can be useful to add validation. A user shouldn't be able to change person's age to a string value, or give them an empty name.
Refect - a built-in object which makes it easier for us to manipulate the target object with working with proxies.
*/
const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if (!obj[prop]) {
      console.log(
        `Hmm.. this property doesn't seem to exist on the target object`
      );
    } else {
      console.log(`The value of the ${prop} is ${Reflect.get(obj, prop)}`);
    }
  },
  set: (obj, prop, value) => {
    if (prop === 'age' && typeof value !== 'number') {
      console.log(`Sorry, you can only pass numeric values for age`);
    } else if (prop === 'name' && value.length < 2) {
      console.log(`You need to provide a valid name.`);
    } else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
      Reflect.set(obj, prop, value);
      return true;
    }
  },
});

console.log(personProxy.name);
console.log((personProxy.age = 43));
console.log((personProxy.name = 'Jane Doe'));
