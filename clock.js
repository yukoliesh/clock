const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate() {
	// console.log('Hi');
	const now = new Date();
	//this gets your seconds
	const seconds = now.getSeconds();
	//degree = needle angles
	const secondsDegrees = seconds / 60 * 360 + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	secondHand.style.transform = `rotete`;

	const minutes = now.getMinutes();
	const minutesDegrees = minutes / 60 * 360 + 90;
	minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

	const hours = now.getHours();
	const hoursDegrees = hours / 12 * 360 + 90;
	hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

	console.log('sec', seconds);
	console.log('min', minutes);
	console.log('hr', hours);
}

//it will show "hi" per second
setInterval(setDate, 1000);
