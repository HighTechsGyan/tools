
   
  function privacypolicy(){
    var Wname = document.getElementById("Web_Name").value;
    var Wurl = document.getElementById("Web_URL").value;
    if(Wname == ""){
      document.getElementById("Web_Name").style.border="2px solid red";
      // alert("Please enter your Site Name"); <-- Removed this line
    }
    else if(Wurl == ""){
      document.getElementById("Web_URL").style.border="2px solid red";
      // alert("Please enter your Blog/Website URL"); <-- Removed this line
    } else {
      document.getElementById("W_URL").innerHTML= Wurl;
      document.getElementById("W_1").innerHTML = Wname;
      /*document.getElementById("W_2").innerHTML = Wname;
      document.getElementById("W_3").innerHTML = Wname;
      document.getElementById("W_4").innerHTML = Wname;
      document.getElementById("W_5").innerHTML = Wname;*/
      document.getElementById("W_6").innerHTML = Wname;
      document.getElementById("W_7").innerHTML = Wname;
      /*document.getElementById("W_8").innerHTML = Wname;
      document.getElementById("W_9").innerHTML = Wname;*/
      document.getElementById("W_10").innerHTML = Wname;
      document.getElementById("W_11").innerHTML = Wname;
      console.log(Wname, Wurl)
      var res = document.getElementById("P_Sample").innerHTML;
      document.getElementById("result").innerHTML = res;
      // alert("Will you do me a favor? Please click on at least one ad before leaving the site."); <-- Removed this line      
    }
  }
  
  function privacypolicy2(id){
    document.getElementById(id).select();
    document.execCommand('copy');
    document.getElementById('btn_cpy').innerHTML = "Copied!"    
    setTimeout(function(){
      document.getElementById('btn_cpy').innerHTML = "Copy HTML Code"; 
    }, 5000);  
  };
