(function() {
    $(document).ready(function() {
        (function() {
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
                }
            }


            console.log("tables l " + tables.length)
                //INIT 
            for (var i = 0; i < tables.length; i++) {
                Table.index = [i];
                Table.obj = tables[i];


                Table.trs = $(Table.obj).find("tr");
                Table.tds = $(Table.obj).find("td");
                console.log("tds.length" + Table.trs.length);
                console.log("trs.length" + Table.trs.length);
                Table.spanText();
                tdsOut(Table.tds);
                tdsOver(Table.tds);
                // resetHover(Table.tds); 
                tableLeave(Table);

            }

            function colHover(elem) {
                console.log("COL");
                var itcol = $(elem).parent().children().index($(elem));
                var $hovCol = $('table tr').find('td:eq(' + itcol + ')').find('span');
                return $hovCol;
            }

            function tdsOver(tds) {
                $(tds).on('mouseover', function() {
                    resetHover(this);
                    $(this).find('span').addClass("pick");
                    //$(colHover(this)).addClass("hoverCol");
                    var text = $(this).text(); // text 
                    $(this).parent().addClass('hoverRow')
                    $(this).html("<span class=\"pick\">" + text + "</span>");
                });
            }

            function tdsOut(tds) {
                $(tds).on('mouseout', function() {
                    resetHover(this);
                    console.log("out");
                    $(this).find('span').removeClass("pick");
                    $(this).parent().removeClass('hoverRow');
                    colHover(this).removeClass("hoverCol");

                })
            }

            function tableLeave(table) {
                $(table).mouseleave(function() {
                    console.log("leave");
                    $(table.tds).find('span').removeClass("pick");
                    $(table.tds).parent().removeClass("hoverRow");
                })
            }

            function resetHover(tds) {
                console.log("reset");
                $(tds).find('span').removeClass("pick");
                $(tds).find('span').removeClass("hoverCol");
                $(tds).parent().removeClass("hoverRow");
            }


        })();


    });
})();