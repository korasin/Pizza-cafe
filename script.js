$(document).ready(function(){
    $("form#order").submit(function(e){
        e.preventDefault()
        let name = $("input#name").val()
        let size=$("#size").find(":selected").text();
        let Toppings=$("#Toppings").find(":selected").text();
        let Crust=$("#Crust").find(":selected").text();
        let Delivery=$("#Delivery").find(":selected").text();
        let Amount=$("input#Amount").val()
        let location=$("input#location").val()
    })
    function Order(myName,size,toppings,crust,delivery,amount,location){
        this.myName = myName
        this.size = size
        this.toppings = toppings
        this.crust= crust
        this.delivery= delivery
        this.amount = amount
        this.location= location
    }

    Order.prototype.calculatePrice=function(){
        
    }
})

