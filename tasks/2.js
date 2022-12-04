'use strict'


function f(){
    alert(this.name)
}

f = f.bind({name: 'Peter'}).bind({name: "Michel"})

f()