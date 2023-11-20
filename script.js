$(document).ready(function(){
    var dif,op;
    var write = "";
    var dbg = 0;
    
    $("#lg, #help, #game, #submit, #exit,#end").hide();
    
        $(".op").click(function(){
        
            $( ".op" ).not(this).hide();
    op = this.id;
    
    $(".fic, #fit").css("visibility","visible")
    
            });
            
            
        $(".fic").click(function(){
        
    $(".fic").not(this).hide();
    dif = this.id;
    
    $("#lg, #help").show();
            ++dbg;
        });
        
    
    $("#help").click(function(){
    
        alert("Solve the "+op+" in an allotted time.");
    
        });
        
        
    $("#Multi").click(function(){
    
        dif = "Multi";
        op = "Multi"
        
        $("#game").show();
        $("#beg").hide();
        });
    /*-----------------------------------------------------------------------------------------------------------------------------------------*/
    
    
    function maxRandInt(min,max){
        min = Math.ceil(min)
        max = Math.floor(max)
        
        return Math.floor(Math.random() * (max-min) + min)
    }
    
    function randInt(max){
        return maxRandInt(0,max)
    }
    
    
    //RETURN TRUE IF RANDOM = 1
    
    function randBool(max){
    var ran = randInt(max)
    
        if (ran == 1){
        return true;
        }
        else {
        return false;
        }
    }
    
        $("#lg, #Multi").click(function(){
    
            $("#game").show();
            $("#beg").hide()
            write = "";
            
            
        $("#cb").click(function(){
        
        dbg=0;
        
            $("#beg").show();
            $("#game, #end").hide();
            
            write = "";
            $("#write").text(write);
            
            op = ""
            $(".op").show();
            $("#lg,#help").hide();
            
            $(".op").click(function(){
            
                $(".fic").show();
                ++dbg;
                
                
            $(".fic").click(function(){
            
                if (dbg>0){
                    $("#lg,#help").show()
                    }
                });
            });
        });
    //-/\/\/\/\-GAME-SETTINGS-/\/\/\/\-
    
    
    var s = 0;
    var sec,min,max,ope,n1,n2,n3,qst,res;
    
    
    //YOU CAN CHANGE THE TIMER AT LINE 123
    if (dif == "easy"){sec = 6;s=6}
    
    else if (dif == "snail")
    {sec=7,s=7;}
    
    else if (dif == "Multi"){sec=10,s=10;}
    
    else{ sec=5;s=5; }
    
    //sec = ,s = 
    
    $("#headt").text(op)
    var min1, max1, min2, max2;
    
    
    //NUMBERS GENERATION
    if (op == "Multiplication"){
    
            if (dif == "hard"){
        min = 3; max = 11;
        n1 = maxRandInt(min,max);
        min1 = 8; max1 = 15;
        n2 = maxRandInt(min1,max1);
        
        sec = 6
        }
        
            else {
        min = 2; max = 8;
        n1 = maxRandInt(min,max)
        min1 = 3; max1 = 10;
        n2 = maxRandInt(min1,max1)
            }
        }
    else if (op == "Subtraction") {
        min = 8; max = 23;
        n1 = maxRandInt(min,max);
        min1 = 25; max1 = 59;
        n2 = maxRandInt(min1,max1);
    }
    else if (op == "Multi"){
        min = 15; max = 20;
        n1 = maxRandInt(min,max);
        min1 = 25; max1 = 30;
        n2 = maxRandInt(min1,max1);
        min2 = 2; max2 = 11;
        n3 = maxRandInt(min2,max2);
    }
    else {
        min = 10; max = 76;
        n1 = maxRandInt(min,max);
        min1 = 17; max1 = 107;
        n2 = maxRandInt(min1,max1)
    }
    
    //TYPE OPERATOR GENERATIONS
    if (op == "Addition"){ope = "+"}
    
    else if (op == "Subtraction")
    {ope="-"}
    
    else if (op == "Multi"){ope="-"}
    
    else{ope="*"}
    
    
    //QUESTIONS GENERATIONS
    if (op != "Multi"){
        qst = n2+ope+n1;
    }
    
    else {
        qst = "("+n2+ope+n1+")*"+n3;
    }
    
    //CORRECT ANWSER
    if (ope == "+"){
            res = n1+n2;
        }
        else if (op == "Multi"){
            res = eval(qst);
        }
        else if (ope == "-"){
            res = n2-n1;
        }
        else {
            res = n1*n2;
        }
        
        
    var wr = $("#write").text()
    $("#eno").text(qst);
    
    
    az = ""
    
    //KEYBOARD
    $(".list").not("#clear").click(function(){
    
        write = write + this.id;
        $("#write").text(write)
        az = write
    
        
            });
            
    var score = 0;
    
    
    opes = ""
    
    
    $("#clear").click(function(){
    
        write = write.substring(0,write.length-1);
    az = write;
    $("#write").text(write);
        
    });
    
    
    if (op == "Addition"){
        opes = "+";
    }
    else if (op == "Multiplication"){
        opes = "*";
    }
    else {
        opes = "-";
    }
    
    
    function exit(){
        $("#game").hide()
        $("#end").show()
        
        $("#sscore").text("You did "+score)
    
    if (score <= 2){
        $("#apreciation").text("Mmh.. maybe a bug ;)")
    
        if (randBool(5)){
            $("#apreciation").text("2+2 is 4, -1 that's 3 quick maths !")
        }
    }
    
    else if (score <= 4){
        $("#apreciation").text("You are normal")
    }
    
    else if (score <= 6) {
        $("#apreciation").text("Good job, sir");
    }
    
    else if (score <= 8){
        $("#apreciation").text("Your nickname is calculator");
    }
    
    else {
        $("#apreciation").text("Wait.. are you Einstein ?! :o");
        }
        
        $("#was").text(res);
        
    }//function
    
    //GENERATES A NEW QUESTION
    function NewCode(){
    
        write = "";
        $("#write").text("")
        
        if (op != "Multi"){
            n1 = maxRandInt(min,max);
            n2 = maxRandInt(min1,max1);
            qst = n2+ope+n1;
        }
        else {
            n1 = maxRandInt(min,max);
            n2 = maxRandInt(min1,max1);
            n3 = maxRandInt(min2,max2);
            qst = "("+n2+ope+n1+")*"+n3;
            
        }
        
        if (opes == "+"){
            res = n1+n2;
        }
        else if (op == "Multi"){
            res = eval(qst);
        }
        else if (opes == "-"){
            res = n2-n1;
        }
        else {
            res = n1*n2;
        }
        
        az = ""
        $("#eno").text(qst)
        $("#write").text("")
        
        
        //TIMER CODE
        function nom(){
        
        $("#timer").text(--sec)
        
        
        if (sec == 0){
            clearInterval(si)
            sec = sec + s
            
            if (az != res){
                exit()
            }
            else {
                score++
                NewCode();
            }
        }
    }
    si = setInterval(nom,1000)
    }//function
    
         
    
    
    //TIMER CODE
    function nom(){
    
        $("#timer").text(--sec)
        
        
        if (sec == 0){
            clearInterval(si)
            sec = sec + s
            
            if (az != res){
                exit()
            }
            else {
                score++
                NewCode();
            }
        }
    }//function
    
    
    
    var si = setInterval(nom,1000)
    var write = ""
    
        });
        
    
            });