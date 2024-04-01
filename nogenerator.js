//It will generate values according to the given function.
function generate (begining, end) {
    let result=[]
    if (begining<=end) {
    for (let i = begining; i <= end; i++) {
    result.push(i);// this will generate numbers between the given values and itself
    }}
    return result;
}
    console.log(generate (10,20))