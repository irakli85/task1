function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.getCarInfo = function () {
    document.write(this.make + this.model  + this.year);
  }  
  }

  

  function Person(name, age, cars) {
    this.name = name;
    this.age = age;    
    this.cars = cars;   
    this.getPersonInfo = function(){
      document.write(this.name + this.age + this.cars);
    }  
    } 
    
    

    let personOne = new Person('tom', 24, 'Tesla Model S released in 2015');

    personOne.getPersonInfo();

    let carOne = new Car('Tesla ',  'Model 5', ' released in 2015');
  
    carOne.getCarInfo();

   
   