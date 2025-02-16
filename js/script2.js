$(document).ready(function(){

    function selector1(target,target2){
        target.click(
            function(){
                
                target2.toggleClass('hidden');
            }
        );
    }
    function selector2(target,target2){
        target.click(
            function(){
                target.removeClass('active');
                $(this).addClass('active');
                target2.html($(this).html());
            }
        );
    }
    selector1($('#selectcat'),$('#selectmenu'));
    selector2($('#selectmenu li'),$('#cattext'));
    
    selector1($('#selectcat2'),$('#selectmenu2'));
    selector2($('#selectmenu2 li'),$('#cattext2'));
    
    
    selector1($('#selectcat3'),$('#selectmenu3'));
    selector2($('#selectmenu3 li'),$('#cattext3'));
    
    
    
    $('#showbtn').click(
        function(){
            $('#showmoremenu').slideToggle();

            $('#showbtn i').toggleClass('bi-dash-circle');
            $('#showbtn i').toggleClass('bi-plus-circle');
        }
    )

    $('#burgerbtn').click(
        function(){
            $('#burgermenu').addClass('active');
            $('#burgerbtn span').addClass('active');
        }
    );
    $('#emptyspace').click(
        function(){
             $('#burgermenu').removeClass('active');
            $('#burgerbtn span').removeClass('active');
            
        }
    );
    $('#burgermenumenu ul li').click(
        function(){
            $(this).next('ul').slideToggle();
        }
    );
    $('#cardsbtns label').click(
        function(){
            $('#cardsbtns label').removeClass('active');
            $(this).addClass('active');
            
    if(sl1.classList.contains('active')){
        $('#sc1').css('transform','translateY(0%)');
        $('#sc2').css('transform','translateY(0%)');
        $('#sc3').css('transform','translateY(0%)');
    }
    else if(sl2.classList.contains('active')){
        $('#sc1').css('transform','translateY(-100%)');
        $('#sc2').css('transform','translateY(-100%)');
        $('#sc3').css('transform','translateY(-100%)');
    }
    else if(sl3.classList.contains('active')){
        $('#sc1').css('transform','translateY(-200%)');
        $('#sc2').css('transform','translateY(-200%)');
        $('#sc3').css('transform','translateY(-200%)');
    }
        }
    );
        
    let sl1=document.getElementById('sl1');
    let sl2=document.getElementById('sl2');
    let sl3=document.getElementById('sl3');
    
    //SLIDERS 

    // Function to calculate `slidesPerView`
    function updateslides(sm,md,lg,xl) {
        let maxw = $(window).width();
        let slidesno;
    
        if (maxw < 768) {
            slidesno = sm;
        } else if (maxw >= 768 && maxw < 992) {
            slidesno = md;
        } else if (maxw >= 992 && maxw < 1200) {
            slidesno = lg;
        } else {
            slidesno = xl;
        }
    
        return slidesno;
    }
    function updatedirection(sm,md,lg,xl) {
        let maxw = $(window).width();
        let direction;
    
        if (maxw < 768) {
            direction = sm;
        } else if (maxw >= 768 && maxw < 992) {
            direction = md;
        } else if (maxw >= 992 && maxw < 1200) {
            direction = lg;
        } else {
            direction = xl;
        }
    
        return direction;
    }
    
    
    // Initialize Swiper only once
    function initializeSwiper(target,space,slides,prev,next,pag) {
        return new Swiper(target, {
            slidesPerView: slides,
            spaceBetween: space,
            loop: true,
            pagination: {
                el: pag,
                clickable: true,
            },
            navigation: {
                nextEl: next,
                prevEl: prev,
            },
        });
    }
    
    function initializeSwiper2(target,space,slides,prev,next,pag) {
        return new Swiper(target, {
            slidesPerView: slides,
            spaceBetween: space,
          autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
            loop: true,
            pagination: {
                el: pag,
                clickable: true,
            },
            navigation: {
                nextEl: next,
                prevEl: prev,
            },
        });
    }
    
    function initializeSwiper3(target,d,pag){
        return  new Swiper(target, {
            direction: d,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
            loop: true,
            pagination: {
              el: pag,
              clickable: true,
            },
          });
    }

    function updatedirection(sm,md,lg,xl) {
        let maxw = $(window).width();
        let direction;
    
        if (maxw < 768) {
            direction = sm;
        } else if (maxw >= 768 && maxw < 992) {
            direction = md;
        } else if (maxw >= 992 && maxw < 1200) {
            direction = lg;
        } else {
            direction = xl;
        }
    
        return direction;
    }

    function usd(name,d) {
        if (name) {
            name.destroy(true,true); 
        }
       return name=initializeSwiper3(".mySwiper0", d, ".swiper-pagination");
    }
    
    
    // Function to update Swiper dynamically
    function updateSwiper(name,slides) {
        if (name) {
            name.params.slidesPerView = slides; 
        }
    }
        let slider0= initializeSwiper3(
            ".mySwiper0",
            updatedirection("horizontal","horizontal","vertical","vertical"),
            ".swiper-pagination"
        )
        
        let slider1= initializeSwiper(
            ".mySwiper",
            60,
            updateslides(1,2,3,6),
            ".swiper-button-prev1",
            ".swiper-button-next1"
        ); 
        let slider2= initializeSwiper(
            ".mySwiper2",
            30,
            updateslides(1,2,3,4),
            ".swiper-button-prev2",
            ".swiper-button-next2"
        ); 
        
        let slider3= initializeSwiper(
            ".mySwiper3",
            50,
            updateslides(1,2,3,5),
            ".swiper-button-prev3",
            ".swiper-button-next3"
        ); 
        
        let slider4= initializeSwiper(
            ".mySwiper4",
            30,
            updateslides(1,2,2,2),
            ".swiper-button-prev4",
            ".swiper-button-next4"
        ); 
        
        let slider5=initializeSwiper2(".mySwiper5",
            20,
            updateslides(4,4,4,4),
            ".swiper-button-prev5",
            ".swiper-button-next5"
        );
        slider5.on('slideChange', function () {
            // console.log("Active Index:", slider5.activeIndex); // Includes loop duplicates
            // console.log("Real Index:", slider5.realIndex); // Ignores loop duplicates
            $("#bigcont").html(slider5.slides[slider5.activeIndex].innerHTML);
        });

        let slider6= initializeSwiper(".mySwiper6",
            30,
            updateslides(1,2,3,4),
            ".swiper-button-prev6",
            ".swiper-button-next6"
        ); 
        
        // Update Swiper on window resize
        $(window).on("resize", function () {
            updateSwiper(slider1,updateslides(1,2,3,6));
            updateSwiper(slider2,updateslides(1,2,3,4));
            updateSwiper(slider3,updateslides(1,2,3,5));
            updateSwiper(slider4,updateslides(1,2,2,2));
            updateSwiper(slider5,updateslides(4,4,4,4));
            updateSwiper(slider6,updateslides(1,2,3,4));
            slider0=usd(slider0,updatedirection("horizontal","horizontal","vertical","vertical"));
        });
    
        
        
        //END OF SLIDERS
    $(".featuredprod label").click(function(){
        $(".featuredprod label").removeClass('active');
        $(this).addClass('active');
    });
    
    $('input[name="featured"]').on('change', function () {
        
        if(this.id==='nproducts'){
            $("#nproducts1").css("display","flex");
            $("#sproducts1").css("display","none");
            $("#bseller1").css("display","none");
        }
        else if(this.id==='sproducts'){
            $("#nproducts1").css("display","none");
            $("#sproducts1").css("display","flex");
            $("#bseller1").css("display","none");
        }
        if(this.id==='bseller'){
            $("#nproducts1").css("display","none");
            $("#sproducts1").css("display","none");
            $("#bseller1").css("display","flex");
        }
        
    });
    




    function startCountdown() {
        let countdownDate = new Date(2025,1,1, 23, 59, 59).getTime();
        
      let x = setInterval(function() {
        // Get the current date and time
        let now = new Date().getTime();
        
        // Calculate the distance between now and the countdown date
        let distance = countdownDate - now;
        
        // Calculate days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result
        document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
        document.getElementById("hrs").innerHTML = hours.toString().padStart(2, '0');
        document.getElementById("min").innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById("sec").innerHTML = seconds.toString().padStart(2, '0');
        
        // If the countdown is over, display a message
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("countdown").innerHTML = "EXPIRED";
        }
      }, 1000);
    }
    startCountdown();

    $(function() {
        $("#slider-range").slider({
            range: true, // Enables dual sliders
            min: 0,      // Minimum value of the range
            max: 200,    // Maximum value of the range
            values: [7, 100], // Initial values of the sliders
            slide: function(event, ui) {
                // Update the range display
                $("#range-values").text("$"+ ui.values[0] + " - " +" $"+ ui.values[1]);
            }
        });
    
        // Initialize the range display
        $("#range-values").text(
            "$"+
            $("#slider-range").slider("values", 0) +
            " - " +
            " $"+
            $("#slider-range").slider("values", 1)
        );
    });
    
    

    function faddingY(target,perc){
        let divoffset =target.offset().top;
        let scrollPosition=$(window).scrollTop();
        let windowheight=$(window).height();
        if((windowheight+scrollPosition)>divoffset){
            target.css({
                "opacity":"1",
                "transform":"translateY(0%)"
            })
        }
        else{
            target.css({
                "opacity":"0",
                "transform":"translateY("+perc+"%)"
            })
        }
    }

    function faddingX(target,perc){
        let divoffset =target.offset().top;
        let scrollPosition=$(window).scrollTop();
        let windowheight=$(window).height();
        if((windowheight+scrollPosition)>divoffset){
            target.css({
                "opacity":"1",
                "transform":"translateX(0%)"
            })
        }
        else{
            target.css({
                "opacity":"0",
                "transform":"translateX("+perc+"%)"
            })
        }
    }
    function redbtn(){
        let t= $(window).scrollTop();
        let h= $(window).height();
        if(t>h){
            $(".hiddenredbtn").css({
                "visibility":"visible",
                "opacity":"1",
                "transform":"translateY(0%)",
            })
        }
        else{
            $(".hiddenredbtn").css({
                "visibility":"hidden",
                "opacity":"0",
                "transform":"translateY(-50%)",
            })
        }
        console.log("scrolltop= "+t);
        console.log("scrollheight= "+h);
    }

    $(window).on("scroll",function(){
        $(".fadcard").each(function(){
            faddingY($(this),30);
        });
        $(".fadcard2").each(function(){
            faddingX($(this),-100);
        });
        $(".fadcard3").each(function(){
            faddingX($(this),100);
        });
        redbtn();
    });

    function sub(target){
        if(target>1){
            target--;
        }
        return target;
    }

    function add(target,limit){
        if(target<limit){
            target++;
        }
        return target
    }
    // itemcounter area
    function itemcounter(minus,plus,target,price,total){
        minus.click(
            function(){
                $(target).html(sub(target.html()));
                total.html(price.html()*target.html()+".00");
                totalprice();
            }
        );
        $(plus).click(
            function(){
                target.html(add(target.html(),5));
                total.html(price.html()*target.html()+".00");
                totalprice();
            }
        );
    
    }

    function itemcounter(minus,plus,target){
        minus.click(
            function(){
                let s=sub(target.html());
                target.html(s);
                
            }
        );
        plus.click(
            function(){
                let a=add(target.html(),5);
                target.html(a);

            }
        );
    
    }
    function totalprice(){
        let x= parseFloat($(".localfee").html()) + parseFloat($(".ratefee").html()) + parseFloat($(".dfee").html());
        let y= parseFloat($(".totalprice1").html())+parseFloat($(".totalprice2").html())+parseFloat($(".totalprice3").html())+parseFloat($(".totalprice4").html());
        let z=x+y;
        $(".carttotalprice").html(z); 
        $(".subtotal").html("$"+" "+y); 
    }
    itemcounter($(".ic1 .bt1"),$(".ic1 .bt2"),$(".ic1 h5"));
    itemcounter($(".ic2 .bt1"),$(".ic2 .bt2"),$(".ic2 h5"),$(".pr1"),$(".totalprice1"));
    itemcounter($(".ic3 .bt1"),$(".ic3 .bt2"),$(".ic3 h5"),$(".pr2"),$(".totalprice2"));
    itemcounter($(".ic4 .bt1"),$(".ic4 .bt2"),$(".ic4 h5"),$(".pr3"),$(".totalprice3"));
    itemcounter($(".ic5 .bt1"),$(".ic5 .bt2"),$(".ic5 h5"),$(".pr4"),$(".totalprice4"));
    totalprice();
    // end of itemcounter



});