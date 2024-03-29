<script type="text/javascript">
  google.charts.load('current', { 'packages': ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1amHMHdS5G9ZXf5VdmjELrjFrDHa1hWhu1qu5giAwfIo/edit#gid=0');
    query.send(handleQueryResponse);
  }

  function handleQueryResponse(response) {
    if (response.isError()) {
      console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }

    var data = response.getDataTable();

    var options = {
      title: 'Amazon App data',
      // Add more chart options here
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
</script>
