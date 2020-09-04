$(document).ready(function(){
    $( "#formP" ).submit(function( event ) {
      event.preventDefault();
      var valueNumber = $("#numberP").val();
      var valueName = $("#numberP").val();
      $(".pokeInfo").empty();
      $(".pStats").empty();
      //console.log(valueNumber);
      if(valueNumber !== null && valueNumber !== undefined || valueName !== null && valueName !== undefined) {
        $.ajax({
          url: `https://pokeapi.co/api/v2/pokemon/${valueNumber}/`,
          url: `https://pokeapi.co/api/v2/pokemon/${valueName}/`
        }).done(function( data ) {

          $(".pokeInfo").append(`<div class="text-center"> <h3>${data.name}<h3> <div>`); //jquery
          $(".pokeInfo").append(`<img src="${data.sprites.front_default}" alt="${data.name}"> <img>`);
          $(".pokeInfo").append(`<div class="text-center"> <p>Peso: ${data.weight/10} [kg]<p> <div>`);

// Themes begin
am4core.useTheme(am4themes_kelly);
am4core.useTheme(am4themes_animated);
// Themes end

/* Create chart instance */
var chart = am4core.create("chartdiv", am4charts.RadarChart);

/* Add data */
chart.data = [{
  "habilidad": "hp",
  "valor": data.stats[0].base_stat
}, {
  "habilidad": "attack",
  "valor": data.stats[1].base_stat
}, {
  "habilidad": "defense",
  "valor": data.stats[2].base_stat
},
{
  "habilidad": "special-attack",
  "valor": data.stats[3].base_stat
},
{
  "habilidad": "special-defense",
  "valor": data.stats[4].base_stat
},{
  "habilidad": "speed",
  "valor": data.stats[5].base_stat
} ];

/* Create axes */
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "habilidad";

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.axisFills.template.fill = chart.colors.getIndex(2);
valueAxis.renderer.axisFills.template.fillOpacity = 0.05;


/* Create and configure series */
var series = chart.series.push(new am4charts.RadarSeries());
series.dataFields.valueY = "valor";
series.dataFields.categoryX = "habilidad";
series.strokeWidth = 3;



        }
        )}
    });
  });

