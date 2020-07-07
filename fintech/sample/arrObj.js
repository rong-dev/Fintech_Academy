var car = {
    name: "sonata",
    ph: "500ph",
    start: function () {
      console.log("engine is starting");
    },
    stop: function () {
      console.log("engine is stoped");
    },
  };

var car2 = {
    name: "bmw",
    ph: "500ph",
    start: function () {
      console.log("engine is starting");
    },
    stop: function () {
      console.log("engine is stoped");
    },
  };

var car3 = {
    name: "fiat",
    ph: "500ph",
    start: function () {
      console.log("engine is starting");
    },
    stop: function () {
      console.log("engine is stoped");
    },
  };

var cars = [car, car2, car3];
console.log(cars);

//#work2
for(var i = 0; i<cars.length; i++){
    if(cars[i].name === "bmw"){
        console.log("hello")
    }
}
