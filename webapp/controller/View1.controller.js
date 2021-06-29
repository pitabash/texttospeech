sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("texttospeech.controller.View1", {
			onInit: function () {

            },
            onPress : function(){
                var text = this.getView().byId("idInp").getValue();
                if ('speechSynthesis' in window) {
                // Speech Synthesis supported 🎉
                var msg = new SpeechSynthesisUtterance();
                msg.text = text;
                window.speechSynthesis.speak(msg);
                // var msg = new SpeechSynthesisUtterance();
                // var voices = window.speechSynthesis.getVoices();
                // msg.voice = voices[10];
                // msg.voiceURI = "native";
                // msg.volume = 1;
                // msg.rate = 1;
                // msg.pitch = 0.8;
                // msg.text = text;
                // msg.lang = 'en-US';
                // speechSynthesis.speak(msg);

                }else{
                // Speech Synthesis Not Supported 😣
                alert("Sorry, your browser doesn't support text to speech!");
}
                
            }
		});
	});
