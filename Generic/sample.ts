const addMark = <T>(message: T): string =>{
    return('■'+ message);
}

console.log(addMark<number>(10));