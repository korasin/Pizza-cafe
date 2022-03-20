$(document).ready(function(){
    $("form#order").submit(function(e){
        e.preventDefault()
        let name = $("input#name").val()
        console.log(name)
    })
})

