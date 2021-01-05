let num = +prompt('введите число')
num = !isNaN(num) && num != 0 ? num : 2
let st = +prompt('введите степень')
st = !isNaN(st) && st != 0 ? st : 2
let ans = num 
for(let i = 1; i<st;i++){
    ans = ans * num
}
alert(ans)