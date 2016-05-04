!function($) {

    $(function() {

        // IE10 viewport hack for Surface/desktop Windows 8 bug
        //
        // See Getting Started docs for more information
        if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
            var msViewportStyle = document.createElement('style')
            msViewportStyle.appendChild(
                document.createTextNode(
                    '@-ms-viewport{width:auto!important}'
                )
            )
            document.querySelector('head').appendChild(msViewportStyle)
        }


        var $window = $(window)
        var $body = $(document.body)

        var navHeight = $('.navbar').outerHeight(true) + 10

        $('body').scrollspy({ target: '.bs-docs-sidenav' })

        $window.on('load', function() {
            $body.scrollspy('refresh')
        })

        $('.bs-docs-container [href=#]').click(function(e) {
            e.preventDefault()
        })

        // back to top
        setTimeout(function() {
            var $sideBar = $('.bs-docs-sidebar')

            $sideBar.affix({
                offset: {
                    top: function() {
                        var offsetTop = $sideBar.offset().top
                        var sideBarMargin = parseInt($sideBar.children(0).css('margin-top'), 10)
                        var navOuterHeight = $('.bs-docs-nav').height()

                        return (this.top = offsetTop - navOuterHeight - sideBarMargin)
                    },
                    bottom: function() {
                        return (this.bottom = $('.bs-docs-footer').outerHeight(true))
                    }
                }
            })
        }, 100)

        setTimeout(function() {
            $('.bs-top').affix()
        }, 100)
    })

}(jQuery)
