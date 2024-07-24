const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const min = document.querySelector('#minutes')
const sec = document.querySelector('#seconds')


function updateCounter() {
	const cEv = new Date('February 24 2022 04:00:00')
	const diff = new Date() - cEv

	const daysA = Math.floor(diff / 1000 / 60 / 60 / 24)
	const hoursA = Math.floor(diff / 1000 / 60 / 60) % 24
	const minA = Math.floor(diff / 1000 / 60) % 60
	const secA = Math.floor(diff / 1000) % 60


	days.innerText = daysA
	hours.innerText = hoursA
	min.innerText = minA
	sec.innerText = secA
}
updateCounter()

setInterval(updateCounter, 1000)

