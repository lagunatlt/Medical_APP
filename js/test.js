let testTest = function() {

	let test = document.querySelectorAll('.test');
	
	for (let i = 0; i < test.length; i++) {
		// console.log(test[i]);
		let logo = test[i].children[0],
				testProgress = test[i].children[1].children[0].children[0].children[0],
				testEnd = test[i].children[1].children[0].children[0].children[1],
				progressBar = test[i].children[1].children[1].children[0];

		progressBar.style.width = ((parseInt(testProgress.innerText) / 20) * 100) + '%';
		
		if ((parseInt(testProgress.innerText) < 20) && (parseInt(testProgress.innerText) > 0)) {
			logo.classList.add('test-logo__progress');
			testProgress.style.color = '#FFC554';
			progressBar.style.backgroundColor = '#FFC554';
			testEnd.style.color = 'rgba(60, 72, 86, 0.5)';
		}
		if (parseInt(testProgress.innerText) === 20) {
			logo.classList.add('test-logo__ok');
			testProgress.style.color = '#49C589';
			testEnd.style.color = '#49C589';
		}
		if (parseInt(testProgress.innerText) === 0) {
			logo.classList.add('test-logo__none');
			testProgress.style.color = 'rgba(60, 72, 86, 0.5)';
			testEnd.style.color = 'rgba(60, 72, 86, 0.5)';
		}
	}
};

testTest();
