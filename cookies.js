
        function cookiesfunction1() {
            const WName = document.getElementById('website').value;
            const WUrl = document.getElementById('url').value;
            const BEmail = document.getElementById('email').value;

            if (WName === "") {
                document.getElementById('website').style.border = "1px solid red";
                alert("Enter Your Website Name");
            } else if (WUrl === "") {
                document.getElementById('url').style.border = "1px solid red";
                alert("Enter Your Website URL");
            } else if (BEmail === "") {
                document.getElementById('email').style.border = "1px solid red";
                alert("Enter Your Business Email");
            } else {
                document.getElementById('website').style.border = "1px solid blue";
                document.getElementById('url').style.border = "1px solid blue";
                document.getElementById('email').style.border = "1px solid blue";

                document.getElementById('W_Name1').innerHTML = WName;
                document.getElementById('W_Name2').innerHTML = WName;
                document.getElementById('W_Url1').innerHTML = WUrl;
                document.getElementById('W_Url2').innerHTML = WUrl;
                document.getElementById('B_Email').innerHTML = BEmail;

                var res = document.getElementById('P_Sample').innerHTML;
                var timeleft = 15;
                var downloadTimer = setInterval(function () {
                    if (timeleft <= 0) {
                        clearInterval(downloadTimer);
                    }
                    document.getElementById('Msg').innerHTML = "Generating Cookie Policy in ";
                    document.getElementById('tim').innerHTML = 15 - timeleft;
                    timeleft -= 1;
                }, 1500);

                setTimeout(function () {
                    var SRL = document.getElementById('result');
                    SRL.scrollIntoView();
                    document.getElementById('result').innerHTML = res;
                }, 26000);
            }
        }

        function cookiesfunction2(id) {
            document.getElementById(id).select();
            document.execCommand('copy');
            document.getElementById('btn_cpy').innerHTML = "Copied!";
            setTimeout(function () {
                document.getElementById('btn_cpy').innerHTML = "Copy HTML Code";
            }, 5000);
        }
    
