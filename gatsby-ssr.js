import React from "react"
import { stripIndent } from "common-tags"

export const onRenderBody = ({ setHeadComponents }) => {
  const debug = false;
  const sdkFile = debug === true ? `sdk/debug.js` : `sdk.js`

  if (process.env.NODE_ENV === `production` || includeInDevelopment || debug) {
    setHeadComponents([
      <script
        dangerouslySetInnerHTML={{
          __html: stripIndent(`
            window.fbAsyncInit = function() {
              FB.init({
                appId      : "3025415194136842",
                cookie     : false,
                version    : "v3.3",
                xfbml      : false,
              });
              FB.AppEvents.logPageView();
            };
            (function(d, s, id){
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) {return;}
              js = d.createElement(s); js.id = id;
              js.src = "https://connect.facebook.net/en_US/${sdkFile}";
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        `),
        }}
      />,
    ])
  }
}
