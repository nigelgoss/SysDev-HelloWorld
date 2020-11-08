exports.xhr = ($status, $responseText) => {

	const xhr = {
		open: jest.fn(),
		send: jest.fn(),
		setRequestHeader: jest.fn(),
		readyState: 4,
		status: $status,
		responseText: $responseText,
	};
	  
	window.XMLHttpRequest = jest.fn().mockImplementation(() => xhr);
	setTimeout(() => { xhr.onreadystatechange(); }, 0);
	
};
	
exports.delay = $ms => {
	return new Promise(res => { setTimeout(res, $ms); });
};
