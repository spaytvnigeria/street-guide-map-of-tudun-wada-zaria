var wms_layers = [];

var format_residential_0 = new ol.format.GeoJSON();
var features_residential_0 = format_residential_0.readFeatures(json_residential_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_residential_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_residential_0.addFeatures(features_residential_0);
var lyr_residential_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_residential_0, 
                style: style_residential_0,
                popuplayertitle: 'residential',
                interactive: true,
                title: '<img src="styles/legend/residential_0.png" /> residential'
            });
var format_School_1 = new ol.format.GeoJSON();
var features_School_1 = format_School_1.readFeatures(json_School_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_School_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_School_1.addFeatures(features_School_1);
var lyr_School_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_School_1, 
                style: style_School_1,
                popuplayertitle: 'School',
                interactive: true,
                title: '<img src="styles/legend/School_1.png" /> School'
            });
var format_Streets_2 = new ol.format.GeoJSON();
var features_Streets_2 = format_Streets_2.readFeatures(json_Streets_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streets_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streets_2.addFeatures(features_Streets_2);
var lyr_Streets_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Streets_2, 
                style: style_Streets_2,
                popuplayertitle: 'Streets',
                interactive: true,
                title: '<img src="styles/legend/Streets_2.png" /> Streets'
            });
var format_Major_Roads_3 = new ol.format.GeoJSON();
var features_Major_Roads_3 = format_Major_Roads_3.readFeatures(json_Major_Roads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Major_Roads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Major_Roads_3.addFeatures(features_Major_Roads_3);
var lyr_Major_Roads_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Major_Roads_3, 
                style: style_Major_Roads_3,
                popuplayertitle: 'Major_Roads',
                interactive: true,
                title: '<img src="styles/legend/Major_Roads_3.png" /> Major_Roads'
            });
var format_provision_Stores_4 = new ol.format.GeoJSON();
var features_provision_Stores_4 = format_provision_Stores_4.readFeatures(json_provision_Stores_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_provision_Stores_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_provision_Stores_4.addFeatures(features_provision_Stores_4);
var lyr_provision_Stores_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_provision_Stores_4, 
                style: style_provision_Stores_4,
                popuplayertitle: 'provision_Stores',
                interactive: true,
                title: '<img src="styles/legend/provision_Stores_4.png" /> provision_Stores'
            });
var format_Minor_Road_5 = new ol.format.GeoJSON();
var features_Minor_Road_5 = format_Minor_Road_5.readFeatures(json_Minor_Road_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Minor_Road_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Minor_Road_5.addFeatures(features_Minor_Road_5);
var lyr_Minor_Road_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Minor_Road_5, 
                style: style_Minor_Road_5,
                popuplayertitle: 'Minor_Road',
                interactive: true,
                title: '<img src="styles/legend/Minor_Road_5.png" /> Minor_Road'
            });
var format_tudubwada_6 = new ol.format.GeoJSON();
var features_tudubwada_6 = format_tudubwada_6.readFeatures(json_tudubwada_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tudubwada_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tudubwada_6.addFeatures(features_tudubwada_6);
var lyr_tudubwada_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tudubwada_6, 
                style: style_tudubwada_6,
                popuplayertitle: 'tudubwada',
                interactive: true,
                title: '<img src="styles/legend/tudubwada_6.png" /> tudubwada'
            });
var format_Prominent_Places_7 = new ol.format.GeoJSON();
var features_Prominent_Places_7 = format_Prominent_Places_7.readFeatures(json_Prominent_Places_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prominent_Places_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prominent_Places_7.addFeatures(features_Prominent_Places_7);
var lyr_Prominent_Places_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prominent_Places_7, 
                style: style_Prominent_Places_7,
                popuplayertitle: 'Prominent_Places',
                interactive: true,
                title: '<img src="styles/legend/Prominent_Places_7.png" /> Prominent_Places'
            });
var format_Pharmacy_8 = new ol.format.GeoJSON();
var features_Pharmacy_8 = format_Pharmacy_8.readFeatures(json_Pharmacy_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pharmacy_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pharmacy_8.addFeatures(features_Pharmacy_8);
var lyr_Pharmacy_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pharmacy_8, 
                style: style_Pharmacy_8,
                popuplayertitle: 'Pharmacy',
                interactive: true,
                title: '<img src="styles/legend/Pharmacy_8.png" /> Pharmacy'
            });
var format_Mosque_9 = new ol.format.GeoJSON();
var features_Mosque_9 = format_Mosque_9.readFeatures(json_Mosque_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mosque_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mosque_9.addFeatures(features_Mosque_9);
var lyr_Mosque_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mosque_9, 
                style: style_Mosque_9,
                popuplayertitle: 'Mosque',
                interactive: true,
                title: '<img src="styles/legend/Mosque_9.png" /> Mosque'
            });
var format_Hotel_10 = new ol.format.GeoJSON();
var features_Hotel_10 = format_Hotel_10.readFeatures(json_Hotel_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotel_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotel_10.addFeatures(features_Hotel_10);
var lyr_Hotel_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hotel_10, 
                style: style_Hotel_10,
                popuplayertitle: 'Hotel',
                interactive: true,
                title: '<img src="styles/legend/Hotel_10.png" /> Hotel'
            });
var format_Hospital_11 = new ol.format.GeoJSON();
var features_Hospital_11 = format_Hospital_11.readFeatures(json_Hospital_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospital_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospital_11.addFeatures(features_Hospital_11);
var lyr_Hospital_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hospital_11, 
                style: style_Hospital_11,
                popuplayertitle: 'Hospital',
                interactive: true,
                title: '<img src="styles/legend/Hospital_11.png" /> Hospital'
            });
var format_financial_institutiion_12 = new ol.format.GeoJSON();
var features_financial_institutiion_12 = format_financial_institutiion_12.readFeatures(json_financial_institutiion_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_financial_institutiion_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_financial_institutiion_12.addFeatures(features_financial_institutiion_12);
var lyr_financial_institutiion_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_financial_institutiion_12, 
                style: style_financial_institutiion_12,
                popuplayertitle: 'financial_institutiion',
                interactive: true,
                title: '<img src="styles/legend/financial_institutiion_12.png" /> financial_institutiion'
            });
var format_Eatery_13 = new ol.format.GeoJSON();
var features_Eatery_13 = format_Eatery_13.readFeatures(json_Eatery_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eatery_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eatery_13.addFeatures(features_Eatery_13);
var lyr_Eatery_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eatery_13, 
                style: style_Eatery_13,
                popuplayertitle: 'Eatery',
                interactive: true,
                title: '<img src="styles/legend/Eatery_13.png" /> Eatery'
            });
var format_Church_14 = new ol.format.GeoJSON();
var features_Church_14 = format_Church_14.readFeatures(json_Church_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Church_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Church_14.addFeatures(features_Church_14);
var lyr_Church_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Church_14, 
                style: style_Church_14,
                popuplayertitle: 'Church',
                interactive: true,
                title: '<img src="styles/legend/Church_14.png" /> Church'
            });

lyr_residential_0.setVisible(true);lyr_School_1.setVisible(true);lyr_Streets_2.setVisible(true);lyr_Major_Roads_3.setVisible(true);lyr_provision_Stores_4.setVisible(true);lyr_Minor_Road_5.setVisible(true);lyr_tudubwada_6.setVisible(true);lyr_Prominent_Places_7.setVisible(true);lyr_Pharmacy_8.setVisible(true);lyr_Mosque_9.setVisible(true);lyr_Hotel_10.setVisible(true);lyr_Hospital_11.setVisible(true);lyr_financial_institutiion_12.setVisible(true);lyr_Eatery_13.setVisible(true);lyr_Church_14.setVisible(true);
var layersList = [lyr_residential_0,lyr_School_1,lyr_Streets_2,lyr_Major_Roads_3,lyr_provision_Stores_4,lyr_Minor_Road_5,lyr_tudubwada_6,lyr_Prominent_Places_7,lyr_Pharmacy_8,lyr_Mosque_9,lyr_Hotel_10,lyr_Hospital_11,lyr_financial_institutiion_12,lyr_Eatery_13,lyr_Church_14];
lyr_residential_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_School_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', });
lyr_Streets_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'x': 'x', 'Shape_Leng': 'Shape_Leng', });
lyr_Major_Roads_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'x': 'x', 'Shape_Leng': 'Shape_Leng', });
lyr_provision_Stores_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', });
lyr_Minor_Road_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'x': 'x', 'Shape_Leng': 'Shape_Leng', });
lyr_tudubwada_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_1': 'FID_1', 'globalid': 'globalid', 'uniq_id': 'uniq_id', 'timestamp': 'timestamp', 'editor': 'editor', 'wardname': 'wardname', 'wardcode': 'wardcode', 'lganame': 'lganame', 'lgacode': 'lgacode', 'statename': 'statename', 'statecode': 'statecode', 'amapcode': 'amapcode', 'status': 'status', 'urban': 'urban', 'Shape__Len': 'Shape__Len', 'Lon': 'Lon', 'Lat': 'Lat', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Prominent_Places_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name': 'name', });
lyr_Pharmacy_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name': 'name', });
lyr_Mosque_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name': 'name', });
lyr_Hotel_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name': 'name', });
lyr_Hospital_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name': 'name', });
lyr_financial_institutiion_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name': 'name', });
lyr_Eatery_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name': 'name', });
lyr_Church_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name': 'name', });
lyr_residential_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_School_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', });
lyr_Streets_2.set('fieldImages', {'OBJECTID': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', 'x': '', 'Shape_Leng': '', });
lyr_Major_Roads_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'x': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_provision_Stores_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', });
lyr_Minor_Road_5.set('fieldImages', {'OBJECTID': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', 'x': '', 'Shape_Leng': '', });
lyr_tudubwada_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_1': 'Range', 'globalid': 'TextEdit', 'uniq_id': 'TextEdit', 'timestamp': 'DateTime', 'editor': 'TextEdit', 'wardname': 'TextEdit', 'wardcode': 'TextEdit', 'lganame': 'TextEdit', 'lgacode': 'TextEdit', 'statename': 'TextEdit', 'statecode': 'TextEdit', 'amapcode': 'TextEdit', 'status': 'TextEdit', 'urban': 'TextEdit', 'Shape__Len': 'TextEdit', 'Lon': 'TextEdit', 'Lat': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Prominent_Places_7.set('fieldImages', {'OBJECTID': '', 'name': '', });
lyr_Pharmacy_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'name': 'TextEdit', });
lyr_Mosque_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'name': 'TextEdit', });
lyr_Hotel_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'name': 'TextEdit', });
lyr_Hospital_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'name': 'TextEdit', });
lyr_financial_institutiion_12.set('fieldImages', {'OBJECTID': '', 'name': '', });
lyr_Eatery_13.set('fieldImages', {'OBJECTID': '', 'name': '', });
lyr_Church_14.set('fieldImages', {'OBJECTID': '', 'name': '', });
lyr_residential_0.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'inline label - always visible', 'name': 'no label', 'type': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_School_1.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', });
lyr_Streets_2.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'inline label - always visible', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'x': 'no label', 'Shape_Leng': 'no label', });
lyr_Major_Roads_3.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'inline label - visible with data', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'x': 'no label', 'Shape_Leng': 'no label', });
lyr_provision_Stores_4.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', });
lyr_Minor_Road_5.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'inline label - always visible', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'x': 'no label', 'Shape_Leng': 'no label', });
lyr_tudubwada_6.set('fieldLabels', {'OBJECTID': 'no label', 'FID_1': 'no label', 'globalid': 'no label', 'uniq_id': 'no label', 'timestamp': 'no label', 'editor': 'no label', 'wardname': 'inline label - always visible', 'wardcode': 'no label', 'lganame': 'no label', 'lgacode': 'no label', 'statename': 'no label', 'statecode': 'no label', 'amapcode': 'no label', 'status': 'no label', 'urban': 'no label', 'Shape__Len': 'no label', 'Lon': 'no label', 'Lat': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Prominent_Places_7.set('fieldLabels', {'OBJECTID': 'no label', 'name': 'inline label - always visible', });
lyr_Pharmacy_8.set('fieldLabels', {'OBJECTID': 'no label', 'name': 'inline label - always visible', });
lyr_Mosque_9.set('fieldLabels', {'OBJECTID': 'no label', 'name': 'inline label - always visible', });
lyr_Hotel_10.set('fieldLabels', {'OBJECTID': 'no label', 'name': 'inline label - always visible', });
lyr_Hospital_11.set('fieldLabels', {'OBJECTID': 'no label', 'name': 'inline label - always visible', });
lyr_financial_institutiion_12.set('fieldLabels', {'OBJECTID': 'no label', 'name': 'inline label - always visible', });
lyr_Eatery_13.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'name': 'inline label - always visible', });
lyr_Church_14.set('fieldLabels', {'OBJECTID': 'no label', 'name': 'inline label - always visible', });
lyr_Church_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});