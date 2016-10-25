function calendar(input) {
    let [day, month, year] = input.map(Number);
    // calc days
    let firstDateCurrMonth = new Date(year, month - 1, 1); // months [0, 11]
    let prevMonthDays = firstDateCurrMonth.getDay() - 1;
    if (prevMonthDays < 0) prevMonthDays = 6;
    let lastDayCurrentMonth = lastDayInMonth(month, year);
    let lastDateDayOfWeek = (new Date(year, month - 1, lastDayCurrentMonth)).getDay();
    let nextMonthDays = 7 - lastDateDayOfWeek;
    if (nextMonthDays == 7) nextMonthDays = 0;
    let months = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October','November', 'December'];
    let calendar =
        $('<table>')
            .append($('<caption>').text(`${months[month - 1]} ${year}`))
            .append($('<tbody>'))
            .append($('<tr>')
                .append($('<th>').text('Mon'))
                .append($('<th>').text('Tue'))
                .append($('<th>').text('Wed'))
                .append($('<th>').text('Thu'))
                .append($('<th>').text('Fri'))
                .append($('<th>').text('Sat'))
                .append($('<th>').text('Sun')));
    // previous month
    let week = $('<tr>');
    for (let i = prevMonthDays; i > 0; i--)
        week.append($('<td>'));
    // current month: incomplete week following prev month
    let currentDay = 0;
    for (let i = 1; i <= 7 - prevMonthDays; i++)
        addDayToCalendar();
    calendar.append(week);
    // current month: full weeks
    let countFullWeeks = Math.floor((lastDayCurrentMonth - currentDay) / 7);
    for (let j = 0; j < countFullWeeks; j++) {
        week = $('<tr>');
        for (let i = 0; i < 7; i++)
            addDayToCalendar();
        calendar.append(week);
    }
    // current month: incomplete week + next month
    if (currentDay < lastDayCurrentMonth) {
        week = $('<tr>');
        for (let i = currentDay; i < lastDayCurrentMonth; i++)
            addDayToCalendar();
        for (let i = 1; i <= nextMonthDays; i++)
            week.append($('<td>'));
        calendar.append(week);
    }
    $('#content').append(calendar);

    function addDayToCalendar() {
        if (++currentDay == day)
            return week.append($('<td>').addClass('today').text(currentDay));
        else
            return week.append($('<td>').text(currentDay));
    }

    function lastDayInMonth(month, year) {
        if (month == 0) month = 12; // [1, 12]
        switch (month) {
            case 2:
                let isLeapYear = (year % 400 == 0 )
                    || (year % 4 == 0 && year % 100 != 0);
                if (isLeapYear) return 29;
                return 28;
            case 4:
            case 6:
            case 9:
            case 11:
                return 30;
            default:
                return 31;
        }
    }
}