import Observable from "./Shared/Observable";
// import { observe, observable, computed } from "mobx";
// import { Subject, BehaviorSubject } from "rxjs";

class Person {}

it("pub/sub with normal observable", () => {
  let person = new Person();

  var personObservable = new Observable(person);
  personObservable.value = 37;

  personObservable.subscribe(value => {
    console.log(value);
  });

  personObservable.value = 40;

  personObservable.notify();
});

it("pub/sub with Mobx FRP library", () => {});

it("pub/sub with RXJS FRP library", () => {});
