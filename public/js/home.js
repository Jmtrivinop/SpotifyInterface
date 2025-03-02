
const menu_items =  document.querySelectorAll('.menu-item');

menu_items.forEach(item => {

    item.addEventListener('click', function() {
        
        menu_items.forEach(item => {
            item.classList.remove('is-active');

        });

        item.classList.add("is-active");
        
    });

});