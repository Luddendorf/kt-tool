function foo(a,b,c,d){
    let localVar = 'local variable of function'
    a(b,c,d)
    b(d)
    foo.getNames = function(){
        return `Names are ${c.name} and ${d.name}. There is also ${localVar}`;
    }
}


function a(b,c,d){
    c.name = 'George';
    b(d)
}

function b(d){
    d.name = 'Ringo';
}

const c = { 
    name: 'John'
}

const d = {
    name : 'Paul'
}
foo(a,b,c,d)
console.log(foo.getNames());

