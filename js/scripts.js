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

        // set the price on various type of pizza 
        let price, totalcost;
       
        switch (flavour) {

            case flavour = "periperi":
                switch (size) {
                    case size = "regular":
                        price = 400;
                        if (crust === "thin") {
                            totalPrice = (price * number) ;
                        } else if (crust === "thick") {
                            totalPrice = (price * number);
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number);
                        } else {
                            totalPrice = (price * number);
                        }
                        break;
                    case size = "medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) ;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) ;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) ;
                        } else {
                            totalPrice = (price * number) ;
                        }
                        break;
                    case size = "large":
                        price = 1100;
                        if (crust === "thin") {
                            totalPrice = (price * number) ;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) ;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) ;
                        } else {
                            totalPrice = (price * number);
                        }
                        break;
                }
                break;
            case flavour = "bbq":
                switch (size) {
                    case size = "regular":
                        price = 400;
                        if (crust === "thin") {
                            totalPrice = (price * number) ;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) ;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) ;
                        } else {
                            totalPrice = (price * number) ;
                        }
                        break;
                    case size = "medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) ;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) ;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) ;
                        } else {
                            totalPrice = (price * number);
                        }
                        break;
                    case size = "large":
                        price = 1100;
                        if (crust === "thin") {
                            totalPrice = (price * number) ;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) ;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) ;
                        } else {
                            totalPrice = (price * number) ;
                        }
                        break;
                }
                break;
            case flavour = "boerewors":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) ;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) ;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number);
                        } else {
                            totalPrice = (price * number) ;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) ;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) ;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) ;
                        } else {
                            totalPrice = (price * number) ;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) ;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) ;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) ;
                        } else {
                            totalPrice = (price * number);
                        }
                        break;
                }
                break;
            case flavour = "hawaiian":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) ;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) ;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) ;
                        } else {
                            totalPrice = (price * number) ;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) ;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) ;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) ;
                        } else {
                            totalPrice = (price * number) ;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) ;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) ;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) ;
                        } else {
                            totalPrice = (price * number);
                        }
                        break;
                }
                break;

        }

        switch (toppings) {
            case topping = "tomato":
                totalPrice = totalPrice + 80;
                break;
            case topping = "onions":
                totalPrice = totalPrice + 80;
                break;
            case topping = "mushroom":
                totalPrice = totalPrice + 80;
                break;
            case topping = "pineapple":
                totalPrice = totalPrice + 120;
                break;
        }

        //Execute order function
        let newOrder = order(flavour, size, crust, topping, number, totalPrice);
        

        
        // //Write to the order
        $('.summary').slideDown(2000);
        $('.cdata-overlay').slideUp();
        $('#list').slideDown();
        $('.deliver').show(1000);
        $('.delivernot').show(1000);

        $('#list').text(" ");
        // $("#list").append(flavour);//(" " + "Flavour :   " + newOrder.f );

        $("#list").append("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   "
            + newOrder.s + "<br>" + "Crust :     "
            + newOrder.c + "<br>" + "Toppings :     "
            + newOrder.t + "<br>" + " Number of pizzas :    "
            + newOrder.n + "<br>" + "Total Price :  "
            + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
    });

    //Deliver
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



