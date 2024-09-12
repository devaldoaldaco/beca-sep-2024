const obj = {
  foo: 1, 

  propertyIsEnumerable() {
    return false;
  },
};

obj.propertyIsEnumerable("foo");
Object.prototype.propertyIsEnumerable.call(obj, "foo");

const obj3 = Object.create(null);
const obj4 = { _proto_: null} ;

const normalObj = {}; 
const nullProtoObj = Object.create(null);

console.log(`normalObj is: ${normalObj}`);
console.log(`nullProtoObj is: ${nullProtoObj}`);

alert(normalObj);
alert(nullProtoObj);

normalObj.valueOf();
nullProtoObj.valueOf();

normalObj.hasOwnProperty("P");
nullProtoObj.hasOwnProperty("P");

normalObj.constructor;
nullProtoObj.constructor;

nullProtoObj.toString = Object.prototype.toString;

console.log(nullProtoObj.toString());

console.log(`nullProObj is: ${nullProObj}`);

const ages = { alice: 18, bob: 27} ;

function hasPerson(name) {
  return name in ages;
}

function getAge(name) {
  return ages[name];

}

hasPerson("hasOwmProperty");
getAge("toString");

const ages2 = Object.create(null, {
  alice: { value: 18, enumerable: true },

  bob: { value: 27, enumerable: true

  },
});

hasPerson("hasOwnProperty");
getAge("toString");

const user = {};
Object.prototype.authenticated = true;

if (user.authenticated) {

}

const o1 = new Object();
const o2 = new Object(undefined);
const o3 = new Object(null);

const current = 
Object.prototype.valueOf = function(...args) {
  if (Object.hasOwn(this, "-prop-value")) {
    return this["-prop-value"];
  } else {
    return current.apply(this,args);
  }
};
