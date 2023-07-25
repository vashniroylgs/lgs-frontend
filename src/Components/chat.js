import React, { Component } from 'react'




export class Chat extends Component {




componentDidMount(){

   

    (function(d, m){

        var kommunicateSettings =

            {"appId":"3f2ef8d211d505f13dc1a651639608fd","popupWidget":true,"automaticChatOpenOnNavigation":true};

       

            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;

        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";

        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);

        window.kommunicate = m; m._globals = kommunicateSettings;

    })(document, window.kommunicate || {});

/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */




}




  render() {

    return (
      <p>hi</p>
    );

  }

}




export default Chat;
// import React, { Component } from 'react';

// export class Chat extends Component {
//   componentDidMount() {
//     // Check if Kommunicate script is already loaded
//     if (!window.kommunicate) {
//       // Load the script if not already loaded
//       var kommunicateSettings = {
//         appId: '3f2ef8d211d505f13dc1a651639608fd',
//         popupWidget: true,
//         automaticChatOpenOnNavigation: true,
//         isAnonymousChat: false,
//       };

//       var s = document.createElement('script');
//       s.type = 'text/javascript';
//       s.async = true;
//       s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';

//       var h = document.getElementsByTagName('head')[0];
//       h.appendChild(s);

//       window.kommunicate = true; // Set a global variable to indicate that the script is loaded
//       window._globals = kommunicateSettings; // Store the settings in another global variable if needed
//     }
//   }

//   render() {
//     // If you don't want to render anything, return null
//     return null;
//   }
// }

// export default Chat;
