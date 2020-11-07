describe("Section one", () => {

	window.$ = {};
	require("app.js");

	test("Button click updates text", () => {

		const ng01 = document.querySelector("#ng01");
		ng01.click();
		expect(ng01.textContent).toEqual("Clicked");

	});

	test("Naviation function", () => {
	
		expect($.nav()).toEqual(99);

	});
	
});
