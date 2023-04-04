import { useEffect } from "react";

function Bot() {
  const script = document.createElement("script");
  script.src = "https://www.kenyt.ai/botapp/ChatbotUI/dist/js/bot-loader.js";
  script.type = "text/javascript";
  script.dataset.bot = "283540085";

  function AddBot() {
    document.body.appendChild(script);
  }

  function RemoveBot() {
    document.body.removeChild(script);
  }

  useEffect(() => {
    setTimeout(AddBot, 10000);

    return () => {
      RemoveBot();
    };
  }, []);

  return null;
}

export default Bot;
