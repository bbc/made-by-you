define(['jquery'], function($) {

    var iframe;

    function createIframe() {
        $('.try-page').addClass(taster.is_16x9 ? 'try-page--16x9' : 'try-page--full-height');
        iframe = $('<iframe>').attr({
            'class': 'web-frame',
            src: taster.pilot_url + (window.location.hash.slice(0, 3) === '#!/' ? window.location.hash : ''),
            width: '100%',
            height: '100%',
            seamless: '',
            scrolling: 'yes',
            frameborder: '0'
        }).css('border', '0px');

        $('.iframe-wrapper').append(iframe);
    }

    function initToggleTabs() {
        $('.info-button').click(function() {
            $('.info-page').addClass('active');
            $('.try-page').removeClass('active');
            $('.story-page').removeClass('active');
            notifyPilot('hide');
        });

        $('.story-button').click(function() {
            $('.info-page').removeClass('active');
            $('.try-page').removeClass('active');
            $('.story-page').addClass('active');
            notifyPilot('hide');
        });

        $('.try-button').click(function() {
            $('.try-page').addClass('active');
            $('.info-page').removeClass('active');
            $('.story-page').removeClass('active');
            notifyPilot('show');
        });

        function notifyPilot(event) {
            if (iframe[0] !== undefined) {
                iframe[0].contentWindow.postMessage(JSON.stringify({type: event}), '*');
            }
        }

    }

    function setUpIframeMessageListeners() {
        function receiveMessage(ev) {
            var event;
            try {
                event = JSON.parse(ev.data);
            } catch (ex) {
                return;
            }
            switch (event.type) {
                case 'heightChange':
                    handleHeightChange(event);
                    break;
                case 'showInsideStory':
                    handleShowInsideStory(event);
                    break;
            }
        }

        function handleHeightChange(event) {
            if (event.desiredHeight !== undefined) {
                $(iframe).height(event.desiredHeight);
            }
        }

        function handleShowInsideStory() {
            $('.story-button').click();
        }

        window.addEventListener('message', receiveMessage, false);
    }

    initToggleTabs();
    setUpIframeMessageListeners();
    createIframe();

});
