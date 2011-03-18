// my init


var chrome_in_many_lang = new Array();
  
(function() {

//getPosition();

var google_trans_lang_code = ["af","sq","ar","be","bg","ca","zh-CN","zh-TW","hr","cs","da","nl","et","tl","fi","fr","gl","de","el","ht","iw","hi","hu","is","id","ga","it","ja","ko","lv","lt","mk","ms","mt","no","fa","pl","pt","ro","ru","sr","sk","sl","es","sw","sv","th","tr","uk","vi","cy","yi"];

for ( var i in google_trans_lang_code ) {
  //console.log(google_trans_lang_code[i]);
  var newScript = document.createElement('script');
  newScript.type = 'text/javascript';
  var source = 'https://www.googleapis.com/language/translate/v2?key=AIzaSyDQsRALrhbO3tW5tDZdzq_oLTNvrT2LdhU&source=en&target='+google_trans_lang_code[i]+'&callback=translateText&q=chrome';
  newScript.src = source;
  document.getElementsByTagName('head')[0].appendChild(newScript);  
}
  
})();


var translateText = function(response) {
  try { 
  //console.log(response.data.translations[0].translatedText);
  chrome_in_many_lang.push(response.data.translations[0].translatedText);
  } catch(er) {
    //console.log(er); // google api error.
    chrome_in_many_lang = ["크롬","Chrome","铬","chróm","クロム","Chrom","क्रोम","chromas","xrom","chroom","króm","khrom","hróm","الكروم"];
  }
}


function getPosition(){
    navigator.geolocation.getCurrentPosition(
      (function(position) {console.log(position.coords);}), //success
      (function(position) {console.log("get Position failed");}) // fail, It is ok to fail it. 
    );    
}   

function success(position) 
{
    alert("Your latitude: " + position.coords.latitude + "longitude: "
        + position.coords.longitude);
}

function fail()
{
    alert("Your position cannot be found");
}



// Simple way to attach js code to the canvas is by using a function
function sketchProc(processing) {
  
  //console.log(chrome_in_many_lang);

  var canvas_x_width = 480;
  var canvas_y_width = 200;
  var heart_beat = 9;
  var heart_beat_status = 1;
  var radius = 40;
  var X, Y;
  var nX, nY;
  var delay = 16;
  var installed_font_list = processing.PFont.list();
  var font_name = installed_font_list[Math.floor(Math.random()*(installed_font_list.length+1))];
  var initial_heart_beat = -1;
  
  processing.setup = function() {
    processing.size(canvas_x_width, canvas_y_width);  // google doodle size
    processing.strokeWeight(10);
    processing.frameRate(15);
    //processing.fill(255);
    X = processing.width / 2;
    Y = processing.height / 2;
    nX = X;
    nY = Y;
    chrome_small_icon = processing.loadImage("./img/chrome_icon.png");
    processing.background(255,255,255);
  };
  
  
  // Override draw function, by default it will be called 60 times per second
  processing.draw = function() {
    
    processing.background(255,255,255); // kind of init/cleaning
    
    ( function() {
        k = processing.frameCount % canvas_y_width;
        if ( k == 1 ) {
          z0 = Math.floor(Math.random()*10);
          z1 = Math.floor(Math.random()*10);
          processing.textFont(installed_font_list[Math.floor(Math.random()*(installed_font_list.length))], 50);
          l00 = chrome_in_many_lang[Math.floor(Math.random()*(chrome_in_many_lang.length))];
          l01 = chrome_in_many_lang[Math.floor(Math.random()*(chrome_in_many_lang.length))];
          l02 = chrome_in_many_lang[Math.floor(Math.random()*(chrome_in_many_lang.length))];
          l03 = chrome_in_many_lang[Math.floor(Math.random()*(chrome_in_many_lang.length))];
          l04 = chrome_in_many_lang[Math.floor(Math.random()*(chrome_in_many_lang.length))];
          l05 = chrome_in_many_lang[Math.floor(Math.random()*(chrome_in_many_lang.length))];
          l06 = chrome_in_many_lang[Math.floor(Math.random()*(chrome_in_many_lang.length))];
          l07 = chrome_in_many_lang[Math.floor(Math.random()*(chrome_in_many_lang.length))];
          l08 = chrome_in_many_lang[Math.floor(Math.random()*(chrome_in_many_lang.length))];
          l09 = chrome_in_many_lang[Math.floor(Math.random()*(chrome_in_many_lang.length))];
          
          ly0= Math.floor(Math.random()*10);
          ly1 = Math.floor(Math.random()*10);
          ly2 = Math.floor(Math.random()*10);
          ly3 = Math.floor(Math.random()*10);
          ly4 = Math.floor(Math.random()*10);
          ly5 = Math.floor(Math.random()*10);
          ly6 = Math.floor(Math.random()*10);
          ly7 = Math.floor(Math.random()*10);
          ly8 = Math.floor(Math.random()*10);
          ly9 = Math.floor(Math.random()*10);
          color = Math.floor(Math.random()*3);
        }
        
        var tt = (processing.frameCount % canvas_y_width);
        
        switch(color)
        {
          case 0 :
            processing.fill(255, 0, 0); // red
            processing.text(l00, 0, tt-(ly0*4));
            processing.fill(255, 215, 0); // yellow
            processing.text(l01, 50, tt-(ly1*4));
            processing.fill(34,139,34); // green
            processing.text(l01, 50, tt-(ly1*4));
            processing.fill(255, 0, 0); // red
            processing.text(l02, 100, tt-(ly2*4));
            processing.fill(255, 215, 0); // yellow
            processing.text(l03, 150, tt-(ly3*4));
            processing.fill(34,139,34); // green
            processing.text(l04, 200, tt-(ly4*4));
            processing.fill(255, 0, 0); // red
            processing.text(l05, 250, tt-(ly5*4));
            processing.fill(255, 215, 0); // yellow
            processing.text(l06, 300, tt-(ly6*4));
            processing.fill(34,139,34); // green
            processing.text(l07, 350, tt-(ly7*4));
            processing.fill(255, 0, 0); // red
            processing.text(l08, 400, tt-(ly8*4));
            processing.fill(255, 215, 0); // yellow
            processing.text(l09, 450, tt-(ly9*4));
            break;
          
          case 1 :
            processing.fill(255, 215, 0); // yellow
            processing.text(l00, 0, tt-(ly0*4));
            processing.fill(34,139,34); // green
            processing.text(l01, 50, tt-(ly1*4));
            processing.fill(255, 0, 0); // red
            processing.text(l01, 50, tt-(ly1*4));
            processing.fill(255, 215, 0); // yellow
            processing.text(l02, 100, tt-(ly2*4));
            processing.fill(34,139,34); // green
            processing.text(l03, 150, tt-(ly3*4));
            processing.fill(255, 0, 0); // red
            processing.text(l04, 200, tt-(ly4*4));
            processing.fill(255, 215, 0); // yellow
            processing.text(l05, 250, tt-(ly5*4));
            processing.fill(34,139,34); // green
            processing.text(l06, 300, tt-(ly6*4));
            processing.fill(255, 0, 0); // red
            processing.text(l07, 350, tt-(ly7*4));
            processing.fill(255, 215, 0); // yellow
            processing.text(l08, 400, tt-(ly8*4));
            processing.fill(34,139,34); // green
            processing.text(l09, 450, tt-(ly9*4));
            break;
          
          case 2 :
            processing.fill(34,139,34); // green
            processing.text(l00, 0, tt-(ly0*4));
            processing.fill(255, 0, 0); // red
            processing.text(l01, 50, tt-(ly1*4));
            processing.fill(255, 215, 0); // yellow
            processing.text(l01, 50, tt-(ly1*4));
            processing.fill(34,139,34); // green
            processing.text(l02, 100, tt-(ly2*4));
            processing.fill(255, 0, 0); // red
            processing.text(l03, 150, tt-(ly3*4));
            processing.fill(255, 215, 0); // yellow
            processing.text(l04, 200, tt-(ly4*4));
            processing.fill(34,139,34); // green
            processing.text(l05, 250, tt-(ly5*4));
            processing.fill(255, 0, 0); // red
            processing.text(l06, 300, tt-(ly6*4));
            processing.fill(255, 215, 0); // yellow
            processing.text(l07, 350, tt-(ly7*4));
            processing.fill(34,139,34); // green
            processing.text(l08, 400, tt-(ly8*4));
            processing.fill(255, 215, 0); // yellow
            processing.text(l09, 450, tt-(ly9*4));
            break;
          
        }
        

      }
    )()
    
    radius = radius + processing.sin( processing.frameCount / heart_beat );
    // Track circle to new destination  
    X+=(nX-X)/delay;  
    Y+=(nY-Y)/delay;
    
    processing.fill(0, 121, 184);
    processing.stroke(255);
    
    //processing.ellipse(X, Y, radius, radius);
    
    mouseMoved();
    /*
    if ( X < 1) X = 1;
    if ( Y < 1) X = 1;
    if ( X > canvas_x_width-radius-1) X = canvas_x_width-radius-1;
    if ( Y > canvas_y_width-radius-1) Y = canvas_y_width-radius-1;
    */
    processing.imageMode(processing.CENTER);
    processing.image(chrome_small_icon, 80, 64, radius, radius);
    
    if (  initial_heart_beat * (processing.sin(processing.frameCount / (heart_beat))) < 0 ) {
      installed_font_list = processing.PFont.list();
      font_name = installed_font_list[Math.floor(Math.random()*(installed_font_list.length+1))];
      initial_heart_beat = initial_heart_beat * -1;
      //processing.image(chrome_small_icon, X, Y, radius, radius);
    }

    font = processing.loadFont(font_name); 
    processing.textFont(font, 40); 
    processing.text("Google Chrome", 115, 77);
    
    processing.fill(255, 0, 0); // red #FF0000
    processing.rect(0,160,40,40);
    processing.fill(255,165,0); // orange #FFA500
    processing.rect(40,160,40,40);
    processing.fill(255,255,0); // yellow #FFFF00
    processing.rect(80,160,40,40);
    processing.fill(0,128,0); // green #008000
    processing.rect(120,160,40,40);
    processing.fill(0,0,255); // blue #0000FF
    processing.rect(160,160,40,40);
    processing.fill(75,0,130); // indigo #4B0082
    processing.rect(200,160,40,40);
    processing.fill(238,130,238); // violet #EE82EE
    processing.rect(240,160,40,40);
    processing.fill(255, 0, 0); // red #FF0000
    processing.rect(280,160,40,40);
    processing.fill(255,165,0); // orange #FFA500
    processing.rect(320,160,40,40);
    processing.fill(255,255,0); // yellow #FFFF00
    processing.rect(360,160,40,40);
    processing.fill(0,128,0); // green #008000
    processing.rect(400,160,40,40);
    processing.fill(0,0,255); // blue #0000FF
    processing.rect(440,160,40,40);

    
    mouseOver();

  };
  
  var mouseMoved = function() {
    nX = processing.mouseX;  
    nY = processing.mouseY; 
  };
  
  var mouseOver = function() {
    //console.log(processing.mouseY);
    if ((0 < processing.mouseX) && (processing.mouseX < 40)) {
      processing.fill(255, 0, 0); // red #FF0000
      processing.rect(0,120,40,80);
      processing.textSize(18);
      processing.textFont(installed_font_list[0]);
      processing.text("Speed", 0, 113);
      if ((processing.mouseButton == processing.LEFT) && (processing.mouseY > 120)) {
        processing.link("http://www.google.com/chrome/intl/en/more/speed.html");
        processing.exit();
      }
    }
    if ((40 < processing.mouseX) && (processing.mouseX < 80)) {
      processing.fill(255,165,0); // orange #FFA500
      processing.rect(40,120,40,80);
      processing.textSize(18);
      processing.textFont(installed_font_list[0]);
      processing.text("Simplicity", 23, 113);
      if ((processing.mouseButton == processing.LEFT) && (processing.mouseY > 120)) {
        processing.link("http://www.google.com/chrome/intl/en/more/index.html");
        processing.exit();
      }
    }
    if ((80 < processing.mouseX) && (processing.mouseX < 120)) {
      processing.fill(255,255,0); // yellow #FFFF00
      processing.rect(80,120,40,80);
      processing.textSize(18);
      processing.textFont(installed_font_list[0]);
      processing.fill(0,0,0);
      processing.text("Security", 70, 113);
      if ((processing.mouseButton == processing.LEFT) && (processing.mouseY > 120)) {
        processing.link("http://www.google.com/chrome/intl/en/more/security.html");
        processing.exit();
      }
    }
    if ((120 < processing.mouseX) && (processing.mouseX < 160)) {
      processing.fill(0,128,0); // green #008000
      processing.rect(120,120,40,80);
      processing.textSize(18);
      processing.textFont(installed_font_list[0]);
      processing.text("Themes", 110, 113);
      if ((processing.mouseButton == processing.LEFT) && (processing.mouseY > 120)) {
        processing.link("https://tools.google.com/chrome/intl/en/themes/p/at_chrome.html");
        processing.exit();
      }
    }
    if ((160 < processing.mouseX) && (processing.mouseX < 200)) {
      processing.fill(0,0,255); // blue #0000FF
      processing.rect(160,120,40,80);
      processing.textSize(18);
      processing.textFont(installed_font_list[0]);
      processing.text("New Tab page", 120, 113);
      if ((processing.mouseButton == processing.LEFT) && (processing.mouseY > 120)) {
        processing.link("http://www.google.com/chrome/intl/en/more/features.html");
        processing.exit();
      }
    }
    if ((200 < processing.mouseX) && (processing.mouseX < 240)) {
      processing.fill(75,0,130); // indigo #4B0082
      processing.rect(200,120,40,80);
      processing.textSize(18);
      processing.textFont(installed_font_list[0]);
      processing.text("Omnibox", 180, 113);
      if ((processing.mouseButton == processing.LEFT) && (processing.mouseY > 120)) {
        processing.link("http://www.google.com/chrome/intl/en/more/features.html");
        processing.exit();
      }
    }
    if ((240 < processing.mouseX) && (processing.mouseX < 280)) {
      processing.fill(238,130,238); // violet #EE82EE
      processing.rect(240,120,40,80);
      processing.textSize(18);
      processing.textFont(installed_font_list[0]);
      processing.text("Incognito mode", 210, 113);
      if ((processing.mouseButton == processing.LEFT) && (processing.mouseY > 120)) {
        processing.link("http://www.google.com/chrome/intl/en/more/features.html");
        processing.exit();
      }
    }
    if ((280 < processing.mouseX) && (processing.mouseX < 320)) {
      processing.fill(255, 0, 0); // red #FF0000
      processing.rect(280,120,40,80);
      processing.textSize(18);
      processing.textFont(installed_font_list[0]);
      processing.text("Tabs and Stability", 230, 113);
      if ((processing.mouseButton == processing.LEFT) && (processing.mouseY > 120)) {
        processing.link("http://www.google.com/chrome/intl/en/more/features.html");
        processing.exit();
      }
    }
    if ((320 < processing.mouseX) && (processing.mouseX < 360)) {
      processing.fill(255,165,0); // orange #FFA500
      processing.rect(320,120,40,80);
      processing.textSize(18);
      processing.textFont(installed_font_list[0]);
      processing.text("Privacy", 310, 113);
      if ((processing.mouseButton == processing.LEFT) && (processing.mouseY > 120)) {
        processing.link("http://www.google.com/chrome/intl/en/more/privacy.html");
        processing.exit();
      }
    }
    if ((360 < processing.mouseX) && (processing.mouseX < 400)) {
      processing.fill(255,255,0); // yellow #FFFF00
      processing.rect(360,120,40,80);
      processing.textSize(18);
      processing.textFont(installed_font_list[0]);
      processing.fill(0,0,0);
      processing.text("Web Store", 340, 113);
      if ((processing.mouseButton == processing.LEFT) && (processing.mouseY > 120)) {
        processing.link("http://www.google.com/chrome/intl/en/more/webstore.html");
        processing.exit();
      }
    }
    if ((400 < processing.mouseX) && (processing.mouseX < 440)) {
      processing.fill(0,128,0); // green #008000
      processing.rect(400,120,40,80);
      processing.textSize(18);
      processing.textFont(installed_font_list[0]);
      processing.text("Learn more", 370, 113);
      if ((processing.mouseButton == processing.LEFT) && (processing.mouseY > 120)) {
        processing.link("http://www.google.com/chrome/intl/en/more/index.html");
        processing.exit();
      }
    }
    if ((440 < processing.mouseX) && (processing.mouseX < 480)) {
      processing.fill(0,0,255); // blue #0000FF
      processing.rect(440,120,40,80);
      processing.textSize(18);
      processing.textFont(installed_font_list[0]);
      processing.text("Download Chrome", 340, 113);
      if ((processing.mouseButton == processing.LEFT) && (processing.mouseY > 120)) {
        processing.link("http://www.google.com/chrome/intl/en/landing_chrome_mac.html?hl=en&hl=en");
        processing.exit();
      }
    }

  }

  
  
  
  
  

}


  



var canvas = document.getElementById("googledoodle");
// attaching the sketchProc function to the canvas
var p = new Processing(canvas, sketchProc);
// p.exit(); to detach it
