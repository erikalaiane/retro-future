function aceitarCookies() {
      document.cookie = "cookieAceito=true; max-age=" + 60*60*24*30;
      document.getElementById("cookie-popup").classList.remove("show");
      document.getElementById("backdrop").classList.remove("show");
    }

    window.onload = function () {
      if (!document.cookie.includes("cookieAceito=true")) {
        document.getElementById("cookie-popup").classList.add("show");
        document.getElementById("backdrop").classList.add("show");
      }
    }