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
        let size;
        let Toppings;
        let Crust;
     if(this.size==="Large(500)"){
        size=500
    }else if(this.size==="medium(450)"){
        size=450
    }else (this.size==="small(300)")
    }
    if(this.Toppings==="roasted Red peppers(13)"){
        Topping=13
    }else if(this.Toppings==="Roasted Brocolli(14)"){
        Toppings=14
    }else if(this.Toppings==="Roasted Artichokes(15)"){
        Toppings=15
    }else if(this.Toppings==="Roasted Cauliflower(16)"){
        Toppings=16
    }else (this.Toppings==="Roasted Butternut Squash(17)")  
    if(this.Crust==="crispy(2)"){
        Crust=2
    }else if(this.Crust==="Stuffed(3)"){
        Crust=3
    }else(this.Crust==="Glutten free(4)")
    let totalOrder1 = size + Toppings + Crust
    console.log(totalOrder1);
  
})

