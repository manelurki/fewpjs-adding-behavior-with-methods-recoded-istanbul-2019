class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex =  sex;
  }

}

class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex =  sex;
  }

 
}

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex =  sex;
  }


 speak() {
    return `${this.name} says meow!`
  }

  speak() {
    return `${this.name} says woof!`
  }

  speak() {
    if (this.sex == "male") {
      return `It's me! ${this.name}, the parrot!`
    } else {
      return `${this.name} says squawk!`
    }
  }}