$(document).ready(function () {
     function setTableValues(data) {
        $(".table_body").empty();

        jQuery.each(data, (index, value) => {
            $(".table_body").append(`
            <tr>
                <th scope="row">${value.id}</th>
                <td>${value.data}</td>
                <td>${value.date}</td>
            </tr>
        `);
        });
    }

    function fetchData() {
        $.ajax({
            url: 'http://localhost:8000/api/cpu/',
            method: 'GET',
            success: (response) => {
                console.log('response --> ', response)
                setTableValues(response);
            },
            error: function (xhr, status, error) {
                console.error('Error fetching data:', error);
            }
        });
    }

    fetchData();
    setInterval(fetchData, 10000);

    


});