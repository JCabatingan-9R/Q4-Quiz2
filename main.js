function average() {
	var sci = Number(document.getElementById('gradeSci').value);
	var math = Number(document.getElementById('gradeMath').value);
	var ss = Number(document.getElementById('gradeSocial').value);
	var divide = 3; // because there are 3 subjects
	var ave = (sci + math + ss) / divide; //to get average
	var aver = ave.toFixed(2);	//to fix to 2 decimals

	if (aver >= 94 && aver <= 100) {
		window.alert('Your average is ' + aver + ', which gives you an E for Excellent!'); //for Excellent
	}
	else if (aver >= 88 && aver <= 93.99) {
		window.alert('Your average is ' + aver + ', which gives you an AS for Above Satisfactory!'); //for Above Sacistfactory
	}
	else if (aver >= 80 && aver <= 86.99) {
		window.alert('Your average is ' + aver + ', which gives you an S for Satisfactory!'); //for Satisfactory
	}
	else if (aver >= 75 && aver <= 79.99) {
		window.alert('Your average is ' + aver + ', meaning your grades Need Improvement. You can do it!'); //for Needs Inprovement
	}
	else if (aver >= 70 && aver <= 74.99) {
		window.alert('Your average is ' + aver + ', which is Poor...But I still believe in you!'); //Poor
	}
	else {
		window.alert('Oof...I believe your grades are not fit. But there might be a mistake, so try checking what you typed again!'); //for inappropriate outputs
	}
}