$(document).ready(function () {
    $.ajax({
        url: '/api/data/',
        method: 'GET',
        success: function (response) {
            // Update the DOM with received data
            $('#max_value').text(response.max_value);
            $('#min_value').text(response.min_value);
            $('#avg_value').text(response.avg_value);

            // Dynamically generate table rows for data
            response.data.forEach(function (data) {
                $('#data_table_body').append(`
                        <tr>
                            <th scope="row">${data.id}</th>
                            <td>${data.cpu}</td>
                            <td>${data.date}</td>
                        </tr>
                    `);
            });
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data:', error);
        }
    });
});