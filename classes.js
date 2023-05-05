class Car{
    constructor(make,model,year,isAvailable){
        this.make=make;
        this.model=model;
        this.year=year;
        this.isAvailable=isAvailable;

    }
    toggleAvailability(){
        if(this.isAvailable==true){
            console.log(this.isAvailable=false);
        }
        else{
            console.log(this.isAvailable=true);
        }      
    }
}

class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
      this.car = car;
      this.renterName = renterName;
      this.rentalStartDate = rentalStartDate;
      this.rentalEndDate = rentalEndDate;
    }
    calculateRentalDuration(){
        let durationInMonths = this.rentalEndDate - this.rentalStartDate;
        let durationInDays = Math.ceil(durationInMonths / (1000 * 60 * 60 * 24));
        return durationInDays;
    }
}
let car = new Car("Toyota", "Camry", 2020, true);

let rental = new Rental(
  car,
  "Grace Njuguna",
  new Date(2023, 5, 1), 
  new Date(2023, 5, 5) 
);

let rentalDuration = rental.calculateRentalDuration();
console.log(rentalDuration); 


class Question{
    constructor(text,options,correctAnswer){
        this.text=text;
        this.options=options;
        this.correctAnswer=correctAnswer;
    }
    checkAnswer(answer){
        if(this.correctAnswer===answer){
            return true;
        }
        else{
            return false;
        }

    }
}

class Quiz{
    constructor(questions,currentQuetionIndex,score){
        this.questions=[];
        this.currentQuetionIndex=0;
        this.score=0;

    }
    addQuestion(question){
        this.questions.push(question)

    }
    nextQuestion(){
        this.currentQuetionIndex++

    }
    submitAnswer(ans){
        let currentQuiz=this.questions[this.currentQuetionIndex];
        if(currentQuiz.checkAnswer(answer)){
            this.score++
        }

    }
}
    
  

