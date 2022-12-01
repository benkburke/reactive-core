import Observable from "./Shared/Observable";
import { observe, makeAutoObservable } from "mobx";
import { BehaviorSubject } from "rxjs";
// import { Subject, BehaviorSubject } from "rxjs";

class Person {
  constructor() {
    // Just call it here
    makeAutoObservable(this);
  }

  age = null;
}

it("pub/sub with normal observable", () => {
  let person = new Person();

  var personObservable = new Observable(person);
  personObservable.value = 30;

  personObservable.subscribe((value) => {
    console.log(value);
  });

  personObservable.value = 40;

  personObservable.notify();
});

it("pub/sub with Mobx FRP library", () => {
  let person = new Person();

  observe(person, "age", (obj) => {
    console.log(obj.newValue);
  });

  person.age = 37;
  person.age = 47;
});

it("pub/sub with RXJS FRP library", () => {
  let subject = new BehaviorSubject(50);
  subject.subscribe((person) => {
    console.log(person);
  }, true);

  subject.next(60);
});
