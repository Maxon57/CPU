$(document).ready(function () {
    let data = [];
    let dataLast100 = [];
    let sortAttr = {date: 'asc', cpu: 'asc'};

     function setTableValues() {
        $(".table_body").empty();

        jQuery.each(dataLast100, (index, value) => {
            $(".table_body").append(`
            <tr>
                <th scope="row">${value.id}</th>
                <td>${value.data}</td>
                <td>${new Date(value.date).toLocaleString()}</td>
            </tr>
        `);
        });
    }

    function setMaxMinAvgValues() {
        let valuesCPU = data.map(({data}) => Number(data));
        let avgValueForAll = valuesCPU.length > 0
            ? valuesCPU.reduce((total, number) => total + number, 0) / data.length
            : undefined;

        let last100Values = valuesCPU.slice(-100);

        let avgValueForLast100 = last100Values.length > 0
            ? last100Values.reduce((total, number) => total + number, 0) / last100Values.length
            : undefined;

        $('#max_value_all').text(Math.max(valuesCPU) || '');
        $('#min_value_all').text(Math.min(valuesCPU) || '');
        $('#avg_value_all').text(avgValueForAll
            ?  parseFloat(avgValueForAll).toFixed(2)
            : '');

        $('#max_value').text(Math.max(last100Values) || '');
        $('#min_value').text(Math.min(last100Values) || '');
        $('#avg_value').text(avgValueForLast100
            ? parseFloat(avgValueForLast100).toFixed(2)
            : '');
    }

    function sortDataByDate() {
        if (sortAttr.date === 'asc') {
            dataLast100 = dataLast100.sort((a, b) => new Date(a.date) - new Date(b.date));
        } else {
            dataLast100 = dataLast100.sort((a, b) => new Date(b.date) - new Date(a.date));
        }
    }

    function sortCPUVale() {
        if (sortAttr.cpu === 'asc') {
            dataLast100 = dataLast100.sort((a, b) => parseFloat(a.data) - parseFloat(b.data));
        } else {
            dataLast100 = dataLast100.sort((a, b) => parseFloat(b.data) - parseFloat(a.data));
        }
    }


    $(".order_date").click(() => {
        if (sortAttr.date === 'asc') {
            $('#order_date_icon').attr("class", "bi bi-arrow-down");
            sortAttr.date = 'desc';
        } else {
            $('#order_date_icon').attr("class", "bi bi-arrow-up");
            sortAttr.date = 'asc';
        }

         sortDataByDate();
         setTableValues();

    });

     $(".order_cpu").click(() => {
         if (sortAttr.cpu === 'asc') {
            $('#order_cpu_icon').attr("class", "bi bi-arrow-down");
            sortAttr.cpu = 'desc';
        } else {
            $('#order_cpu_icon').attr("class", "bi bi-arrow-up");
            sortAttr.cpu = 'asc';
        }

         sortCPUVale();
         setTableValues();

    });

    function fetchData() {
        $.ajax({
            url: `http://${window.location.host}/api/cpu/`,
            method: 'GET',
            success: (response) => {
                data = response;
                dataLast100 = response.slice(-100);

                dataUpdated();
            },
            error: function (xhr, status, error) {
                console.error('Ошибка получения данных:', error);
            }
        });
    }

    function dataUpdated() {
        sortCPUVale();
        sortDataByDate();
        setTableValues();
        setMaxMinAvgValues();
    }

    fetchData();
    setInterval(fetchData, 10000);
});