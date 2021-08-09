function handleTickInit(tick) {

    // Uncomment to set labels to different language ( in this case Dutch )
    var locale = {
        YEAR_PLURAL: 'YEAR',
        YEAR_SINGULAR: 'YEAR',
        MONTH_PLURAL: 'MONTH',
        MONTH_SINGULAR: 'MONTH',
        WEEK_PLURAL: 'WEEK',
        WEEK_SINGULAR: 'WEEK',
        DAY_PLURAL: 'DAYS',
        DAY_SINGULAR: 'DAYS',
        HOUR_PLURAL: 'HOUR',
        HOUR_SINGULAR: 'HOUR',
        MINUTE_PLURAL: 'MINUTE',
        MINUTE_SINGULAR: 'MINUTE',
        SECOND_PLURAL: 'SECOND',
        SECOND_SINGULAR: 'SECOND',
        MILLISECOND_PLURAL: 'MILLISECOND',
        MILLISECOND_SINGULAR: 'MILLISECOND'
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