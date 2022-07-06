model = {
	
	oscillatorTypeIndex: 0,
	oscillatorTypes: ["sine", "triangle", "sawtooth", "square"]
}

var bpm = 120;
var tremoloMin = 0.7;
var tremoloMax = 1.0;
var fade_in_seconds = 25;
var duration = 5;

var harmonicsVolume = [1, 0.286699025, 0.63513, 0.042909002, 0.2522, 0.30904, 0.25045, 0.2004, 0, 0.14836, 
            0.17415, 0.07979, 0.05383, 0.07332, 0.07206, 0.08451, 0.022270261, 0.013072562, 
            0.008585879, 0.005771505, 0.004343925, 0.002141371, 0.005343231, 0.000530244, 
            0.004711017, 0.009014153];