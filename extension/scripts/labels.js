// Search panel

// Sidebar
document.querySelector('.topics.tab').innerHTML =
	document.querySelector('.topics.tab').innerHTML.replace('Topics', 'Inbox');

// Inbox search.
document.getElementById('js-search-query').placeholder = 'Search your waves';

// Mention search.
document.getElementById('js-message-list-query').placeholder = 'Search your mentions';

// Public wave search.
document.getElementById('js-public-search-query').placeholder = 'Search all public waves';

// Task search.
if (document.getElementById('js-task-list-query')) {
	document.getElementById('js-task-list-query').placeholder = 'Search your tasks';
}



// New wave

// Empty wave panel
if (document.querySelector('.message-container')) {
	document.querySelector('.message-container > div').innerHTML = 'Select wave from list or create new wave';
	document.querySelector('.message-container > .create-wave').innerHTML = 'Create new wave';
}

// New wave wizard
document.querySelector('.create-wave-by-wizard, .common-create-wave-by-wizard').title = 'Create new wave';
document.querySelector('.create-wave-by-wizard, .common-create-wave-by-wizard').addEventListener('click', function () {
	document.querySelector('.ctm-create-topic').innerHTML = 'Create new wave';
}, false);




// Wave panel
var i = 0;
function setParticipantSearch() {
	if (!document.querySelector('.show-more-participants')) {
		requestAnimationFrame(setParticipantSearch);
		console.log('loop' + (++i));
		return;
	}
	document.querySelector('.show-more-participants').title = 'Manage people with access';
	document.querySelector('.show-more-participants').addEventListener('click', function () {
		
		document.querySelector('.showing-participants-id').placeholder = 'Search people on this wave';
	}, false);
}
setParticipantSearch();
