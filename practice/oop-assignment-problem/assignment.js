class Course {
  #price;
  get price() {
    return "$" + this.#price;
  }
  set price(value) {
    if (value <= 0) {
      throw "Invalid value!";
    }
    this.#price = value;
  }
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  calcualteValue() {
    return this.length / this.#price;
  }

  printSummary() {
    console.log(
      `Title: ${this.title}, Length: ${this.length}, Price: ${
        this.price
      }, Total: ${this.calcualteValue()}`
    );
  }
}

// new Course("JS", 44, 50).printSummary();
// new Course("JS", 44, 50).printSummary();

class PracticalCourse extends Course {
  constructor(title, length, price, exercisesCount) {
    super(title, length, price);
    this.numOfExercises = exercisesCount;
  }
}

const angularCourse = new PracticalCourse("Angular", 36, 50, 10);
console.log(angularCourse);
angularCourse.printSummary();

class TheoreticalCourse extends Course {
  publish() {
    console.log("Publishing...");
  }
}

const flutterCourse = new TheoreticalCourse(
  "Flutter - Build iOS and Android Apps",
  36,
  50
);

flutterCourse.printSummary();
flutterCourse.publish();
