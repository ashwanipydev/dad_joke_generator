# dad_joke_generator
This project involves several JavaScript topics. Let's break down the concepts and steps used in the project:

1. **DOM Manipulation:**
   - Retrieving and updating the content of HTML elements using `getElementById()`.
   - Changing the inner text and disabling a button element.

2. **Async/Await:**
   - Using async and await for handling asynchronous operations, such as fetching data from an API.

3. **Fetch API:**
   - Making an HTTP request to an external API using the Fetch API.
   - Handling the JSON response using `response.json()`.

4. **Event Handling:**
   - Adding a click event listener to a button element using `addEventListener()`.

Now, let's break down the project step by step:

1. **HTML Elements:**
   - Create an HTML file with a button element (`btn`) and a container element (`joke`) to display the joke.

2. **JavaScript Variables:**
   - Define `btnEl` and `jokeEl` variables using `getElementById()` to reference the button and container elements.
   - Set up the `apiKey` for the API and an `options` object with headers for the API request.

3. **API Endpoint:**
   - Define the `apiURL` for fetching dad jokes from the API, including a query parameter for limiting the result to one joke.

4. **getJoke() Function:**
   - Create an `async` function named `getJoke()` to fetch and display a dad joke.
   - Display a loading message and disable the button.
   - Use `fetch` to send a GET request to the `apiURL` with the specified headers.
   - Parse the JSON response using `response.json()` and store it in the `data` variable.
   - Update the UI to display the retrieved joke.
   - Handle errors by displaying an error message in case of an exception.

5. **Event Listener:**
   - Add a click event listener to the button (`btnEl`) that calls the `getJoke()` function when clicked.

Each step above contributes to the functionality of the project. It fetches a dad joke from an API and updates the UI with the retrieved joke. The use of async/await makes the asynchronous code more readable and manageable. Additionally, error handling ensures that the user is provided with appropriate feedback in case of any issues.

## Live Damo
[Dad Joke Generator](https://ashwanipydev.github.io/dad_joke_generator/)
