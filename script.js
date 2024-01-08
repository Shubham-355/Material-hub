// function blockIndianUsers() {
//     console.log("indian fn called")
//     fetch('https://api.country.is/')
//         .then(response => response.json())
//         .then(data => {
//             console.log("this is data", data);
//             const userCountry = data.country;
//             console.log("this is ", userCountry);
//             // Check if the user is from India (country code 'IN')
//             if (userCountry === 'IN') {
//                 const intro = document.getElementsByClassName("intro")[0];
//                 console.log(intro);
//                 while (intro.firstChild) {
//                     intro.removeChild(intro.firstChild);
//                 }
//                 // Show the custom alert box
//                 document.getElementById('overlay').style.display = 'block';
//                 document.getElementById('customAlert').style.display = 'block';
//             }
//         })
//         .catch(error => console.error('Error fetching IP information:', error));
// }

// document.addEventListener("DOMContentLoaded", () => {
//     blockIndianUsers();
// });


function showMaterial(materialClass) {
    const materialContainers = document.querySelectorAll('.material-container');
    materialContainers.forEach(container => {
        container.style.display = 'none';
    });

    const selectedContainer = document.querySelector(`.${materialClass}`);
    if (selectedContainer) {
        selectedContainer.style.display = 'grid';
    }
}

function showsub(subclass) {
    const subcontainer = document.querySelectorAll('.sub');
    subcontainer.forEach(container => {
        container.style.display = 'none';
    });

    const selectedContainer = document.querySelector(`.${subclass}`);
    if (selectedContainer) {
        selectedContainer.style.display = 'grid';
    }
}
