import React, { Component } from "react"
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"
import i18n from "../../i18n"

am4core.useTheme(am4themes_animated)

class RadialLineGraph extends Component {
  componentDidMount() {
    this.renderChart()
  }

  renderChart() {
    let chart = am4core.create("chartdiv", am4charts.RadarChart)

    chart.data = this.props.data

    /* Create axes */
    var categoryAxis = chart.xAxes.push(new am4charts.DateAxis())

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.extraMin = 0.2
    valueAxis.extraMax = 0.2
    valueAxis.tooltip.disabled = true

    /* Create and configure series */
    var series1 = chart.series.push(new am4charts.RadarSeries())
    series1.dataFields.valueY = "income"
    series1.dataFields.dateX = "date"
    series1.strokeWidth = 3
    series1.stroke = am4core.color("black")
    series1.tooltipText = "{valueY}"

    series1.name = i18n.t("Income")
    series1.bullets.create(am4charts.CircleBullet)
    series1.dataItems.template.locations.dateX = 0.5

    var series2 = chart.series.push(new am4charts.RadarSeries())
    series2.dataFields.valueY = "expense"
    series2.dataFields.dateX = "date"
    series2.strokeWidth = 3
    series2.tooltipText = "{valueY}"
    series2.name = i18n.t("Expense")
    series2.bullets.create(am4charts.CircleBullet)
    series2.dataItems.template.locations.dateX = 0.5

    chart.scrollbarX = new am4core.Scrollbar()
    chart.scrollbarY = new am4core.Scrollbar()

    chart.cursor = new am4charts.RadarCursor()

    chart.legend = new am4charts.Legend()
    this.chart = chart
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose()
    }
  }

  componentDidUpdate(oldProps) {
    if (oldProps.data !== this.props.data) {
      this.chart.data = this.props.data
      this.chart.validateData()
    }
    if (oldProps.language != this.props.language) {
      this.renderChart()
    }
  }

  render() {
    return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
  }
}

export default RadialLineGraph
