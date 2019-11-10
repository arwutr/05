function RandomSticker() {
  var k = new Array();  
    k[1] = "https://stickershop.line-scdn.net/stickershop/v1/sticker/2468/android/sticker.png";
    k[0] = "https://stickershop.line-scdn.net/stickershop/v1/sticker/2469/android/sticker.png";
    k[2] = "https://stickershop.line-scdn.net/stickershop/v1/sticker/2470/android/sticker.png";
    k[3] = "https://stickershop.line-scdn.net/stickershop/v1/sticker/2471/android/sticker.png";
    k[4] = "https://stickershop.line-scdn.net/stickershop/v1/sticker/2472/android/sticker.png";
    k[5] = "https://stickershop.line-scdn.net/stickershop/v1/sticker/2473/android/sticker.png";
    k[6] = "https://stickershop.line-scdn.net/stickershop/v1/sticker/2474/android/sticker.png";
    k[7] = "https://stickershop.line-scdn.net/stickershop/v1/sticker/2475/android/sticker.png";   
 
   seconds=Math.floor(Math.random()*8);

   document.getElementById('randomstk').addEventListener('click', function () {
        liff.sendMessages([{
    "type": "template",
    "altText": "sent Sticker",
    "template": {
      "type": "image_carousel",
      "columns": [
        {
          "imageUrl": ""+k,
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
