  

    function contactUsFunction1() {
      var name = document.getElementById('website').value;
      var email = document.getElementById('email').value;
      var whatsapp = document.getElementById('whatsapp').value;
    
      if (name === "") {
        document.getElementById('website').style.border = "1px solid red";
        alert("Enter your Website name");
      } else if (email === "") {
        document.getElementById('email').style.border = "1px solid red";
        alert("Enter your business Email Id");
      } else {
        document.getElementById('website').style.border = "1px solid green";
        document.getElementById('email').style.border = "1px solid green";
        document.getElementById('W_Name').innerHTML = name;
        document.getElementById('W_Email').innerHTML = "<a href='mailto:" + email + "'>" + email + "</a>";
        document.getElementById('W_whatsapp').innerHTML = "<a href='tel:" + whatsapp + "'>" + whatsapp + "</a>";
        
        var res = document.getElementById('P_Sample').innerHTML;
        document.getElementById('result').innerHTML = res;
    
        // Removed the alert asking to click on an ad before leaving the site
        document.getElementById('Msg').innerHTML = "Congrats! Your Contact Us page has been generated. Copy the HTML code below 👇👇";
    
        // SEO Improvements
        document.title = "Contact Us - " + name; // Add the website name to the title
        document.querySelector('meta[name="description"]').setAttribute("content", "Contact us for any inquiries or questions related to " + name); // Set a relevant meta description
      }
    }
    
    function contactUsFunction2(id) {
      document.getElementById(id).select();
      document.execCommand('copy');
      document.getElementById('button-91').innerHTML = "copied!";
      setTimeout(function() {
        document.getElementById('button-91').innerHTML = "Copy HTML Code";
      }, 5000);
    }
    

function copyCode(elementId) {
  const codeElement = document.getElementById(elementId).querySelector('code');
  const textToCopy = codeElement.innerText;

  const textarea = document.createElement('textarea');
  textarea.value = textToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  // Optional: Provide some visual feedback that the code was copied
  const copyButton = document.querySelector(`button[onclick="copyCode('${elementId}')"]`);
  copyButton.innerText = 'Copied!';
  setTimeout(() => {
    copyButton.innerText = 'Copy';
  }, 1000);
}
