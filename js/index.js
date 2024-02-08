// console.log(window.location.hash)
const infoBlock = document.querySelector('.info-block');

const routes = [
    { path: '', component: homePage, title: 'Home' },
    { path: 'about', component: aboutPage, title: 'About' },
    { path: 'catalog', component: catalogsPage, title: 'Catalog' },
    { path: '**', component: notFoundPage, title: '' }
];

renderHeader();
renderMenu();
checkRoute();

addEventListener('hashchange', () => {
    checkRoute();
})

function checkRoute() {
    const hash = getHash();
    const listMenu = document.querySelectorAll('.menu a');    
    let route = routes.find(r => r.path === hash);    

    if (!route) {
        route = routes.find(r => r.path === '**');
    }

    console.log(route);
    
    render(route.component());

    listMenu.forEach(function(item) {
        item.onclick = function() {
            listMenu.forEach(function(item) {
                item.classList.remove('active');
            });

           this.classList.add('active');
        }
    });
}

function homePage() {
    renderHomePage();
    return '<h2>Home page</h2>';
}

function aboutPage() {
    renderAboutPage();
    return '<h2>About page</h2>';
}

function catalogsPage() {
    renderCatalogPage();
    return '<h2>Сatalogs page</h2>';
}

function notFoundPage() {
    infoBlock.innerHTML = '';
    return `
        <h2>404! Page not found!</h2>
        <a href="#">Home</a>
    `;
}

function render(component) {
    const outlet = document.querySelector('.outlet');
    outlet.innerHTML = component;
}

function renderHeader() {
    const header = document.querySelector('.header');
    return header.insertAdjacentHTML('afterbegin', '<img src="https://i.ibb.co/98n9SW1/img-head-bgd.png" alt="" class="header-img">');
}

function renderMenu() {
    const listMenu = document.querySelector('.menu');
    routes.forEach(function(item) {
        if (item.path !== '**') {
            const menuHtml = `
                <li><a href="#${item.path}">${item.title}</a></li>
            `;
            listMenu.insertAdjacentHTML('beforeend', menuHtml);
        }
    });

    const homeLink = document.querySelector('.menu a[href="#"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }
}

function getHash() {
    const hash = window.location.hash;
    return hash.slice(1);
}

function saveCurrentPathToLocalStorage() {
    const currentPath = getHash();
    localStorage.setItem('currentPath', currentPath);
}





// // Функція для отримання поточного шляху з хешем
// function getHash() {
//     return window.location.hash.slice(1);
// }

// // Функція для збереження поточного шляху у локальне сховище
// function saveCurrentPathToLocalStorage() {
//     const currentPath = getHash();
//     localStorage.setItem('currentPath', currentPath);
// }

// // Функція для отримання збереженого шляху з локального сховища
// function getCurrentPathFromLocalStorage() {
//     return localStorage.getItem('currentPath');
// }

// // Функція для встановлення активної кнопки в меню відповідно до поточного шляху
// function setActiveMenuItem() {
//     const currentPath = getCurrentPathFromLocalStorage();
//     const menuLinks = document.querySelectorAll('.menu a');
//     menuLinks.forEach(link => {
//         if (link.getAttribute('href').slice(1) === currentPath) {
//             link.classList.add('active');
//         } else {
//             link.classList.remove('active');
//         }
//     });
// }

// // Перевірка поточного шляху при кожному кліку на кнопку меню і збереження нового шляху
// function checkRoute() {
//     const hash = getHash();
//     const route = routes.find(r => r.path === hash) || routes.find(r => r.path === '**');
//     render(route.component());
//     saveCurrentPathToLocalStorage();
//     setActiveMenuItem();
// }

// // Перевірка поточного шляху при завантаженні сторінки і встановлення активної кнопки
// window.addEventListener('load', () => {
//     checkRoute();
// });