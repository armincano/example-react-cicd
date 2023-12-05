//TODO: write a test that checks that the names are joining correctly
//More information can be found here: https://jestjs.io/docs/getting-started
//You might want to have a go at using some of Jest's other matchers: https://jestjs.io/docs/expect
const {getInfo} = require("../../src/helpers/getInfo");

// arrange
const exampleObject = [
	{
		name: "Spain",
		location: "REPLACE_ME",
	},
    {
        name: "France",
        location: "REPLACE_ME",
    }
];

test("names are joining correctly", () => {
	expect(getInfo(exampleObject)).toBe("Spain, France");
});

//TODO: write a test if no data is passed to the function (returns "none")

test("no data is passed and returns 'none'", () => {
	expect(getInfo()).toBe("none");
});
