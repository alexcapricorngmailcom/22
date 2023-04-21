// Home Task 22(10)
// Создайте класс Mobile Phone, изначальные свойства класса, brand, series. Они должны быть опциональные, 
// тоесть вводится при создании экземпляра класса. Так же у него должно быть два метода .call(number) и 
// .sms(number, text). Это будет ваша основа.

// После создайте классы Smartphone и Tablet, и наделите их помимо базового функционала новым, 
// на ваше усмотрение 🙂 Будете разработчиками

// P.S. Делаем всё через синтаксис class, не через функции 😄

class MobilePhone {
    constructor(brand, series, number, text) {
        this.brand = brand;
        this.series = series;
        this.number = number;
        this.text = text;
    }

    call(number) {
        return this.number;
    }

    sms(text) {
        return `${this.number} ${this.text}`;
    }
}

const nokla = new MobilePhone('Nokia', 3310, +380933888888, 'Перезвони');

class Smartphone extends MobilePhone {
    constructor(size, touchtype) {
        super(); 
        this.size = size;
        this.touchtype = touchtype;
    }

    touch(touchtype) {
        return `В вашей модели ${this.touchtype}`;
    }
}

const huyawei = new Smartphone('6 дюймов', 'десяти пальцевый тачпад');

