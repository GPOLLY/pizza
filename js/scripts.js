$(function () {
       
    $('.results').hide();
    $(".cdata-overlay").hide();
    $(".summary").hide();


    // Fetch the Data inputed
    $("#checkout").click(function () {
        debugger;
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let toppings = $("#toppings option:selected").val();
        let number = $("#number").val();


        let order = (f, s, c, t, n, total) => {
            return { f, s, c, t, n, total };
        };

        // set the price on various typ e of pizza 
        let price, totalPrice;
       
        switch (flavour) {

            case flavour = "periperi":
                switch (size) {
                    case size = "regular":
                        price = 400;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100 ;
                        } else if (crust === "thick") {
                            totalPrice = (price * number)+ 170;
                        } else  {
                            totalPrice = (price * number) +230;
                        } 
                        break;
                    case size = "medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) +100 ;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else  {
                            totalPrice = (price * number) + 230 ;
                        } 
                        break;
                    case size = "large":
                        price = 1100;
                        if (crust === "thin") {
                            totalPrice = (price * number) +100 ;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) +170;
                        } else  {
                            totalPrice = (price * number)+230 ;
                        } 
                        
                        break;
                }
                break;
            case flavour = "bbq":
                switch (size) {
                    case size = "regular":
                        price = 400;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100 ;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) +170;
                        } else  {
                            totalPrice = (price * number) + 230 ;
                        } 
                        break;
                    case size = "medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) +100 ;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) +170 ;
                        } else  {
                            totalPrice = (price * number) + 230 ;
                        } 
                        break;
                    case size = "large":
                        price = 1100;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100 ;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170 ;
                        } else  {
                            totalPrice = (price * number) + 230 ;
                        } 
                        break;
                }
                break;
            case flavour = "boerewors":
                switch (size) {
                    case size = "regular":
                        price = 400;
                        if (crust === "thin") {
                            totalPrice = (price * number) +100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) +170;
                        } else  {
                            totalPrice = (price * number) + 230;
                        }
                        break;
                    case size = "medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100 ;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else  {
                            totalPrice = (price * number) + 230 ;
                        } 
                        break;
                    case size = "large":
                        price = 1100;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100 ;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170 ;
                        } else  {
                            totalPrice = (price * number) +230 ;
                        } 
                        break;
                }
                break;
            case flavour = "hawaiian":
                switch (size) {
                    case size = "regular":
                        price = 400;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) +170;
                        } else  {
                            totalPrice = (price * number) +230 ;
                        } 
                        break;
                    case size = "medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) +100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170 ;
                        } else  {
                            totalPrice = (price * number) + 230;
                        } 
                        break;
                    case size = "large":
                        price = 1100;
                        if (crust === "thin") {
                            totalPrice = (price * number) +100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else  {
                            totalPrice = (price * number) +230 ;
                        } 
                        break;
                }
                break;

        }

        switch (toppings) {
            case topping = "tomato":
                totalPrice = totalPrice + 63;
                break;
            case topping = "onions":
                totalPrice = totalPrice + 50;
                break;
            case topping = "mushroom":
                totalPrice = totalPrice + 150;
                break;
            case topping = "pineapple":
                totalPrice = totalPrice + 120;
                break;
        }

        //Execute order function
        let newOrder = order(flavour, size, crust, topping, number, totalPrice);
               
         //Write to the order
        $('.summary').slideDown(2000);
        $('.cdata-overlay').slideUp();
        $('#list').slideDown();
        $('.deliver').show(1000);
        $('.delivernot').show(1000);

        //display on the html page 
  
        $("#list").text(totalPrice)  
        
    });
    

    //Deliver part
    $(".deliver").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('.deliver').hide(1000);
        $('.delivernot').hide(1000);
        $('.cdata-overlay').slideDown();
    });


    //Pick Up
    $(".delivernot").click(function () {
     

    });

    //Scrollify
    $(function () {
        $.scrollify.move('#sum-order');
    });
});



