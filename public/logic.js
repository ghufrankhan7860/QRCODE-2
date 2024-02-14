// // Specify the directory and file name
// const directoryPath = '/';
// const fileName = 'URL.png';

// // Combine directory path and file name
// const filePath = directoryPath + fileName;

// // Check if the file exists
// fetch(filePath)
//     .then(response => {
//         if (response.ok) {
//             // File exists, add image element to the HTML
//             const imageContainer = document.getElementById('imageContainer');
//             const imgElement = document.createElement('img');
//             imgElement.src = filePath;
//             imgElement.alt = 'URL';
//             imageContainer.appendChild(imgElement);
//         } else {
//             // File doesn't exist, you can handle this case or do nothing
//             console.log('File not found.');
//         }
//     })
//     .catch(error => {
//         // Handle errors, for example, network issues
//         console.error('Error checking file:', error);
//     });