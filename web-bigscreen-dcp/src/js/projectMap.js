
var map = null;

//初始化地图
function initMap()
{
    map = new BMap.Map('allmap', {minZoom:4, maxZoom:15});
    map.centerAndZoom('郑州', 6);//改这里，参数1，地图中心点；参数2 地图级别，试试

    var styleJson =
    [
      {
                "featureType": "land",
                "elementType": "geometry",
                "stylers": {
                          "color": "#3d85c6ff"
                }
      },
      {
                "featureType": "water",
                "elementType": "all",
                "stylers": {
                          "color": "#040485ff"
                }
      },
      {
                "featureType": "road",
                "elementType": "all",
                "stylers": {
                          "visibility": "off"
                }
      },
      {
                "featureType": "boundary",
                "elementType": "geometry",
                "stylers": {
                          "color": "#f6b26bff"
                }
      },
      {
                "featureType": "green",
                "elementType": "all",
                "stylers": {
                          "visibility": "off"
                }
      },
      {
                "featureType": "manmade",
                "elementType": "all",
                "stylers": {
                          "visibility": "off"
                }
      },
      {
                "featureType": "building",
                "elementType": "all",
                "stylers": {
                          "visibility": "off"
                }
      },
      {
                "featureType": "town",
                "elementType": "all",
                "stylers": {
                          "visibility": "off"
                }
      },
      {
                "featureType": "poilabel",
                "elementType": "all",
                "stylers": {
                          "visibility": "off"
                }
      }
    ]

    map.setMapStyle({
        styleJson:styleJson
    });

    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

    addControl();
}


//增加项目列表
var projectMarker = [];

function addProjects(){
    var myGeo = new BMap.Geocoder();
    
    $.get('data/projects.json', function (projects) {
      for(var i = 0; i < projects.length; ++i){
          (function(j){
              myGeo.getPoint(projects[j].address, function(point){
                  if (point) {
                      var mouseoverTxt = projects[j].project + projects[j].buildings.join(",");
                      var marker = new ComplexCustomOverlay(point, projects[j].province, projects[j].address, projects[j].project, mouseoverTxt);
                      projectMarker.push(marker);
                      map.addOverlay(marker);
                  }
              });
          })(i)
      }
    });

    map.addOverlay(new ComplexCustomOverlay(new BMap.Point(103.775797, 1.52233), "马来西亚", "马来西亚柔佛巴鲁", "马来西亚公主湾", "马来西亚公主湾P43-D"));
    map.addOverlay(new ComplexCustomOverlay(new BMap.Point(101.681563, 3.097), "马来西亚", "马来西亚吉隆坡", "马来西亚KL gateway", "马来西亚KL gateway B# C#"));
    
}


var serviceMarker = []
var opts = {
  width : 300,        // 信息窗口宽度
  height: 80,         // 信息窗口高度
  title : "服务网点" , // 信息窗口标题
  enableMessage:true  //设置允许信息窗发送短息
};


//增加服务网点
function addServices(){

  var myIcon = new BMap.Icon("images/service.png", new BMap.Size(48, 48),{    
      anchor: new BMap.Size(24, 45)   
  });

  var myGeo = new BMap.Geocoder();

  $.get('data/services.json', function (services) {

      for(var i = 0; i < services.length; ++i){
        (function(j){
          myGeo.getPoint(services[j].address, function(point){
            if (point) {
              var marker = new BMap.Marker(point, {icon: myIcon});
              serviceMarker.push(marker);  
              map.addOverlay(marker); 
              marker.addEventListener("click", function(e){
                var p = e.target;
                var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
                var infoWindow = new BMap.InfoWindow("地址：" + services[j].address + "<br>" + "联系方式：" + services[j].contact, opts);  // 创建信息窗口对象 
                map.openInfoWindow(infoWindow,point);
              });
            }
          }); 
        })(i)
      }

  });
  

  //马来西亚网点
  var marker = new BMap.Marker(new BMap.Point(101.681563, 3.097), {icon: myIcon});
  map.addOverlay(marker); 
  marker.addEventListener("click", function(e){
    var p = e.target;
    var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
    var infoWindow = new BMap.InfoWindow("地址：马来西亚吉隆坡" + "<br>" + "联系方式：186-7227-3681", opts);  // 创建信息窗口对象 
    map.openInfoWindow(infoWindow,point);
  });
  
}


var supplyMarker = [];
var opts3 = {
  width : 300,          // 信息窗口宽度
  height: 100,           // 信息窗口高度
  title : "铝模生产企业" ,     // 信息窗口标题
  enableMessage:true    //  设置允许信息窗发送短息
};

//增加铝模生产供应企业
function addSuppliers(){
  var myIcon = new BMap.Icon("images/supplier.png", new BMap.Size(32, 32));
  var myGeo = new BMap.Geocoder();

  $.get('data/suppliers.json', function (supply) {

      for(var i = 0; i < supply.length; ++i){
        (function(j){
          myGeo.getPoint(supply[j].address, function(point){
            if (point) {
              var marker = new BMap.Marker(point, {icon: myIcon});  
              supplyMarker.push(marker);
              map.addOverlay(marker); 
              marker.addEventListener("click", function(e){
                var p = e.target;
                var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
                var infoWindow = new BMap.InfoWindow("名称：" + supply[j].name + "<br>" + "地址：" + supply[j].address, opts3);  // 创建信息窗口对象 
                map.openInfoWindow(infoWindow,point);
              });
            }
          }); 
        })(i)
      } 

  });

}


var parkMarker = [];
var opts4 = {
  width : 300,        // 信息窗口宽度
  height: 80,         // 信息窗口高度
  title : "模架产业园" , // 信息窗口标题
  enableMessage:true  //设置允许信息窗发送短息
};

function addParks(){
  var myIcon = new BMap.Icon("images/park.png", new BMap.Size(48, 48));
  var myGeo = new BMap.Geocoder();

  $.get('data/parks.json', function (industrialPark) {

    for(var i = 0; i < industrialPark.length; ++i){
        (function(j){
          myGeo.getPoint(industrialPark[j].address, function(point){
            if (point) {
              var marker = new BMap.Marker(point, {icon: myIcon});
              parkMarker.push(marker);  
              map.addOverlay(marker); 
              marker.addEventListener("click", function(e){
                var p = e.target;
                var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
                var infoWindow = new BMap.InfoWindow("名称：" + industrialPark[j].name + "<br>" + "地址：" + industrialPark[j].address, opts4);  // 创建信息窗口对象 
                map.openInfoWindow(infoWindow,point);
              });
            }
          }); 
        })(i)
    }
  });

  
}

//右下图例
function addControl(){
	var cr = new BMap.CopyrightControl({
      anchor: BMAP_ANCHOR_TOP_LEFT,
      offset: new BMap.Size(750, 880)});   //设置版权控件位置
	map.addControl(cr); //添加版权控件

	var bs = map.getBounds();   //返回地图可视区域
  cr.addCopyright({id: 1, content: "<div style='font-size:15px;color:#ffffff'>" +
                                    "<div id='service' onclick=toggleServices()><img src='images/service.png' height='36' width='36' style='vertical-align:middle;'><span>鈤励云模服务网点</span></div>"+
                                    "<div id='park' onclick=toggleParks() style='margin-left:5px;'><img src='images/park.png' height='30' width='30' style='vertical-align:middle;'><span>&nbsp;建筑模架产业园</span></div>"+
                                    "<div id='supply' onclick=toggleSupppliers() style='margin-left:5px;'><img src='images/supplier.png' height='30' width='30' style='vertical-align:middle;'><span>&nbsp;铝模生产企业</span></div>"+
                                    "<div id='project' onclick=toggleProjects() style='margin-left:5px;'><img src='images/message.png' height='30' width='30' style='vertical-align:middle;'><span>&nbsp;铝模项目设计实施工程</span></div>"+
                                    "</div>", 
                                    bounds: bs});   
	
}

function showMarkers(markers)
{
  for(var i = 0; i < markers.length; i++)
  {
    map.addOverlay(markers[i]);
  }
}

function hideMarkers(markers)
{
  for(var i = 0; i < markers.length; i++)
  {
    map.removeOverlay(markers[i]);
  }
}

var bShowServices = true;
function toggleServices()
{
  bShowServices = !bShowServices;
  bShowServices ? showMarkers(serviceMarker) : hideMarkers(serviceMarker); 
}

var bShowSuppliers = true;
function toggleSupppliers()
{
  bShowSuppliers = !bShowSuppliers;
  bShowSuppliers ? showMarkers(supplyMarker) : hideMarkers(supplyMarker);
}

var bShowParks = true;
function toggleParks()
{
  bShowParks = !bShowParks;
  bShowParks ? showMarkers(parkMarker) : hideMarkers(parkMarker); 
}

var bShowProjects = true;
function toggleProjects()
{
  bShowProjects = !bShowProjects;
  bShowProjects ? showMarkers(projectMarker) : hideMarkers(projectMarker); 
}

function addOnline()
{

  var data = [];

  $.get('data/online.json', function (online) {

    for(var i = 0; i < online.length; ++i){
      data.push({
          geometry: {
                  type: 'Point',
                  coordinates: [online[i].lng, online[i].lat] 
              },
              time: Math.random() * 10
            });
    }//end for

    var dataSet = new mapv.DataSet(data);
      var options = {
          fillStyle: 'rgba(255, 165, 0, 0.6)',
          //shadowColor: 'rgba(255, 250, 50, 0.5)',
          //shadowBlur: 3,
          updateCallback: function (time) {
          },
          size: 12,
          draw: 'simple',
          animation: {
              type: 'time',
              stepsRange: {
                  start: 0,
                  end: 10
              },
              trails: 1,
              duration: 6,
          }
      }
      var mapvLayer = new mapv.baiduMapLayer(map, dataSet, options);

  });
}

$(function () {

    initMap();  
    addControl();
    addProjects();
    addServices();
    addSuppliers();
    addParks();
    addOnline();
    
    setInterval(() => {
      $(".anchorTL").children().css('display', 'inline');
    }, 1000);


    $(".date1").each(function(){
      var d = new Date($(this).text());
      var c = new Date();
      if(d < c)
      {
        console.log("A");
        alert($(this).children(":first").text());
      }
    });

  });
