class AnalogClock {
	constructor(container) {
		this.container = container;
		this.render();

		// Immediately display the current time on clock render
		this.displayTime(this.hourHand, this.minuteHand, this.secondHand);
	}

	render() {
		const clock = this.createElement("div", ["analog-clock"]);
		this.hourHand = this.createElement("div", ["hand", "hour-hand"]);
		this.minuteHand = this.createElement("div", ["hand", "minute-hand"]);
		this.secondHand = this.createElement("div", ["hand", "second-hand"]);
		clock.append(this.hourHand, this.minuteHand, this.secondHand);

		for (let index = 1; index <= 12; index++) {
			let number = this.createElement("div", ["number", `number-${index}`]);
			let span = this.createElement("span", "", index);
			number.append(span);
			clock.append(number);
		}

		this.container.append(clock);

		setInterval(() => {
			this.displayTime(this.hourHand, this.minuteHand, this.secondHand);
		}, 1000);
	}

	createElement(tag, classNames = [], text = "") {
		const element = document.createElement(tag);
		if (classNames) element.classList.add(...classNames);
		if (text) element.innerText = text;
		return element;
	}

	displayTime(hourHand, minuteHand, secondHand) {
		const dateTime = new Date();
		const hour = dateTime.getHours();
		const minutes = dateTime.getMinutes();
		const seconds = dateTime.getSeconds();

		const hRotation = 30 * hour + minutes / 2;
		const mRotation = 6 * minutes;
		const sRotation = 6 * seconds;

		hourHand.style.transform = `rotate(${hRotation}deg)`;
		minuteHand.style.transform = `rotate(${mRotation}deg)`;
		secondHand.style.transform = `rotate(${sRotation}deg)`;
	}
}
