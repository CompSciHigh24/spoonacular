// Create a Spoonacular Developer account and obtain an API key by verifying your email.  

// 1. Create a variable called API_KEY and store your API key here.

// 2. Navigate to Get Recipe Information. Create a variable called requestURL and store the url for getting information on recipe 715538.

// 3. Add query parameters to requestURL so that the nutrition infromation and a wine pair recommendation is provided

// 4. Navigate to Authentication and identify how API Keys are used

// 5. Add the query parameter along with your API_KEY to the request URL

async function fetchAPIData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    return data
}

// 6. Call the async function below to test your URL. 

// 7. As a group create and test a new request URL called requestURL2 
// It should retrieve 5 random recipes while including the nutrition information


// 8. As a group create and test a new request URL called requestURL3
// It should search the menu for pastas that have at least 15 grams of protein and at most 80 grams of fat
