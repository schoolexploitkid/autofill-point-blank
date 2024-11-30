// Fetch the HTML content from the URL
fetch('https://raw.githubusercontent.com/schoolexploitkid/autofill-point-blank/refs/heads/main/website-part-2.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text(); // Get the text content of the HTML
  })
  .then(htmlContent => {
    // Insert the fetched HTML into the current page
    document.body.innerHTML = htmlContent;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
