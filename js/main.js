let pushOk = document.getElementById('pushOk')
let push = document.getElementById('push')
let pushSpan = document.getElementById('pushSpan')
if (push.checked) {
	pushOk.style.backgroundImage = 'url(/img/check.svg)'
}
pushSpan.addEventListener('click', () => {
	if (push.checked) {
		push.checked = false
		pushOk.style.backgroundImage = 'none'
	} else {
		push.checked = true
		pushOk.style.backgroundImage = 'url(/img/check.svg)'
	}
})

// --------------------

