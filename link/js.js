navigator.sayswho= (function(){
    var ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Firefox'){
      if (confirm("Firefox erreur!")) {
        window.location.replace("https://projecteurope.eu/firefox-error.html");
      } else {
        window.location.replace("https://projecteurope.eu/firefox-error.html");
      }
      document.getElementById("demo").innerHTML = txt;    }
})();


var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;



  function deu_err() {
    alert("Hallo! Leider läuft die Website wie bisher nur auf Französisch.");
  }
  function eng_err() {
    alert("Hey! Unfortunately, the website runs as it for now only in French. We are currently working on an English version !");
  }
  function twi_err() {
    alert("Malheureusement, nous n'avons pas encore de compte Twitter. Vous pouvez cependant nous suivre sur LinkedIn et Facebook.");
  }


  function down() {
    if (document.body.scrollTop > 520 || document.documentElement.scrollTop > 520) {
      if (w>650) {
        document.getElementById("artinfo").style.position = "fixed";
        document.getElementById("artinfo").style.top = "80px";
        }
      }
      else {
        document.getElementById("artinfo").style.position = "absolute";
        document.getElementById("artinfo").style.top = "";
    }
  }

  function closdiscl() {
    document.getElementById("disclaimer").style.width = "0px";
    document.getElementById("disclaimer").style.height = "0px";
    document.getElementById("disclaimer").style.marginTop = "";
    document.getElementById("disclaimer").style.marginBottom = "";
    document.getElementById("disclaimer").style.visibility = "hidden";
  }
