(function() {
    $(document).ready(function() {
        var tables = $(".table-pick");
        /** Object**/
        var Table = {
            index: null,
            obj: null,
            trs: null,
            tds: null,

            spanText: function() {
                for (var i = 0, j = $(this.tds).length; i < j; ++i) {
                    var text = $((this.tds)[i]).text(); // text 
                    $((this.tds)[i]).html("<span >" + text + "</span>");
                }
            },

            tableLeave: function() {
                $(this.obj).mouseleave(function() {

                    $(this.tds).find('span').removeClass("pick");
                    $(this.tds).parent().removeClass("hoverRow");
                    $(this).find('span').removeClass("hoverCol");
                });
            }
        }


        console.log("tables l " + tables.length)
            //INIT 
        for (var i = 0; i < tables.length; i++) {
            Table.index = [i];
            Table.obj = tables[i];


            Table.trs = $(Table.obj).find("tr");
            Table.tds = $(Table.obj).find("td");
            console.log("tds.length - " + i + " " + Table.tds.length);
            console.log("trs.length - " + i + " " + Table.trs.length);
            Table.spanText();
            Table.tableLeave();


            tdsOver(Table.tds, Table.trs);
            tdsOut(Table.tds, Table.trs);
            // for (var j = 0; j<Table.tds.length;j++)
            //   {
            //     tdsOver(Table.tds, Table.trs);
            //     tdsOut(Table.tds,Table.trs);
            //   }
            // tdsOver(Table.tds);
            // tdsOut(Table.tds); 
        }

        function colHover(elem, trs) {
            var itcol = $(elem).parent().children().index($(elem));
            var $hovCol = $(trs).find('td:eq(' + itcol + ')').find('span');
            return $hovCol;

        }

        function tdsOver(tds, trs) {
            $(tds).on('mouseover', function() {
                console.log("over");
                resetHover(tds, trs);
                $(this).find('span').addClass("pick");
                $(colHover(this, trs)).addClass("hoverCol");
                var text = $(this).text(); // text 
                $(this).parent().addClass('hoverRow')
                $(this).html("<span class=\"pick\">" + text + "</span>");
            });

        }

        function tdsOut(tds, trs) {
            $(tds).on('mouseout', function() {
                console.log("out");
                $(this).find('span').removeClass("pick");
                $(this).parent().removeClass('hoverRow');
                $(colHover(this, trs)).removeClass("hoverCol");

            });

        }

        function resetHover(tds, trs) {
            $(tds).find('span').removeClass("pick");
            $(tds).find('span').removeClass("hoverCol");
            $(trs).removeClass("hoverRow");
        }





    })
})();