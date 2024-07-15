document.addEventListener('DOMContentLoaded', () => {
    // Sales Growth Chart
    const salesGrowthCtx = document.getElementById('salesGrowthChart').getContext('2d');
    new Chart(salesGrowthCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Sales Growth',
                data: [12000, 15000, 8000, 18000, 22000, 25000, 20000],
                backgroundColor: 'rgba(255, 111, 97, 0.2)',
                borderColor: '#FF6F61',
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Total Sales Chart
    const totalSalesCtx = document.getElementById('totalSalesChart').getContext('2d');
    new Chart(totalSalesCtx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Total Sales',
                data: [15000, 17000, 10000, 19000, 23000, 27000, 124500],
                backgroundColor: '#FF6F61',
                borderColor: '#FF3B30',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // New Customers Chart
    const newCustomersCtx = document.getElementById('newCustomersChart').getContext('2d');
    new Chart(newCustomersCtx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'New Customers',
                data: [50, 60, 40, 70, 90, 110, 320],
                backgroundColor: '#FF6F61',
                borderColor: '#FF3B30',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Pending Orders Chart
    const pendingOrdersCtx = document.getElementById('pendingOrdersChart').getContext('2d');
    new Chart(pendingOrdersCtx, {
        type: 'bar',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Pending Orders',
                data: [10, 20, 15, 45],
                backgroundColor: '#FF6F61',
                borderColor: '#FF3B30',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // FullCalendar
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {
                title: 'Event 1',
                start: '2023-07-01'
            },
            {
                title: 'Event 2',
                start: '2023-07-07',
                end: '2023-07-10'
            },
            {
                title: 'Event 3',
                start: '2023-07-09T16:00:00'
            }
        ]
    });
    calendar.render();
});
