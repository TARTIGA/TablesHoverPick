(function() {
    $(document).ready(function() {
        // Init all tables this class "table-pick"
        var tables = $(".table-pick");
        /** Object**/
        var Table = {
            index: null,
            obj: null,
            trs: null,
            tds: null,
            spans: null,

            /**
             * wrap text in td
             * 
             */
            spanText: function() {

                for (var i = 0, j = $(this.tds).length; i < j; ++i) {
                    var text = $((this.tds)[i]).text(); // text 
                    $((this.tds)[i]).html("<span >" + text + "</span>"); //wrap text <span> tag


                }

            },


        }


        console.log("tables l " + tables.length)
            //INIT 
        for (var i = 0; i < tables.length; i++) {
            Table.index = [i];
            Table.obj = tables[i];
            Table.trs = $(Table.obj).find("tr");
            Table.tds = $(Table.obj).find("td");
            Table.spans = $(Table.obj).find("span");
            console.log("tds.length - " + i + " " + Table.tds.length);
            console.log("trs.length - " + i + " " + Table.trs.length);
            Table.spanText(); // wrap span 
            Table.tableLeave(); // leave table method
            tdsOver(Table.tds, Table.trs); // handler Over

            spanOut(Table.spans);






        }

        /**
         * hover cols
         * 
         * @param {any} elem 
         * @param {any} trs 
         * @returns 
         */
        function colHover(elem, trs) {
            var itcol = $(elem).parent().children().index($(elem));
            var $hovCol = $(trs).find('td:eq(' + itcol + ')').find('span');
            return $hovCol;

        }

        /**
         * handler Enter
         * 
         * @param {any} tds 
         * @param {any} trs 
         */
        function tdsOver(tds, trs) {
            $(tds).on('mouseenter', function(evt) {
                // console.log("evt - " + evt.currentTarget.nodeName);
                console.log("over");
                resetHover(tds, trs);
                $(this).find('span').addClass("pick");
                $(colHover(this, trs)).addClass("hoverCol");
                var text = $(this).text(); // text 
                $(this).parent().addClass('hoverRow');
                $(this).html("<span class=\"pick\">" + text + "</span>");

                // $(this).find('span').mouseout(function(evt) {
                //     // 
                //     console.info('fff33333333333333333ff');

                // });
            });

        }

        /**
         * handler Leave
         * 
         * @param {any} tds 
         * @param {any} trs 
         */
        function tdsOut(tds, trs) {

            $(tds).on('mouseleave', function(evt) {
                console.log("evt - " + evt.target.nodeName);
                console.log("out");
                resetHover(tds, trs);
                $(this).find('span').removeClass("pick");
                $(this).parent().removeClass('hoverRow');
                $(colHover(this, trs)).removeClass("hoverCol");
            });

        }

        function spanOut(span) {
            $(span).mouseenter(function(evt) {
                console.info('OVER');
            });
            $(span).mouseleave(function(evt) {
                console.info('Leave');
            });

        }


        /**
         * reset all Hover
         * 
         * @param {any} tds 
         * @param {any} trs 
         */
        function resetHover(tds, trs) {
            $(tds).find('span').removeClass("pick");
            $(tds).find('span').removeClass("hoverCol");
            $(trs).removeClass("hoverRow");
        }







    })
})();