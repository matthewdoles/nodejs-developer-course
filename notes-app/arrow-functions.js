const square1 = function (x) {
   return x * x;
}

const square2 = (x) => {
    return x * x;
}

const square3 = (x) => x * x;

console.log(square1(3));
console.log(square2(4));
console.log(square3(2));

const event = {
    name: 'Birthday Party',
    guestList: ['Matthew', 'Dan', 'Sherry'],
    printGuestList() {
        console.log('Guest list for ' + this.name);
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        })
    }
}

event.printGuestList();