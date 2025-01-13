function fetchDataWithCallback(url,success,errorn) {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            success(data);
        })
        .catch((error) => {
            errorn(error);
        });
}

function handleSuccess(data) {
    console.log("Data fetched successfully:", data);
}
function handleError(error) {
    console.error("An error occurred:", error.message);
}

const apiURL = "https://jsonplaceholder.typicode.com/posts/1";
fetchDataWithCallback(apiURL, handleSuccess, handleError);
