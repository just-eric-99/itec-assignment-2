var nt = ["Islands (離島區)", "Kwai Tsing (葵青區)", "North (北區)", "Sai Kung (西貢區)", "Sha Tin (沙田區)", "Tai Po (大埔區)", "Tsuen Wan (荃灣區)", "Tuen Mun (屯門區)", "Yuen Long (元朗區)"]
var kln = ["Kowloon City (九龍城區)", "Kwun Tong (觀塘區)", "Sham Shui Po (深水埗區)", "Wong Tai Sin (黃大仙區)", "Yau Tsim Mong (油尖旺區)"]
var island = ["Central and Western (中西區)", "Eastern (東區)", "Southern (南區)", "Wan Chai (灣仔區)"]


function areaSelected(areaValue) {
    var districtSelect = document.getElementById("districts");
    districtSelect.options.length = 0;

    if (areaValue == "New Territories") {
        nt.forEach(function (country) {
            var option = document.createElement("option");
            option.value = country;
            option.text = country;
            districtSelect.appendChild(option);
        });
        districtSelect.disabled = false;
    }
    else if (areaValue == "Kowloon") {
        kln.forEach(function (country) {
            var option = document.createElement("option");
            option.value = country;
            option.text = country;
            districtSelect.appendChild(option);
        });
        districtSelect.disabled = false;
    }
    else if (areaValue == "Hong Kong Island") {
        island.forEach(function (country) {
            var option = document.createElement("option");
            option.value = country;
            option.text = country;
            districtSelect.appendChild(option);
        });
        districtSelect.disabled = false;
    }
    else {
        districtSelect.disabled = true;
    }
}