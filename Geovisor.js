const urlsafe = ''
const urlCali='http://ws-idesc.cali.gov.co:8081/geoserver/pot_2014/wms'
var os= new ol.layer.Tile({
    visible: true,
    preload: Infinity,
    source: new ol.source.OSM(),
    name:'OSM'
  });
var os2= new ol.layer.Tile({ //Parametros WMS
    visible: true,
    preload: Infinity,
    source: new ol.source.OSM(),
    name:'OSM'
  });
  var curvasCali = new ol.layer.Tile({ //fuente WMS
      visible: true,
      source: new ol.source.TileWMS({
          url:urlsafe + urlCali,
          params:{LAYERS: 'amb_eep_curvas_proteccion_cimas', STYLES: ''} //Curvas de Nivel Cali
      }),crossOrigin: 'anonymous',
      name:'CurvasCl'
  })
  var BarriosCali = new ol.layer.Tile({ //fuente WMS
      visible: true,
      source: new ol.source.TileWMS({
          url:urlsafe + urlCali,
          params:{LAYERS: 'epu_barrios_priorizados_espacio_publico', STYLES: ''}  //Barrios Cali
      }),crossOrigin: 'anonymous',
      name:'BarriosCl'
  })
  var perimetroUrbCali = new ol.layer.Tile({ //fuente WMS
    visible: true,
    source: new ol.source.TileWMS({
        url:urlsafe + urlCali,
        params:{LAYERS: 'bcs_lim_perimetro_urbano', STYLES: ''}   //Perimetro Cali
    }),crossOrigin: 'anonymous',
    name:'perimetroUrbCl'
  })
  var redGeodCali = new ol.layer.Tile({ //fuente WMS
    visible: true,
    source: new ol.source.TileWMS({
        url:urlsafe + urlCali,
        params:{LAYERS: 'mc_red_control_geodesico', STYLES: ''}   //Red Geodesica Cali
    }),crossOrigin: 'anonymous',
    name:'redGeodCl'
  })
  var manzanasCali = new ol.layer.Tile({ //fuente WMS
    visible: true,
    source: new ol.source.TileWMS({
        url:urlsafe + urlCali,
        params:{LAYERS: 'est_estrato_social_lado_manzana', STYLES: ''}   //manzana
    }),crossOrigin: 'anonymous',
    name:'manzanasCl'
  })
  
  var map = new ol.Map({ //Parametros Mapa
    target: 'map',
    layers: [os,curvasCali,BarriosCali,perimetroUrbCali,redGeodCali,manzanasCali],
    view: new ol.View({
      projection:'EPSG:4326',
      center: [-76.533333, 3.45],
      zoom: 13
    })
  });

//document.getElementById("texto").innerHTML = "Mi primer geovisor"  

//mostrar capa


var entradaManzana = $("#entradaManzana").val();

function manzanaChange(){
  if (entradaManzana == true){
    entradaManzana=false;
    manzanasCali.setVisible(true);
  }else{
    entradaManzana=true;
    manzanasCali.setVisible(false);
}
}

var entradaBarrios = $("#entradaBarrios").val();

function barriosChange(){
  if (entradaBarrios == true){
    entradaBarrios=false;
    BarriosCali.setVisible(true);
  }else{
    entradaBarrios=true;
    BarriosCali.setVisible(false);
}
}

var entradaRedG = $("#entradaRedG").val();

function redGeoChange(){
  if (entradaRedG == true){
    entradaRedG=false;
    redGeodCali.setVisible(true);
  }else{
    entradaRedG=true;
    redGeodCali.setVisible(false);
}
}

var entradaPerimetro = $("#entradaPerimetro").val();

function perimetroChange(){
  if (entradaPerimetro == true){
    entradaPerimetro=false;
    perimetroUrbCali.setVisible(true);
  }else{
    entradaPerimetro=true;
    perimetroUrbCali.setVisible(false);
}
}

var entradaCurvasNivel = $("#entradaCurvasNivel").val();

function curvasChange(){
  if (entradaCurvasNivel == true){
    entradaCurvasNivel=false;
    curvasCali.setVisible(true);
  }else{
    entradaCurvasNivel=true;
    curvasCali.setVisible(false);
}
}