document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'timeGridWeek', // Display week view
        selectable: true,
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridWeek,dayGridMonth'
        },
        select: function (info) {
            // Handle selection of date and time slot
            console.log('Selected: ' + info.startStr + ' to ' + info.endStr);
        },
    });

    calendar.render();
});

function showCalendar() {
    var calendarContainer = document.getElementById('calendarContainer');
    calendarContainer.style.display = 'block';
}

function bookPickup() {
    // Implement the booking functionality here
    alert('Your waste pickup is booked succesfully');
    // You can send the selected values to a server for further processing
}