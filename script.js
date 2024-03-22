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

document.addEventListener('DOMContentLoaded', function() {
    var navbarButton = document.getElementById('navbarButton');
    var closeButton = document.getElementById('closeButton');
    var navbar = document.getElementById('navbar');
    var overlay = document.getElementById('overlay');

    navbarButton.addEventListener('click', function() {
    navbar.style.display = 'block';
    overlay.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
    navbar.style.display = 'none';
    overlay.style.display = 'none';
    });

    overlay.addEventListener('click', function() {
    navbar.style.display = 'none';
    overlay.style.display = 'none';
    });
});





document.addEventListener("DOMContentLoaded", function() {
var sideNoticePopup = document.getElementById('sideNoticePopup');
var closeButton = document.getElementById('popupCloseButton');

closeButton.addEventListener('click', function() {
    sideNoticePopup.classList.remove('show');
});

setTimeout(function() {
    sideNoticePopup.classList.add('show');
}, 3000);
});





function showMaterial(materialClass) {
    console.log('showMaterial called with', materialClass);
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
    console.log('showsub called with', subclass);
    const subcontainer = document.querySelectorAll('.sub');
    subcontainer.forEach(container => {
        container.style.display = 'none';
});

const selectedContainer = document.querySelector(`.${subclass}`);
    if (selectedContainer) {
        selectedContainer.style.display = 'grid';
    }
}


document.addEventListener("DOMContentLoaded", function() {
    var sideNoticePopup = document.getElementById('sideNoticePopup');
    var closeButton = document.getElementById('closeButton');
    var popupCloseButton = document.getElementById('popupCloseButton');

    closeButton.addEventListener('click', function() {
        sideNoticePopup.classList.remove('show');
});

popupCloseButton.addEventListener('click', function() {
    sideNoticePopup.classList.remove('show');
});

setTimeout(function() {
    sideNoticePopup.classList.add('show');
}, 3000);
});
