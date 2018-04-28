import HighCharts from '../../node_modules/highcharts/highcharts.js'
export  function order_figure (data){
    return HighCharts.chart('Order_figure',{
        chart: {
            type: 'area',
            height: '300px',
            marginTop: '20'
        },
        title: {
            text:' '
        },
        xAxis: {
            allowDecimals: false,
            labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            },
            gridLineWidth: 0 //网格线
        },
        yAxis: {
          title:{
            text:null
          },
          labels: {
              formatter: function () {
                  return this.value / 1000 + 'k';
              }
          },
          lineWidth: 1, // 轴线
          gridLineWidth: 0

        },
        tooltip: {
            pointFormat: '<b>{point.y:,.0f}</b>'
        },
        plotOptions: {
            area: {
                pointStart: 2000,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'null',
            cursor: 'pointer',
            data: data
        }],
        credits:{
            enabled:false
        }
    })
 }

 export  function formwork_figure (data){
    return HighCharts.chart('formwork_figure',{
        chart: {
            type: 'area',
            height: '300px',
            marginTop: '20'
        },
        title: {
            text:' '
        },
        xAxis: {
            allowDecimals: false,
            labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            },
            gridLineWidth: 0 //网格线
        },
        yAxis: {
          title:{
            text:null
          },
          labels: {
              formatter: function () {
                  return this.value / 1000 + 'k';
              }
          },
          lineWidth: 1, // 轴线
          gridLineWidth: 0

        },
        tooltip: {
            pointFormat: '<b>{point.y:,.0f}</b>'
        },
        plotOptions: {
            area: {
                pointStart: 2010,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'null',
            cursor: 'pointer',
            data: data
        }],
        credits:{
            enabled:false //版权隐藏
        }
    })
 }