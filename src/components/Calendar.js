import React, { useEffect } from "react";

export default function Calendar() {
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "1098172152944-1akbslf7b98c1e5odih0lrvug0aj2s3f.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);
  return <div id="signInDiv"></div>;
}
