function handleTickInit(tick) {

    // Uncomment to set labels to different language ( in this case Dutch )
    var locale = {
        YEAR_PLURAL: 'Jaren',
        YEAR_SINGULAR: 'YEAR',
        MONTH_PLURAL: 'Maanden',
        MONTH_SINGULAR: 'Maand',
        WEEK_PLURAL: 'Weken',
        WEEK_SINGULAR: 'Week',
        DAY_PLURAL: 'DAYS',
        DAY_SINGULAR: 'Dag',
        HOUR_PLURAL: 'HOUR',
        HOUR_SINGULAR: 'Uur',
        MINUTE_PLURAL: 'MINUTE',
        MINUTE_SINGULAR: 'Minuut',
        SECOND_PLURAL: 'SECOND',
        SECOND_SINGULAR: 'Seconde',
        MILLISECOND_PLURAL: 'Milliseconden',
        MILLISECOND_SINGULAR: 'Milliseconde'
    };
    for (var key in locale) {
        if (!locale.hasOwnProperty(key)) {
            continue;
        }
        tick.setConstant(key, locale[key]);
    }


    var nextYear = (new Date()).getFullYear() + 1;

    Tick.count.up('2018-11-14T00:00:00').onupdate = function(value) {
        tick.value = value;
    };

}

document.getElementsByTagName("body")[0].insertAdjacentHTML(
    "beforeend",
    "<div id='mask'></div>"
);