document.addEventListener('DOMContentLoaded', function() {
    var aboutText = document.getElementById('getCode');
    //need to fetch the visitor count from the dynamodb using apigate
    const apiUrl = 'https://rzg5amkfsj.execute-api.ap-south-1.amazonaws.com/prod';
    console.log('JavaScript code is executing.');
    fetch(apiUrl)
    .then(response => {
      // Check if the response is successful (status code 200)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parse the JSON response
      return response.json();
    })
    .then(data => {
      // Handle the data returned by the API
      console.log('API response:', data);
      console.log(data)
      // Update the HTML content with the API data
      aboutText.textContent = JSON.stringify(data);
      
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error);
    });

});
