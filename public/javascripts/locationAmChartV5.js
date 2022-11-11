zh_hk = {
    "HK-IS": "離島區",
    "HK-KI": "葵青區",
    "HK-NO": "北區",
    "HK-SK": "西貢區",
    "HK-ST": "沙田區",
    "HK-TP": "大埔區",
    "HK-TW": "荃灣區",
    "HK-TM": "屯門區",
    "HK-YL": "元朗區",
    "HK-KC": "九龍城區",
    "HK-KU": "觀塘區",
    "HK-SS": "深水埗區",
    "HK-WT": "黃大仙區",
    "HK-YT": "油尖旺區",
    "HK-CW": "中西區",
    "HK-EA": "東區",
    "HK-SO": "南區",
    "HK-WC": "灣仔區"
};

am5.ready(function () {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv2");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
        am5themes_Animated.new(root)
    ]);

    // Create the map chart
    // https://www.amcharts.com/docs/v5/charts/map-chart/
    var chart = root.container.children.push(am5map.MapChart.new(root, {
        panX: "rotateX",
        projection: am5map.geoMercator(),
        layout: root.horizontalLayout
    }));

    // am5.net.load("https://www.amcharts.com/tools/country/?v=xz6Z", chart).then(function (result) {
    //     var geo = am5.JSONParser.parse(result.response);
    //     loadGeodata(geo.country_code);
    // });

    loadGeodata("HK");

    // Create polygon series for continents
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
        calculateAggregates: true,
        valueField: "value"
    }));

    polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{zh_name}",
        interactive: true
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
        fill: am5.color(0x677935)
    });

    polygonSeries.set("heatRules", [{
        target: polygonSeries.mapPolygons.template,
        dataField: "value",
        min: am5.color(0x8ab7ff),
        max: am5.color(0x25529a),
        key: "fill"
    }]);

    polygonSeries.mapPolygons.template.events.on("pointerover", function (ev) {
        heatLegend.showValue(ev.target.dataItem.get("value"));
    });

    function loadGeodata(country) {

        // Default map
        var defaultMap = "usaLow";

        if (country == "US") {
            chart.set("projection", am5map.geoAlbersUsa());
        }
        else {
            chart.set("projection", am5map.geoMercator());
        }

        // calculate which map to be used
        var currentMap = defaultMap;
        var title = "";
        if (am5geodata_data_countries2[country] !== undefined) {
            currentMap = am5geodata_data_countries2[country]["maps"][0];

            // add country title
            if (am5geodata_data_countries2[country]["country"]) {
                title = am5geodata_data_countries2[country]["country"];
            }
        }
        title = ""

        am5.net.load("https://cdn.amcharts.com/lib/5/geodata/json/" + currentMap + ".json", chart).then(function (result) {
            console.log("https://cdn.amcharts.com/lib/5/geodata/json/" + currentMap + ".json");
            var geodata = am5.JSONParser.parse(result.response);
            var data = [];


            // fake data: fix later
            for (var i = 0; i < geodata.features.length; i++) {
                data.push({
                    id: geodata.features[i].id,
                    value: 0,
                    name: geodata.features[i].properties.name,
                    zh_name: geodata.features[i].properties.name + " (" + zh_hk[geodata.features[i].id] + ")"
                });
            }
            polygonSeries.set("geoJSON", geodata);
            polygonSeries.data.setAll(data)
        });

        chart.seriesContainer.children.push(am5.Label.new(root, {
            x: 5,
            y: 5,
            text: title,
            background: am5.RoundedRectangle.new(root, {
                fill: am5.color(0xffffff),
                fillOpacity: 0.2
            })
        }))

    }

    var heatLegend = chart.children.push(
        am5.HeatLegend.new(root, {
            orientation: "vertical",
            startColor: am5.color(0x8ab7ff),
            endColor: am5.color(0x25529a),
            startText: "Lowest",
            endText: "Highest",
            stepCount: 5
        })
    );

    heatLegend.startLabel.setAll({
        fontSize: 12,
        fill: heatLegend.get("startColor")
    });

    heatLegend.endLabel.setAll({
        fontSize: 12,
        fill: heatLegend.get("endColor")
    });

    // change this to template when possible
    polygonSeries.events.on("datavalidated", function () {
        heatLegend.set("startValue", polygonSeries.getPrivate("valueLow"));
        heatLegend.set("endValue", polygonSeries.getPrivate("valueHigh"));
    });

});