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

<<<<<<< HEAD

=======
            // /**
            //  * Leave table
            //  * 
            //  */
            // tableLeave: function() {
            //     $(this.obj).mouseleave(function() {

            //         console.log("LEAVE ")
            //         $(this.tds).find('span').removeClass("pick");
            //         $(this.tds).parent().removeClass("hoverRow");
            //         $(this).find('span').removeClass("hoverCol");
            //     });
            // }
>>>>>>> c8e4bc1658fbfdb7647c1e43bf29c69f3ac7bc73
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
            // Table.tableLeave(); // leave table method
            tdsOver(Table.tds, Table.trs); // handler Over
<<<<<<< HEAD

            spanOut(Table.spans);






=======
            tdsOut(Table.tds, Table.trs); // handler Out
            spanOut(Table.tds.find("span"));
>>>>>>> c8e4bc1658fbfdb7647c1e43bf29c69f3ac7bc73
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
<<<<<<< HEAD
            $(tds).on('mouseenter', function(evt) {
                // console.log("evt - " + evt.currentTarget.nodeName);
=======
            $(tds).on('mouseover', function(evt) {
>>>>>>> c8e4bc1658fbfdb7647c1e43bf29c69f3ac7bc73
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
<<<<<<< HEAD

            $(tds).on('mouseleave', function(evt) {
                console.log("evt - " + evt.target.nodeName);
=======
            $(tds).on('mouseout', function(evt) {
>>>>>>> c8e4bc1658fbfdb7647c1e43bf29c69f3ac7bc73
                console.log("out");
                resetHover(tds, trs);
                $(this).find('span').removeClass("pick");
                $(this).parent().removeClass('hoverRow');
                $(colHover(this, trs)).removeClass("hoverCol");
            });

<<<<<<< HEAD
        }

        function spanOut(span) {
            $(span).mouseenter(function(evt) {
                console.info('OVER');
            });
            $(span).mouseleave(function(evt) {
                console.info('Leave');
=======

>>>>>>> c8e4bc1658fbfdb7647c1e43bf29c69f3ac7bc73
            });

        }

<<<<<<< HEAD
=======
        function spanOut(evt) {
            $(evt).on('mouseout', function(evt) {
                console.info('AAAAAA');

            });

        }






>>>>>>> c8e4bc1658fbfdb7647c1e43bf29c69f3ac7bc73

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