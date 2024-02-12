const listTypeTea = document.querySelector('.list-type-tea');
const infoBlock = document.querySelector('.info-block');

const routes = [
    { path: '', component: homePage, title: 'Домашня' },
    { path: '/', component: homePage, title: 'Домашня' },
    { path: '/about', component: aboutPage, title: 'Про нас' },
    { path: '/catalog', component: catalogsPage, title: 'Каталог' },
    { path: '/catalog/:id', component: singlePage },
    { path: '**', component: notFoundPage, title: '' }
];

renderHeader();
renderMenu();
checkRoute();

addEventListener('hashchange', () => {
    checkRoute();
    const searchParams = getSearchParams();

  if (searchParams.has('scrollto')) {
    const elId = searchParams.get('scrollto');
    const el = document.querySelector(`#${elId}`);

    el.scrollIntoView({ behavior: 'smooth' });
  }
})

function checkRoute() {
    const { hash, id, searchParams } = getHash();
    let route = routes.find(r => r.path === hash);  

    if (!route) {
        route = routes.find(r => r.path === '**');
    }

    checkActivePage();
    render(route.component({id, searchParams}));

    saveCurrentPathToLocalStorage();
}

function homePage(props) {
    listTypeTea.innerHTML = '';
    renderHomePage();
    return '<h2>Home page</h2>';
}

function aboutPage(props) {
    listTypeTea.innerHTML = '';
    renderAboutPage();
    return '<h2>About page</h2>';
}

function catalogsPage(props) {
    infoBlock.innerHTML = '';
    const paramStr = props.searchParams;
    const searchParams = new URLSearchParams(paramStr);
    const filter = searchParams.get('id');    
  
    const postsHtml = 
        teaType
            .filter(post => {
                if (!filter) {
                    return post;
                }

                return post.id.includes(filter);
                })
            .map(function(post) {
                const listTeaHtml = 
                `
                    <li><a href="#/catalog/${post.id}" class="list-tea"">&circ; ${ post.type }</a></li>
                `;

                listTypeTea.insertAdjacentHTML('beforeend', listTeaHtml);
            });
    
    renderCatalogPage();
    return '<h2>Сatalogs page</h2>';

    renderCatalogPage();

    // listTypeTea.innerHTML = '';
    // infoBlock.innerHTML = '';
    // renderListTypeTea();
    // renderCatalogPage();
    // return '<h2>Сatalogs page</h2>';
}

function singlePage(props) {
    listTypeTea.innerHTML = '';
    infoBlock.innerHTML = '';
    const { id } = props;
    const post = teaType.find(p => p.id == id);

    return `
        <h2>Single page</h2>
        <div class="line"></div>
        <div class="catalog-wrapper" id="${ post.id }">
            <div class="catalog-img-box">
            <img src="${ post.img }" alt="" class="catalog-img">
            </div>

            <div class="catalog-text-box">

            <p class="home_text bold center">
                ${ post.type }
            </p>

            <p class="home_text">
            ${ post.text }
            </p>
            </div>
        </div>
    `;
}

function notFoundPage() {
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
    return header.insertAdjacentHTML('afterbegin', '<img src="./img/img_head_bgd.png" alt="" class="header-img">');
    // return header.insertAdjacentHTML('afterbegin', '<img src="https://i.ibb.co/98n9SW1/img-head-bgd.png" alt="" class="header-img">');
}

function renderMenu() {
    const listMenu = document.querySelector('.menu');
    routes.forEach(function(item) {
        if (item.path !== '**' && item.path !== '/catalog/:id' &&  item.path !== '') {
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

function checkActivePage() {
    const hash = window.location.hash;
    const navLink = document.querySelectorAll('.menu a');
    removeNavlinkActiveClass();
  
    if (hash === '#/' || hash === '') {
      navLink[0].classList.add('active');
      return;
    }
  
    navLink.forEach(link => {
      const href = link.getAttribute('href');
      if (href !== '#/' && hash.includes(href)) {
        link.classList.add('active');
      }
    });
}
  
function removeNavlinkActiveClass() {
    const navLink = document.querySelectorAll('.menu a');
    navLink.forEach(link => link.classList.remove('active'));
}

function getHash() {
    let hash = window.location.hash.slice(1);
    const resources = hash.split('/').filter(item => item);
    const searchParams = hash.split('?')[1];
    hash = hash.split('?')[0];
  
    if (resources.length === 2) {
      hash = `/${resources[0]}/:id`;
    }
  
    return {
      hash,
      id: resources[1],
      searchParams,
    };
}

function getSearchParams() {
    const hash = window.location.hash.slice(1);
    const searchParams = hash.split('?')[1];
  
    return new URLSearchParams(searchParams);
}

//LocalStorage ---------------------------------------------------

function saveCurrentPathToLocalStorage() {
    const currentPath = getHash();
    localStorage.setItem('currentPath', currentPath);
}

function getCurrentPathFromLocalStorage() {
    return localStorage.getItem('currentPath');
}







