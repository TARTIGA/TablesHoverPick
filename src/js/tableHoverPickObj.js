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
                wrapText: function() {
                    for (var i = 0, j = $(this.tds).length; i < j; ++i) {
                        var text = $((this.tds)[i]).text(); // text 
                        $((this.tds)[i]).html("<span >" + text + "</span>"); // wrap span
                    }
                    // init spans in table for out hover
                    this.spans = $(Table.obj).find("span");
                },


            }
            // console.log("tables length - - " + tables.length)

        //INIT OBJECT
        for (var i = 0; i < tables.length; i++) {
            Table.index = [i];
            Table.obj = tables[i];
            Table.trs = $(Table.obj).find("tr");
            Table.tds = $(Table.obj).find("td");
            // console.log("tds.length - " + i + " " + Table.tds.length);
            // console.log("trs.length - " + i + " " + Table.trs.length);

            Table.wrapText(); // wrap span 
            tdsOver(Table.tds, Table.trs); // handler Over
            spanOut(Table.spans, Table.tds, Table.trs); // handler Out FOR SPAN
        }

        /**
         * hover cols function
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
         * handler Over
         * 
         * @param {any} tds 
         * @param {any} trs 
         */
        function tdsOver(tds, trs) {
            $(tds).on('mouseenter', function(evt) {
                // console.log("over");
                resetHover(tds, trs);
                $(this).find('span').addClass("pick");
                $(colHover(this, trs)).addClass("hoverCol");
                var text = $(this).text(); // text 
                $(this).parent().addClass('hoverRow');
                $(this).html("<span class=\"pick\">" + text + "</span>");
            });

        }

        /**
         * handler OVER SPAN - !IMPORTANT
         * 
         * @param {any} elem 
         * @param {any} tds 
         * @param {any} trs 
         */
        function spanOut(elem, tds, trs) {
            $(this).mouseleave(function(event) {

                var node = event.relatedTarget.nodeName;
                if ((node != "TD" && node != "SPAN") || node == "TH") {
                    // console.info('NE TD NE SPAN or TH');
                    $(this).find("span").removeClass("pick");
                    resetHover(tds, trs);
                }
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