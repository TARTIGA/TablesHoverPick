(function() {
    $(document).ready(function() {
        /** INIT**/
        var tables = $(".table-pick");
        var table = {

        }
        var $ctrl = $('#ctrl');

        // Wrap text
        var trs = tables.find("tr");
        var tds = tables.find("td");
        console.log("tds.length" + tds.length);
        console.log("trs.length" + trs.length)

        for (var i = 0, j = tds.length; i < j; ++i) {
            var text = $(tds[i]).text(); // text 
            $(tds[i]).html("<span >" + text + "</span>");
        }



        function colHover(elem) {
            var itcol = $(elem).parent().children().index($(elem));
            var $hovCol = $('table tr').find('td:eq(' + itcol + ')').find('span');
            return $hovCol;

        }

        $(tds).on('mouseover', function() {
            resetHover();
            $(this).find('span').addClass("pick");
            $(colHover(this)).addClass("hoverCol");
            var text = $(this).text(); // text 
            $(this).parent().addClass('hoverRow')
            $(this).html("<span class=\"pick\">" + text + "</span>");
        });
        $(tds).on('mouseout', function(itcol) {
            // console.log("out");
            $(this).find('span').removeClass("pick");
            $(this).parent().removeClass('hoverRow');
            colHover(this).removeClass("hoverCol");

        })
        $('table').mouseleave(function() {
            $(tds).find('span').removeClass("pick");
            $(tds).parent().removeClass("hoverRow");
        })

        function resetHover() {
            $(tds).find('span').removeClass("pick");
            $(tds).find('span').removeClass("hoverCol");
            $(tds).parent().removeClass("hoverRow");
        }
    });
})();