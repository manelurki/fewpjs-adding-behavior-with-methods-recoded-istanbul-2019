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
}
