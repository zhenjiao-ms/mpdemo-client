import * as microsoftTeams from "@microsoft/teams-js";

function upload() {
    var element = document.getElementById("upmsg");
    element.innerHTML = "The file has been uploaded successfully. Click \"next step\" to continue.";
  }
  function done(){
      const http = new XMLHttpRequest();
      const url = "https://zhentestwechat.azurewebsites.net/api/Inc?code=qUzUGwLj0n8jXbgTSh/OnJm49elggJpkW8lPBy3387PSlnr6LhiupA==&name=student";
      http.onreadystatechange=function(){
        if(http.readyState==4 && http.status==200){
          var x=document.getElementById("donemsg");
          x.innerHTML = http.responseText;
        }
      }
      http.open("GET", url);
      http.send();
  }
  function refresh(){
      var x=document.getElementById("resultmsg");
      x.innerHTML = "1 student has watched the video"
  }
