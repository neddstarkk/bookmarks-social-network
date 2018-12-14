(function(){
    if (window.myBookMarklet !== undefined){
        myBookMarklet();
    }
    else{
        document.body.appendChild(document.createElement('script')).src='https://bfb0f4d8.ngrok.io/static/js/bookmarklet.js?r='+Math.floor(Math.random()*99999999999999999999);
    }
})();