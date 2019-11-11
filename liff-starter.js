function RandomSticker() {
  var k = document.getElementById("urllink").value;
  var l = document.getElementById("url1link").value;  
  document.getElementById('randomstk').addEventListener('click', function () {
        liff.sendMessages([{
    "type": "template",
    "altText": "sent Sticker",
    "template": {
      "type": "image_carousel",
      "columns": [
        {
          "imageUrl": ""+Math.floor(Math.random()*18888),
          "action": {
            "type": "uri",
            "uri": "https://line.me/R/app/1553266645-KJ5VVlE1"
          }
        }
      ]
    }
  }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    }); 

}
