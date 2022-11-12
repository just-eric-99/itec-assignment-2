var data;
var filteredResult;
var series;

am5.ready(function () {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv2");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
        am5themes_Animated.new(root)
    ]);
    
    data = {
        value: 0,
        children: [
            {
                "name": "Asia",
                "children": [
                    {
                        "name": "Bangladesh",
                        "value": 0
                    },
                    {
                        "name": "Bhutan",
                        "value": 0
                    },
                    {
                        "name": "Brunei",
                        "value": 0
                    },
                    {
                        "name": "Cambodia",
                        "value": 0
                    },
                    {
                        "name": "China",
                        "value": 0
                    },
                    {
                        "name": "India",
                        "value": 0
                    },
                    {
                        "name": "Indonesia",
                        "value": 0
                    },
                    {
                        "name": "Japan",
                        "value": 0
                    },
                    {
                        "name": "Kazakhstan",
                        "value": 0
                    },
                    {
                        "name": "North Korea",
                        "value": 0
                    },
                    {
                        "name": "South Korea",
                        "value": 0
                    },
                    {
                        "name": "Kyrgyzstan",
                        "value": 0
                    },
                    {
                        "name": "Laos",
                        "value": 0
                    },
                    {
                        "name": "Malaysia",
                        "value": 0
                    },
                    {
                        "name": "Maldives",
                        "value": 0
                    },
                    {
                        "name": "Mongolia",
                        "value": 0
                    },
                    {
                        "name": "Myanmar",
                        "value": 0
                    },
                    {
                        "name": "Nepal",
                        "value": 0
                    },
                    {
                        "name": "Philippines",
                        "value": 0
                    },
                    {
                        "name": "Singapore",
                        "value": 0
                    },
                    {
                        "name": "Sri Lanka",
                        "value": 0
                    },
                    {
                        "name": "Taiwan",
                        "value": 0
                    },
                    {
                        "name": "Tajikistan",
                        "value": 0
                    },
                    {
                        "name": "Thailand",
                        "value": 0
                    },
                    {
                        "name": "Turkmenistan",
                        "value": 0
                    },
                    {
                        "name": "Uzbekistan",
                        "value": 0
                    },
                    {
                        "name": "Vietnam",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Middle East, North Africa, and Greater Arabia",
                "children": [
                    {
                        "name": "Afghanistan",
                        "value": 0
                    },
                    {
                        "name": "Algeria",
                        "value": 0
                    },
                    {
                        "name": "Azerbaijan",
                        "value": 0
                    },
                    {
                        "name": "Bahrain",
                        "value": 0
                    },
                    {
                        "name": "Egypt",
                        "value": 0
                    },
                    {
                        "name": "Iran",
                        "value": 0
                    },
                    {
                        "name": "Iraq",
                        "value": 0
                    },
                    {
                        "name": "Israel",
                        "value": 0
                    },
                    {
                        "name": "Jordan",
                        "value": 0
                    },
                    {
                        "name": "Kuwait",
                        "value": 0
                    },
                    {
                        "name": "Lebanon",
                        "value": 0
                    },
                    {
                        "name": "Libya",
                        "value": 0
                    },
                    {
                        "name": "Morocco",
                        "value": 0
                    },
                    {
                        "name": "Oman",
                        "value": 0
                    },
                    {
                        "name": "Pakistan",
                        "value": 0
                    },
                    {
                        "name": "Qatar",
                        "value": 0
                    },
                    {
                        "name": "Saudi Arabia",
                        "value": 0
                    },
                    {
                        "name": "Somalia",
                        "value": 0
                    },
                    {
                        "name": "Syria",
                        "value": 0
                    },
                    {
                        "name": "Tunisia",
                        "value": 0
                    },
                    {
                        "name": "Turkey",
                        "value": 0
                    },
                    {
                        "name": "The United Arab Emirates",
                        "value": 0
                    },
                    {
                        "name": "Yemen",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Europe",
                "children": [
                    {
                        "name": "Albania",
                        "value": 0
                    },
                    {
                        "name": "Andorra",
                        "value": 0
                    },
                    {
                        "name": "Armenia",
                        "value": 0
                    },
                    {
                        "name": "Austria",
                        "value": 0
                    },
                    {
                        "name": "Belarus",
                        "value": 0
                    },
                    {
                        "name": "Belgium",
                        "value": 0
                    },
                    {
                        "name": "Bosnia and Herzegovina",
                        "value": 0
                    },
                    {
                        "name": "Bulgaria",
                        "value": 0
                    },
                    {
                        "name": "Croatia",
                        "value": 0
                    },
                    {
                        "name": "Cyprus",
                        "value": 0
                    },
                    {
                        "name": "Czech Republic",
                        "value": 0
                    },
                    {
                        "name": "Denmark",
                        "value": 0
                    },
                    {
                        "name": "Estonia",
                        "value": 0
                    },
                    {
                        "name": "Finland",
                        "value": 0
                    },
                    {
                        "name": "France",
                        "value": 0
                    },
                    {
                        "name": "Georgia",
                        "value": 0
                    },
                    {
                        "name": "Germany",
                        "value": 0
                    },
                    {
                        "name": "Greece",
                        "value": 0
                    },
                    {
                        "name": "Hungary",
                        "value": 0
                    },
                    {
                        "name": "Iceland ",
                        "value": 0
                    },
                    {
                        "name": "Ireland",
                        "value": 0
                    },
                    {
                        "name": "Italy",
                        "value": 0
                    },
                    {
                        "name": "Kosovo",
                        "value": 0
                    },
                    {
                        "name": "Latvia",
                        "value": 0
                    },
                    {
                        "name": "Liechtenstein",
                        "value": 0
                    },
                    {
                        "name": "Lithuania",
                        "value": 0
                    },
                    {
                        "name": "Luxembourg",
                        "value": 0
                    },
                    {
                        "name": "Macedonia",
                        "value": 0
                    },
                    {
                        "name": "Malta",
                        "value": 0
                    },
                    {
                        "name": "Moldova",
                        "value": 0
                    },
                    {
                        "name": "Monaco",
                        "value": 0
                    },
                    {
                        "name": "Montenegro",
                        "value": 0
                    },
                    {
                        "name": "Netherlands",
                        "value": 0
                    },
                    {
                        "name": "Norway",
                        "value": 0
                    },
                    {
                        "name": "Poland",
                        "value": 0
                    },
                    {
                        "name": "Portugal",
                        "value": 0
                    },
                    {
                        "name": "Romania",
                        "value": 0
                    },
                    {
                        "name": "Russia",
                        "value": 0
                    },
                    {
                        "name": "San Marino",
                        "value": 0
                    },
                    {
                        "name": "Serbia",
                        "value": 0
                    },
                    {
                        "name": "Slovakia",
                        "value": 0
                    },
                    {
                        "name": "Slovenia",
                        "value": 0
                    },
                    {
                        "name": "Spain",
                        "value": 0
                    },
                    {
                        "name": "Sweden",
                        "value": 0
                    },
                    {
                        "name": "Switzerland",
                        "value": 0
                    },
                    {
                        "name": "Ukraine",
                        "value": 0
                    },
                    {
                        "name": "United Kingdom of Great Britain and Northern Ireland",
                        "value": 0
                    },
                    {
                        "name": "Vatican City",
                        "value": 0
                    }
                ]
            },
            {
                "name": "North America",
                "children": [
                    {
                        "name": "Canada",
                        "value": 0
                    },
                    {
                        "name": "Greenland ",
                        "value": 0
                    },
                    {
                        "name": "Mexico",
                        "value": 0
                    },
                    {
                        "name": "The United States of America",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Central America and the caribbean",
                "children": [
                    {
                        "name": "Antigua and Barbuda",
                        "value": 0
                    },
                    {
                        "name": "The Bahamas",
                        "value": 0
                    },
                    {
                        "name": "Barbados",
                        "value": 0
                    },
                    {
                        "name": "Belize",
                        "value": 0
                    },
                    {
                        "name": "Costa Rica",
                        "value": 0
                    },
                    {
                        "name": "Cuba",
                        "value": 0
                    },
                    {
                        "name": "Dominica",
                        "value": 0
                    },
                    {
                        "name": "Dominican Republic",
                        "value": 0
                    },
                    {
                        "name": "El Salvador",
                        "value": 0
                    },
                    {
                        "name": "Grenada",
                        "value": 0
                    },
                    {
                        "name": "Guatemala",
                        "value": 0
                    },
                    {
                        "name": "Haiti",
                        "value": 0
                    },
                    {
                        "name": "Honduras",
                        "value": 0
                    },
                    {
                        "name": "Jamaica",
                        "value": 0
                    },
                    {
                        "name": "Nicaragua",
                        "value": 0
                    },
                    {
                        "name": "Panama",
                        "value": 0
                    },
                    {
                        "name": "Saint Kitts and Nevis",
                        "value": 0
                    },
                    {
                        "name": "Saint Lucia",
                        "value": 0
                    },
                    {
                        "name": "Saint Vincent and the Grenadines",
                        "value": 0
                    },
                    {
                        "name": "Trinidad and Tobago",
                        "value": 0
                    }
                ]
            },
            {
                "name": "South America",
                "children": [
                    {
                        "name": "Argentina",
                        "value": 0
                    },
                    {
                        "name": "Bolivia",
                        "value": 0
                    },
                    {
                        "name": "Brazil",
                        "value": 0
                    },
                    {
                        "name": "Chile",
                        "value": 0
                    },
                    {
                        "name": "Colombia",
                        "value": 0
                    },
                    {
                        "name": "Ecuador",
                        "value": 0
                    },
                    {
                        "name": "Guyana",
                        "value": 0
                    },
                    {
                        "name": "Paraguay",
                        "value": 0
                    },
                    {
                        "name": "Peru",
                        "value": 0
                    },
                    {
                        "name": "Suriname",
                        "value": 0
                    },
                    {
                        "name": "Uruguay",
                        "value": 0
                    },
                    {
                        "name": "Venezuela",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Oceania",
                "children": [
                    {
                        "name": "Australia",
                        "value": 0
                    },
                    {
                        "name": "Fiji",
                        "value": 0
                    },
                    {
                        "name": "Kiribati",
                        "value": 0
                    },
                    {
                        "name": "Marshall Islands",
                        "value": 0
                    },
                    {
                        "name": "Micronesia",
                        "value": 0
                    },
                    {
                        "name": "Nauru",
                        "value": 0
                    },
                    {
                        "name": "New Zealand",
                        "value": 0
                    },
                    {
                        "name": "Palau",
                        "value": 0
                    },
                    {
                        "name": "Papua New Guinea",
                        "value": 0
                    },
                    {
                        "name": "Samoa",
                        "value": 0
                    },
                    {
                        "name": "Solomon Islands",
                        "value": 0
                    },
                    {
                        "name": "Tonga",
                        "value": 0
                    },
                    {
                        "name": "Tuvalu",
                        "value": 0
                    },
                    {
                        "name": "Vanuatu",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Africa",
                "children": [
                    {
                        "name": "Algeria",
                        "value": 0
                    },
                    {
                        "name": "Angola",
                        "value": 0
                    },
                    {
                        "name": "Benin",
                        "value": 0
                    },
                    {
                        "name": "Botswana",
                        "value": 0
                    },
                    {
                        "name": "Burkina Faso",
                        "value": 0
                    },
                    {
                        "name": "Burundi",
                        "value": 0
                    },
                    {
                        "name": "Cameroon",
                        "value": 0
                    },
                    {
                        "name": "Cape Verde",
                        "value": 0
                    },
                    {
                        "name": "Central African Republic",
                        "value": 0
                    },
                    {
                        "name": "Chad",
                        "value": 0
                    },
                    {
                        "name": "Comoros",
                        "value": 0
                    },
                    {
                        "name": "Congo",
                        "value": 0
                    },
                    {
                        "name": "Côte d'Ivoire",
                        "value": 0
                    },
                    {
                        "name": "Democratic Republic of the Congo",
                        "value": 0
                    },
                    {
                        "name": "Djibouti",
                        "value": 0
                    },
                    {
                        "name": "Egypt",
                        "value": 0
                    },
                    {
                        "name": "Equatorial Guinea",
                        "value": 0
                    },
                    {
                        "name": "Eritrea",
                        "value": 0
                    },
                    {
                        "name": "Ethiopia",
                        "value": 0
                    },
                    {
                        "name": "Gabon",
                        "value": 0
                    },
                    {
                        "name": "Gambia",
                        "value": 0
                    },
                    {
                        "name": "Ghana",
                        "value": 0
                    },
                    {
                        "name": "Guinea",
                        "value": 0
                    },
                    {
                        "name": "Guinea-Bissau",
                        "value": 0
                    },
                    {
                        "name": "Kenya",
                        "value": 0
                    },
                    {
                        "name": "Lesotho",
                        "value": 0
                    },
                    {
                        "name": "Liberia",
                        "value": 0
                    },
                    {
                        "name": "Libya",
                        "value": 0
                    },
                    {
                        "name": "Madagascar",
                        "value": 0
                    },
                    {
                        "name": "Malawi",
                        "value": 0
                    },
                    {
                        "name": "Mali",
                        "value": 0
                    },
                    {
                        "name": "Mauritania",
                        "value": 0
                    },
                    {
                        "name": "Mauritius",
                        "value": 0
                    },
                    {
                        "name": "Morocco",
                        "value": 0
                    },
                    {
                        "name": "Mozambique",
                        "value": 0
                    },
                    {
                        "name": "Namibia",
                        "value": 0
                    },
                    {
                        "name": "Niger",
                        "value": 0
                    },
                    {
                        "name": "Nigeria",
                        "value": 0
                    },
                    {
                        "name": "Rwanda",
                        "value": 0
                    },
                    {
                        "name": "Sao Tome and Principe",
                        "value": 0
                    },
                    {
                        "name": "Senegal",
                        "value": 0
                    },
                    {
                        "name": "Seychelles",
                        "value": 0
                    },
                    {
                        "name": "Sierra Leone",
                        "value": 0
                    },
                    {
                        "name": "Somalia",
                        "value": 0
                    },
                    {
                        "name": "South Africa",
                        "value": 0
                    },
                    {
                        "name": "South Sudan",
                        "value": 0
                    },
                    {
                        "name": "Sudan",
                        "value": 0
                    },
                    {
                        "name": "Swaziland",
                        "value": 0
                    },
                    {
                        "name": "Tanzania",
                        "value": 0
                    },
                    {
                        "name": "Togo",
                        "value": 0
                    },
                    {
                        "name": "Tunisia",
                        "value": 0
                    },
                    {
                        "name": "Uganda",
                        "value": 0
                    },
                    {
                        "name": "Zambia",
                        "value": 0
                    },
                    {
                        "name": "Zimbabwe",
                        "value": 0
                    }
                ]
            }
        ]
    };

    // Create wrapper container
    var container = root.container.children.push(am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout
    }));

    // Create series
    // https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
    series = container.children.push(am5hierarchy.ForceDirected.new(root, {
        singleBranchOnly: false,
        downDepth: 2,
        topDepth: 1,
        initialDepth: 1,
        valueField: "value",
        categoryField: "name",
        childDataField: "children",
        idField: "name",
        linkWithField: "linkWith",
        manyBodyStrength: -10,
        centerStrength: 0.8
    }));

    series.get("colors").setAll({
        step: 2
    });

    series.links.template.set("strength", 0.5);

    // series.data.setAll(
    //     [filteredResult]
    // );

    series.set("selectedDataItem", series.dataItems[0]);


    // Make stuff animate on load
    series.appear(1000, 100);

}); // end am5.ready()