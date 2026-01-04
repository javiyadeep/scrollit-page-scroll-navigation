$(function () {
    $.scrollIt({
        topOffset: -80,
        scrollTime: 800,
        activeClass: 'active'
    });

    const urlParams = new URLSearchParams(window.location.search);
    const sectionToScroll = urlParams.get('section');

    if (sectionToScroll !== null) {
        window.history.replaceState({}, document.title, window.location.pathname);
        
        setTimeout(function () {
            const $hiddenLink = $('#dynamicScrollLink');
            if ($hiddenLink.length) {
                $hiddenLink.attr('data-scroll-nav', sectionToScroll);
                $hiddenLink.click();
            }
        }, 300);
    }
});
