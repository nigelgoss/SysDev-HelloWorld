describe("Section two", () => {

	window.$ = {};
	require("../wwwroot/ajax.js");
	const jestMock = require("../jest-mock.js");
	
	test("Button click updates text", async () => {
	
		const data = {"Message":"Hello"};
		jestMock.xhr(200, JSON.stringify(data));
		let res = null;
		$.db.query(null, null, $d => { res = $d; });
		await jestMock.delay(100);
		expect(res).toEqual(data);
		
	});

});
