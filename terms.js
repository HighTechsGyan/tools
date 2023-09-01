
    function termsfunction2(id){
      document.getElementById(id).select();
      document.execCommand('copy');
      document.getElementById('btn_cpy').innerHTML = "Copied!";
      setTimeout(function(){
        document.getElementById('btn_cpy').innerHTML = "Copy HTML Code";
      }, 5000);
    }
  
    function termsfunction1(){
      var Wname = document.getElementById("Web_Name").value;
      var Wurl = document.getElementById("Web_URL").value;
  
      if (Wname === ""){
        document.getElementById("Web_Name").style.border="1px solid red";
        return;
      }
      else if (Wurl === ""){
        document.getElementById("Web_URL").style.border="1px solid red";
        return;
      }
  
      document.getElementById("Web_Name").style.border="1px solid green";
      document.getElementById("Web_URL").style.border="1px solid green";
  
      document.getElementById("M_Curl").innerHTML = Wurl;
      document.getElementById("M_C1").innerHTML = Wname;
  
      for (var i = 2; i <= 20; i++) {
        document.getElementById("M_C" + i).innerHTML = Wname;
      }
  
      var res = document.getElementById("P_Sample").innerHTML;
      document.getElementById("result").innerHTML = res;
    }
