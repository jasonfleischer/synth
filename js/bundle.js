(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$=function(id){return document.getElementById(id)};var isSafari=navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&navigator.userAgent.indexOf("CriOS")==-1&&navigator.userAgent.indexOf("FxiOS")==-1;window.mobileCheck=function(){let check=false;(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check=true})(navigator.userAgent||navigator.vendor||window.opera);return check};window.mobileAndTabletCheck=function(){let check=false;(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check=true})(navigator.userAgent||navigator.vendor||window.opera);return check};function isFromHomeScreen(){const params=new URLSearchParams(window.location.search);return params.has("from")}model={master_volume_percent:30,oscillatorTypeIndex:0,oscillatorTypes:["sine","triangle","sawtooth","square"]};storage={};storage.load=function(){model.master_volume_percent=storage.get_volume(30)};storage.VOLUME_KEY="SYNTH_VOLUME_KEY";storage.get_volume=function(default_value){return storage.get(storage.VOLUME_KEY,default_value)};storage.set_volume=function(value){localStorage.setItem(storage.VOLUME_KEY,value)};storage.get=function(key,default_value){let result=localStorage.getItem(key);return result==undefined?default_value:result};Oscillator=class Oscillator{constructor(audioContext,frequency,volume,type){this.audioContext=audioContext;this.oscillator=this.audioContext.createOscillator();this.oscillator.type=type;this.oscillator.frequency.value=frequency;this.gainNode=this.audioContext.createGain();this.gainNode.gain.value=0;this.oscillator.connect(this.gainNode);this.gainNode.connect(compressorNode);this.playing=false;this.volume=volume}play(){if(!this.playing){var time=this.audioContext.currentTime;this.oscillator.start(time);this.gainNode.gain.setValueAtTime(1e-5,time);this.gainNode.gain.exponentialRampToValueAtTime(Math.max(1e-5,this.volume),time+.1);this.playing=true}}stop(delayTime){if(this.playing){var time=this.audioContext.currentTime;this.playing=false;this.gainNode.gain.setValueAtTime(this.volume,time);this.gainNode.gain.exponentialRampToValueAtTime(1e-5,time+delayTime);this.oscillator.stop(time+delayTime+.1)}}setVolume(volume,ramp,rampTime=0){if(this.playing){var time=this.audioContext.currentTime;if(ramp){this.gainNode.gain.setValueAtTime(this.volume,time);this.gainNode.gain.exponentialRampToValueAtTime(volume,time+rampTime);this.volume=volume}else{this.gainNode.gain.setValueAtTime(volume,time)}}}setOscillatorType(type){this.oscillator.type=type}};Note=class Note{constructor(audioContext,fundamentalFrequency,harmonicsVolumePercents){this.id=fundamentalFrequency;this.audioContext=audioContext;this.oscillators=[];this.harmonicsVolumePercents=harmonicsVolumePercents;this.playing=false;var i;for(i=0;i<harmonicsVolumePercents.length;i++){var volumePercent=Math.min(Math.max(harmonicsVolumePercents[i],0),1);this.oscillators.push(new Oscillator(audioContext,fundamentalFrequency*(i+1),volumePercent,model.oscillatorTypes[model.oscillatorTypeIndex]))}}play(){var i;for(i=0;i<this.oscillators.length;i++){this.oscillators[i].play()}this.playing=true}stop(delayTime=.5){var i;for(i=0;i<this.oscillators.length;i++){this.oscillators[i].stop(delayTime)}this.playing=false}setHarmonicVolume(index,volume,ramp=false,rampTime=0){this.harmonicsVolumePercents[index]=volume;if(index<this.oscillators.length)this.oscillators[index].setVolume(volume,ramp,rampTime)}setOscillatorType(type){var i;for(i=0;i<this.oscillators.length;i++){this.oscillators[i].setOscillatorType(type)}}};alert={};alert.init=function(){$("alert_container").addEventListener("click",function(event){alert.dismiss()});$("dismiss_alert_button").addEventListener("click",function(event){alert.dismiss()});$("alert").addEventListener("click",function(event){event.stopPropagation();return false})};alert.show=function(title,contents){$("alert_title").innerHTML=title;$("alert_contents").innerHTML=contents;$("alert_container").style.display="block"};alert.dismiss=function(){$("alert_container").style.display="none"};information={};information.showAlert=function(){let contents=`
		<p onclick="openMailToDeveloper()">Thank you for using this website. If you wish to submit feedback, comment or report an error click <strong>here</strong>.</p>
		<p onclick="openURL('https://jasonfleischer.github.io/website/');">Information about the developer can be found <strong>here</strong>.</p>`;alert.show("Information",contents)};information.dismissAlert=function(){alert.dismiss()};openURL=function(url){window.open(url,"_blank")};openMailToDeveloper=function(){var subject="Synth Website Feedback";subject=subject.replaceAll(" ","%20");openURL("mailto:jason_fleischer@hotmail.ca?Subject="+subject)};var o;var g;var ctx;var playing=false;var setup=false;var tremoloNode;var bpm=120;var tremoloMin=.7;var tremoloMax=1;var tremoloVolume=1;var fade_in_seconds=25;var duration=5;compressorNode={};var masterGainNode;var analyserNode;var bufferLength;var dataArray;var masterVolume=storage.get_volume(.3);var notes=new Map;var lastNote;var harmonicsVolume=[1,.286699025,.63513,.042909002,.2522,.30904,.25045,.2004,0,.14836,.17415,.07979,.05383,.07332,.07206,.08451,.022270261,.013072562,.008585879,.005771505,.004343925,.002141371,.005343231,530244e-9,.004711017,.009014153];init=function(){storage.load();alert.init();updatePresetButtonsUI(5);var isSafariMobile=window.mobileAndTabletCheck()&&isSafari;if(isSafariMobile&&!isFromHomeScreen()){install.showAlert()}setupOscillatorTypeSlider();function setupOscillatorTypeSlider(){var slider=$("oscillatorTypeRange");slider.value=model.oscillatorTypeIndex;var sliderText=$("oscillatorType");sliderText.innerHTML="Oscillator: "+model.oscillatorTypes[model.oscillatorTypeIndex];slider.oninput=function(){model.oscillatorTypeIndex=parseInt(this.value);sliderText.innerHTML="Oscillator: "+model.oscillatorTypes[model.oscillatorTypeIndex];setOscillatorType(model.oscillatorTypes[model.oscillatorTypeIndex])}}setupVolumeSlider();function setupVolumeSlider(){var slider=$("volumeRange");slider.value=masterVolume*1e3;var sliderText=$("volume");sliderText.innerHTML="Volume: "+(masterVolume*100).toFixed()+"%";slider.oninput=function(){masterVolume=Math.max(1e-5,this.value/1e3);storage.set_volume(masterVolume);sliderText.innerHTML="Volume: "+(masterVolume*100).toFixed()+"%";if(setup){masterGainNode.gain.setValueAtTime(masterVolume,ctx.currentTime)}}}setupFadeSlider();function setupFadeSlider(){var slider=$("fadeRange");slider.value=fade_in_seconds;var sliderText=$("fade");sliderText.innerHTML="Fade: "+fade_in_seconds.toFixed(1)+"s";slider.oninput=function(){fade_in_seconds=parseFloat(this.value);sliderText.innerHTML="Fade: "+fade_in_seconds.toFixed(1)+"s"}}setupDurationSelect();function setupDurationSelect(){var select=$("duration_select");select.value=duration;var selectText=$("duration");selectText.innerHTML=duration==-1?"Duration":"Duration: "+duration+"min";select.oninput=function(){duration=parseFloat(this.value);selectText.innerHTML=duration==-1?"Duration":"Duration: "+duration+"min"}}setupBpmSlider();function setupBpmSlider(){var slider=$("bpmRange");slider.value=bpm;var sliderText=$("bpm");sliderText.innerHTML="BPM: "+bpm;slider.oninput=function(){bpm=parseInt(this.value);sliderText.innerHTML="BPM: "+bpm}}setupTremoloMinSlider();function setupTremoloMinSlider(){var slider=$("tremoloMinRange");slider.value=tremoloMin*100;var sliderText=$("tremoloMin");sliderText.innerHTML="Min: "+tremoloMin.toFixed(2);slider.oninput=function(){var v=parseFloat(this.value)/100;tremoloMin=Math.min(tremoloMax,v);sliderText.innerHTML="Min: "+tremoloMin.toFixed(2)}}setupTremoloMaxSlider();function setupTremoloMaxSlider(){var slider=$("tremoloMaxRange");slider.value=tremoloMax*100;var sliderText=$("tremoloMax");sliderText.innerHTML="Max: "+tremoloMax.toFixed(2);slider.oninput=function(){var v=parseFloat(this.value)/100;tremoloMax=Math.max(tremoloMin,v);sliderText.innerHTML="Max: "+tremoloMax.toFixed(2)}}setupHarmonicsTable();function setupHarmonicsTable(){var i;var table=$("harmonics_table");var innerTableHtml="";for(i=0;i<harmonicsVolume.length;i++){var value=harmonicsVolume[i];var percentValue=value*100;innerTableHtml+=`<tr>
									<td><label id='harmonic_text_`+i+`' for='harmonic_`+i+`'>H`+i+`</label></td>
									<td><input type='range' min='0' max='100' value='`+percentValue+`' step='0.001' class='slider' id='harmonic_`+i+`'/></td>
								</tr>`}table.innerHTML=innerTableHtml;for(i=0;i<harmonicsVolume.length;i++){setupHarmonicSlider(i)}function setupHarmonicSlider(i){var value=harmonicsVolume[i];var percentValue=value*100;var slider=$("harmonic_"+i);var sliderText=$("harmonic_text_"+i);sliderText.innerHTML="H"+i+": "+percentValue.toFixed(3);slider.oninput=function(){var v=parseFloat(this.value);sliderText.innerHTML="H"+i+": "+v.toFixed(3);var volume=v/100;harmonicsVolume[i]=volume;for(const[frequency,note]of notes){note.setHarmonicVolume(i,volume)}}}}};tapC=function(elem,octave,harmonic=false){startNote(elem,32.7032*Math.pow(2,octave-1),harmonic)};tapCsharp=function(elem,octave,harmonic=false){startNote(elem,34.64783*Math.pow(2,octave-1),harmonic)};tapD=function(elem,octave,harmonic=false){startNote(elem,36.7081*Math.pow(2,octave-1),harmonic)};tapDsharp=function(elem,octave,harmonic=false){startNote(elem,38.89087*Math.pow(2,octave-1),harmonic)};tapE=function(elem,octave,harmonic=false){startNote(elem,41.20344*Math.pow(2,octave-1),harmonic)};tapF=function(elem,octave,harmonic=false){startNote(elem,43.65353*Math.pow(2,octave-1),harmonic)};tapFsharp=function(elem,octave,harmonic=false){startNote(elem,46.2493*Math.pow(2,octave-1),harmonic)};tapG=function(elem,octave,harmonic=false){startNote(elem,48.99943*Math.pow(2,octave-1),harmonic)};tapGsharp=function(elem,octave,harmonic=false){startNote(elem,51.91309*Math.pow(2,octave-1),harmonic)};tapA=function(elem,octave,harmonic=false){startNote(elem,55*Math.pow(2,octave-1),harmonic)};tapAsharp=function(elem,octave,harmonic=false){startNote(elem,58.27047*Math.pow(2,octave-1),harmonic)};tapB=function(elem,octave,harmonic=false){startNote(elem,61.73541*Math.pow(2,octave-1),harmonic)};function startNote(elem,frequency,harmonic){if(!harmonic){frequency=frequency+1e-4}if(!setup){window.AudioContext=window.AudioContext||window.webkitAudioContext;ctx=new AudioContext;tremoloNode=ctx.createGain();tremoloNode.gain.value=tremoloVolume;masterGainNode=ctx.createGain();masterGainNode.gain.value=masterVolume;compressorNode=ctx.createDynamicsCompressor();compressorNode.threshold.setValueAtTime(-20,ctx.currentTime);compressorNode.knee.setValueAtTime(40,ctx.currentTime);compressorNode.ratio.setValueAtTime(12,ctx.currentTime);compressorNode.attack.setValueAtTime(0,ctx.currentTime);compressorNode.release.setValueAtTime(.25,ctx.currentTime);analyserNode=ctx.createAnalyser();analyserNode.fftSize=2048;bufferLength=analyserNode.frequencyBinCount;dataArray=new Uint8Array(bufferLength);analyserNode.getByteTimeDomainData(dataArray);compressorNode.connect(tremoloNode);tremoloNode.connect(masterGainNode);masterGainNode.connect(analyserNode);masterGainNode.connect(ctx.destination);draw();clearTimeout(timeout);timeout=setTimeout(fluctuateVolume,0);setup=true}if(notes.has(frequency)){var note=notes.get(frequency);if(note.playing){note.stop();removeClass(elem,"selected");notes.delete(frequency);if(notes.size==0){playing=false;stopDurationTimer()}return}else{notes.delete(frequency)}}lastNote=new Note(ctx,frequency,harmonic?harmonicsVolume:[1]);analyserNode.fftSize=2048;bufferLength=analyserNode.frequencyBinCount;dataArray=new Uint8Array(bufferLength);analyserNode.getByteTimeDomainData(dataArray);if(notes.size==0){playing=true;startDurationTimer()}notes.set(frequency,lastNote);lastNote.play();addClass(elem,"selected")}var durationStartTime;var durationTimeout;function startDurationTimer(){if(duration==-1)return;durationStartTime=Date.now();durationTimerWork()}function durationTimerWork(){var timeExpired=Date.now()-durationStartTime;var buttonText=$("stop_delay");var durationInMS=duration*60*1e3;var timeRemaining=durationInMS-timeExpired;var humanReadable=human_readable_duration(timeRemaining);buttonText.innerHTML=humanReadable==""?"Fade Out":"Fade Out ("+human_readable_duration(timeRemaining)+")";if(timeExpired>durationInMS){stopDurationTimer()}else{durationTimeout=setTimeout(durationTimerWork,200)}function human_readable_duration(duration_in_MS){var duration_in_seconds=duration_in_MS/1e3;if(duration_in_seconds<60){return formattedSeconds(duration_in_seconds)}else if(duration_in_seconds<60*60){var mins=parseInt(duration_in_seconds/60);var secs=duration_in_seconds-mins*60;return mins+" min"+(secs==0?"":" ")+formattedSeconds(secs)}else if(duration_in_seconds>=60*60){var hours=parseInt(duration_in_seconds/60/60);return hours+" hour"}else{return""}function formattedSeconds(seconds){seconds=parseInt(seconds);if(seconds==0)return"";else if(seconds<10)return"0"+seconds+" s";else return seconds+" s"}}}function stopDurationTimer(){var buttonText=$("stop_delay");buttonText.innerHTML="Fade Out";clearTimeout(durationTimeout);fadeStop()}var timeout;var fluctateDown=true;function fluctuateVolume(){function BPMtoMilliSeconds(BPM){return 1e3/(BPM/60)}var timeMS=BPMtoMilliSeconds(bpm);if(playing){if(fluctateDown){setVolume(tremoloMin,timeMS/1e3)}else{setVolume(tremoloMax,timeMS/1e3);clearTimeout(visualizationTimeout);visualizationfrequencyInHz=1e3/timeMS/2;visualizationTimeout=setTimeout(visualizationUpdate,0)}fluctateDown=!fluctateDown}timeout=setTimeout(fluctuateVolume,timeMS);function setVolume(volume,rampTime=0){var time=ctx.currentTime;tremoloNode.gain.setValueAtTime(tremoloVolume,time);tremoloNode.gain.exponentialRampToValueAtTime(Math.max(1e-5,volume),time+rampTime);tremoloVolume=volume}}var startTime=Date.now();var visualizationSlider=$("tremoloVisualizationRange");var visualizationTimeout;var visualizationfrequencyInHz=.5;function visualizationUpdate(){if(!playing||notes.length==0)return;var timeDiff=(Date.now()-startTime)/1e3;var min=tremoloMin*100;var max=tremoloMax*100;var frequencyInHz=visualizationfrequencyInHz;var amplitude=(max-min)/2;var phase=0;var PI=Math.PI;var sliderValue=amplitude*Math.sin(2*PI*frequencyInHz*timeDiff+phase)+amplitude+min;visualizationSlider.value=sliderValue;visualizationTimeout=setTimeout(visualizationUpdate,40)}kofi=function(){window.open("https://ko-fi.com/jasonfleischer","_blank")};info=function(){information.showAlert()};function dismissInfo(){information.dismissAlert()}function setOscillatorType(type){for(const[frequency,note]of notes){note.setOscillatorType(type)}}harmonicsPreset0=function(){setHarmonicVolume([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);updatePresetButtonsUI(0)};harmonicsPreset1=function(){var volumeAry=[];volumeAry[0]=1;for(i=1;i<harmonicsVolume.length;i++){volumeAry[i]=volumeAry[i-1]/2}setHarmonicVolume(volumeAry);updatePresetButtonsUI(1)};harmonicsPreset2=function(){var volumeAry=[];var numberOfHarmonicsToSet=7;for(i=0;i<harmonicsVolume.length;i++){volumeAry[i]=Math.max(0,1-i/(numberOfHarmonicsToSet-1))}setHarmonicVolume(volumeAry);updatePresetButtonsUI(2)};harmonicsPreset3=function(){var volumeAry=[];var numberOfHarmonicsToSet=5;for(i=0;i<harmonicsVolume.length;i++){if(i%2==0){volumeAry[i]=Math.max(0,1-i/(numberOfHarmonicsToSet*2-1))}else{volumeAry[i]=0}}setHarmonicVolume(volumeAry);updatePresetButtonsUI(3)};harmonicsPreset4=function(){var volumeAry=[];var numberOfHarmonicsToSet=5;for(i=0;i<harmonicsVolume.length;i++){volumeAry[i]=100/(2+i-1)/100}setHarmonicVolume(volumeAry);updatePresetButtonsUI(4)};harmonicsPreset5=function(){setHarmonicVolume([1,.286699025,.63513,.042909002,.2522,.30904,.25045,.2004,0,.14836,.17415,.07979,.05383,.07332,.07206,.08451,.022270261,.013072562,.008585879,.005771505,.004343925,.002141371,.005343231,530244e-9,.004711017,.009014153]);updatePresetButtonsUI(5)};setHarmonicVolume=function(volumeAry){for(i=0;i<volumeAry.length;i++){harmonicsVolume[i]=volumeAry[i];for(const[frequency,note]of notes){note.setHarmonicVolume(i,volumeAry[i])}$("harmonic_text_"+i).innerHTML="H"+i+": "+(volumeAry[i]*100).toFixed(3);$("harmonic_"+i).value=volumeAry[i]*100}};updatePresetButtonsUI=function(index){var i;for(i=0;i<6;i++){let elem=$("P"+i);if(i==index){addClass(elem,"selected")}else{removeClass(elem,"selected")}}};fadeStop=function(){stop(fade_in_seconds)};stop=function(delayTime=.5){if(!playing)return;playing=false;stopDurationTimer();for(const[frequency,note]of notes){note.stop(delayTime)}notes.clear();clearbuttonUI();function clearbuttonUI(){var buttons=document.getElementsByTagName("button");for(let i=0;i<buttons.length;i++){let button=buttons[i];removeClass(button,"selected")}}};function log(msg){console.log(msg)}function hasClass(ele,cls){return!!ele.className.match(new RegExp("(\\s|^)"+cls+"(\\s|$)"))}function addClass(ele,cls){if(!hasClass(ele,cls))ele.className+=" "+cls}function removeClass(ele,cls){if(hasClass(ele,cls)){var reg=new RegExp("(\\s|^)"+cls+"(\\s|$)");ele.className=ele.className.replace(reg," ")}}var canvas=$("oscilloscope");var canvasCtx=canvas.getContext("2d");var drawing=true;function draw(){requestAnimationFrame(draw);if(drawing){analyserNode.getByteTimeDomainData(dataArray);canvasCtx.fillStyle="#000";canvasCtx.fillRect(0,0,canvas.width,canvas.height);canvasCtx.lineWidth=2;canvasCtx.strokeStyle="#fff";canvasCtx.beginPath();var sliceWidth=canvas.width*1/bufferLength;var x=0;for(var i=0;i<bufferLength;i++){var v=dataArray[i]/128;var y=v*canvas.height/2;if(i===0){canvasCtx.moveTo(x,y)}else{canvasCtx.lineTo(x,y)}x+=sliceWidth}canvasCtx.lineTo(canvas.width,canvas.height/2);canvasCtx.stroke()}}toggleDrawing=function(elem){drawing=!drawing;if(drawing){removeClass(elem,"selected")}else{addClass(elem,"selected")}};var install={};let prompt;if("serviceWorker"in navigator){navigator.serviceWorker.register("/synth/service_worker.js",{scope:"/synth/"}).then(function(reg){if(reg.installing){console.log("synth: Service worker installing")}else if(reg.waiting){console.log("synth: Service worker installed")}else if(reg.active){console.log("synth: Service worker active")}}).catch(function(error){console.log("Registration failed with "+error)})}else{console.log("Service worker not available")}window.onload=function(){init()};window.addEventListener("beforeinstallprompt",function(e){e.preventDefault();prompt=e;if(window.mobileAndTabletCheck()){install.showAlert(function(){prompt.prompt()})}});window.addEventListener("appinstalled",async function(e){alert.dismiss()});install.showAlert=function(install_action){let contents=`
		<p>Install this app on your device to easily access it anytime. Installing this app will result in better performance, improved fullscreen experience, and usage without an internet connection.</p>
		<br/>
	`;var isSafariMobile=window.mobileAndTabletCheck()&&isSafari;if(isSafariMobile){contents+=`
			<div id="ios_install_instructions">
				<p>1. Tap on <img src="img/export.png" alt="export"/></p>
				<p>2. Select 'Add to Home Screen'</p>
			</div>`}else{contents+='<button id="install">Install</button>'}alert.show("Install App",contents);if(!isSafariMobile){let installButton=document.getElementById("install");installButton.addEventListener("click",install_action)}};const CACHE_NAME="v1";const CACHE=["/synth/index.html","/synth/css/bundle.css","/synth/js/bundle.js"];self.addEventListener("install",function(event){console.log("synth: install");event.waitUntil(caches.open(CACHE_NAME).then(function(cache){return cache.addAll(CACHE)}))});self.addEventListener("fetch",function(event){console.log("synth: fetch");event.respondWith(caches.open(CACHE_NAME).then(function(cache){return cache.match(event.request).then(function(response){return response||fetch(event.request).then(function(response){cache.put(event.request,response.clone());return response})})}))});self.addEventListener("activate",function activator(event){console.log("synth: activate");event.waitUntil(caches.keys().then(function(keys){return Promise.all(keys.filter(function(key){return key.indexOf(CACHE_NAME)!==0}).map(function(key){return caches.delete(key)}))}))});
},{}]},{},[1]);
