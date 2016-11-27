var search;


//var search = "cats";

var randomNumber = ()=>{
  return Math.floor((Math.random() * 100));
}

console.log('ok!');

function doShit(search) {

  var searchUrl = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&limit=100`;

  $.get(searchUrl, function(result) {
    $('*').each(function(){

      number = randomNumber();
      var image = result.data[number].images.downsized.url;

        if ($(this).is('img')) {
            $(this).attr('src',image);
        }

    });

  });
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
    doShit();
      sendResponse({farewell: "goodbye"});
  });
