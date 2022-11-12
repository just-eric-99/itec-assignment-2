var asia = ["Bangladesh", "Bhutan", "Brunei", "Cambodia", "China", "India", "Indonesia", "Japan", "Kazakhstan", "North Korea", "South Korea", "Kyrgyzstan", "Laos", "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal", "Philippines", "Singapore", "Sri Lanka", "Taiwan", "Tajikistan", "Thailand", "Turkmenistan", "Uzbekistan", "Vietnam"]
var middleEastNorthAfrica = ["Afghanistan", "Algeria", "Azerbaijan", "Bahrain", "Egypt", "Iran", "Iraq", "Israel", "Jordan", "Kuwait", "Lebanon", "Libya", "Morocco", "Oman", "Pakistan", "Qatar", "Saudi Arabia", "Somalia", "Syria", "Tunisia", "Turkey", "The United Arab Emirates", "Yemen"]
var europe = ["Albania", "Andorra", "Armenia", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia", "Germany", "Greece", "Hungary", "Iceland ", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom of Great Britain and Northern Ireland", "Vatican City"]
var northAmerica = ["Canada", "Greenland", "Mexico", "The United States of America"]
var centralAmericaAndTheCarribbean = ["Antigua and Barbuda", "The Bahamas", "Barbados", "Belize", "Costa Rica", "Cuba", "Dominica", "Dominican Republic", "El Salvador", "Grenada", "Guatemala", "Haiti", "Honduras", "Jamaica", "Nicaragua", "Panama", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Trinidad and Tobago"]
var southAmerica = ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"]
var oceania = ["Australia", "Fiji", "Kiribati", "Marshall Islands", "Micronesia", "Nauru", "New Zealand", "Palau", "Papua New Guinea", "Samoa", "Solomon Islands", "Tonga", "Tuvalu", "Vanuatu"]
var africa = ["Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", "Cape Verde", "Central African Republic", "Chad", "Comoros", "Congo", "Côte d'Ivoire", "Democratic Republic of the Congo", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Swaziland", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"]


function regionSelected(regionValue) {
    var countrySelect = document.getElementById("country");
    countrySelect.options.length = 0;

    if (regionValue == "Asia") {
        asia.forEach(function (country) {
            var option = document.createElement("option");
            option.value = country;
            option.text = country;
            countrySelect.appendChild(option);
        });

        countrySelect.disabled = false;
    }
    else if (regionValue == "Middle East, North Africa, and Greater Arabia") {
        middleEastNorthAfrica.forEach(function (country) {
            var option = document.createElement("option");
            option.value = country;
            option.text = country;
            countrySelect.appendChild(option);
        });

        countrySelect.disabled = false;
    }
    else if (regionValue == "Europe") {
        europe.forEach(function (country) {
            var option = document.createElement("option");
            option.value = country;
            option.text = country;
            countrySelect.appendChild(option);
        });

        countrySelect.disabled = false;
    }
    else if (regionValue == "North America") {
        northAmerica.forEach(function (country) {
            var option = document.createElement("option");
            option.value = country;
            option.text = country;
            countrySelect.appendChild(option);
        });

        countrySelect.disabled = false;
    }
    else if (regionValue == "Central America and the Caribbean") {
        centralAmericaAndTheCarribbean.forEach(function (country) {
            var option = document.createElement("option");
            option.value = country;
            option.text = country;
            countrySelect.appendChild(option);
        });

        countrySelect.disabled = false;
    }
    else if (regionValue == "South America") {
        southAmerica.forEach(function (country) {
            var option = document.createElement("option");
            option.value = country;
            option.text = country;
            countrySelect.appendChild(option);
        });

        countrySelect.disabled = false;
    }
    else if (regionValue == "Oceania") {
        oceania.forEach(function (country) {
            var option = document.createElement("option");
            option.value = country;
            option.text = country;
            countrySelect.appendChild(option);
        });

        countrySelect.disabled = false;
    }
    else if (regionValue == "Africa") {
        africa.forEach(function (country) {
            var option = document.createElement("option");
            option.value = country;
            option.text = country;
            countrySelect.appendChild(option);
        });

        countrySelect.disabled = false;
    }
    else {
        countrySelect.disabled = true;
    }

    
}