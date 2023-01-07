const n = 5;

// const middle = Math.ceil(n)// 6/5 = 2
// console.log(middle)
let space = 0
for (let i = 0; i <n; i++) {
    let content = ""
    for( let j=0; j < n - i - 1; j++) {
        content+=" "
    }
    content +="*"
    if (i !== 0) {
        if (i === 1) {
            space += 1;
        }
        else {
            space +=2
        }
        
        if (i === n-1) {
            for (let k = 0; k < space; k++) {
                content += "*"
            }
        }
        else {
            for (let k = 0; k < space; k++) {
                content += " "
            }
        }
        content += "*"
    }
    console.log(content)
}

// const  n = Number(prompt("Nhap so n"));

// let giai_thua = 1;

// for (let i = 1; i <=n; i++) {
//     giai_thua *= i;
// }

// console.log(`Giai thừa của ${n} là: ${giai_thua}`)



//     =
//    = =
//   =   =
//  =
// =====


