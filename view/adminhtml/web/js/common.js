require(['jquery'], function($){
    $('li[data-ui-id="menu-datareporter-core-news"]').on('click', function (event) {
        event.preventDefault();
        var url = 'https://www.datareporter.eu/news/';
        window.open(url, '_blank');
    });
});