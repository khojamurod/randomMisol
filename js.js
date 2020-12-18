// Funkiyala

let x= +prompt('neshta misol ishlisz')
let javob, a , b , c
if(isNaN(x)){
    let x= +prompt('Nimadr hato ketti, boshqattan kriting')
}

function misol(a){
    return Math.floor(Math.random(a)*10) 
}
function ishora(b){
    return Math.floor(Math.random(b)*5);
}

for(let i=0;i<x;i++){
    
    a=misol();
    b=misol();
    c=ishora();
    if(c==1){
        javob= a/b
        let myJavob = prompt(a + '/' + b) ;
        if(a/b==myJavob){
            alert('Sizning javob tog\'ri - ' + myJavob)
        }else{
            alert('Sizing javob hato. To\'ri javob esa - ' + (a/b) + ' edi ;-)')
        }
    }else if(c==2){
        javob= a - b
        let myJavob = prompt(a + '-' + b) ;
        if(a-b==myJavob){
            alert('Sizning javob tog\'ri - ' + myJavob)
        }else{
            alert('Sizing javob hato. To\'ri javob esa - ' + (a-b) + ' edi ;-)')
        }
    }else if(c==3){
        javob= a * b
        let myJavob = prompt(a + '*' + b) ;
        if(a*b==myJavob){
            alert('Sizning javob tog\'ri - ' + myJavob)
        }else{
            alert('Sizing javob hato. To\'ri javob esa - ' + (a*b) + ' edi ;-)')
        }
    }else{
        javob= a + b
        let myJavob = prompt(a + '+' + b) ;
        if(a+b==myJavob){
            alert('Sizning javob tog\'ri - ' + myJavob)
        }else{
            alert('Sizing javob hato. To\'ri javob esa - ' + (a+b) + ' edi ;-)')
        } 
    } 
    
    
} 



