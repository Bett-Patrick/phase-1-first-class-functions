//Callback Functions


function receivesAFunction(spy){
    return spy()
}

//Named Function
const returnsANamedFunction = function(){
    return function fn(){return ("I am a callback function!")}
}

//Anonymous function
function returnsAnAnonymousFunction (){
    return (()=>"I am an anonymous function!")
}
    
