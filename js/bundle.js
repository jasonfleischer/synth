(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$=function(id){return document.getElementById(id)};var isSafari=navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&navigator.userAgent.indexOf("CriOS")==-1&&navigator.userAgent.indexOf("FxiOS")==-1;window.mobileCheck=function(){let check=false;(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check=true})(navigator.userAgent||navigator.vendor||window.opera);return check};window.mobileAndTabletCheck=function(){let check=false;(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check=true})(navigator.userAgent||navigator.vendor||window.opera);return check};function isFromHomeScreen(){const params=new URLSearchParams(window.location.search);return params.has("from")}model={master_volume_percent:30,oscillatorTypeIndex:0,oscillatorTypes:["sine","triangle","sawtooth","square"]};storage={};storage.load=function(){model.master_volume_percent=storage.get_volume(30)};storage.VOLUME_KEY="SYNTH_VOLUME_KEY";storage.get_volume=function(default_value){return storage.get(storage.VOLUME_KEY,default_value)};storage.set_volume=function(value){localStorage.setItem(storage.VOLUME_KEY,value)};storage.get=function(key,default_value){let result=localStorage.getItem(key);return result==undefined?default_value:result};Oscillator=class Oscillator{constructor(audioContext,frequency,volume,type){this.audioContext=audioContext;this.oscillator=this.audioContext.createOscillator();this.oscillator.type=type;this.oscillator.frequency.value=frequency;this.gainNode=this.audioContext.createGain();this.gainNode.gain.value=0;this.oscillator.connect(this.gainNode);this.gainNode.connect(compressorNode);this.playing=false;this.volume=volume}play(){if(!this.playing){var time=this.audioContext.currentTime;this.oscillator.start(time);this.gainNode.gain.setValueAtTime(1e-5,time);this.gainNode.gain.exponentialRampToValueAtTime(Math.max(1e-5,this.volume),time+.1);this.playing=true}}stop(delayTime){if(this.playing){var time=this.audioContext.currentTime;this.playing=false;this.gainNode.gain.setValueAtTime(this.volume,time);this.gainNode.gain.exponentialRampToValueAtTime(1e-5,time+delayTime);this.oscillator.stop(time+delayTime+.1)}}setVolume(volume,ramp,rampTime=0){if(this.playing){var time=this.audioContext.currentTime;if(ramp){this.gainNode.gain.setValueAtTime(this.volume,time);this.gainNode.gain.exponentialRampToValueAtTime(volume,time+rampTime);this.volume=volume}else{this.gainNode.gain.setValueAtTime(volume,time)}}}setOscillatorType(type){this.oscillator.type=type}};Note=class Note{constructor(audioContext,fundamentalFrequency,harmonicsVolumePercents){this.id=fundamentalFrequency;this.audioContext=audioContext;this.oscillators=[];this.harmonicsVolumePercents=harmonicsVolumePercents;this.playing=false;var i;for(i=0;i<harmonicsVolumePercents.length;i++){var volumePercent=Math.min(Math.max(harmonicsVolumePercents[i],0),1);this.oscillators.push(new Oscillator(audioContext,fundamentalFrequency*(i+1),volumePercent,model.oscillatorTypes[model.oscillatorTypeIndex]))}}play(){var i;for(i=0;i<this.oscillators.length;i++){this.oscillators[i].play()}this.playing=true}stop(delayTime=.5){var i;for(i=0;i<this.oscillators.length;i++){this.oscillators[i].stop(delayTime)}this.playing=false}setHarmonicVolume(index,volume,ramp=false,rampTime=0){this.harmonicsVolumePercents[index]=volume;if(index<this.oscillators.length)this.oscillators[index].setVolume(volume,ramp,rampTime)}setOscillatorType(type){var i;for(i=0;i<this.oscillators.length;i++){this.oscillators[i].setOscillatorType(type)}}};alert={};alert.init=function(){$("alert_container").addEventListener("click",function(event){alert.dismiss()});$("dismiss_alert_button").addEventListener("click",function(event){alert.dismiss()});$("alert").addEventListener("click",function(event){event.stopPropagation();return false})};alert.show=function(title,contents){$("alert_title").innerHTML=title;$("alert_contents").innerHTML=contents;$("alert_container").style.display="block"};alert.dismiss=function(){$("alert_container").style.display="none"};information={};information.showAlert=function(){let contents=`
		<p onclick="openMailToDeveloper()">Thank you for using this website. If you wish to submit feedback, comment or report an error click <strong>here</strong>.</p>
		<p onclick="openURL('https://jasonfleischer.github.io/website/');">Information about the developer can be found <strong>here</strong>.</p>`;alert.show("Information",contents)};information.dismissAlert=function(){alert.dismiss()};openURL=function(url){window.open(url,"_blank")};openMailToDeveloper=function(){var subject="Synth Website Feedback";subject=subject.replaceAll(" ","%20");openURL("mailto:jason_fleischer@hotmail.ca?Subject="+subject)};const log=require("@jasonfleischer/log");const pianoKit=require("@jasonfleischer/piano");const musicKit=require("@jasonfleischer/music-model-kit");musicKit.init();var o;var g;var ctx;var playing=false;var setup=false;var tremoloNode;var bpm=120;var tremoloMin=.7;var tremoloMax=1;var tremoloVolume=1;var fade_in_seconds=25;var duration=5;compressorNode={};var masterGainNode;var analyserNode;var bufferLength;var dataArray;var masterVolume=storage.get_volume(.3);var notes=new Map;var lastNote;var harmonicsVolume=[1,.286699025,.63513,.042909002,.2522,.30904,.25045,.2004,0,.14836,.17415,.07979,.05383,.07332,.07206,.08451,.022270261,.013072562,.008585879,.005771505,.004343925,.002141371,.005343231,530244e-9,.004711017,.009014153];init=function(){const pianoView=pianoKit({id:"piano",range:{min:60,max:72},width:325,onClick:function(note,isOn){if(isOn){pianoView.drawNote(note)}else{pianoView.clearNote(note)}},hover:true});new musicKit.MidiListener(function(midiValue,channel,velocity){let note=musicKit.all_notes[midiValue];pianoView.drawNote(note)},function(midiValue,channel,velocity){let note=musicKit.all_notes[midiValue];pianoView.clearNote(note)});storage.load();alert.init();updatePresetButtonsUI(5);var isSafariMobile=window.mobileAndTabletCheck()&&isSafari;if(isSafariMobile&&!isFromHomeScreen()){install.showAlert()}setupOscillatorTypeSlider();function setupOscillatorTypeSlider(){var slider=$("oscillatorTypeRange");slider.value=model.oscillatorTypeIndex;var sliderText=$("oscillatorType");sliderText.innerHTML="Oscillator: "+model.oscillatorTypes[model.oscillatorTypeIndex];slider.oninput=function(){model.oscillatorTypeIndex=parseInt(this.value);sliderText.innerHTML="Oscillator: "+model.oscillatorTypes[model.oscillatorTypeIndex];setOscillatorType(model.oscillatorTypes[model.oscillatorTypeIndex])}}setupVolumeSlider();function setupVolumeSlider(){var slider=$("volumeRange");slider.value=masterVolume*1e3;var sliderText=$("volume");sliderText.innerHTML="Volume: "+(masterVolume*100).toFixed()+"%";slider.oninput=function(){masterVolume=Math.max(1e-5,this.value/1e3);storage.set_volume(masterVolume);sliderText.innerHTML="Volume: "+(masterVolume*100).toFixed()+"%";if(setup){masterGainNode.gain.setValueAtTime(masterVolume,ctx.currentTime)}}}setupFadeSlider();function setupFadeSlider(){var slider=$("fadeRange");slider.value=fade_in_seconds;var sliderText=$("fade");sliderText.innerHTML="Fade: "+fade_in_seconds.toFixed(1)+"s";slider.oninput=function(){fade_in_seconds=parseFloat(this.value);sliderText.innerHTML="Fade: "+fade_in_seconds.toFixed(1)+"s"}}setupDurationSelect();function setupDurationSelect(){var select=$("duration_select");select.value=duration;var selectText=$("duration");selectText.innerHTML=duration==-1?"Duration":"Duration: "+duration+"min";select.oninput=function(){duration=parseFloat(this.value);selectText.innerHTML=duration==-1?"Duration":"Duration: "+duration+"min"}}setupBpmSlider();function setupBpmSlider(){var slider=$("bpmRange");slider.value=bpm;var sliderText=$("bpm");sliderText.innerHTML="BPM: "+bpm;slider.oninput=function(){bpm=parseInt(this.value);sliderText.innerHTML="BPM: "+bpm}}setupTremoloMinSlider();function setupTremoloMinSlider(){var slider=$("tremoloMinRange");slider.value=tremoloMin*100;var sliderText=$("tremoloMin");sliderText.innerHTML="Min: "+tremoloMin.toFixed(2);slider.oninput=function(){var v=parseFloat(this.value)/100;tremoloMin=Math.min(tremoloMax,v);sliderText.innerHTML="Min: "+tremoloMin.toFixed(2)}}setupTremoloMaxSlider();function setupTremoloMaxSlider(){var slider=$("tremoloMaxRange");slider.value=tremoloMax*100;var sliderText=$("tremoloMax");sliderText.innerHTML="Max: "+tremoloMax.toFixed(2);slider.oninput=function(){var v=parseFloat(this.value)/100;tremoloMax=Math.max(tremoloMin,v);sliderText.innerHTML="Max: "+tremoloMax.toFixed(2)}}setupHarmonicsTable();function setupHarmonicsTable(){var i;var table=$("harmonics_table");var innerTableHtml="";for(i=0;i<harmonicsVolume.length;i++){var value=harmonicsVolume[i];var percentValue=value*100;innerTableHtml+=`<tr>
									<td><label id='harmonic_text_`+i+`' for='harmonic_`+i+`'>H`+i+`</label></td>
									<td><input type='range' min='0' max='100' value='`+percentValue+`' step='0.001' class='slider' id='harmonic_`+i+`'/></td>
								</tr>`}table.innerHTML=innerTableHtml;for(i=0;i<harmonicsVolume.length;i++){setupHarmonicSlider(i)}function setupHarmonicSlider(i){var value=harmonicsVolume[i];var percentValue=value*100;var slider=$("harmonic_"+i);var sliderText=$("harmonic_text_"+i);sliderText.innerHTML="H"+i+": "+percentValue.toFixed(3);slider.oninput=function(){var v=parseFloat(this.value);sliderText.innerHTML="H"+i+": "+v.toFixed(3);var volume=v/100;harmonicsVolume[i]=volume;for(const[frequency,note]of notes){note.setHarmonicVolume(i,volume)}}}}};tapC=function(elem,octave,harmonic=false){startNote(elem,32.7032*Math.pow(2,octave-1),harmonic)};tapCsharp=function(elem,octave,harmonic=false){startNote(elem,34.64783*Math.pow(2,octave-1),harmonic)};tapD=function(elem,octave,harmonic=false){startNote(elem,36.7081*Math.pow(2,octave-1),harmonic)};tapDsharp=function(elem,octave,harmonic=false){startNote(elem,38.89087*Math.pow(2,octave-1),harmonic)};tapE=function(elem,octave,harmonic=false){startNote(elem,41.20344*Math.pow(2,octave-1),harmonic)};tapF=function(elem,octave,harmonic=false){startNote(elem,43.65353*Math.pow(2,octave-1),harmonic)};tapFsharp=function(elem,octave,harmonic=false){startNote(elem,46.2493*Math.pow(2,octave-1),harmonic)};tapG=function(elem,octave,harmonic=false){startNote(elem,48.99943*Math.pow(2,octave-1),harmonic)};tapGsharp=function(elem,octave,harmonic=false){startNote(elem,51.91309*Math.pow(2,octave-1),harmonic)};tapA=function(elem,octave,harmonic=false){startNote(elem,55*Math.pow(2,octave-1),harmonic)};tapAsharp=function(elem,octave,harmonic=false){startNote(elem,58.27047*Math.pow(2,octave-1),harmonic)};tapB=function(elem,octave,harmonic=false){startNote(elem,61.73541*Math.pow(2,octave-1),harmonic)};function startNote(elem,frequency,harmonic){if(!harmonic){frequency=frequency+1e-4}if(!setup){window.AudioContext=window.AudioContext||window.webkitAudioContext;ctx=new AudioContext;tremoloNode=ctx.createGain();tremoloNode.gain.value=tremoloVolume;masterGainNode=ctx.createGain();masterGainNode.gain.value=masterVolume;compressorNode=ctx.createDynamicsCompressor();compressorNode.threshold.setValueAtTime(-20,ctx.currentTime);compressorNode.knee.setValueAtTime(40,ctx.currentTime);compressorNode.ratio.setValueAtTime(12,ctx.currentTime);compressorNode.attack.setValueAtTime(0,ctx.currentTime);compressorNode.release.setValueAtTime(.25,ctx.currentTime);analyserNode=ctx.createAnalyser();analyserNode.fftSize=2048;bufferLength=analyserNode.frequencyBinCount;dataArray=new Uint8Array(bufferLength);analyserNode.getByteTimeDomainData(dataArray);compressorNode.connect(tremoloNode);tremoloNode.connect(masterGainNode);masterGainNode.connect(analyserNode);masterGainNode.connect(ctx.destination);draw();clearTimeout(timeout);timeout=setTimeout(fluctuateVolume,0);setup=true}if(notes.has(frequency)){var note=notes.get(frequency);if(note.playing){note.stop();removeClass(elem,"selected");notes.delete(frequency);if(notes.size==0){playing=false;stopDurationTimer()}return}else{notes.delete(frequency)}}lastNote=new Note(ctx,frequency,harmonic?harmonicsVolume:[1]);analyserNode.fftSize=2048;bufferLength=analyserNode.frequencyBinCount;dataArray=new Uint8Array(bufferLength);analyserNode.getByteTimeDomainData(dataArray);if(notes.size==0){playing=true;startDurationTimer()}notes.set(frequency,lastNote);lastNote.play();addClass(elem,"selected")}var durationStartTime;var durationTimeout;function startDurationTimer(){if(duration==-1)return;durationStartTime=Date.now();durationTimerWork()}function durationTimerWork(){var timeExpired=Date.now()-durationStartTime;var buttonText=$("stop_delay");var durationInMS=duration*60*1e3;var timeRemaining=durationInMS-timeExpired;var humanReadable=human_readable_duration(timeRemaining);buttonText.innerHTML=humanReadable==""?"Fade Out":"Fade Out ("+human_readable_duration(timeRemaining)+")";if(timeExpired>durationInMS){stopDurationTimer()}else{durationTimeout=setTimeout(durationTimerWork,200)}function human_readable_duration(duration_in_MS){var duration_in_seconds=duration_in_MS/1e3;if(duration_in_seconds<60){return formattedSeconds(duration_in_seconds)}else if(duration_in_seconds<60*60){var mins=parseInt(duration_in_seconds/60);var secs=duration_in_seconds-mins*60;return mins+" min"+(secs==0?"":" ")+formattedSeconds(secs)}else if(duration_in_seconds>=60*60){var hours=parseInt(duration_in_seconds/60/60);return hours+" hour"}else{log.e("not handled human readable duration");return""}function formattedSeconds(seconds){seconds=parseInt(seconds);if(seconds==0)return"";else if(seconds<10)return"0"+seconds+" s";else return seconds+" s"}}}function stopDurationTimer(){var buttonText=$("stop_delay");buttonText.innerHTML="Fade Out";clearTimeout(durationTimeout);fadeStop()}var timeout;var fluctateDown=true;function fluctuateVolume(){function BPMtoMilliSeconds(BPM){return 1e3/(BPM/60)}var timeMS=BPMtoMilliSeconds(bpm);if(playing){if(fluctateDown){setVolume(tremoloMin,timeMS/1e3)}else{setVolume(tremoloMax,timeMS/1e3);clearTimeout(visualizationTimeout);visualizationfrequencyInHz=1e3/timeMS/2;visualizationTimeout=setTimeout(visualizationUpdate,0)}fluctateDown=!fluctateDown}timeout=setTimeout(fluctuateVolume,timeMS);function setVolume(volume,rampTime=0){var time=ctx.currentTime;tremoloNode.gain.setValueAtTime(tremoloVolume,time);tremoloNode.gain.exponentialRampToValueAtTime(Math.max(1e-5,volume),time+rampTime);tremoloVolume=volume}}var startTime=Date.now();var visualizationSlider=$("tremoloVisualizationRange");var visualizationTimeout;var visualizationfrequencyInHz=.5;function visualizationUpdate(){if(!playing||notes.length==0)return;var timeDiff=(Date.now()-startTime)/1e3;var min=tremoloMin*100;var max=tremoloMax*100;var frequencyInHz=visualizationfrequencyInHz;var amplitude=(max-min)/2;var phase=0;var PI=Math.PI;var sliderValue=amplitude*Math.sin(2*PI*frequencyInHz*timeDiff+phase)+amplitude+min;visualizationSlider.value=sliderValue;visualizationTimeout=setTimeout(visualizationUpdate,40)}kofi=function(){window.open("https://ko-fi.com/jasonfleischer","_blank")};info=function(){information.showAlert()};function dismissInfo(){information.dismissAlert()}function setOscillatorType(type){for(const[frequency,note]of notes){note.setOscillatorType(type)}}harmonicsPreset0=function(){setHarmonicVolume([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);updatePresetButtonsUI(0)};harmonicsPreset1=function(){var volumeAry=[];volumeAry[0]=1;for(i=1;i<harmonicsVolume.length;i++){volumeAry[i]=volumeAry[i-1]/2}setHarmonicVolume(volumeAry);updatePresetButtonsUI(1)};harmonicsPreset2=function(){var volumeAry=[];var numberOfHarmonicsToSet=7;for(i=0;i<harmonicsVolume.length;i++){volumeAry[i]=Math.max(0,1-i/(numberOfHarmonicsToSet-1))}setHarmonicVolume(volumeAry);updatePresetButtonsUI(2)};harmonicsPreset3=function(){var volumeAry=[];var numberOfHarmonicsToSet=5;for(i=0;i<harmonicsVolume.length;i++){if(i%2==0){volumeAry[i]=Math.max(0,1-i/(numberOfHarmonicsToSet*2-1))}else{volumeAry[i]=0}}setHarmonicVolume(volumeAry);updatePresetButtonsUI(3)};harmonicsPreset4=function(){var volumeAry=[];var numberOfHarmonicsToSet=5;for(i=0;i<harmonicsVolume.length;i++){volumeAry[i]=100/(2+i-1)/100}setHarmonicVolume(volumeAry);updatePresetButtonsUI(4)};harmonicsPreset5=function(){setHarmonicVolume([1,.286699025,.63513,.042909002,.2522,.30904,.25045,.2004,0,.14836,.17415,.07979,.05383,.07332,.07206,.08451,.022270261,.013072562,.008585879,.005771505,.004343925,.002141371,.005343231,530244e-9,.004711017,.009014153]);updatePresetButtonsUI(5)};setHarmonicVolume=function(volumeAry){for(i=0;i<volumeAry.length;i++){harmonicsVolume[i]=volumeAry[i];for(const[frequency,note]of notes){note.setHarmonicVolume(i,volumeAry[i])}$("harmonic_text_"+i).innerHTML="H"+i+": "+(volumeAry[i]*100).toFixed(3);$("harmonic_"+i).value=volumeAry[i]*100}};updatePresetButtonsUI=function(index){var i;for(i=0;i<6;i++){let elem=$("P"+i);if(i==index){addClass(elem,"selected")}else{removeClass(elem,"selected")}}};fadeStop=function(){stop(fade_in_seconds)};stop=function(delayTime=.5){if(!playing)return;playing=false;stopDurationTimer();for(const[frequency,note]of notes){note.stop(delayTime)}notes.clear();clearbuttonUI();function clearbuttonUI(){var buttons=document.getElementsByTagName("button");for(let i=0;i<buttons.length;i++){let button=buttons[i];removeClass(button,"selected")}}};function hasClass(ele,cls){return!!ele.className.match(new RegExp("(\\s|^)"+cls+"(\\s|$)"))}function addClass(ele,cls){if(!hasClass(ele,cls))ele.className+=" "+cls}function removeClass(ele,cls){if(hasClass(ele,cls)){var reg=new RegExp("(\\s|^)"+cls+"(\\s|$)");ele.className=ele.className.replace(reg," ")}}var canvas=$("oscilloscope");var canvasCtx=canvas.getContext("2d");var drawing=true;function draw(){requestAnimationFrame(draw);if(drawing){analyserNode.getByteTimeDomainData(dataArray);canvasCtx.fillStyle="#000";canvasCtx.fillRect(0,0,canvas.width,canvas.height);canvasCtx.lineWidth=2;canvasCtx.strokeStyle="#fff";canvasCtx.beginPath();var sliceWidth=canvas.width*1/bufferLength;var x=0;for(var i=0;i<bufferLength;i++){var v=dataArray[i]/128;var y=v*canvas.height/2;if(i===0){canvasCtx.moveTo(x,y)}else{canvasCtx.lineTo(x,y)}x+=sliceWidth}canvasCtx.lineTo(canvas.width,canvas.height/2);canvasCtx.stroke()}}toggleDrawing=function(elem){drawing=!drawing;if(drawing){removeClass(elem,"selected")}else{addClass(elem,"selected")}};var install={};let prompt;if("serviceWorker"in navigator){navigator.serviceWorker.register("/synth/service_worker.js",{scope:"/synth/"}).then(function(reg){if(reg.installing){console.log("synth: Service worker installing")}else if(reg.waiting){console.log("synth: Service worker installed")}else if(reg.active){console.log("synth: Service worker active")}}).catch(function(error){console.log("Registration failed with "+error)})}else{console.log("Service worker not available")}window.onload=function(){init()};window.addEventListener("beforeinstallprompt",function(e){e.preventDefault();prompt=e;if(window.mobileAndTabletCheck()){install.showAlert(function(){prompt.prompt()})}});window.addEventListener("appinstalled",async function(e){alert.dismiss()});install.showAlert=function(install_action){let contents=`
		<p>Install this app on your device to easily access it anytime. Installing this app will result in better performance, improved fullscreen experience, and usage without an internet connection.</p>
		<br/>
	`;var isSafariMobile=window.mobileAndTabletCheck()&&isSafari;if(isSafariMobile){contents+=`
			<div id="ios_install_instructions">
				<p>1. Tap on <img src="img/export.png" alt="export"/></p>
				<p>2. Select 'Add to Home Screen'</p>
			</div>`}else{contents+='<button id="install">Install</button>'}alert.show("Install App",contents);if(!isSafariMobile){let installButton=document.getElementById("install");installButton.addEventListener("click",install_action)}};const CACHE_NAME="v1";const CACHE=["/synth/index.html","/synth/css/bundle.css","/synth/js/bundle.js"];self.addEventListener("install",function(event){console.log("synth: install");event.waitUntil(caches.open(CACHE_NAME).then(function(cache){return cache.addAll(CACHE)}))});self.addEventListener("fetch",function(event){console.log("synth: fetch");event.respondWith(caches.open(CACHE_NAME).then(function(cache){return cache.match(event.request).then(function(response){return response||fetch(event.request).then(function(response){cache.put(event.request,response.clone());return response})})}))});self.addEventListener("activate",function activator(event){console.log("synth: activate");event.waitUntil(caches.keys().then(function(keys){return Promise.all(keys.filter(function(key){return key.indexOf(CACHE_NAME)!==0}).map(function(key){return caches.delete(key)}))}))});
},{"@jasonfleischer/log":2,"@jasonfleischer/music-model-kit":3,"@jasonfleischer/piano":8}],2:[function(require,module,exports){
var LOG_NON_ERROR_MESSAGES = true;
const log = {};

log.i = function(msg) {
	if (LOG_NON_ERROR_MESSAGES)
		console.log(msg);
};

log.e = function(msg) {
	console.log("%c ERROR: " + msg, "background: red; color: white; display: block;");
};

log.turnOffNonErrorLogs = function() {
	LOG_NON_ERROR_MESSAGES = false;
};

module.exports = log;

},{}],3:[function(require,module,exports){
const Note = require("./lib/note.js");
const Chord = require("./lib/chord.js");
const Scale = require("./lib/scale.js");
const MidiListener = require("./lib/midi_listener.js");

const ALL_NOTE_NAME_TYPES = [new Note.Name(Note.Name.TYPE.C), new Note.Name(Note.Name.TYPE.C_sharp), new Note.Name(Note.Name.TYPE.D), 
						new Note.Name(Note.Name.TYPE.D_sharp), new Note.Name(Note.Name.TYPE.E), new Note.Name(Note.Name.TYPE.F),
						new Note.Name(Note.Name.TYPE.F_sharp), new Note.Name(Note.Name.TYPE.G), new Note.Name(Note.Name.TYPE.G_sharp),
						new Note.Name(Note.Name.TYPE.A), new Note.Name(Note.Name.TYPE.A_sharp), new Note.Name(Note.Name.TYPE.B)];

const piano_range = { min: 21, max: 108 };

var all_notes = [];
function build_all_notes(){
	var midi_value = 0; // 0 -127
	
	const octaves = 9;
	var octave = 0;
	for(octave = -1 ; octave <= octaves; octave++){
		var j;
		for(j = 0 ; j < ALL_NOTE_NAME_TYPES.length; j++){
			var note_name = ALL_NOTE_NAME_TYPES[j].sharp_name;
			var note = new Note(ALL_NOTE_NAME_TYPES[j], midi_value, octave);

			all_notes.push(note);

			midi_value++;

			if(midi_value == 128) break;
		}
	}
}

function generate_random_note(min, max) {
	return all_notes[randomIntFromInterval(min, max)];
}

function init(){
	build_all_notes();
}

module.exports = {init, Note, Chord, Scale, MidiListener, all_notes, piano_range};


},{"./lib/chord.js":4,"./lib/midi_listener.js":5,"./lib/note.js":6,"./lib/scale.js":7}],4:[function(require,module,exports){
const log = require("@jasonfleischer/log");
class Chord {

	static TYPE = Object.freeze({
		Major: "Major",
		minor: "minor",
		Aug: "augmented",
		Dim: "diminished",

		Major7: "Major 7",
		minor7: "minor 7",
		Dom7: "Dominant 7"
	});

	static INVERSION_TYPE = Object.freeze({
		Root: "Root",
		First: "first inversion",
		Second: "second inversion",
		Third: "third inversion"
	});

	static PLAY_TYPE = Object.freeze({
		HARMONIC: "Harmonic",
		ARPEGGIATE: "Arpeggiate"
	});

	constructor(root_note, chord_type = Chord.TYPE.Major, play_type = Chord.PLAY_TYPE.HARMONIC, inversion = Chord.INVERSION_TYPE.Root) {

		this.root_note = root_note;
		this.delay_in_ms = 500;
		this.name = root_note.note_name.name + " " + chord_type;
		this.inversion = inversion
		this.type = chord_type
		this.play_type = play_type

		function replaceAll(str, find, replace) {
			return str.replace(new RegExp(find, 'g'), replace);
		}
		this.file_name = root_note.note_name.file_name.concat(["audio/chords/"+ replaceAll(this.type.toLowerCase(),' ','_') +".mp3"]);

		switch(chord_type){
		case Chord.TYPE.Major:
			if(this.inversion == Chord.INVERSION_TYPE.Root) {
				this.note_sequence = [0, 4, 7];
			} else if (this.inversion == Chord.INVERSION_TYPE.First){
				this.note_sequence = [-8, -5, 0];
			} else {
				this.note_sequence = [-5, 0, 4]; 
			}
			break;
		case Chord.TYPE.minor:
			if(this.inversion == Chord.INVERSION_TYPE.Root) {
				this.note_sequence = [0, 3, 7];
			} else if (this.inversion == Chord.INVERSION_TYPE.First){
				this.note_sequence = [-9, -5, 0];
			} else {
				this.note_sequence = [-5, 0, 3];
			}
			break;

		case Chord.TYPE.Aug:
			this.inversion = Chord.INVERSION_TYPE.Root;
			this.note_sequence = [0, 4, 8];
			break;
		 case Chord.TYPE.Dim:
			this.inversion = Chord.INVERSION_TYPE.Root;
			this.note_sequence = [0, 3, 6];
			break;

		case Chord.TYPE.Major7:

			if(this.inversion == Chord.INVERSION_TYPE.Root) {
				this.note_sequence = [0, 4, 7, 11];
			} else if (this.inversion == Chord.INVERSION_TYPE.First){
				this.note_sequence = [-8, -5, -1, 0];
			} else if (this.inversion == Chord.INVERSION_TYPE.Second){
				this.note_sequence = [-5, -1, 0, 4];
			} else {
				this.note_sequence = [-1, 0, 4, 7];
			}
			this.file_name = root_note.note_name.file_name.concat(["audio/chords/major_seventh.mp3"]);
			break;
		case Chord.TYPE.minor7:
			if(this.inversion == Chord.INVERSION_TYPE.Root) {
				this.note_sequence = [0, 3, 7, 10];
			} else if (this.inversion == Chord.INVERSION_TYPE.First){
				this.note_sequence = [-9, -5, -2, 0];
			} else if (this.inversion == Chord.INVERSION_TYPE.Second){
				this.note_sequence = [-5, -2, 0, 3];
			} else {
				this.note_sequence = [-2, 0, 3, 7];
			}
			this.file_name = root_note.note_name.file_name.concat(["audio/chords/minor_seventh.mp3"]);
			break;

		case Chord.TYPE.Dom7:
			if(this.inversion == Chord.INVERSION_TYPE.Root) {
				this.note_sequence = [0, 4, 7, 10];
			} else if (this.inversion == Chord.INVERSION_TYPE.First){
				this.note_sequence = [-8, -5, -2, 0];
			} else if (this.inversion == Chord.INVERSION_TYPE.Second){
				this.note_sequence = [-5, -2, 0, 4];
			} else {
				this.note_sequence = [-2, 0, 4, 7];
			}
			break;
		}
		this.note_labels = this.getLabels();
		this.structure = this.getStructure();
	}

	getLabels() {
		let result = [];
		let all_labels = ["R", "m2", "M2", "m3", "M3", "P4", "TT", "P5", "m6", "M6", "m7", "M7"];
		var i;
		for(i=0; i<=this.note_sequence.length; i++){
			var sequence = this.note_sequence[i]
			if(sequence < 0) {
				sequence = 12 + sequence;
			}
			result.push(all_labels[sequence]);
		}
		return result;
	}

	getStructure() {
		let result = [];
		let all_labels = ["Root", "minor 2nd", "Mahor 2nd", "minor 3rd", "Major 3rd", "Fourth",
						  "Tritone", "Fifth", "minor 6th", "Major 6th", "minor 7th", "Major 7th"];
		var i;
		for(i=0; i<=this.note_sequence.length; i++){
			var sequence = this.note_sequence[i]
			if(sequence < 0) {
				sequence = 12 + sequence;
			}
			result.push(all_labels[sequence]);
		}
		return result;
	}

	toString() {
		return  "CHORD: " + this.name +", "+ this.structure + ", ", this.note_sequence;
	}

	isWithinRange(range) {
		return (this.root_note.midi_value + this.note_sequence[0]) >= range.min  && 
			(this.root_note.midi_value + this.note_sequence[this.note_sequence.length-1]) <= range.max;
	}

	getNoteArray(all_notes, range) {
		function isNoteWithinRange(midi_number, range){
			return midi_number >= range.min && midi_number <= range.max ;
		}

		var note_array = [];
		var i;
		for(i=0; i<this.note_sequence.length; i++){
			let midi_number = this.root_note.midi_value + this.note_sequence[i];
			if(isNoteWithinRange(midi_number, range)){
				note_array.push(all_notes[midi_number]);
			}
		}
		if (note_array.length == 0) {
			log.e("no notes found for chord");  
		}
		return note_array;
	}
}

const ALL_CHORD_TYPES = [Chord.TYPE.Major, Chord.TYPE.minor, Chord.TYPE.Major7, Chord.TYPE.minor7];

function type_is_three_notes(chord_type) {
	return chord_type == Chord.TYPE.Major || chord_type == Chord.TYPE.minor || chord_type == Chord.TYPE.Aug || chord_type == Chord.TYPE.Dim 
}

function generate_random_chord(min, max){

	var chord_array = []
	if(model.chords.three_note_types.length == 0 && model.chords.four_note_types.length == 0){
		log.e("fatal error: generate_random_chord")
	} else if (model.chords.three_note_types.length > 0 && model.chords.four_note_types.length == 0){
		chord_array = model.chords.three_note_types
	}else if (model.chords.three_note_types.length == 0 && model.chords.four_note_types.length > 0){
		chord_array = model.chords.four_note_types
	}else {
		chord_array = model.chords.three_note_types.concat(model.chords.four_note_types);
	}

	var random_note = generate_random_note(min, max-18);// hack so it doesn't go out of bounds
	var random_chord_type = chord_array[ randomIntFromInterval(0, chord_array.length-1) ];

	var play_type = model.chords.play_types[ randomIntFromInterval(0, model.chords.play_types.length-1) ];
	var inversion = INVERSION_TYPE.Root;
	if (type_is_three_notes(random_chord_type)){
		inversion = model.chords.three_note_inversion_types[ randomIntFromInterval(0, model.chords.three_note_inversion_types.length-1) ];
	} else{
		inversion = model.chords.four_note_inversion_types[ randomIntFromInterval(0, model.chords.four_note_inversion_types.length-1) ];
	}
	var random_chord = new Chord(random_note, random_chord_type, play_type, inversion);

	return random_chord;
}

function generate_chord_with_note(note_name, all_notes){

	var random_chord_type = ALL_CHORD_TYPES[ randomIntFromInterval(0, ALL_CHORD_TYPES.length-1) ];
	var octave = 1 + randomIntFromInterval(2, 4);// limit to lower register
	var note = all_notes[note_name.associated_midi_values[octave]];

	var play_type = Chord.PLAY_TYPE.HARMONIC;
	var inversion = Chord.INVERSION_TYPE.Root;
	var random_chord = new Chord(note, random_chord_type, play_type, inversion);

	return random_chord;
}

module.exports = Chord;


},{"@jasonfleischer/log":2}],5:[function(require,module,exports){
const log = require("@jasonfleischer/log");

//TODO: only connects to first found device
class MidiListener {
	
	constructor(noteOn, noteOff){

		this.noteOn = noteOn;
		this.noteOff = noteOff;

		let self = this;

		if (!navigator.requestMIDIAccess) {
			log.e("this browser does not support midi");
			return;
		}

		navigator.permissions.query({name: 'midi', sysex: true}).then(function(result) {
			if(result.state == 'granted') {
				log.i("Midi permissions granted");
			} else if (result.state == 'prompt'){
				log.i("Midi permissions prompt");
			} else {
				log.i("Midi permissions denied");
			}
		});

		navigator.requestMIDIAccess({sysex: true}).then(function(access) {
			if (access.inputs.size > 0) {
				self.connectToFirstDevice(Array.from(access.inputs.values()));
			} else {
				log.i("no midi devices found");
			}

			access.onstatechange = function(e) {
				log.i("Midi state changed, number of devices: " + access.inputs.size);
				if (access.inputs.size > 0) {
					self.connectToFirstDevice(Array.from(access.inputs.values()));
				}
			}
		}, function() {
			log.e("Midi request access failure");
		});
	}

	connectToFirstDevice(devices) {
		if (devices.length > 0) {
			this.connectToDevice(devices[0]);
		} else {
			log.e("connectToFirstDevice: no midi inputs");	
		}
	}

	connectToDevice(device) {

		if(this.connectedDevice !== undefined && device.id == this.connectedDevice.id) {
			log.i('Device already connected');
			return;
		}

		log.i('Connecting to device: ' + this.deviceToString(device));
		this.connectedDevice = device;
		let noteOn = this.noteOn;
		let noteOff = this.noteOff;
		let NOTE_ON = 0x9;
		let NOTE_OFF = 0x8;
		device.onmidimessage = function(m) {
			const [command, message, velocity] = m.data;
			let midi_value = message;
			let channel = command & 0x0F;
			let opCode = (command & 0xF0) >> 4;
			if (opCode === NOTE_ON) {
				noteOn(midi_value, channel, velocity);
			} else if(opCode === NOTE_OFF) {
				noteOff(midi_value, channel, velocity);
			}
		}
	}

	deviceToString(device) {
		return device.name + ' ' + device.manufacturer;
	}
}

module.exports = MidiListener;
},{"@jasonfleischer/log":2}],6:[function(require,module,exports){
const log = require("@jasonfleischer/log");

class Note {
	constructor(note_name, midi_value, octave) {
		this.note_name = note_name;
		this.midi_value  = midi_value;
		this.octave = octave;
		this.frequency = this.getEqualTemperedFrequency();

		if(!this.isWithinRange({ min: 0, max: 127})) {
			log.e('can only create notes with midi values between 0 and 127');
		}
	}

	toString() {
		return  "NOTE: " + this.note_name.type + " " + this.midi_value + " " + this.octave;
	}

	getEqualTemperedFrequency() {
		return 440 * Math.pow(2, ((this.midi_value-69)/12));
	}

	isWithinRange(range) {
		return this.midi_value >= range.min && this.midi_value <= range.max;
	}
}

Note.Name = class  {

	static TYPE = Object.freeze({
		C: "C",
		C_sharp: "C# / Db",
		D: "D",
		D_sharp: "D# / Eb",
		E: "E",
		F: "F",
		F_sharp: "F# / Gb",
		G: "G",
		G_sharp: "G# / Ab",
		A: "A",
		A_sharp: "A# / Bb",
		B: "B"
	});

	constructor(type) {

		function get_associated_midi_values(row){
			var base_array = [0, 12, 24, 36, 48, 60, 72, 84, 96, 108, 120];
			var result = [];

			var i;
			for(i=0; i<base_array.length; i++){
				var value = base_array[i]+row;
				if (value > 127 ) break;
				result.push(value);
			}
			return result;
		}

		this.type = type;
		switch(type){
			case Note.Name.TYPE.C:
				this.is_sharp_or_flat = false;
				this.sharp_name = this.type;
				this.flat_name = this.type;
				this.file_name = ["audio/notes/C.mp3"];
				this.color = "#ff0000";
				this.associated_midi_values = get_associated_midi_values(0);
				break;
			case Note.Name.TYPE.C_sharp:
				this.is_sharp_or_flat = true;
				this.sharp_name = "C#";
				this.flat_name = "Db";
				this.file_name = ["audio/notes/C_sharp.mp3", "audio/notes/or.mp3","audio/notes/D_flat.mp3"];
				this.color = "#ff8000";
				this.associated_midi_values = get_associated_midi_values(1);
				break;
			case Note.Name.TYPE.D:
				this.is_sharp_or_flat = false;
				this.sharp_name = this.type;
				this.flat_name = this.type;
				this.file_name = ["audio/notes/D.mp3"];
				this.color = "#ffff00";
				this.associated_midi_values = get_associated_midi_values(2);
				break;
			case Note.Name.TYPE.D_sharp:
				this.is_sharp_or_flat = true;
				this.sharp_name = "D#";
				this.flat_name = "Eb";
				this.file_name = ["audio/notes/D_sharp.mp3", "audio/notes/or.mp3","audio/notes/E_flat.mp3"];
				this.color = "#7fff00";
				this.associated_midi_values = get_associated_midi_values(3);
				break;
			case Note.Name.TYPE.E:
				this.is_sharp_or_flat = false;
				this.sharp_name = this.type;
				this.flat_name = this.type;
				this.file_name = ["audio/notes/E.mp3"];
				this.color = "#00ff00";
				this.associated_midi_values = get_associated_midi_values(4);
				break;
			case Note.Name.TYPE.F:
				this.is_sharp_or_flat = false;
				this.sharp_name = this.type;
				this.flat_name = this.type;
				this.file_name = ["audio/notes/F.mp3"];
				this.color = "#00ff80";
				this.associated_midi_values = get_associated_midi_values(5);
				break;
			case Note.Name.TYPE.F_sharp:
				this.is_sharp_or_flat = true;
				this.sharp_name = "F#";
				this.flat_name = "Gb";
				this.file_name = ["audio/notes/F_sharp.mp3", "audio/notes/or.mp3","audio/notes/G_flat.mp3"];
				this.color = "#00ffff";
				this.associated_midi_values = get_associated_midi_values(6);
				break;
			case Note.Name.TYPE.G:
				this.is_sharp_or_flat = false;
				this.sharp_name = this.type;
				this.flat_name = this.type;
				this.file_name = ["audio/notes/G.mp3"];
				this.color = "#007fff";
				this.associated_midi_values = get_associated_midi_values(7);
				break;
			case Note.Name.TYPE.G_sharp:
				this.is_sharp_or_flat = true;
				this.sharp_name = "G#";
				this.flat_name = "Ab";
				this.file_name = ["audio/notes/G_sharp.mp3", "audio/notes/or.mp3","audio/notes/A_flat.mp3"];
				this.color = "#0000ff";
				this.associated_midi_values = get_associated_midi_values(8);
				break;
			case Note.Name.TYPE.A:
				this.is_sharp_or_flat = false;
				this.sharp_name = this.type;
				this.flat_name = this.type;
				this.file_name = ["audio/notes/A.mp3"];
				this.color = "#8000ff";
				this.associated_midi_values = get_associated_midi_values(9);
				break;
			case Note.Name.TYPE.A_sharp:
				this.is_sharp_or_flat = true;
				this.sharp_name = "A#";
				this.flat_name = "Bb";
				this.file_name = ["audio/notes/A_sharp.mp3", "audio/notes/or.mp3","audio/notes/B_flat.mp3"];
				this.color = "#ff00ff";
				this.associated_midi_values = get_associated_midi_values(10);
				break;
			case Note.Name.TYPE.B:
				this.is_sharp_or_flat = false;
				this.sharp_name = this.type;
				this.flat_name = this.type;
				this.file_name = ["audio/notes/B.mp3"];
				this.color = "#ff007f";
				this.associated_midi_values = get_associated_midi_values(11);
				break;
		}
	}
}

module.exports = Note;

},{"@jasonfleischer/log":2}],7:[function(require,module,exports){
const log = require("@jasonfleischer/log");

class Scale {

	static TYPE = Object.freeze({

		minor_Pentatonic: "minor pentatonic",
		Major_Pentatonic: "Major pentatonic",

		Ionian: "Ionian",
		Dorian: "Dorian",
		Phrygian: "Phrygian",
		Lydian: "Lydian",
		Mixolydian: "Mixolydian",
		Aeolian: "Aeolian",
		Locrian: "Locrian",

		//Double_Harmonic_Major: "Double Harmonic Major",
		//Double_Harmonic_minor: "Double Harmonic minor",
		
		minor_Triad: "minor triad",
		Major_Triad: "Major triad"

		// melodic minor
		// harmonic minor
		// double harmonic
	});

	constructor(root_note, scale_type = Scale.TYPE.Major){
		this.root_note =root_note;
		this.type = scale_type;

		function replaceAll(str, find, replace) {
			return str.replace(new RegExp(find, 'g'), replace);
		}
		this.file_name = root_note.note_name.file_name.concat(["audio/scale/"+ replaceAll(this.type.toLowerCase(),' ','_') +".mp3"]);
		this.alternate_names = "none";


		switch(scale_type){
			case Scale.TYPE.Ionian:
				this.note_sequence = [0, 2, 4, 5, 7, 9, 11];
				this.alternate_names = "Major";
				break;
			case Scale.TYPE.Dorian:
				this.note_sequence = [0, 2, 3, 5, 7, 9, 10];
				break;
			case Scale.TYPE.Phrygian:
				this.note_sequence = [0, 1, 3, 5, 7, 8, 10];
				break;
			case Scale.TYPE.Lydian:
				this.note_sequence = [0, 2, 4, 6, 7, 9, 11];
				break;
			case Scale.TYPE.Mixolydian:
				this.note_sequence = [0, 2, 4, 5, 7, 9, 10];
				break;
			case Scale.TYPE.Aeolian:
				this.note_sequence = [0, 2, 3, 5, 7, 8, 10];
				this.alternate_names = "minor";
				break;
			case Scale.TYPE.Locrian:
				this.note_sequence = [0, 1, 3, 5, 6, 8, 10];
				break;
			case Scale.TYPE.minor_Pentatonic:
				this.note_sequence = [0, 3, 5, 7, 10];
				break;
			case Scale.TYPE.Major_Pentatonic:
				this.note_sequence = [0, 2, 4, 7, 9];
				break;
			case Scale.TYPE.minor_Triad:
				this.note_sequence = [0, 3, 7];
				break;
			case Scale.TYPE.Major_Triad:
				this.note_sequence = [0, 4, 7];
				break;
		}
		this.note_labels = this.getLabels();
		this.structure = this.getStructure();
	}

	getNoteArray(all_notes, range) {
	
		var note_names = this.getUniqueNoteName(all_notes, range);
		var note_array = [];
		var i;
		for(i=range.min; i<=range.max; i++){
			var note = all_notes[i];
			if (note_names.has(note.note_name.type)) {
				note_array.push(note);
			}
		}
		if (note_array.length == 0) {
			log.e("no notes found for scale");  
		}
		return note_array;
	}

	getUniqueNoteName(all_notes, range) {

		function isNoteWithinRange(midi_number, range){
			return midi_number >= range.min && midi_number <= range.max;
		}
		const noteNames = new Set();
		var i;
		for(i=0; i<this.note_sequence.length; i++){
			let midi_number = this.root_note.midi_value + this.note_sequence[i];
			if(isNoteWithinRange(midi_number, range)){
				noteNames.add(all_notes[midi_number].note_name.type);
			}
		}
		for(i=this.note_sequence.length-1; i>=0; i--){
			let midi_number = this.root_note.midi_value - (12 - this.note_sequence[i]);
			if(isNoteWithinRange(midi_number, range)){
				noteNames.add(all_notes[midi_number].note_name.type);
			}
		}
		return noteNames;
	}

	getLabels() {
		let result = [];
		let all_labels = ["R", "m2", "M2", "m3", "M3", "P4", "TT", "P5", "m6", "M6", "m7", "M7"];
		var i;
		for(i=0; i<=this.note_sequence.length; i++){
			result.push(all_labels[this.note_sequence[i]]);
		}
		return result;
	}

	getStructure() {
		let result = [];
		let all_labels = ["Root", "minor 2nd", "Mahor 2nd", "minor 3rd", "Major 3rd", "Fourth",
											"Tritone", "Fifth", "minor 6th", "Major 6th", "minor 7th", "Major 7th"];
		var i;
		for(i=0; i<=this.note_sequence.length; i++){
			result.push(all_labels[this.note_sequence[i]]);
		}
		return result;
	}

	to_string() {
		return  "SCALE: " + this.root_note.note_name.type + ": " + this.structure;
	}
}

module.exports = Scale;
},{"@jasonfleischer/log":2}],8:[function(require,module,exports){
const PianoView = require("./lib/piano_view.js");
const log = require("@jasonfleischer/log");

function pianoBuilder(options) {

	this.id = options.id;
	if (this.id === undefined){
		log.e('id not provided for piano')
		return
	}

	this.pianoView = document.getElementById(this.id);
	if (this.pianoView === undefined){
		log.e('not piano exists with id: ' + this.id)
		return
	}

	function isInt(value) {
		var x = parseFloat(value);
		return !isNaN(value) && (x | 0) === x;
	}
	this.range = options.range;
	if (this.range === undefined){
		this.range = { min: 21, max: 108 }
	} else {
		if (options.range.min !== undefined && options.range.max !== undefined) {
			if(isInt(options.range.min)){
				this.range.min = Math.min(Math.max(this.range.min, options.range.min), this.range.max);
			}
			if(isInt(options.range.max)){
				this.range.max = Math.min(Math.max(this.range.min, options.range.max), this.range.max);
			}
		}
	}

	this.width = 1000;
	if (options.width !== undefined){
		this.width = options.width;
	}
	this.hover = false;
	if (options.hover !== undefined){
		this.hover = options.hover;
	}

	this.view = new PianoView(this.id, this.width, this.range, options.onClick, this.hover);
	return this.view;
}


module.exports = pianoBuilder;


},{"./lib/piano_view.js":9,"@jasonfleischer/log":2}],9:[function(require,module,exports){
const musicKit = require("@jasonfleischer/music-model-kit");
const log = require("@jasonfleischer/log")

class PianoView {
	constructor(id = "piano_view_id", width = 1000, range = musicKit.piano_range, onClick, hover = false) {

	  	this.id = id;
		this.BORDER_WIDTH = 1;
		this.range = range;
		this.min_midi_value = range.min;
		this.max_midi_value = range.max;
		this.number_of_white_keys = 0;
		this.number_of_black_keys = 0;
		this.midi_value_to_piano_key_map = {};
		this.hover = hover;
		var i;
		for(i = this.min_midi_value; i <= this.max_midi_value; i++){
			var note = musicKit.all_notes[i];
			if(!note.note_name.is_sharp_or_flat){
				this.number_of_white_keys++;
			} else {
				this.number_of_black_keys++;
			}
		}
		this.WIDTH = 1000;
		this.width = width;
		this.HEIGHT = this.calculateHeight(this.WIDTH, this.number_of_white_keys);
		this.buildCanvases();
		this.draw();
		this.resize(width);

		if(onClick !== undefined) {
			this.addClickEventListeners(onClick);
		}
		if(this.hover) {
			this.addHoverEventListeners();
		}
	}

	buildCanvases() {

		let width = this.WIDTH;
		let height = this.HEIGHT;
		let pianoView = document.getElementById(this.id);

	    this.white_keys_canvas = this.buildCanvas(pianoView, "piano_white_keys_canvas_"+this.id, width, height);
	    this.white_keys_drawing_canvas = this.buildCanvas(pianoView, "piano_white_keys_drawing_canvas_"+this.id, width, height);
	    if(this.hover) {
	    	this.white_keys_drawing_hover_canvas = this.buildCanvas(pianoView, "piano_white_keys_drawing_hover_canvas_"+this.id, width, height);
	    }
	    this.black_keys_canvas = this.buildCanvas(pianoView, "piano_black_keys_canvas_"+this.id, width, height);
	    this.black_keys_drawing_canvas = this.buildCanvas(pianoView, "piano_black_keys_drawing_canvas_"+this.id, width, height);
	    if(this.hover) {
	    	this.black_keys_drawing_hover_canvas = this.buildCanvas(pianoView, "piano_black_keys_drawing_hover_canvas_"+this.id, width, height);
	    }
		pianoView.style.backgroundColor = "grey";
		pianoView.style.position = "relative"
		pianoView.style.width = width  + "px";
		pianoView.style.height = height  + "px";
		pianoView.width = width;
		pianoView.height = height;
	}

	buildCanvas(pianoView, id, width, height) {

		var canvas = document.createElement('canvas'); 
	    canvas.id = id;
	    canvas.style.position = "absolute"
	    canvas.style.left = "0px"
	    canvas.style.right = "0px"
	    canvas.style.width = width + "px";
		canvas.style.height = height + "px";
		canvas.width = width;
		canvas.height = height;
	    pianoView.appendChild(canvas);
	    return canvas;
	}

	resize(newWidth) {

		let pianoView = document.getElementById(this.id);

		var newWidth = Math.min(newWidth, this.WIDTH);

		var newHeight = this.calculateHeight(newWidth, this.number_of_white_keys);//this.HEIGHT * this.number_of_white_keys/52;///this.white_key_height;// * (this.HEIGHT/newWidth);
		pianoView.style.height = newHeight + "px";
		this.black_keys_canvas.style.height = newHeight + "px";
		this.black_keys_drawing_canvas.style.height = newHeight + "px";
		this.white_keys_canvas.style.height = newHeight + "px";
		this.white_keys_drawing_canvas.style.height = newHeight + "px";

		pianoView.style.width = newWidth + "px";
		this.black_keys_canvas.style.width = newWidth + "px";
		this.black_keys_drawing_canvas.style.width = newWidth + "px";
		this.white_keys_canvas.style.width = newWidth + "px";
		this.white_keys_drawing_canvas.style.width = newWidth + "px";
		if(this.hover) {
	    	this.black_keys_drawing_hover_canvas.style.height = newHeight + "px";
	    	this.black_keys_drawing_hover_canvas.style.width = newWidth + "px";
	    	this.white_keys_drawing_hover_canvas.style.height = newHeight + "px";
	    	this.white_keys_drawing_hover_canvas.style.width = newWidth + "px";
	    }
	}

	draw(){

		let white_key_width = Math.floor((this.WIDTH - ((this.number_of_white_keys+1)*this.BORDER_WIDTH) )/ this.number_of_white_keys);
		this.white_key_height =  Math.floor(white_key_width * 5);

		var white_keys = [];
		
		var i;
		var x = this.BORDER_WIDTH + (this.WIDTH - ((white_key_width + this.BORDER_WIDTH ) * this.number_of_white_keys))/2;
		for(i = this.min_midi_value; i <= this.max_midi_value; i++){
			var note = musicKit.all_notes[i];
			if(!note.note_name.is_sharp_or_flat){

				let key = new PianoView.Key(x, this.BORDER_WIDTH, 
					white_key_width, this.BORDER_WIDTH+this.white_key_height, note, "#fff")
				white_keys.push(key)

				this.midi_value_to_piano_key_map[note.midi_value] = key
				x = x + white_key_width + this.BORDER_WIDTH;
			}
		}

		var ctx = this.white_keys_canvas.getContext("2d");
		var j;
		for(j = 0; j < white_keys.length; j++){	
			var white_key = white_keys[j];
			white_key.draw(ctx);
		}

		var black_keys = [];
		var black_key_width = Math.floor(white_key_width * 0.6);
		var black_key_height = Math.floor(this.white_key_height * 0.67);
		var k;
		for(k = this.min_midi_value; k <= this.max_midi_value; k++){
			var note = musicKit.all_notes[k];
			if(note.note_name.is_sharp_or_flat){

				var flat_key = this.midi_value_to_piano_key_map[note.midi_value-1];
				var sharp_key = this.midi_value_to_piano_key_map[note.midi_value+1];
				if( flat_key != undefined && sharp_key != undefined) {

					var x = flat_key.x + this.BORDER_WIDTH + white_key_width - black_key_width/2;
					let key = new PianoView.Key(x, this.BORDER_WIDTH, black_key_width, black_key_height, note, "#333", true);
					black_keys.push(key)
					this.midi_value_to_piano_key_map[note.midi_value] = key
				}
			}
		}

		ctx = this.black_keys_canvas.getContext("2d");
		var l;
		for(l = 0; l < black_keys.length; l++){	
			var black_key = black_keys[l];
			black_key.draw(ctx);
		}
	}

	calculateHeight(width, number_of_white_keys) {
		let white_key_width = Math.floor((width - ((this.number_of_white_keys+1)*this.BORDER_WIDTH) )/ this.number_of_white_keys);
		return  Math.ceil((white_key_width * 5) + this.BORDER_WIDTH*2) +1 ;
	}

	clear() {
		this.black_keys_drawing_canvas.getContext("2d").clearRect(0, 0, this.WIDTH, this.HEIGHT);
		this.white_keys_drawing_canvas.getContext("2d").clearRect(0, 0, this.WIDTH, this.HEIGHT);
		var i;
	    for(i=this.range.min; i<=this.range.max; i++){
	    	this.midi_value_to_piano_key_map[i].isOn = false;
	    }
	}
	clearNote(note) {
		if(note == undefined) {
			log.e('note is undefined')
			return
		}
		if (!note.isWithinRange(this.range)) {
			log.i('note is out of range')
			return
		}
		let ctx = note.note_name.is_sharp_or_flat ? this.black_keys_drawing_canvas.getContext("2d") : 
													this.white_keys_drawing_canvas.getContext("2d");

		let key = this.midi_value_to_piano_key_map[note.midi_value];
		ctx.clearRect(key.x , key.y, key.width, key.height);
		key.isOn = false;
	}
	clearHoverNote(note) {
		let ctx = note.note_name.is_sharp_or_flat ? this.black_keys_drawing_hover_canvas.getContext("2d") : 
													this.white_keys_drawing_hover_canvas.getContext("2d");

		let key = this.midi_value_to_piano_key_map[note.midi_value];
		ctx.clearRect(key.x , key.y, key.width, key.height);
	}

	drawNote(note){
		if(note == undefined) {
			log.e('note is undefined')
			return
		}
		this.drawNoteWithColor(note);
	}

	drawNoteWithColor(note, color=note.note_name.color){
		if(note == undefined) {
			log.e('note is undefined')
			return
		}
		if (!note.isWithinRange(this.range)) {
			log.i('note is out of range')
			return
		}
		var ctx = note.note_name.is_sharp_or_flat ? this.black_keys_drawing_canvas.getContext("2d") : 
													this.white_keys_drawing_canvas.getContext("2d");

		let key = this.midi_value_to_piano_key_map[note.midi_value];
		key.draw(ctx, color);
	}

	drawHoverNote(note){
		if(note == undefined) {
			log.e('note is undefined')
			return
		}
		if (!note.isWithinRange(this.range)) {
			log.i('note is out of range')
			return
		}
		var ctx = note.note_name.is_sharp_or_flat ? this.black_keys_drawing_hover_canvas.getContext("2d") : 
													this.white_keys_drawing_hover_canvas.getContext("2d");
		let color = note.note_name.is_sharp_or_flat ? "#aaaaaaaa" : "#33333333";
		let key = this.midi_value_to_piano_key_map[note.midi_value];
		key.draw(ctx, color);
	}

	drawInterval(interval){

		var play_type = interval.play_type;
		var first_note = (play_type == INTERVAL_PLAY_TYPE.ASCENDING) ? interval.lower_note : interval.higher_note;

		this.clear();
		this.drawNoteWithColor(first_note);
		setTimeout(() => {
			var second_note = (play_type == INTERVAL_PLAY_TYPE.ASCENDING) ? interval.higher_note : interval.lower_note;
			this.drawNoteWithColor(second_note);
		}, (interval.play_type == INTERVAL_PLAY_TYPE.HARMONIC) ? 0 : interval.delay_in_ms);	
	}

	drawChord(chord){
		this.clear();
		var note_array = chord.getNoteArray(musicKit.all_notes, this.range);
		var j;
		for(j=0; j< note_array.length; j++) {
			var note = note_array[j];
			var label = chord.note_labels[j];
			if (label == 'R'){
				this.drawNoteWithColor(note);
			} else {
				this.drawNoteWithColor(note, "#999");
			}
		}
	}

	drawScale(scale){
		this.clear();
		var note_array = scale.getNoteArray(musicKit.all_notes, this.range);
		var j;
		for(j=0; j< note_array.length; j++) {
			var note = note_array[j];
			
			if (note.note_name.type == scale.root_note.note_name.type){
				this.drawNoteWithColor(note);
			} else {
				this.drawNoteWithColor(note, "#999");
			}
		}
	}

	addClickEventListeners(onClick) {

		let pianoView = document.getElementById(this.id);
		pianoView.style.cursor="pointer";
		let range = this.range;
		let key_map = this.midi_value_to_piano_key_map;
		let width = this.width;
		let WIDTH = this.WIDTH;
		let self = this;
		pianoView.addEventListener("click", function(event){
		    
		    let position =	self.getPosition(pianoView);
		    let x = (event.clientX - position.x) * (WIDTH/width);
		    let y = (event.clientY- position.y) * (WIDTH/width);

		    var foundKey = self.findKey(key_map, range, x, y);

		    if(foundKey == undefined){
		    	log.e("No key found on click");
		    } else {
		    	foundKey.isOn = !foundKey.isOn;
		    	onClick(foundKey.note, foundKey.isOn);
		    }
		});
	}

	addHoverEventListeners() {

		let pianoView = document.getElementById(this.id);
		pianoView.style.cursor="pointer";
		let range = this.range;
		let key_map = this.midi_value_to_piano_key_map;
		let width = this.width;
		let WIDTH = this.WIDTH;
		let self = this;
		var previousKey;
		pianoView.addEventListener("mouseover", event => {
		    previousKey = undefined;
		});
		pianoView.addEventListener("mousemove", function(event){
		    let position =	self.getPosition(pianoView);
		    let x = (event.clientX - position.x) * (WIDTH/width);
		    let y = (event.clientY- position.y) * (WIDTH/width);

		    var foundKey = self.findKey(key_map, range, x, y);

		    if(foundKey !== undefined){
		    	
		    	if(previousKey === undefined) {
		    		previousKey = foundKey;
		    		self.drawHoverNote(foundKey.note);
		    	}
		    	if(previousKey.note.midi_value !== foundKey.note.midi_value) {

		    		self.clearHoverNote(previousKey.note);
		    		previousKey = foundKey;
		    		self.drawHoverNote(foundKey.note);
		    	}		    	
		    }
		});

		pianoView.addEventListener("mouseout", event => {
  			self.clearHoverNote(previousKey.note);
		});
	}


	getPosition(element) {
		const rect = element.getBoundingClientRect();
		return { x: rect.left, y: rect.top };
	}

	findKey(key_map, range, x, y){
		var foundKey;
		var i;
	    for(i=range.min; i<=range.max; i++){
	    	var key = key_map[i];
	    	if(key.isWithinBounds({x: x, y: y})){
	    		foundKey = key;
	    		if(key.isBlack){
	    			break;
	    		}
	    	}
	    }
	    return foundKey;
	}
}

PianoView.Key = class  {
	constructor(x, y, width, height, note, color, isBlack = false){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.note = note;
		this.color = color;
		this.isBlack = isBlack;
		this.isOn = false;
	}

	draw(ctx, color = this.color) {
		ctx.beginPath();
		ctx.lineWidth = 0;
		ctx.fillStyle = color;
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.fill();
		ctx.stroke();
    	
    	if (this.note.note_name.name == 'C' && this.note.octave == 4) {
			ctx.beginPath();
			ctx.arc(this.x + (this.width)/2, this.height - this.height*0.10, this.width * 0.15, 0, 2 * Math.PI, false);
			ctx.fillStyle = '#666';
			ctx.fill();
    	}
	}

	isWithinBounds(position) {
		return position.x >= this.x &&  position.x <= (this.width + this.x) &&
			position.y >= this.y &&  position.y <= (this.height + this.y);
	}
}

module.exports = PianoView;
},{"@jasonfleischer/log":2,"@jasonfleischer/music-model-kit":3}]},{},[1]);
