import { useEffect } from 'react';

function Bot() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.kenyt.ai/botapp/ChatbotUI/dist/js/bot-loader.js';
    script.type = 'text/javascript';
    script.dataset.bot = '283540085';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return null;
}

export default Bot;