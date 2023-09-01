
    function robotmyfunction() {
      var first = "# Blogger Sitemap created on";
      var second = new Date().toString();
      var third = "# Sitemap built with https://www.hightechsgyan.online/2021/05/blogger-xml-sitemap-generator.html";
      var fourth = "User-agent: *";
      var fifth = "Disallow: /search";
      var sixth = "Allow: /";
      var seventh = "Sitemap: https://";
      var eighth = document.getElementById("U-url").value;
      var ninth = "/atom.xml?redirect=false&start-index=1&max-results=500";

      document.getElementById("result").innerHTML = first + " " + second + "\n" + third + "\n\n" + "\n" + fourth + "\n" + fifth + "\n" + sixth + "\n" + seventh + eighth + ninth;

      document.getElementById('btn').innerHTML = "Sitemap Generated";
      setTimeout(function () {
        document.getElementById('btn').innerHTML = "Generate XML Sitemap";
      }, 5000);

      alert("Will you please do me a favor? Please click on at least one ad before leaving the site!!");
      document.getElementById('Msg').style.display = 'block';
      document.getElementById('site').innerHTML = "https://" + eighth;
    }

    function robotmyfunction2(id) {
      document.getElementById(id).select();
      document.execCommand('copy');
      document.getElementById('btn_cpy').innerHTML = "copied!";
      setTimeout(function () {
        document.getElementById('btn_cpy').innerHTML = "Copy HTML Code";
      }, 5000);
    }
