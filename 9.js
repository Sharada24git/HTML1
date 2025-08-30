function func1(){
    console.log("If you're brave enough to say goodbye, life will reward you with a new hello");
}

function func2(){
    console.log("Before");
    func1();
    console.log("After");
}

func2();