// Home Task 22(10)
// Создайте класс Mobile Phone, изначальные свойства класса, brand, series. Они должны быть опциональные, 
// тоесть вводится при создании экземпляра класса. Так же у него должно быть два метода .call(number) и 
// .sms(number, text). Это будет ваша основа.

// После создайте классы Smartphone и Tablet, и наделите их помимо базового функционала новым, 
// на ваше усмотрение 🙂 Будете разработчиками

// P.S. Делаем всё через синтаксис class, не через функции 😄

class MobilePhone {
    constructor(brand, series) {
        this.brand = brand;
        this.series = series;
    }

    call(number) {
        console.log(number);
    }

    sms(number, text) {
        console.log(number);
        console.log(text);
    }
}

const nokla = new MobilePhone('nokla', 3310);

class Smartphone extends MobilePhone {
    constructor(brand, series, size) {
        super(brand, series); 
        this.size = size;
    }

    touch(touchtype) {
        console.log('В вашей модели ' + touchtype);
    }
}

const huyawei = new Smartphone('huyawei', 'XXL', '32Gb');

class Tablet extends MobilePhone {
    constructor(brand, series, screenSize) {
        super(brand, series);
        this.screenSize = screenSize;
    }

    wifi(network) {
        console.log('Вы подключены к сети ' + network);
    }
}

const iypade = new Tablet('iypade', 1745, '11"');



