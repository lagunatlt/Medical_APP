let testTest = function() {

	let test = document.querySelectorAll('.test');
	
	for (let i = 0; i < test.length; i++) {
		let logo = test[i].children[0],
				testProgress = test[i].children[1].children[0].children[0].children[0],
				testEnd = test[i].children[1].children[0].children[0].children[1],
				progressBar = test[i].children[1].children[1].children[0];

		progressBar.style.width = ((parseInt(testProgress.innerText) / 20) * 100) + '%';
		switch(true) {
			case ((parseInt(testProgress.innerText) < 20) && (parseInt(testProgress.innerText) > 0)):
				logo.classList.add('test-logo__progress');
				testProgress.style.color = '#FFC554';
				progressBar.style.backgroundColor = '#FFC554';
				testEnd.style.color = 'rgba(60, 72, 86, 0.5)';
				break;
	
			case (parseInt(testProgress.innerText) === 20):
				logo.classList.add('test-logo__ok');
				testProgress.style.color = '#49C589';
				testEnd.style.color = '#49C589';
				break;
			
			case (parseInt(testProgress.innerText) === 0):
				logo.classList.add('test-logo__none');
				testProgress.style.color = 'rgba(60, 72, 86, 0.5)';
				testEnd.style.color = 'rgba(60, 72, 86, 0.5)';
				break;
			
		}
	}
};

testTest();

// ------------------

let answerQuest = function() {

	let quest = document.querySelectorAll('.q-answer__item');

		for (let i = 0; i < quest.length; i++) {

			// console.log(quest[i].children[0])
			
			let quest1 = quest[i].children[1];
			let spanAnswer = quest[i].children[1].children[0];
			let answerWrap = quest[i].children[0];
			
			
			quest[i].addEventListener('click', function () {

				switch(true) {
					case ((quest[i].dataset.test === 'true') && (quest[i].dataset.answer === 'close')):
						quest[i].dataset.answer = 'open';
						answerWrap.classList.remove('q-answer__none');
						answerWrap.classList.add('q-answer__true');
						quest1.classList.add('q-result__true');
						spanAnswer.textContent = 'Верно!';
						break;
		
					case ((quest[i].dataset.test === 'false') && (quest[i].dataset.answer === 'close')):
						quest[i].dataset.answer = 'open';
						answerWrap.classList.remove('q-answer__none');
						answerWrap.classList.add('q-answer__false');
						quest1.classList.add('q-result__false');
						spanAnswer.textContent = 'Неверно!';
						break;


					case ((quest[i].dataset.test === 'true') && (quest[i].dataset.answer === 'open')):
						quest[i].dataset.answer = 'close';
						answerWrap.classList.remove('q-answer__true');
						answerWrap.classList.add('q-answer__none');
						quest1.classList.remove('q-result__true');
						break;

					case ((quest[i].dataset.test === 'false') && (quest[i].dataset.answer === 'open')):
						quest[i].dataset.answer = 'close';
						answerWrap.classList.remove('q-answer__false');
						answerWrap.classList.add('q-answer__none');
						quest1.classList.remove('q-result__false');
						break;
						
				}
			});
		}

}
answerQuest();



