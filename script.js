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

        const order1 = new Order(name,size,Toppings,Crust,Delivery,Amount,location)
            console.log(order1)
            order1.calculatePrice()
    })
    function Order(name,size,Toppings,Crust,Delivery,Amount,location){
        this.name = name
        this.size = size
        this.Toppings = Toppings
        this.Crust= Crust
        this.Delivery= Delivery
        this.Amount = Amount
        this.location= location
    }

    Order.prototype.calculatePrice=function(){
        let sizePrice:
     if (this.size==="Large(500) "){
        sizePrice=500
    }else if(this.size==="medium(450) "){
        sizePrice=450
    }else (this.size==="small(300) ")
    }
})

