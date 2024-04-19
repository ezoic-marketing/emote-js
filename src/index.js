// src/index.js

class EmoteComments {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!window.emoteLoaded) {
      this.loadScript();
    } else {
      this.initialize();
    }
  }

  loadScript() {
    const script = document.createElement("script");
    script.src = "https://i.emote.com/js/emote.js";
    script.defer = true;
    script.onload = () => {
      window.emoteLoaded = true; // Setting a flag to indicate the script is loaded
      this.initialize();
    };
    document.head.appendChild(script);
  }

  initialize() {
    if (this.container) {
      this.container.style.width = "60%";
      this.container.style.margin = "5 auto";
    }
  }
}

export default EmoteComments;
