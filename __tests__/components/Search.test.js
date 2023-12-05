import renderer from 'react-test-renderer'; //you will need this for the snapshot test
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react'; //this is for the DOM testing
import { screen } from '@testing-library/dom';//this is for the DOM testing
import { Search } from '../../src/components/Search';

//TODO: write a test that checks that the search field has some text typed in

//You'll need to use Queries to find the elements you're looking for:
// https://testing-library.com/docs/queries/about/
// And you'll need to simulate someone clicking on the button:
// https://testing-library.com/docs/dom-testing-library/api-events

//Start here: https://testing-library.com/docs/example-findByText
//Look for the line that says: 'describe('findByText Examples', () => {'

test('the search field has some text typed in', async () => {
    render(<Search />)
    const inputSearchForm = screen.getByRole('textbox');
    expect(inputSearchForm.value).toBe("");
    fireEvent.change(inputSearchForm, { target: { value: 'Spain' } });
    expect(inputSearchForm.value).toBe("Spain");
});

//TODO: write a snapshot test that captures the Search.js component

//Look at this doc to help you write the test: https://jestjs.io/docs/snapshot-testing

test('Search box renders correctly', () => {

    const searchBoxCorrect = <Search />;//Search should be self contained to work properly

    const treeCorrect = renderer
    .create(searchBoxCorrect)
    .toJSON();
    expect(treeCorrect).toMatchSnapshot();
});


//TODO: write a test to check that the Error component appears if no data 
//is found from the call to the API. You will need another mock.

//This is a hard test to write - try the getCountryByName.test.js test first!

// jest.mock();

/* test('the Error component appears if no data is found from the call to the API', async () => {
    render(<Search />)
    const inputSearchForm = screen.getByRole('textbox');
    expect(inputSearchForm.value).toBe("");
    fireEvent.change(inputSearchForm, { target: { value: 'xyz' } });
    expect(inputSearchForm.value).toBe("xyz");
    const searchButton = screen.getByRole("button");
    fireEvent.click(searchButton);
    
    await waitFor(() => {
        expect(screen.getByRole('img', {value: /error image/i})).toBeInTheDocument();
    });
    
}); */