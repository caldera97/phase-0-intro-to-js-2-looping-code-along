const writeCards = (name, event) => {
    let copy = [...name]
    let copy2= copy
    for (let i=0; i < copy2.length; i++) {
        copy2.splice([i], 1, `Thank you, ${copy[i]}, for the wonderful ${event} gift!`);
    }
    return copy2
}

function countDown(num) {
    let i = 0
    while (i < num +1) {
        console.log(i)
        i++
    }
}