

function joinString(m:string,n:string){
    const result:string   = m +n
    console.log(result.toUpperCase())
}


function sumNumbers(a:number,b:number){
const result:number = a+b
console.log(result)
}

function arr(a:number[]){
const b:number[]=[]
for( let i:number =0;i<a.length;i++){
    if(a[i]%2===0){
        b.push(a[i])
    }
}
return b
}