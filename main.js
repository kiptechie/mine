const logo = document.querySelectorAll('#logo path');

// display node list on the console :-D
// console.log(logo);

// display individual letter lengths on the console ;-)
for (let i = 0; i < logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

//that's all for .js ;-D