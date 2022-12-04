'use strict'

function f(){
    alert(this) //[Window window]
};

let object = {

    g : f.bind(null)
};

object.g()