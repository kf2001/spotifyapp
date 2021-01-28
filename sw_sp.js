// 1. Save the files to the user's device
// The "install" event is called when the ServiceWorker starts up.
// All ServiceWorker code must be inside events.
self.addEventListener('install', function(e) {
    console.log('install');
  
    // waitUntil tells the browser that the install event is not finished until we have
    // cached all of our files
    e.waitUntil(
      // Here we call our cache "myonsenuipwa", but you can name it anything unique
      caches.open('myspotpwa').then(cache => {
        // If the request for any of these resources fails, _none_ of the resources will be
        // added to the cache.
        return cache.addAll([
		'/',
          '/index.html',
       
          '/spotapi.js',
        
          '/manifest_sp.json',
        
          '/img/spotify-icon512.png',
          '/img/spotify-icon192.png',
   
   /* */
          '/onsenui/js/onsenui.min.js',
          '/onsenui/css/onsen-css-components.min.css',
          '/onsenui/css/onsenui-core.min.css',
          '/onsenui/css/onsenui-fonts.css',
          '/onsenui/css/onsenui.min.css', 
          '/onsenui/css/font_awesome/css/all.min.css',
          '/onsenui/css/font_awesome/css/fontawesome.min.css',
          '/onsenui/css/font_awesome/css/solid.min.css',
          '/onsenui/css/font_awesome/css/v4-shims.min.css',
          '/onsenui/css/font_awesome/webfonts/fa-brands-400.woff2',
          '/onsenui/css/font_awesome/webfonts/fa-regular-400.woff2',
          '/onsenui/css/font_awesome/webfonts/fa-solid-900.woff2',
		

          '/onsenui/css/ionicons/css/ionicons-core.min.css',
          '/onsenui/css/ionicons/css/ionicons.min.css',

          '/onsenui/css/ionicons/fonts/ionicons.ttf',
          '/onsenui/css/ionicons/fonts/ionicons.woff2',


          '/onsenui/css/material-design-iconic-font/css/material-design-iconic-font.min.css',
        
        ]);
      })
    );
  });
  
  // 2. Intercept requests and return the cached version instead
  self.addEventListener('fetch', function(e) {
    e.respondWith(
      // check if this file exists in the cache
      caches.match(e.request)
        // Return the cached file, or else try to get it from the server
        .then(response => response || fetch(e.request))
    );
  });



