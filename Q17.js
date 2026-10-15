function meth1(){
    throw new Error("Server Down");
}

function meth2(){
    meth1();
}

function meth3(){
    try {
        meth2();
    } catch (error) {
        console.log(error.name+":"+error.message);
        
    }
}

meth3();