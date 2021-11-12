{
	const answers = [];	
	const clickHandler = (e) => {
		answers.push(e.target.dataset.choice);
		const answered = document.querySelector('.question:not(.hidden)');
		answered.classList.add('hidden');
		answered.classList.remove('question');
		document.querySelectorAll('.question')[0].classList.remove('hidden');
	}
	Array.from(document.querySelectorAll('li')).forEach(li => li.addEventListener('click', clickHandler));
	document.querySelector('button').addEventListener('click', (e) => {
		document.querySelector('.results').innerHTML = answers.toString();
	});	
}