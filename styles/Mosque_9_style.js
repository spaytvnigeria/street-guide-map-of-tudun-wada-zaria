var size = 0;
var placement = 'point';

var style_Mosque_9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.43334 + size, points: 5,
            radius2: 4.21667, stroke: new ol.style.Stroke({color: 'rgba(184,8,8,0.84)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(184,8,8,0.84)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 9.2 + size, points: 5,
            radius2: 4.6, stroke: new ol.style.Stroke({color: 'rgba(255,0,0,0.84)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(255,0,0,0.84)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};