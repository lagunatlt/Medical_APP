let pushOk = document.getElementById('pushOk')
let push = document.getElementById('push')
let pushSpan = document.getElementById('pushSpan')

let checkboxPushOk = function() {
	if (push.checked) {
		pushOk.style.backgroundImage = 'url(./img/check.svg)'
	}
};

let checkboxPush = function() {
	if (push.checked) {
		push.checked = false
		pushOk.style.backgroundImage = 'none'
	} else {
		push.checked = true
		pushOk.style.backgroundImage = 'url(./img/check.svg)'
	}
};

pushSpan.addEventListener('click', checkboxPush);

checkboxPushOk();
