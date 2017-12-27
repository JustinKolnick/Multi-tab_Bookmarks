document.getElementById('focus_w').onclick = focus_w;
document.getElementById('focus_c').onclick = focus_c;
document.getElementById('casual').onclick = casual;

function focus_w ()
{
	let url_list = [
	"https://www.google.com",
	"https://www.google.com",
	"https://www.google.com",
	];

	for(let i = 0; i < url_list.length; i++)
	{
		console.log(url_list[i]);
		chrome.tabs.create({ url: url_list[i] });
	}
}

function focus_c () 
{
	let url_list = [
	"https://www.google.com",
	"https://www.google.com",
	"https://www.google.com",
	];

	for(let i = 0; i < url_list.length; i++)
	{
		console.log(url_list[i]);
		chrome.tabs.create({ url: url_list[i] });
	}
}

function casual () 
{
	let url_list = [
	"https://www.google.com",
	"https://www.google.com",
	"https://www.google.com",
	];

	for(let i = 0; i < url_list.length; i++)
	{
		console.log(url_list[i]);
		chrome.tabs.create({ url: url_list[i] });
	}
}

/*
// Send message to content.js of current tab
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) 
{
	chrome.tabs.sendMessage(tabs[0].id, {txt: "work"});
});
*/
