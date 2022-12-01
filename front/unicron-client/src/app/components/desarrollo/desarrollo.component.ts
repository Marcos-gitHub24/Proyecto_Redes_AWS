import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend,
  ApexTooltip,
  ApexAnnotations,
  ApexFill,
  ApexPlotOptions
} from 'ng-apexcharts';
import { UcronServicesService } from 'src/app/services/ucron-services.service';

@Component({
  selector: 'app-desarrollo',
  templateUrl: './desarrollo.component.html',
  styleUrls: ['./desarrollo.component.css']
})
export class DesarrolloComponent implements OnInit {
  //columnas
  series!: ApexAxisChartSeries;
  chart!: ApexChart;
  dataLabels!: ApexDataLabels;
  plotOptions!: ApexPlotOptions;
  yaxis!: ApexYAxis;
  xaxis!: ApexXAxis;
  annotations!: ApexAnnotations;
  fill!: ApexFill;
  stroke!: ApexStroke;
  grid!: ApexGrid;
  // lineas
  series2!: ApexAxisChartSeries;
  chart2!: ApexChart;
  xaxis2!: ApexXAxis;
  stroke2!: ApexStroke;
  dataLabels2!: ApexDataLabels;
  markers2!: ApexMarkers;
  tooltip2!: any; // ApexTooltip;
  yaxis2!: ApexYAxis;
  grid2!: ApexGrid;
  legend2!: ApexLegend;
  title2!: ApexTitleSubtitle;

  constructor(private service: UcronServicesService) { }

  monedas = []

  ngOnInit(): void {
    this.getDesarrollo();
    this.series = [],
      this.annotations = {
        points: [
          {
            x: "Bananas",
            seriesIndex: 0,
            label: {
              borderColor: "#775DD0",
              offsetY: 0,
              style: {
                color: "#fff",
                background: "#775DD0"
              },
              text: "Bananas are good"
            }
          }
        ]
      },
      this.chart = {
        height: 350,
        type: "bar"
      },
      this.plotOptions = {
        bar: {
          columnWidth: "50%",
        }
      },
      this.dataLabels = {
        enabled: false
      },
      this.stroke = {
        width: 2
      },

      this.grid = {
        row: {
          colors: ["#fff", "#f2f2f2"]
        }
      },
      this.xaxis = {
        labels: {
          rotate: -45
        },
        categories: [],
        tickPlacement: "on"
      },
      this.yaxis = {
        title: {
          text: "Servings"
        }
      },
      this.fill = {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100]
        }
      }

    //------------------------------------------------------------------------------------------------------------
    this.series2 = [],
      this.chart2 = {
        height: 350,
        type: "line"
      },
      this.dataLabels2 = {
        enabled: false
      },
      this.stroke2 = {
        width: 5,
        curve: "straight",
        dashArray: [0, 8, 5]
      },
      this.title2 = {
        text: "Desarrollo Económico",
        align: "center"
      },
      this.legend2 = {
        tooltipHoverFormatter: function (val, opts) {
          return (
            val +
            " - <strong>" +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            "</strong>"
          );
        }
      },
      this.markers2 = {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      this.xaxis2 = {
        labels: {
          trim: false
        },
        categories: []
      },
      this.tooltip2 = {
        y: [
          {
            title: {
              formatter: function (val: any) {
                return val + " (mins)";
              }
            }
          },
          {
            title: {
              formatter: function (val: any) {
                return val + " per session";
              }
            }
          },
          {
            title: {
              formatter: function (val: any) {
                return val;
              }
            }
          }
        ]
      },
      this.grid2 = {
        borderColor: "#f1f1f1"
      }

    this.series2 = [];


  }

  getDesarrollo() {
    let arr2: ApexAxisChartSeries | { name: never; data: any[]; }[] = []
    let arr1: ApexAxisChartSeries | { name: string | undefined; data: any[] | (number | null)[] | { x: any; y: any; fillColor?: string | undefined; strokeColor?: string | undefined; meta?: any; goals?: any; }[] | [number, number | null][] | [number, (number | null)[]][]; }[] = []

    this.service.getDesarrollo().subscribe(
      (result: any) => {
        this.monedas = JSON.parse(JSON.stringify(result['ans']));

        for (let obj of this.monedas) {
          let registros: [] = obj['registros']
          let datos: [] = [];
          for (let dato of registros) {
            datos.push(dato['dato']);
          }

          arr2.push(
            {
              name: obj['moneda'],
              data: datos
            }
          );
        }

        this.series2 = arr2;

        let index = arr2.findIndex(object => {
          return object.name == 'UcronCoin';
        });

        arr1.push(
          {
            name: arr2[index].name,
            data: arr2[index].data
          }
        );

        this.series = arr1;

        let fechas: never[] = [];
        let registros: [] = this.monedas[0]['registros']
        for (let registro of registros) {
          fechas.push(registro['fecha'])
        }

        this.xaxis = {
          labels: {
            rotate: -45
          },
          categories: fechas,
          tickPlacement: "on"
        };

        this.xaxis2 = {
          labels: {
            trim: false
          },
          categories: fechas
        };
      }
    );
  }

}
