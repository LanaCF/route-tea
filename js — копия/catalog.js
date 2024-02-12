function renderListTypeTea() {
    teaType.forEach(function(item) {
        const listTeaHtml = 
        `
            <li>&circ; ${ item.type }</li>
        `;
        // `
        //     <li><a href="#${ item.id }" data-path="" class="list-tea"">&circ; ${ item.type }</a></li>
        // `;
    
        listTypeTea.insertAdjacentHTML('beforeend', listTeaHtml);
    })
}

function renderCatalogPage() {
    teaType.forEach(function(item) {
        const catalogTea = 
        `
        <div class="catalog-wrapper" id="${ item.id }">
            <div class="catalog-img-box">
            <img src="${ item.img }" alt="" class="catalog-img">
            </div>
    
            <div class="catalog-text-box">
    
            <p class="home_text bold center">
                ${ item.type }
            </p>
    
            <p class="home_text">
            ${ item.text }
            </p>
            </div>
        </div>
        `;
    
        infoBlock.insertAdjacentHTML('beforeend', catalogTea);
    })
}






