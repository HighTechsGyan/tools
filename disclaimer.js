

    function disclaimermyfunction1() {
        // Get input values
        const Cname = document.getElementById('C_Name').value;
        const Cemail = document.getElementById('W_Email').value;
        const Wname = document.getElementById('W_Name').value;
        const Wurl = document.getElementById('W_URL').value;

        // Check if any field is empty
        if (Cname === "") {
            document.getElementById('C_Name').style.border = "1px solid red";
            alert("Enter Your Company Name");
        } else if (Cemail === "") {
            document.getElementById('W_Email').style.border = "1px solid red";
            alert("Enter Your Email");
        } else if (Wname === "") {
            document.getElementById('W_Name').style.border = "1px solid red";
            alert("Enter Your Website Name");
        } else if (Wurl === "") {
            document.getElementById('W_URL').style.border = "1px solid red";
            alert("Enter Your Website URL");
        } else {
            // All fields are filled, update styles and content
            document.getElementById('C_Name').style.border = "1px solid blue";
            document.getElementById('W_Email').style.border = "1px solid blue";
            document.getElementById('W_Name').style.border = "1px solid blue";
            document.getElementById('W_URL').style.border = "1px solid blue";
            document.getElementById('Com_Name').innerHTML = Cname;
            document.getElementById('Web_Email').innerHTML = Cemail;
            document.getElementById('Web_Url').innerHTML = Wurl;
            document.getElementById('W_N1').innerHTML = Wname;
            document.getElementById('W_N2').innerHTML = Wname;
            document.getElementById('W_N3').innerHTML = Wname;
            document.getElementById('W_N4').innerHTML = Wname;

            // Set the timer
            var timeleft = 10;
            var downloadTimer = setInterval(function () {
                if (timeleft <= 0) {
                    clearInterval(downloadTimer);
                }
                document.getElementById('Msg').innerHTML = "Generating your disclaimer in 10 seconds: ";
                document.getElementById('tim').innerHTML = timeleft;
                timeleft -= 1;
            }, 1000);

            // Display the result after 11 seconds
            setTimeout(function () {
                var res = document.getElementById('P_Sample').innerHTML;
                var SRL = document.getElementById('result');
                SRL.scrollIntoView();
                SRL.innerHTML = res;
            }, 11000);
        }
    }

    function copyTextToClipboard(text) {
        // Create a temporary input element
        var tempInput = document.createElement('input');
        tempInput.style.position = 'fixed';
        tempInput.style.opacity = 0;
        tempInput.value = text;
        document.body.appendChild(tempInput);

        // Select and copy the text
        tempInput.select();
        document.execCommand('copy');

        // Clean up
        document.body.removeChild(tempInput);
    }

    function disclaimermyfunction2(id) {
        // Copy the content of the specified element to clipboard using the Clipboard API
        var copyText = document.getElementById(id).value; // Assuming the element is an input element with a value attribute
        if (!copyText) return; // No text to copy

        copyTextToClipboard(copyText);

        // Update the copy button text and revert it after 5 seconds
        var copyButton = document.getElementById('btn_cpy');
        copyButton.innerHTML = "Copied!";
        setTimeout(function () {
            copyButton.innerHTML = "Copy HTML Code";
        }, 5000);
    }

