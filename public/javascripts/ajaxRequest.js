async function postWithAjax(elem) {

    var response = await fetch(elem.action, {
        method: elem.method,
        body: new FormData(elem)
    });

    var submissions = await response.json();

    /**
     * Where do people live? 
     */
    var islands = 0;
    var kwaiTsing = 0;
    var north = 0;
    var saiKung = 0;
    var shaTin = 0;
    var taiPo = 0;
    var tsuenWan = 0;
    var tuenMun = 0;
    var yuenLong = 0;
    var kowloonCity = 0;
    var kwunTong = 0;
    var shamShuiPo = 0;
    var wongTaiSin = 0;
    var yauTsimMong = 0;
    var centralAndWestern = 0;
    var eastern = 0;
    var southern = 0;
    var wanChai = 0;

    submissions.forEach(function (submission) {
        if (submission.districts === "Islands (離島區)") {
            islands++;
        } else if (submission.districts === "Kwai Tsing (葵青區)") {
            kwaiTsing++;
        } else if (submission.districts === "North (北區)") {
            north++;
        } else if (submission.districts === "Sai Kung (西貢區)") {
            saiKung++;
        } else if (submission.districts === "Sha Tin (沙田區)") {
            shaTin++;
        } else if (submission.districts === "Tai Po (大埔區)") {
            taiPo++;
        } else if (submission.districts === "Tsuen Wan (荃灣區)") {
            tsuenWan++;
        } else if (submission.districts === "Tuen Mun (屯門區)") {
            tuenMun++;
        } else if (submission.districts === "Yuen Long (元朗區)") {
            yuenLong++;
        } else if (submission.districts === "Kowloon City (九龍城區)") {
            kowloonCity++;
        } else if (submission.districts === "Kwun Tong (觀塘區)") {
            kwunTong++;
        } else if (submission.districts === "Sham Shui Po (深水埗區)") {
            shamShuiPo++;
        } else if (submission.districts === "Wong Tai Sin (黃大仙區)") {
            wongTaiSin++;
        } else if (submission.districts === "Yau Tsim Mong (油尖旺區)") {
            yauTsimMong++;
        } else if (submission.districts === "Central and Western (中西區)") {
            centralAndWestern++;
        } else if (submission.districts === "Eastern (東區)") {
            eastern++;
        } else if (submission.districts === "Southern (南區)") {
            southern++;
        } else if (submission.districts === "Wan Chai (灣仔區)") {
            wanChai++;
        }
    });

    locationData = [
        { id: "HK-IS", zh_name: "Islands, (離島區)", value: islands },
        { id: "HK-KI", zh_name: "Kwai Tsing, (葵青區)", value: kwaiTsing },
        { id: "HK-NO", zh_name: "North, (北區)", value: north },
        { id: "HK-SK", zh_name: "Sai Kung, (西貢區)", value: saiKung },
        { id: "HK-ST", zh_name: "Sha Tin, (沙田區)", value: shaTin },
        { id: "HK-TP", zh_name: "Tai Po, (大埔區)", value: taiPo },
        { id: "HK-TW", zh_name: "Tsuen Wan, (荃灣區)", value: tsuenWan },
        { id: "HK-TM", zh_name: "Tuen Mun, (屯門區)", value: tuenMun },
        { id: "HK-YL", zh_name: "Yuen Long, (元朗區)", value: yuenLong },
        { id: "HK-KC", zh_name: "Kowloon City, (九龍城區)", value: kowloonCity },
        { id: "HK-KU", zh_name: "Kwun Tong, (觀塘區)", value: kwunTong },
        { id: "HK-SS", zh_name: "Sham Shui Po, (深水埗區)", value: shamShuiPo },
        { id: "HK-WT", zh_name: "Wong Tai Sin, (黃大仙區)", value: wongTaiSin },
        { id: "HK-YT", zh_name: "Yau Tsim Mong, (油尖旺區)", value: yauTsimMong },
        { id: "HK-CW", zh_name: "Central and Western, (中西區)", value: centralAndWestern },
        { id: "HK-EA", zh_name: "Eastern, (東區)", value: eastern },
        { id: "HK-SO", zh_name: "Southern, (南區)", value: southern },
        { id: "HK-WC", zh_name: "Wan Chai, (灣仔區)", value: wanChai }
    ]

    polygonSeries.data.setAll(locationData)

    /**
     * Pineapple on Pizza
     */
    var yesPineappleOnPizza = 0
    var noPineappleOnPizza = 0
    submissions.forEach(function (submission) {
        if (submission.pineappleOnPizza == "Yes") {
            yesPineappleOnPizza += 1
        } else if (submission.pineappleOnPizza == "No") {
            noPineappleOnPizza += 1
        }
    })

    series2.data.setAll([
        { category: "Yes", value: yesPineappleOnPizza },
        { category: "No", value: noPineappleOnPizza }]
    );

    /**
     * Which country do you wanna travel the most besides Hong Kong?
     */
    var BangladeshValue = submissions.filter(function (submission) {
        return submission.country === "Bangladesh"
    });
    var BhutanValue = submissions.filter(function (submission) {
        return submission.country === "Bhutan"
    });
    var BruneiValue = submissions.filter(function (submission) {
        return submission.country === "Brunei"
    });
    var CambodiaValue = submissions.filter(function (submission) {
        return submission.country === "Cambodia"
    });
    var ChinaValue = submissions.filter(function (submission) {
        return submission.country === "China"
    });
    var IndiaValue = submissions.filter(function (submission) {
        return submission.country === "India"
    });
    var IndonesiaValue = submissions.filter(function (submission) {
        return submission.country === "Indonesia"
    });
    var JapanValue = submissions.filter(function (submission) {
        return submission.country === "Japan"
    });
    var KazakhstanValue = submissions.filter(function (submission) {
        return submission.country === "Kazakhstan"
    });
    var NorthKoreaValue = submissions.filter(function (submission) {
        return submission.country === "North Korea"
    });
    var SouthKoreaValue = submissions.filter(function (submission) {
        return submission.country === "South Korea"
    });
    var KyrgyzstanValue = submissions.filter(function (submission) {
        return submission.country === "Kyrgyzstan"
    });
    var LaosValue = submissions.filter(function (submission) {
        return submission.country === "Laos"
    });
    var MalaysiaValue = submissions.filter(function (submission) {
        return submission.country === "Malaysia"
    });
    var MaldivesValue = submissions.filter(function (submission) {
        return submission.country === "Maldives"
    });
    var MongoliaValue = submissions.filter(function (submission) {
        return submission.country === "Mongolia"
    });
    var MyanmarValue = submissions.filter(function (submission) {
        return submission.country === "Myanmar"
    });
    var NepalValue = submissions.filter(function (submission) {
        return submission.country === "Nepal"
    });
    var PhilippinesValue = submissions.filter(function (submission) {
        return submission.country === "Philippines"
    });
    var SingaporeValue = submissions.filter(function (submission) {
        return submission.country === "Singapore"
    });
    var SriLankaValue = submissions.filter(function (submission) {
        return submission.country === "Sri Lanka"
    });
    var TaiwanValue = submissions.filter(function (submission) {
        return submission.country === "Taiwan"
    });
    var TajikistanValue = submissions.filter(function (submission) {
        return submission.country === "Tajikistan"
    });
    var ThailandValue = submissions.filter(function (submission) {
        return submission.country === "Thailand"
    });
    var TurkmenistanValue = submissions.filter(function (submission) {
        return submission.country === "Turkmenistan"
    });
    var UzbekistanValue = submissions.filter(function (submission) {
        return submission.country === "Uzbekistan"
    });
    var VietnamValue = submissions.filter(function (submission) {
        return submission.country === "Vietnam"
    });
    var AfghanistanValue = submissions.filter(function (submission) {
        return submission.country === "Afghanistan"
    });
    var AlgeriaValue = submissions.filter(function (submission) {
        return submission.country === "Algeria"
    });
    var AzerbaijanValue = submissions.filter(function (submission) {
        return submission.country === "Azerbaijan"
    });
    var BahrainValue = submissions.filter(function (submission) {
        return submission.country === "Bahrain"
    });
    var EgyptValue = submissions.filter(function (submission) {
        return submission.country === "Egypt"
    });
    var IranValue = submissions.filter(function (submission) {
        return submission.country === "Iran"
    });
    var IraqValue = submissions.filter(function (submission) {
        return submission.country === "Iraq"
    });
    var IsraelValue = submissions.filter(function (submission) {
        return submission.country === "Israel"
    });
    var JordanValue = submissions.filter(function (submission) {
        return submission.country === "Jordan"
    });
    var KuwaitValue = submissions.filter(function (submission) {
        return submission.country === "Kuwait"
    });
    var LebanonValue = submissions.filter(function (submission) {
        return submission.country === "Lebanon"
    });
    var LibyaValue = submissions.filter(function (submission) {
        return submission.country === "Libya"
    });
    var MoroccoValue = submissions.filter(function (submission) {
        return submission.country === "Morocco"
    });
    var OmanValue = submissions.filter(function (submission) {
        return submission.country === "Oman"
    });
    var PakistanValue = submissions.filter(function (submission) {
        return submission.country === "Pakistan"
    });
    var QatarValue = submissions.filter(function (submission) {
        return submission.country === "Qatar"
    });
    var SaudiArabiaValue = submissions.filter(function (submission) {
        return submission.country === "Saudi Arabia"
    });
    var SomaliaValue = submissions.filter(function (submission) {
        return submission.country === "Somalia"
    });
    var SyriaValue = submissions.filter(function (submission) {
        return submission.country === "Syria"
    });
    var TunisiaValue = submissions.filter(function (submission) {
        return submission.country === "Tunisia"
    });
    var TurkeyValue = submissions.filter(function (submission) {
        return submission.country === "Turkey"
    });
    var TheUnitedArabEmiratesValue = submissions.filter(function (submission) {
        return submission.country === "The United Arab Emirates"
    });
    var YemenValue = submissions.filter(function (submission) {
        return submission.country === "Yemen"
    });
    var AlbaniaValue = submissions.filter(function (submission) {
        return submission.country === "Albania"
    });
    var AndorraValue = submissions.filter(function (submission) {
        return submission.country === "Andorra"
    });
    var ArmeniaValue = submissions.filter(function (submission) {
        return submission.country === "Armenia"
    });
    var AustriaValue = submissions.filter(function (submission) {
        return submission.country === "Austria"
    });
    var BelarusValue = submissions.filter(function (submission) {
        return submission.country === "Belarus"
    });
    var BelgiumValue = submissions.filter(function (submission) {
        return submission.country === "Belgium"
    });
    var BosniaandHerzegovinaValue = submissions.filter(function (submission) {
        return submission.country === "Bosnia and Herzegovina"
    });
    var BulgariaValue = submissions.filter(function (submission) {
        return submission.country === "Bulgaria"
    });
    var CroatiaValue = submissions.filter(function (submission) {
        return submission.country === "Croatia"
    });
    var CyprusValue = submissions.filter(function (submission) {
        return submission.country === "Cyprus"
    });
    var CzechRepublicValue = submissions.filter(function (submission) {
        return submission.country === "Czech Republic"
    });
    var DenmarkValue = submissions.filter(function (submission) {
        return submission.country === "Denmark"
    });
    var EstoniaValue = submissions.filter(function (submission) {
        return submission.country === "Estonia"
    });
    var FinlandValue = submissions.filter(function (submission) {
        return submission.country === "Finland"
    });
    var FranceValue = submissions.filter(function (submission) {
        return submission.country === "France"
    });
    var GeorgiaValue = submissions.filter(function (submission) {
        return submission.country === "Georgia"
    });
    var GermanyValue = submissions.filter(function (submission) {
        return submission.country === "Germany"
    });
    var GreeceValue = submissions.filter(function (submission) {
        return submission.country === "Greece"
    });
    var HungaryValue = submissions.filter(function (submission) {
        return submission.country === "Hungary"
    });
    var IcelandValue = submissions.filter(function (submission) {
        return submission.country === "Iceland"
    });
    var IrelandValue = submissions.filter(function (submission) {
        return submission.country === "Ireland"
    });
    var ItalyValue = submissions.filter(function (submission) {
        return submission.country === "Italy"
    });
    var KosovoValue = submissions.filter(function (submission) {
        return submission.country === "Kosovo"
    });
    var LatviaValue = submissions.filter(function (submission) {
        return submission.country === "Latvia"
    });
    var LiechtensteinValue = submissions.filter(function (submission) {
        return submission.country === "Liechtenstein"
    });
    var LithuaniaValue = submissions.filter(function (submission) {
        return submission.country === "Lithuania"
    });
    var LuxembourgValue = submissions.filter(function (submission) {
        return submission.country === "Luxembourg"
    });
    var MacedoniaValue = submissions.filter(function (submission) {
        return submission.country === "Macedonia"
    });
    var MaltaValue = submissions.filter(function (submission) {
        return submission.country === "Malta"
    });
    var MoldovaValue = submissions.filter(function (submission) {
        return submission.country === "Moldova"
    });
    var MonacoValue = submissions.filter(function (submission) {
        return submission.country === "Monaco"
    });
    var MontenegroValue = submissions.filter(function (submission) {
        return submission.country === "Montenegro"
    });
    var NetherlandsValue = submissions.filter(function (submission) {
        return submission.country === "Netherlands"
    });
    var NorwayValue = submissions.filter(function (submission) {
        return submission.country === "Norway"
    });
    var PolandValue = submissions.filter(function (submission) {
        return submission.country === "Poland"
    });
    var PortugalValue = submissions.filter(function (submission) {
        return submission.country === "Portugal"
    });
    var RomaniaValue = submissions.filter(function (submission) {
        return submission.country === "Romania"
    });
    var RussiaValue = submissions.filter(function (submission) {
        return submission.country === "Russia"
    });
    var SanMarinoValue = submissions.filter(function (submission) {
        return submission.country === "San Marino"
    });
    var SerbiaValue = submissions.filter(function (submission) {
        return submission.country === "Serbia"
    });
    var SlovakiaValue = submissions.filter(function (submission) {
        return submission.country === "Slovakia"
    });
    var SloveniaValue = submissions.filter(function (submission) {
        return submission.country === "Slovenia"
    });
    var SpainValue = submissions.filter(function (submission) {
        return submission.country === "Spain"
    });
    var SwedenValue = submissions.filter(function (submission) {
        return submission.country === "Sweden"
    });
    var SwitzerlandValue = submissions.filter(function (submission) {
        return submission.country === "Switzerland"
    });
    var UkraineValue = submissions.filter(function (submission) {
        return submission.country === "Ukraine"
    });
    var UnitedKingdomofGreatBritainandNorthernIrelandValue = submissions.filter(function (submission) {
        return submission.country === "United Kingdom of Great Britain and Northern Ireland"
    });
    var VaticanCityValue = submissions.filter(function (submission) {
        return submission.country === "Vatican City"
    });
    var CanadaValue = submissions.filter(function (submission) {
        return submission.country === "Canada"
    });
    var GreenlandValue = submissions.filter(function (submission) {
        return submission.country === "Greenland "
    });
    var MexicoValue = submissions.filter(function (submission) {
        return submission.country === "Mexico"
    });
    var TheUnitedStatesofAmericaValue = submissions.filter(function (submission) {
        return submission.country === "The United States of America"
    });
    var AntiguaandBarbudaValue = submissions.filter(function (submission) {
        return submission.country === "Antigua and Barbuda"
    });
    var TheBahamasValue = submissions.filter(function (submission) {
        return submission.country === "The Bahamas"
    });
    var BarbadosValue = submissions.filter(function (submission) {
        return submission.country === "Barbados"
    });
    var BelizeValue = submissions.filter(function (submission) {
        return submission.country === "Belize"
    });
    var CostaRicaValue = submissions.filter(function (submission) {
        return submission.country === "Costa Rica"
    });
    var CubaValue = submissions.filter(function (submission) {
        return submission.country === "Cuba"
    });
    var DominicaValue = submissions.filter(function (submission) {
        return submission.country === "Dominica"
    });
    var DominicanRepublicValue = submissions.filter(function (submission) {
        return submission.country === "Dominican Republic"
    });
    var ElSalvadorValue = submissions.filter(function (submission) {
        return submission.country === "El Salvador"
    });
    var GrenadaValue = submissions.filter(function (submission) {
        return submission.country === "Grenada"
    });
    var GuatemalaValue = submissions.filter(function (submission) {
        return submission.country === "Guatemala"
    });
    var HaitiValue = submissions.filter(function (submission) {
        return submission.country === "Haiti"
    });
    var HondurasValue = submissions.filter(function (submission) {
        return submission.country === "Honduras"
    });
    var JamaicaValue = submissions.filter(function (submission) {
        return submission.country === "Jamaica"
    });
    var NicaraguaValue = submissions.filter(function (submission) {
        return submission.country === "Nicaragua"
    });
    var PanamaValue = submissions.filter(function (submission) {
        return submission.country === "Panama"
    });
    var SaintKittsandNevisValue = submissions.filter(function (submission) {
        return submission.country === "Saint Kitts and Nevis"
    });
    var SaintLuciaValue = submissions.filter(function (submission) {
        return submission.country === "Saint Lucia"
    });
    var SaintVincentandtheGrenadinesValue = submissions.filter(function (submission) {
        return submission.country === "Saint Vincent and the Grenadines"
    });
    var TrinidadandTobagoValue = submissions.filter(function (submission) {
        return submission.country === "Trinidad and Tobago"
    });
    var ArgentinaValue = submissions.filter(function (submission) {
        return submission.country === "Argentina"
    });
    var BoliviaValue = submissions.filter(function (submission) {
        return submission.country === "Bolivia"
    });
    var BrazilValue = submissions.filter(function (submission) {
        return submission.country === "Brazil"
    });
    var ChileValue = submissions.filter(function (submission) {
        return submission.country === "Chile"
    });
    var ColombiaValue = submissions.filter(function (submission) {
        return submission.country === "Colombia"
    });
    var EcuadorValue = submissions.filter(function (submission) {
        return submission.country === "Ecuador"
    });
    var GuyanaValue = submissions.filter(function (submission) {
        return submission.country === "Guyana"
    });
    var ParaguayValue = submissions.filter(function (submission) {
        return submission.country === "Paraguay"
    });
    var PeruValue = submissions.filter(function (submission) {
        return submission.country === "Peru"
    });
    var SurinameValue = submissions.filter(function (submission) {
        return submission.country === "Suriname"
    });
    var UruguayValue = submissions.filter(function (submission) {
        return submission.country === "Uruguay"
    });
    var VenezuelaValue = submissions.filter(function (submission) {
        return submission.country === "Venezuela"
    });
    var AustraliaValue = submissions.filter(function (submission) {
        return submission.country === "Australia"
    });
    var FijiValue = submissions.filter(function (submission) {
        return submission.country === "Fiji"
    });
    var KiribatiValue = submissions.filter(function (submission) {
        return submission.country === "Kiribati"
    });
    var MarshallIslandsValue = submissions.filter(function (submission) {
        return submission.country === "Marshall Islands"
    });
    var MicronesiaValue = submissions.filter(function (submission) {
        return submission.country === "Micronesia"
    });
    var NauruValue = submissions.filter(function (submission) {
        return submission.country === "Nauru"
    });
    var NewZealandValue = submissions.filter(function (submission) {
        return submission.country === "New Zealand"
    });
    var PalauValue = submissions.filter(function (submission) {
        return submission.country === "Palau"
    });
    var PapuaNewGuineaValue = submissions.filter(function (submission) {
        return submission.country === "Papua New Guinea"
    });
    var SamoaValue = submissions.filter(function (submission) {
        return submission.country === "Samoa"
    });
    var SolomonIslandsValue = submissions.filter(function (submission) {
        return submission.country === "Solomon Islands"
    });
    var TongaValue = submissions.filter(function (submission) {
        return submission.country === "Tonga"
    });
    var TuvaluValue = submissions.filter(function (submission) {
        return submission.country === "Tuvalu"
    });
    var VanuatuValue = submissions.filter(function (submission) {
        return submission.country === "Vanuatu"
    });
    var AlgeriaValue = submissions.filter(function (submission) {
        return submission.country === "Algeria"
    });
    var AngolaValue = submissions.filter(function (submission) {
        return submission.country === "Angola"
    });
    var BeninValue = submissions.filter(function (submission) {
        return submission.country === "Benin"
    });
    var BotswanaValue = submissions.filter(function (submission) {
        return submission.country === "Botswana"
    });
    var BurkinaFasoValue = submissions.filter(function (submission) {
        return submission.country === "Burkina Faso"
    });
    var BurundiValue = submissions.filter(function (submission) {
        return submission.country === "Burundi"
    });
    var CameroonValue = submissions.filter(function (submission) {
        return submission.country === "Cameroon"
    });
    var CapeVerdeValue = submissions.filter(function (submission) {
        return submission.country === "Cape Verde"
    });
    var CentralAfricanRepublicValue = submissions.filter(function (submission) {
        return submission.country === "Central African Republic"
    });
    var ChadValue = submissions.filter(function (submission) {
        return submission.country === "Chad"
    });
    var ComorosValue = submissions.filter(function (submission) {
        return submission.country === "Comoros"
    });
    var CongoValue = submissions.filter(function (submission) {
        return submission.country === "Congo"
    });
    var CôtedIvoireValue = submissions.filter(function (submission) {
        return submission.country === "Côte d'Ivoire"
    });
    var DemocraticRepublicoftheCongoValue = submissions.filter(function (submission) {
        return submission.country === "Democratic Republic of the Congo"
    });
    var DjiboutiValue = submissions.filter(function (submission) {
        return submission.country === "Djibouti"
    });
    var EgyptValue = submissions.filter(function (submission) {
        return submission.country === "Egypt"
    });
    var EquatorialGuineaValue = submissions.filter(function (submission) {
        return submission.country === "Equatorial Guinea"
    });
    var EritreaValue = submissions.filter(function (submission) {
        return submission.country === "Eritrea"
    });
    var EthiopiaValue = submissions.filter(function (submission) {
        return submission.country === "Ethiopia"
    });
    var GabonValue = submissions.filter(function (submission) {
        return submission.country === "Gabon"
    });
    var GambiaValue = submissions.filter(function (submission) {
        return submission.country === "Gambia"
    });
    var GhanaValue = submissions.filter(function (submission) {
        return submission.country === "Ghana"
    });
    var GuineaValue = submissions.filter(function (submission) {
        return submission.country === "Guinea"
    });
    var BissauValue = submissions.filter(function (submission) {
        return submission.country === "Guinea-Bissau"
    });
    var KenyaValue = submissions.filter(function (submission) {
        return submission.country === "Kenya"
    });
    var LesothoValue = submissions.filter(function (submission) {
        return submission.country === "Lesotho"
    });
    var LiberiaValue = submissions.filter(function (submission) {
        return submission.country === "Liberia"
    });
    var LibyaValue = submissions.filter(function (submission) {
        return submission.country === "Libya"
    });
    var MadagascarValue = submissions.filter(function (submission) {
        return submission.country === "Madagascar"
    });
    var MalawiValue = submissions.filter(function (submission) {
        return submission.country === "Malawi"
    });
    var MaliValue = submissions.filter(function (submission) {
        return submission.country === "Mali"
    });
    var MauritaniaValue = submissions.filter(function (submission) {
        return submission.country === "Mauritania"
    });
    var MauritiusValue = submissions.filter(function (submission) {
        return submission.country === "Mauritius"
    });
    var MoroccoValue = submissions.filter(function (submission) {
        return submission.country === "Morocco"
    });
    var MozambiqueValue = submissions.filter(function (submission) {
        return submission.country === "Mozambique"
    });
    var NamibiaValue = submissions.filter(function (submission) {
        return submission.country === "Namibia"
    });
    var NigerValue = submissions.filter(function (submission) {
        return submission.country === "Niger"
    });
    var NigeriaValue = submissions.filter(function (submission) {
        return submission.country === "Nigeria"
    });
    var RwandaValue = submissions.filter(function (submission) {
        return submission.country === "Rwanda"
    });
    var SaoTomeandPrincipeValue = submissions.filter(function (submission) {
        return submission.country === "Sao Tome and Principe"
    });
    var SenegalValue = submissions.filter(function (submission) {
        return submission.country === "Senegal"
    });
    var SeychellesValue = submissions.filter(function (submission) {
        return submission.country === "Seychelles"
    });
    var SierraLeoneValue = submissions.filter(function (submission) {
        return submission.country === "Sierra Leone"
    });
    var SomaliaValue = submissions.filter(function (submission) {
        return submission.country === "Somalia"
    });
    var SouthAfricaValue = submissions.filter(function (submission) {
        return submission.country === "South Africa"
    });
    var SouthSudanValue = submissions.filter(function (submission) {
        return submission.country === "South Sudan"
    });
    var SudanValue = submissions.filter(function (submission) {
        return submission.country === "Sudan"
    });
    var SwazilandValue = submissions.filter(function (submission) {
        return submission.country === "Swaziland"
    });
    var TanzaniaValue = submissions.filter(function (submission) {
        return submission.country === "Tanzania"
    });
    var TogoValue = submissions.filter(function (submission) {
        return submission.country === "Togo"
    });
    var TunisiaValue = submissions.filter(function (submission) {
        return submission.country === "Tunisia"
    });
    var UgandaValue = submissions.filter(function (submission) {
        return submission.country === "Uganda"
    });
    var ZambiaValue = submissions.filter(function (submission) {
        return submission.country === "Zambia"
    });
    var ZimbabweValue = submissions.filter(function (submission) {
        return submission.country === "Zimbabwe"
    });

    data = {
        value: 0,
        children: [
            {
                name: "Asia",
                children: [
                    {
                        name: "Bangladesh",
                        value: BangladeshValue.length || 0
                    },
                    {
                        name: "Bhutan",
                        value: BhutanValue.length || 0
                    },
                    {
                        name: "Brunei",
                        value: BruneiValue.length || 0
                    },
                    {
                        name: "Cambodia",
                        value: CambodiaValue.length || 0
                    },
                    {
                        name: "China",
                        value: ChinaValue.length || 0
                    },
                    {
                        name: "India",
                        value: IndiaValue.length || 0
                    },
                    {
                        name: "Indonesia",
                        value: IndonesiaValue.length || 0
                    },
                    {
                        name: "Japan",
                        value: JapanValue.length || 0
                    },
                    {
                        name: "Kazakhstan",
                        value: KazakhstanValue.length || 0
                    },
                    {
                        name: "North Korea",
                        value: NorthKoreaValue.length || 0
                    },
                    {
                        name: "South Korea",
                        value: SouthKoreaValue.length || 0
                    },
                    {
                        name: "Kyrgyzstan",
                        value: KyrgyzstanValue.length || 0
                    },
                    {
                        name: "Laos",
                        value: LaosValue.length || 0
                    },
                    {
                        name: "Malaysia",
                        value: MalaysiaValue.length || 0
                    },
                    {
                        name: "Maldives",
                        value: MaldivesValue.length || 0
                    },
                    {
                        name: "Mongolia",
                        value: MongoliaValue.length || 0
                    },
                    {
                        name: "Myanmar",
                        value: MyanmarValue.length || 0
                    },
                    {
                        name: "Nepal",
                        value: NepalValue.length || 0
                    },
                    {
                        name: "Philippines",
                        value: PhilippinesValue.length || 0
                    },
                    {
                        name: "Singapore",
                        value: SingaporeValue.length || 0
                    },
                    {
                        name: "Sri Lanka",
                        value: SriLankaValue.length || 0
                    },
                    {
                        name: "Taiwan",
                        value: TaiwanValue.length || 0
                    },
                    {
                        name: "Tajikistan",
                        value: TajikistanValue.length || 0
                    },
                    {
                        name: "Thailand",
                        value: ThailandValue.length || 0
                    },
                    {
                        name: "Turkmenistan",
                        value: TurkmenistanValue.length || 0
                    },
                    {
                        name: "Uzbekistan",
                        value: UzbekistanValue.length || 0
                    },
                    {
                        name: "Vietnam",
                        value: VietnamValue.length || 0
                    }
                ]
            },
            {
                name: "Middle East, North Africa, and Greater Arabia",
                children: [
                    {
                        name: "Afghanistan",
                        value: AfghanistanValue.length || 0
                    },
                    {
                        name: "Algeria",
                        value: AlgeriaValue.length || 0
                    },
                    {
                        name: "Azerbaijan",
                        value: AzerbaijanValue.length || 0
                    },
                    {
                        name: "Bahrain",
                        value: BahrainValue.length || 0
                    },
                    {
                        name: "Egypt",
                        value: EgyptValue.length || 0
                    },
                    {
                        name: "Iran",
                        value: IranValue.length || 0
                    },
                    {
                        name: "Iraq",
                        value: IraqValue.length || 0
                    },
                    {
                        name: "Israel",
                        value: IsraelValue.length || 0
                    },
                    {
                        name: "Jordan",
                        value: JordanValue.length || 0
                    },
                    {
                        name: "Kuwait",
                        value: KuwaitValue.length || 0
                    },
                    {
                        name: "Lebanon",
                        value: LebanonValue.length || 0
                    },
                    {
                        name: "Libya",
                        value: LibyaValue.length || 0
                    },
                    {
                        name: "Morocco",
                        value: MoroccoValue.length || 0
                    },
                    {
                        name: "Oman",
                        value: OmanValue.length || 0
                    },
                    {
                        name: "Pakistan",
                        value: PakistanValue.length || 0
                    },
                    {
                        name: "Qatar",
                        value: QatarValue.length || 0
                    },
                    {
                        name: "Saudi Arabia",
                        value: SaudiArabiaValue.length || 0
                    },
                    {
                        name: "Somalia",
                        value: SomaliaValue.length || 0
                    },
                    {
                        name: "Syria",
                        value: SyriaValue.length || 0
                    },
                    {
                        name: "Tunisia",
                        value: TunisiaValue.length || 0
                    },
                    {
                        name: "Turkey",
                        value: TurkeyValue.length || 0
                    },
                    {
                        name: "The United Arab Emirates",
                        value: TheUnitedArabEmiratesValue.length || 0
                    },
                    {
                        name: "Yemen",
                        value: YemenValue.length || 0
                    }
                ]
            },
            {
                name: "Europe",
                children: [
                    {
                        name: "Albania",
                        value: AlbaniaValue.length || 0
                    },
                    {
                        name: "Andorra",
                        value: AndorraValue.length || 0
                    },
                    {
                        name: "Armenia",
                        value: ArmeniaValue.length || 0
                    },
                    {
                        name: "Austria",
                        value: AustriaValue.length || 0
                    },
                    {
                        name: "Belarus",
                        value: BelarusValue.length || 0
                    },
                    {
                        name: "Belgium",
                        value: BelgiumValue.length || 0
                    },
                    {
                        name: "Bosnia and Herzegovina",
                        value: BosniaandHerzegovinaValue.length || 0
                    },
                    {
                        name: "Bulgaria",
                        value: BulgariaValue.length || 0
                    },
                    {
                        name: "Croatia",
                        value: CroatiaValue.length || 0
                    },
                    {
                        name: "Cyprus",
                        value: CyprusValue.length || 0
                    },
                    {
                        name: "Czech Republic",
                        value: CzechRepublicValue.length || 0
                    },
                    {
                        name: "Denmark",
                        value: DenmarkValue.length || 0
                    },
                    {
                        name: "Estonia",
                        value: EstoniaValue.length || 0
                    },
                    {
                        name: "Finland",
                        value: FinlandValue.length || 0
                    },
                    {
                        name: "France",
                        value: FranceValue.length || 0
                    },
                    {
                        name: "Georgia",
                        value: GeorgiaValue.length || 0
                    },
                    {
                        name: "Germany",
                        value: GermanyValue.length || 0
                    },
                    {
                        name: "Greece",
                        value: GreeceValue.length || 0
                    },
                    {
                        name: "Hungary",
                        value: HungaryValue.length || 0
                    },
                    {
                        name: "Iceland",
                        value: IcelandValue.length || 0
                    },
                    {
                        name: "Ireland",
                        value: IrelandValue.length || 0
                    },
                    {
                        name: "Italy",
                        value: ItalyValue.length || 0
                    },
                    {
                        name: "Kosovo",
                        value: KosovoValue.length || 0
                    },
                    {
                        name: "Latvia",
                        value: LatviaValue.length || 0
                    },
                    {
                        name: "Liechtenstein",
                        value: LiechtensteinValue.length || 0
                    },
                    {
                        name: "Lithuania",
                        value: LithuaniaValue.length || 0
                    },
                    {
                        name: "Luxembourg",
                        value: LuxembourgValue.length || 0
                    },
                    {
                        name: "Macedonia",
                        value: MacedoniaValue.length || 0
                    },
                    {
                        name: "Malta",
                        value: MaltaValue.length || 0
                    },
                    {
                        name: "Moldova",
                        value: MoldovaValue.length || 0
                    },
                    {
                        name: "Monaco",
                        value: MonacoValue.length || 0
                    },
                    {
                        name: "Montenegro",
                        value: MontenegroValue.length || 0
                    },
                    {
                        name: "Netherlands",
                        value: NetherlandsValue.length || 0
                    },
                    {
                        name: "Norway",
                        value: NorwayValue.length || 0
                    },
                    {
                        name: "Poland",
                        value: PolandValue.length || 0
                    },
                    {
                        name: "Portugal",
                        value: PortugalValue.length || 0
                    },
                    {
                        name: "Romania",
                        value: RomaniaValue.length || 0
                    },
                    {
                        name: "Russia",
                        value: RussiaValue.length || 0
                    },
                    {
                        name: "San Marino",
                        value: SanMarinoValue.length || 0
                    },
                    {
                        name: "Serbia",
                        value: SerbiaValue.length || 0
                    },
                    {
                        name: "Slovakia",
                        value: SlovakiaValue.length || 0
                    },
                    {
                        name: "Slovenia",
                        value: SloveniaValue.length || 0
                    },
                    {
                        name: "Spain",
                        value: SpainValue.length || 0
                    },
                    {
                        name: "Sweden",
                        value: SwedenValue.length || 0
                    },
                    {
                        name: "Switzerland",
                        value: SwitzerlandValue.length || 0
                    },
                    {
                        name: "Ukraine",
                        value: UkraineValue.length || 0
                    },
                    {
                        name: "United Kingdom of Great Britain and Northern Ireland",
                        value: UnitedKingdomofGreatBritainandNorthernIrelandValue.length || 0
                    },
                    {
                        name: "Vatican City",
                        value: VaticanCityValue.length || 0
                    }
                ]
            },
            {
                name: "North America",
                children: [
                    {
                        name: "Canada",
                        value: CanadaValue.length || 0
                    },
                    {
                        name: "Greenland ",
                        value: GreenlandValue.length || 0
                    },
                    {
                        name: "Mexico",
                        value: MexicoValue.length || 0
                    },
                    {
                        name: "The United States of America",
                        value: TheUnitedStatesofAmericaValue.length || 0
                    }
                ]
            },
            {
                name: "Central America and the Caribbean",
                children: [
                    {
                        name: "Antigua and Barbuda",
                        value: AntiguaandBarbudaValue.length || 0
                    },
                    {
                        name: "The Bahamas",
                        value: TheBahamasValue.length || 0
                    },
                    {
                        name: "Barbados",
                        value: BarbadosValue.length || 0
                    },
                    {
                        name: "Belize",
                        value: BelizeValue.length || 0
                    },
                    {
                        name: "Costa Rica",
                        value: CostaRicaValue.length || 0
                    },
                    {
                        name: "Cuba",
                        value: CubaValue.length || 0
                    },
                    {
                        name: "Dominica",
                        value: DominicaValue.length || 0
                    },
                    {
                        name: "Dominican Republic",
                        value: DominicanRepublicValue.length || 0
                    },
                    {
                        name: "El Salvador",
                        value: ElSalvadorValue.length || 0
                    },
                    {
                        name: "Grenada",
                        value: GrenadaValue.length || 0
                    },
                    {
                        name: "Guatemala",
                        value: GuatemalaValue.length || 0
                    },
                    {
                        name: "Haiti",
                        value: HaitiValue.length || 0
                    },
                    {
                        name: "Honduras",
                        value: HondurasValue.length || 0
                    },
                    {
                        name: "Jamaica",
                        value: JamaicaValue.length || 0
                    },
                    {
                        name: "Nicaragua",
                        value: NicaraguaValue.length || 0
                    },
                    {
                        name: "Panama",
                        value: PanamaValue.length || 0
                    },
                    {
                        name: "Saint Kitts and Nevis",
                        value: SaintKittsandNevisValue.length || 0
                    },
                    {
                        name: "Saint Lucia",
                        value: SaintLuciaValue.length || 0
                    },
                    {
                        name: "Saint Vincent and the Grenadines",
                        value: SaintVincentandtheGrenadinesValue.length || 0
                    },
                    {
                        name: "Trinidad and Tobago",
                        value: TrinidadandTobagoValue.length || 0
                    }
                ]
            },
            {
                name: "South America",
                children: [
                    {
                        name: "Argentina",
                        value: ArgentinaValue.length || 0
                    },
                    {
                        name: "Bolivia",
                        value: BoliviaValue.length || 0
                    },
                    {
                        name: "Brazil",
                        value: BrazilValue.length || 0
                    },
                    {
                        name: "Chile",
                        value: ChileValue.length || 0
                    },
                    {
                        name: "Colombia",
                        value: ColombiaValue.length || 0
                    },
                    {
                        name: "Ecuador",
                        value: EcuadorValue.length || 0
                    },
                    {
                        name: "Guyana",
                        value: GuyanaValue.length || 0
                    },
                    {
                        name: "Paraguay",
                        value: ParaguayValue.length || 0
                    },
                    {
                        name: "Peru",
                        value: PeruValue.length || 0
                    },
                    {
                        name: "Suriname",
                        value: SurinameValue.length || 0
                    },
                    {
                        name: "Uruguay",
                        value: UruguayValue.length || 0
                    },
                    {
                        name: "Venezuela",
                        value: VenezuelaValue.length || 0
                    }
                ]
            },
            {
                name: "Oceania",
                children: [
                    {
                        name: "Australia",
                        value: AustraliaValue.length || 0
                    },
                    {
                        name: "Fiji",
                        value: FijiValue.length || 0
                    },
                    {
                        name: "Kiribati",
                        value: KiribatiValue.length || 0
                    },
                    {
                        name: "Marshall Islands",
                        value: MarshallIslandsValue.length || 0
                    },
                    {
                        name: "Micronesia",
                        value: MicronesiaValue.length || 0
                    },
                    {
                        name: "Nauru",
                        value: NauruValue.length || 0
                    },
                    {
                        name: "New Zealand",
                        value: NewZealandValue.length || 0
                    },
                    {
                        name: "Palau",
                        value: PalauValue.length || 0
                    },
                    {
                        name: "Papua New Guinea",
                        value: PapuaNewGuineaValue.length || 0
                    },
                    {
                        name: "Samoa",
                        value: SamoaValue.length || 0
                    },
                    {
                        name: "Solomon Islands",
                        value: SolomonIslandsValue.length || 0
                    },
                    {
                        name: "Tonga",
                        value: TongaValue.length || 0
                    },
                    {
                        name: "Tuvalu",
                        value: TuvaluValue.length || 0
                    },
                    {
                        name: "Vanuatu",
                        value: VanuatuValue.length || 0
                    }
                ]
            },
            {
                name: "Africa",
                children: [
                    {
                        name: "Algeria",
                        value: AlgeriaValue.length || 0
                    },
                    {
                        name: "Angola",
                        value: AngolaValue.length || 0
                    },
                    {
                        name: "Benin",
                        value: BeninValue.length || 0
                    },
                    {
                        name: "Botswana",
                        value: BotswanaValue.length || 0
                    },
                    {
                        name: "Burkina Faso",
                        value: BurkinaFasoValue.length || 0
                    },
                    {
                        name: "Burundi",
                        value: BurundiValue.length || 0
                    },
                    {
                        name: "Cameroon",
                        value: CameroonValue.length || 0
                    },
                    {
                        name: "Cape Verde",
                        value: CapeVerdeValue.length || 0
                    },
                    {
                        name: "Central African Republic",
                        value: CentralAfricanRepublicValue.length || 0
                    },
                    {
                        name: "Chad",
                        value: ChadValue.length || 0
                    },
                    {
                        name: "Comoros",
                        value: ComorosValue.length || 0
                    },
                    {
                        name: "Congo",
                        value: CongoValue.length || 0
                    },
                    {
                        name: "Côte d'Ivoire",
                        value: CôtedIvoireValue.length || 0
                    },
                    {
                        name: "Democratic Republic of the Congo",
                        value: DemocraticRepublicoftheCongoValue.length || 0
                    },
                    {
                        name: "Djibouti",
                        value: DjiboutiValue.length || 0
                    },
                    {
                        name: "Egypt",
                        value: EgyptValue.length || 0
                    },
                    {
                        name: "Equatorial Guinea",
                        value: EquatorialGuineaValue.length || 0
                    },
                    {
                        name: "Eritrea",
                        value: EritreaValue.length || 0
                    },
                    {
                        name: "Ethiopia",
                        value: EthiopiaValue.length || 0
                    },
                    {
                        name: "Gabon",
                        value: GabonValue.length || 0
                    },
                    {
                        name: "Gambia",
                        value: GambiaValue.length || 0
                    },
                    {
                        name: "Ghana",
                        value: GhanaValue.length || 0
                    },
                    {
                        name: "Guinea",
                        value: GuineaValue.length || 0
                    },
                    {
                        name: "Guinea-Bissau",
                        value: BissauValue.length || 0
                    },
                    {
                        name: "Kenya",
                        value: KenyaValue.length || 0
                    },
                    {
                        name: "Lesotho",
                        value: LesothoValue.length || 0
                    },
                    {
                        name: "Liberia",
                        value: LiberiaValue.length || 0
                    },
                    {
                        name: "Libya",
                        value: LibyaValue.length || 0
                    },
                    {
                        name: "Madagascar",
                        value: MadagascarValue.length || 0
                    },
                    {
                        name: "Malawi",
                        value: MalawiValue.length || 0
                    },
                    {
                        name: "Mali",
                        value: MaliValue.length || 0
                    },
                    {
                        name: "Mauritania",
                        value: MauritaniaValue.length || 0
                    },
                    {
                        name: "Mauritius",
                        value: MauritiusValue.length || 0
                    },
                    {
                        name: "Morocco",
                        value: MoroccoValue.length || 0
                    },
                    {
                        name: "Mozambique",
                        value: MozambiqueValue.length || 0
                    },
                    {
                        name: "Namibia",
                        value: NamibiaValue.length || 0
                    },
                    {
                        name: "Niger",
                        value: NigerValue.length || 0
                    },
                    {
                        name: "Nigeria",
                        value: NigeriaValue.length || 0
                    },
                    {
                        name: "Rwanda",
                        value: RwandaValue.length || 0
                    },
                    {
                        name: "Sao Tome and Principe",
                        value: SaoTomeandPrincipeValue.length || 0
                    },
                    {
                        name: "Senegal",
                        value: SenegalValue.length || 0
                    },
                    {
                        name: "Seychelles",
                        value: SeychellesValue.length || 0
                    },
                    {
                        name: "Sierra Leone",
                        value: SierraLeoneValue.length || 0
                    },
                    {
                        name: "Somalia",
                        value: SomaliaValue.length || 0
                    },
                    {
                        name: "South Africa",
                        value: SouthAfricaValue.length || 0
                    },
                    {
                        name: "South Sudan",
                        value: SouthSudanValue.length || 0
                    },
                    {
                        name: "Sudan",
                        value: SudanValue.length || 0
                    },
                    {
                        name: "Swaziland",
                        value: SwazilandValue.length || 0
                    },
                    {
                        name: "Tanzania",
                        value: TanzaniaValue.length || 0
                    },
                    {
                        name: "Togo",
                        value: TogoValue.length || 0
                    },
                    {
                        name: "Tunisia",
                        value: TunisiaValue.length || 0
                    },
                    {
                        name: "Uganda",
                        value: UgandaValue.length || 0
                    },
                    {
                        name: "Zambia",
                        value: ZambiaValue.length || 0
                    },
                    {
                        name: "Zimbabwe",
                        value: ZimbabweValue.length || 0
                    }
                ]
            }
        ]
    };

    var filteredResultString = JSON.stringify(data);
    filteredResult = JSON.parse(filteredResultString);

    console.log(filteredResult);

    for (var i = 0; i < filteredResult.children.length; i++) {
        for (var j = 0; j < filteredResult.children[i].children.length; j++) {
            if (filteredResult.children[i].children[j].value == 0) {
                filteredResult.children[i].children.splice(j, 1);
                j--;
            }
        }
    }

    series.data.setAll(
        [filteredResult]
    );

    series.set("selectedDataItem", series.dataItems[0]);
    series.appear(1000, 100);


}