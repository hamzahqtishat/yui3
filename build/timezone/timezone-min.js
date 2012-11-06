YUI.add("timezone",function(e,t){function r(e,t){t=t||2;var n=e+"";for(var r=n.length;r<t;r++)n="0"+n;return n}function i(e){var t=new Date(e.getFullYear(),0,1);return Math.ceil((e-t)/864e5)}function s(e){return e<0?Math.ceil(e):Math.floor(e)}TimezoneData={},TimezoneData.TRANSITION_YEAR=2011,TimezoneData.TIMEZONE_RULES=[{tzId:"Asia/Riyadh88",standard:{offset:187}},{tzId:"Asia/Kabul",standard:{offset:270}},{tzId:"Asia/Yerevan",standard:{offset:240}},{tzId:"Asia/Baku",standard:{offset:240,mon:10,week:-1,wkday:1,hour:5,min:0,sec:0},daylight:{offset:300,mon:3,week:-1,wkday:1,hour:4,min:0,sec:0}},{tzId:"Asia/Bahrain",standard:{offset:180}},{tzId:"Asia/Dhaka",standard:{offset:360}},{tzId:"Asia/Thimphu",standard:{offset:360}},{tzId:"Indian/Chagos",standard:{offset:360}},{tzId:"Asia/Brunei",standard:{offset:480}},{tzId:"Asia/Rangoon",standard:{offset:390}},{tzId:"Asia/Phnom_Penh",standard:{offset:420}},{tzId:"Asia/Harbin",standard:{offset:480}},{tzId:"Asia/Shanghai",standard:{offset:480}},{tzId:"Asia/Chongqing",standard:{offset:480}},{tzId:"Asia/Urumqi",standard:{offset:480}},{tzId:"Asia/Kashgar",standard:{offset:480}},{tzId:"Asia/Hong_Kong",standard:{offset:480}},{tzId:"Asia/Taipei",standard:{offset:480}},{tzId:"Asia/Macau",standard:{offset:480}},{tzId:"Asia/Nicosia",standard:{offset:120}},{tzId:"Asia/Tbilisi",standard:{offset:240}},{tzId:"Asia/Dili",standard:{offset:540}},{tzId:"Asia/Kolkata",standard:{offset:330}},{tzId:"Asia/Jakarta",standard:{offset:427}},{tzId:"Asia/Pontianak",standard:{offset:540}},{tzId:"Asia/Tehran",standard:{offset:210}},{tzId:"Asia/Baghdad",standard:{offset:180}},{tzId:"Asia/Jerusalem",standard:{offset:120}},{tzId:"Asia/Tokyo",standard:{offset:540}},{tzId:"Asia/Amman",standard:{offset:120}},{tzId:"Asia/Almaty",standard:{offset:360}},{tzId:"Asia/Qyzylorda",standard:{offset:360}},{tzId:"Asia/Aqtobe",standard:{offset:300}},{tzId:"Asia/Aqtau",standard:{offset:300}},{tzId:"Asia/Oral",standard:{offset:300}},{tzId:"Asia/Bishkek",standard:{offset:360}},{tzId:"Asia/Seoul",standard:{offset:540}},{tzId:"Asia/Kuwait",standard:{offset:180}},{tzId:"Asia/Vientiane",standard:{offset:420}},{tzId:"Asia/Beirut",standard:{offset:120}},{tzId:"Asia/Kuala_Lumpur",standard:{offset:480}},{tzId:"Asia/Kuching",standard:{offset:480}},{tzId:"Indian/Maldives",standard:{offset:300}},{tzId:"Asia/Hovd",standard:{offset:420}},{tzId:"Asia/Ulaanbaatar",standard:{offset:480}},{tzId:"Asia/Choibalsan",standard:{offset:480}},{tzId:"Asia/Kathmandu",standard:{offset:345}},{tzId:"Asia/Muscat",standard:{offset:240}},{tzId:"Asia/Karachi",standard:{offset:300}},{tzId:"Asia/Gaza",standard:{offset:120}},{tzId:"Asia/Hebron",standard:{offset:120}},{tzId:"Asia/Manila",standard:{offset:480}},{tzId:"Asia/Qatar",standard:{offset:180}},{tzId:"Asia/Riyadh",standard:{offset:180}},{tzId:"Asia/Singapore",standard:{offset:480}},{tzId:"Asia/Colombo",standard:{offset:330}},{tzId:"Asia/Damascus",standard:{offset:120,mon:10,week:-1,wkday:6,hour:0,min:0,sec:0},daylight:{offset:180,mon:3,week:-1,wkday:6,hour:0,min:0,sec:0}},{tzId:"Asia/Dushanbe",standard:{offset:300}},{tzId:"Asia/Bangkok",standard:{offset:420}},{tzId:"Asia/Ashgabat",standard:{offset:300}},{tzId:"Asia/Dubai",standard:{offset:240}},{tzId:"Asia/Samarkand",standard:{offset:300}},{tzId:"Asia/Ho_Chi_Minh",standard:{offset:420}},{tzId:"Asia/Aden",standard:{offset:180}},{tzId:"Australia/Darwin",standard:{offset:570}},{tzId:"Australia/Perth",standard:{offset:525}},{tzId:"Australia/Brisbane",standard:{offset:600}},{tzId:"Australia/Adelaide",standard:{offset:570,mon:4,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:630,mon:10,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"Australia/Hobart",standard:{offset:600}},{tzId:"Australia/Melbourne",standard:{offset:600,mon:4,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:660,mon:10,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"Australia/Sydney",standard:{offset:570,mon:4,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:630,mon:10,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"Australia/Lord_Howe",standard:{offset:630,mon:4,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:660,mon:10,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"Indian/Christmas",standard:{offset:420}},{tzId:"Pacific/Rarotonga",standard:{offset:-600}},{tzId:"Indian/Cocos",standard:{offset:390}},{tzId:"Pacific/Fiji",standard:{offset:720}},{tzId:"Pacific/Gambier",standard:{offset:-600}},{tzId:"Pacific/Guam",standard:{offset:600}},{tzId:"Pacific/Tarawa",standard:{offset:840}},{tzId:"Pacific/Saipan",standard:{offset:600}},{tzId:"Pacific/Majuro",standard:{offset:720}},{tzId:"Pacific/Chuuk",standard:{offset:660}},{tzId:"Pacific/Nauru",standard:{offset:720}},{tzId:"Pacific/Noumea",standard:{offset:660}},{tzId:"Pacific/Auckland",standard:{offset:765}},{tzId:"Pacific/Niue",standard:{offset:-660}},{tzId:"Pacific/Norfolk",standard:{offset:690}},{tzId:"Pacific/Palau",standard:{offset:540}},{tzId:"Pacific/Port_Moresby",standard:{offset:600}},{tzId:"Pacific/Pitcairn",standard:{offset:-480}},{tzId:"Pacific/Pago_Pago",standard:{offset:-660}},{tzId:"Pacific/Apia",standard:{offset:780}},{tzId:"Pacific/Guadalcanal",standard:{offset:660}},{tzId:"Pacific/Fakaofo",standard:{offset:840}},{tzId:"Pacific/Tongatapu",standard:{offset:780}},{tzId:"Pacific/Funafuti",standard:{offset:720}},{tzId:"Pacific/Johnston",standard:{offset:-600}},{tzId:"Pacific/Midway",standard:{offset:-660}},{tzId:"Pacific/Wake",standard:{offset:720}},{tzId:"Pacific/Efate",standard:{offset:660}},{tzId:"Pacific/Wallis",standard:{offset:720}},{tzId:"Etc/GMT",standard:{offset:0}},{tzId:"Etc/GMT-14",standard:{offset:0}},{tzId:"Asia/Riyadh87",standard:{offset:187}},{tzId:"America/Argentina/Buenos_Aires",standard:{offset:-180}},{tzId:"America/Argentina/Cordoba",standard:{offset:-180}},{tzId:"America/Argentina/Salta",standard:{offset:-180}},{tzId:"America/Argentina/Tucuman",standard:{offset:-180}},{tzId:"America/Argentina/La_Rioja",standard:{offset:-180}},{tzId:"America/Argentina/San_Juan",standard:{offset:-180}},{tzId:"America/Argentina/Jujuy",standard:{offset:-180}},{tzId:"America/Argentina/Catamarca",standard:{offset:-180}},{tzId:"America/Argentina/Mendoza",standard:{offset:-180}},{tzId:"America/Argentina/San_Luis",standard:{offset:-240}},{tzId:"America/Argentina/Rio_Gallegos",standard:{offset:-180}},{tzId:"America/Argentina/Ushuaia",standard:{offset:-180}},{tzId:"America/Aruba",standard:{offset:-240}},{tzId:"America/La_Paz",standard:{offset:-240}},{tzId:"America/Noronha",standard:{offset:-120}},{tzId:"America/Belem",standard:{offset:-180}},{tzId:"America/Santarem",standard:{offset:-180}},{tzId:"America/Fortaleza",standard:{offset:-180}},{tzId:"America/Recife",standard:{offset:-180}},{tzId:"America/Araguaina",standard:{offset:-180}},{tzId:"America/Maceio",standard:{offset:-180}},{tzId:"America/Bahia",standard:{offset:-180}},{tzId:"America/Sao_Paulo",standard:{offset:-180}},{tzId:"America/Campo_Grande",standard:{offset:-240}},{tzId:"America/Cuiaba",standard:{offset:-240}},{tzId:"America/Porto_Velho",standard:{offset:-240}},{tzId:"America/Boa_Vista",standard:{offset:-240}},{tzId:"America/Manaus",standard:{offset:-240}},{tzId:"America/Eirunepe",standard:{offset:-240}},{tzId:"America/Rio_Branco",standard:{offset:-240}},{tzId:"America/Santiago",standard:{offset:-360}},{tzId:"America/Bogota",standard:{offset:-300}},{tzId:"America/Curacao",standard:{offset:-240}},{tzId:"America/Guayaquil",standard:{offset:-360}},{tzId:"Atlantic/Stanley",standard:{offset:-180}},{tzId:"America/Cayenne",standard:{offset:-180}},{tzId:"America/Guyana",standard:{offset:-180}},{tzId:"America/Asuncion",standard:{offset:-240,mon:4,week:2,wkday:1,hour:0,min:0,sec:0},daylight:{offset:-180,mon:10,week:2,wkday:1,hour:0,min:0,sec:0}},{tzId:"America/Lima",standard:{offset:-300}},{tzId:"Atlantic/South_Georgia",standard:{offset:-120}},{tzId:"America/Paramaribo",standard:{offset:-180}},{tzId:"America/Port_of_Spain",standard:{offset:-240}},{tzId:"America/Montevideo",standard:{offset:-180}},{tzId:"America/Caracas",standard:{offset:-210}},{tzId:"Antarctica/Casey",standard:{offset:480}},{tzId:"Antarctica/Davis",standard:{offset:360}},{tzId:"Antarctica/Macquarie",standard:{offset:660}},{tzId:"Indian/Kerguelen",standard:{offset:300}},{tzId:"Antarctica/DumontDUrville",standard:{offset:600}},{tzId:"Antarctica/Syowa",standard:{offset:180}},{tzId:"Antarctica/Vostok",standard:{offset:360}},{tzId:"Antarctica/Rothera",standard:{offset:-180}},{tzId:"Antarctica/Palmer",standard:{offset:-240}},{tzId:"Antarctica/McMurdo",standard:{offset:720}},{tzId:"Asia/Riyadh89",standard:{offset:187}},{tzId:"Africa/Algiers",standard:{offset:60}},{tzId:"Africa/Luanda",standard:{offset:60}},{tzId:"Africa/Porto-Novo",standard:{offset:60}},{tzId:"Africa/Gaborone",standard:{offset:120}},{tzId:"Africa/Ouagadougou",standard:{offset:0}},{tzId:"Africa/Bujumbura",standard:{offset:120}},{tzId:"Africa/Douala",standard:{offset:60}},{tzId:"Atlantic/Cape_Verde",standard:{offset:-60}},{tzId:"Africa/Bangui",standard:{offset:60}},{tzId:"Africa/Ndjamena",standard:{offset:60}},{tzId:"Indian/Comoro",standard:{offset:180}},{tzId:"Africa/Kinshasa",standard:{offset:120}},{tzId:"Africa/Brazzaville",standard:{offset:60}},{tzId:"Africa/Abidjan",standard:{offset:0}},{tzId:"Africa/Djibouti",standard:{offset:180}},{tzId:"Africa/Cairo",standard:{offset:120}},{tzId:"Africa/Malabo",standard:{offset:60}},{tzId:"Africa/Asmara",standard:{offset:180}},{tzId:"Africa/Addis_Ababa",standard:{offset:180}},{tzId:"Africa/Libreville",standard:{offset:60}},{tzId:"Africa/Banjul",standard:{offset:0}},{tzId:"Africa/Accra",standard:{offset:0}},{tzId:"Africa/Conakry",standard:{offset:0}},{tzId:"Africa/Bissau",standard:{offset:0}},{tzId:"Africa/Nairobi",standard:{offset:180}},{tzId:"Africa/Maseru",standard:{offset:120}},{tzId:"Africa/Monrovia",standard:{offset:0}},{tzId:"Africa/Tripoli",standard:{offset:60}},{tzId:"Indian/Antananarivo",standard:{offset:180}},{tzId:"Africa/Blantyre",standard:{offset:120}},{tzId:"Africa/Bamako",standard:{offset:0}},{tzId:"Africa/Nouakchott",standard:{offset:0}},{tzId:"Indian/Mauritius",standard:{offset:240}},{tzId:"Indian/Mayotte",standard:{offset:180}},{tzId:"Africa/Casablanca",standard:{offset:0,mon:9,week:-1,wkday:1,hour:3,min:0,sec:0},daylight:{offset:60,mon:4,week:-1,wkday:1,hour:2,min:0,sec:0}},{tzId:"Africa/El_Aaiun",standard:{offset:0}},{tzId:"Africa/Maputo",standard:{offset:120}},{tzId:"Africa/Windhoek",standard:{offset:60}},{tzId:"Africa/Niamey",standard:{offset:60}},{tzId:"Africa/Lagos",standard:{offset:60}},{tzId:"Indian/Reunion",standard:{offset:240}},{tzId:"Africa/Kigali",standard:{offset:120}},{tzId:"Atlantic/St_Helena",standard:{offset:0}},{tzId:"Africa/Sao_Tome",standard:{offset:0}},{tzId:"Africa/Dakar",standard:{offset:0}},{tzId:"Indian/Mahe",standard:{offset:240}},{tzId:"Africa/Freetown",standard:{offset:0}},{tzId:"Africa/Mogadishu",standard:{offset:180}},{tzId:"Africa/Johannesburg",standard:{offset:120}},{tzId:"Africa/Khartoum",standard:{offset:180}},{tzId:"Africa/Juba",standard:{offset:180}},{tzId:"Africa/Mbabane",standard:{offset:120}},{tzId:"Africa/Dar_es_Salaam",standard:{offset:180}},{tzId:"Africa/Lome",standard:{offset:0}},{tzId:"Africa/Tunis",standard:{offset:60}},{tzId:"Africa/Kampala",standard:{offset:180}},{tzId:"Africa/Lusaka",standard:{offset:120}},{tzId:"Africa/Harare",standard:{offset:120}},{tzId:"Europe/London",standard:{offset:0}},{tzId:"WET",standard:{offset:0}},{tzId:"Europe/Tirane",standard:{offset:60}},{tzId:"Europe/Andorra",standard:{offset:60}},{tzId:"Europe/Vienna",standard:{offset:60}},{tzId:"Europe/Minsk",standard:{offset:180}},{tzId:"Europe/Brussels",standard:{offset:60}},{tzId:"Europe/Sofia",standard:{offset:120}},{tzId:"Europe/Prague",standard:{offset:60}},{tzId:"Europe/Copenhagen",standard:{offset:0}},{tzId:"America/Danmarkshavn",standard:{offset:-240,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-180,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"Europe/Tallinn",standard:{offset:120}},{tzId:"Europe/Helsinki",standard:{offset:120}},{tzId:"Europe/Paris",standard:{offset:9}},{tzId:"Europe/Berlin",standard:{offset:60}},{tzId:"Europe/Gibraltar",standard:{offset:60}},{tzId:"Europe/Athens",standard:{offset:120}},{tzId:"Europe/Budapest",standard:{offset:60}},{tzId:"Atlantic/Reykjavik",standard:{offset:0}},{tzId:"Europe/Rome",standard:{offset:60}},{tzId:"Europe/Riga",standard:{offset:120}},{tzId:"Europe/Vaduz",standard:{offset:60}},{tzId:"Europe/Vilnius",standard:{offset:120}},{tzId:"Europe/Luxembourg",standard:{offset:60}},{tzId:"Europe/Malta",standard:{offset:60}},{tzId:"Europe/Chisinau",standard:{offset:120}},{tzId:"Europe/Monaco",standard:{offset:60}},{tzId:"Europe/Amsterdam",standard:{offset:60}},{tzId:"Europe/Oslo",standard:{offset:60}},{tzId:"Europe/Warsaw",standard:{offset:60}},{tzId:"Europe/Lisbon",standard:{offset:0}},{tzId:"Europe/Bucharest",standard:{offset:120}},{tzId:"Europe/Kaliningrad",standard:{offset:180}},{tzId:"Europe/Moscow",standard:{offset:240}},{tzId:"Europe/Volgograd",standard:{offset:240}},{tzId:"Europe/Samara",standard:{offset:240}},{tzId:"Asia/Yekaterinburg",standard:{offset:360}},{tzId:"Asia/Omsk",standard:{offset:420}},{tzId:"Asia/Novosibirsk",standard:{offset:420}},{tzId:"Asia/Novokuznetsk",standard:{offset:420}},{tzId:"Asia/Krasnoyarsk",standard:{offset:480}},{tzId:"Asia/Irkutsk",standard:{offset:540}},{tzId:"Asia/Yakutsk",standard:{offset:600}},{tzId:"Asia/Vladivostok",standard:{offset:660}},{tzId:"Asia/Sakhalin",standard:{offset:660}},{tzId:"Asia/Magadan",standard:{offset:720}},{tzId:"Asia/Kamchatka",standard:{offset:720}},{tzId:"Asia/Anadyr",standard:{offset:720}},{tzId:"Europe/Belgrade",standard:{offset:60}},{tzId:"Europe/Madrid",standard:{offset:0}},{tzId:"Europe/Stockholm",standard:{offset:60}},{tzId:"Europe/Zurich",standard:{offset:60}},{tzId:"Europe/Istanbul",standard:{offset:0}},{tzId:"Europe/Kiev",standard:{offset:120}},{tzId:"Europe/Uzhgorod",standard:{offset:120}},{tzId:"Europe/Zaporozhye",standard:{offset:120}},{tzId:"Europe/Simferopol",standard:{offset:120}},{tzId:"EST",standard:{offset:0}},{tzId:"America/New_York",standard:{offset:-300,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-240,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Chicago",standard:{offset:-360,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-300,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/North_Dakota/Center",standard:{offset:-360,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-300,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/North_Dakota/New_Salem",standard:{offset:-360,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-300,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/North_Dakota/Beulah",standard:{offset:-360,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-300,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Denver",standard:{offset:-420,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-360,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Los_Angeles",standard:{offset:-480,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-420,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Juneau",standard:{offset:-600,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-540,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"Pacific/Honolulu",standard:{offset:-600}},{tzId:"America/Phoenix",standard:{offset:-420}},{tzId:"America/Boise",standard:{offset:-420,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-360,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Indiana/Indianapolis",standard:{offset:-300,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-240,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Indiana/Marengo",standard:{offset:-300,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-240,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Indiana/Vincennes",standard:{offset:-300,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-240,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Indiana/Tell_City",standard:{offset:-360,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-300,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Indiana/Petersburg",standard:{offset:-300,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-240,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Indiana/Knox",standard:{offset:-360,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-300,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Indiana/Winamac",standard:{offset:-300,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-240,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Indiana/Vevay",standard:{offset:-300,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-240,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Kentucky/Louisville",standard:{offset:-300,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-240,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Kentucky/Monticello",standard:{offset:-300,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-240,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Detroit",standard:{offset:-300,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-240,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Menominee",standard:{offset:-360,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-300,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/St_Johns",standard:{offset:-150,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-90,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Goose_Bay",standard:{offset:-240,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-180,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Halifax",standard:{offset:-240,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-180,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Moncton",standard:{offset:-240,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-180,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Blanc-Sablon",standard:{offset:-300,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-240,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Toronto",standard:{offset:-300}},{tzId:"America/Winnipeg",standard:{offset:-360,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-300,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Regina",standard:{offset:-360}},{tzId:"America/Edmonton",standard:{offset:-420,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-360,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Vancouver",standard:{offset:-420}},{tzId:"America/Pangnirtung",standard:{offset:-300,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-240,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Iqaluit",standard:{offset:-300,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-240,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Resolute",standard:{offset:-360,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-300,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Rankin_Inlet",standard:{offset:-360,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-300,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Cambridge_Bay",standard:{offset:-480,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-420,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Cancun",standard:{offset:-360,mon:10,week:-1,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-300,mon:4,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Merida",standard:{offset:-360,mon:10,week:-1,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-300,mon:4,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Matamoros",standard:{offset:-360,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-300,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Monterrey",standard:{offset:-360,mon:10,week:-1,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-300,mon:4,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Mexico_City",standard:{offset:-360,mon:10,week:-1,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-300,mon:4,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Ojinaga",standard:{offset:-420,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-360,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Chihuahua",standard:{offset:-420,mon:10,week:-1,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-360,mon:4,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Hermosillo",standard:{offset:-420}},{tzId:"America/Mazatlan",standard:{offset:-420,mon:10,week:-1,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-360,mon:4,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Bahia_Banderas",standard:{offset:-360,mon:10,week:-1,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-300,mon:4,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Tijuana",standard:{offset:-480,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-420,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Santa_Isabel",standard:{offset:-480,mon:10,week:-1,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-420,mon:4,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Anguilla",standard:{offset:-240}},{tzId:"America/Antigua",standard:{offset:-240}},{tzId:"America/Nassau",standard:{offset:-300,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-240,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Barbados",standard:{offset:-240}},{tzId:"America/Belize",standard:{offset:-360}},{tzId:"Atlantic/Bermuda",standard:{offset:-240,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-180,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Cayman",standard:{offset:-300}},{tzId:"America/Costa_Rica",standard:{offset:-360}},{tzId:"America/Havana",standard:{offset:-300}},{tzId:"America/Dominica",standard:{offset:-240}},{tzId:"America/Santo_Domingo",standard:{offset:-240}},{tzId:"America/El_Salvador",standard:{offset:-360}},{tzId:"America/Grenada",standard:{offset:-240}},{tzId:"America/Guadeloupe",standard:{offset:-240}},{tzId:"America/Guatemala",standard:{offset:-360}},{tzId:"America/Port-au-Prince",standard:{offset:-300}},{tzId:"America/Tegucigalpa",standard:{offset:-360}},{tzId:"America/Jamaica",standard:{offset:-300}},{tzId:"America/Martinique",standard:{offset:-240}},{tzId:"America/Montserrat",standard:{offset:-240}},{tzId:"America/Managua",standard:{offset:-360}},{tzId:"America/Panama",standard:{offset:-300}},{tzId:"America/Puerto_Rico",standard:{offset:-240}},{tzId:"America/St_Kitts",standard:{offset:-240}},{tzId:"America/St_Lucia",standard:{offset:-240}},{tzId:"America/Miquelon",standard:{offset:-180,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-120,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/St_Vincent",standard:{offset:-240}},{tzId:"America/Grand_Turk",standard:{offset:-300,mon:11,week:2,wkday:1,hour:2,min:0,sec:0},daylight:{offset:-240,mon:3,week:2,wkday:1,hour:2,min:0,sec:0}},{tzId:"America/Tortola",standard:{offset:-240}},{tzId:"America/St_Thomas",standard:{offset:-240}}],TimezoneLinks={"Mideast/Riyadh88":"Asia/Riyadh88","Europe/Nicosia":"Asia/Nicosia","US/Pacific-New":"America/Los_Angeles",GMT:"Etc/GMT","Etc/UTC":"Etc/GMT","Etc/Universal":"Etc/UTC","Etc/Zulu":"Etc/UTC","Etc/Greenwich":"Etc/GMT","Etc/GMT-0":"Etc/GMT","Etc/GMT+0":"Etc/GMT","Etc/GMT0":"Etc/GMT","Mideast/Riyadh87":"Asia/Riyadh87","America/Lower_Princes":"America/Curacao","America/Kralendijk":"America/Curacao","Antarctica/South_Pole":"Antarctica/McMurdo","Mideast/Riyadh89":"Asia/Riyadh89","Africa/Asmera":"Africa/Asmara","Africa/Timbuktu":"Africa/Bamako","America/Argentina/ComodRivadavia":"America/Argentina/Catamarca","America/Atka":"America/Adak","America/Buenos_Aires":"America/Argentina/Buenos_Aires","America/Catamarca":"America/Argentina/Catamarca","America/Coral_Harbour":"America/Atikokan","America/Cordoba":"America/Argentina/Cordoba","America/Ensenada":"America/Tijuana","America/Fort_Wayne":"America/Indiana/Indianapolis","America/Indianapolis":"America/Indiana/Indianapolis","America/Jujuy":"America/Argentina/Jujuy","America/Knox_IN":"America/Indiana/Knox","America/Louisville":"America/Kentucky/Louisville","America/Mendoza":"America/Argentina/Mendoza","America/Porto_Acre":"America/Rio_Branco","America/Rosario":"America/Argentina/Cordoba","America/Virgin":"America/St_Thomas","Asia/Ashkhabad":"Asia/Ashgabat","Asia/Chungking":"Asia/Chongqing","Asia/Dacca":"Asia/Dhaka","Asia/Katmandu":"Asia/Kathmandu","Asia/Calcutta":"Asia/Kolkata","Asia/Macao":"Asia/Macau","Asia/Tel_Aviv":"Asia/Jerusalem","Asia/Saigon":"Asia/Ho_Chi_Minh","Asia/Thimbu":"Asia/Thimphu","Asia/Ujung_Pandang":"Asia/Makassar","Asia/Ulan_Bator":"Asia/Ulaanbaatar","Atlantic/Faeroe":"Atlantic/Faroe","Atlantic/Jan_Mayen":"Europe/Oslo","Australia/ACT":"Australia/Sydney","Australia/Canberra":"Australia/Sydney","Australia/LHI":"Australia/Lord_Howe","Australia/NSW":"Australia/Sydney","Australia/North":"Australia/Darwin","Australia/Queensland":"Australia/Brisbane","Australia/South":"Australia/Adelaide","Australia/Tasmania":"Australia/Hobart","Australia/Victoria":"Australia/Melbourne","Australia/West":"Australia/Perth","Australia/Yancowinna":"Australia/Broken_Hill","Brazil/Acre":"America/Rio_Branco","Brazil/DeNoronha":"America/Noronha","Brazil/East":"America/Sao_Paulo","Brazil/West":"America/Manaus","Canada/Atlantic":"America/Halifax","Canada/Central":"America/Winnipeg","Canada/East-Saskatchewan":"America/Regina","Canada/Eastern":"America/Toronto","Canada/Mountain":"America/Edmonton","Canada/Newfoundland":"America/St_Johns","Canada/Pacific":"America/Vancouver","Canada/Saskatchewan":"America/Regina","Canada/Yukon":"America/Whitehorse","Chile/Continental":"America/Santiago","Chile/EasterIsland":"Pacific/Easter",Cuba:"America/Havana",Egypt:"Africa/Cairo",Eire:"Europe/Dublin","Europe/Belfast":"Europe/London","Europe/Tiraspol":"Europe/Chisinau",GB:"Europe/London","GB-Eire":"Europe/London","GMT+0":"Etc/GMT","GMT-0":"Etc/GMT",GMT0:"Etc/GMT",Greenwich:"Etc/GMT",Hongkong:"Asia/Hong_Kong",Iceland:"Atlantic/Reykjavik",Iran:"Asia/Tehran",Israel:"Asia/Jerusalem",Jamaica:"America/Jamaica",Japan:"Asia/Tokyo",Kwajalein:"Pacific/Kwajalein",Libya:"Africa/Tripoli","Mexico/BajaNorte":"America/Tijuana","Mexico/BajaSur":"America/Mazatlan","Mexico/General":"America/Mexico_City",NZ:"Pacific/Auckland","NZ-CHAT":"Pacific/Chatham",Navajo:"America/Denver",PRC:"Asia/Shanghai","Pacific/Samoa":"Pacific/Pago_Pago","Pacific/Yap":"Pacific/Chuuk","Pacific/Truk":"Pacific/Chuuk","Pacific/Ponape":"Pacific/Pohnpei",Poland:"Europe/Warsaw",Portugal:"Europe/Lisbon",ROC:"Asia/Taipei",ROK:"Asia/Seoul",Singapore:"Asia/Singapore",Turkey:"Europe/Istanbul",UCT:"Etc/UCT","US/Alaska":"America/Anchorage","US/Aleutian":"America/Adak","US/Arizona":"America/Phoenix","US/Central":"America/Chicago","US/East-Indiana":"America/Indiana/Indianapolis","US/Eastern":"America/New_York","US/Hawaii":"Pacific/Honolulu","US/Indiana-Starke":"America/Indiana/Knox","US/Michigan":"America/Detroit","US/Mountain":"America/Denver","US/Pacific":"America/Los_Angeles","US/Samoa":"Pacific/Pago_Pago",UTC:"Etc/UTC",Universal:"Etc/UTC","W-SU":"Europe/Moscow",Zulu:"Etc/UTC","Europe/Mariehamn":"Europe/Helsinki","Europe/Vatican":"Europe/Rome","Europe/San_Marino":"Europe/Rome","Arctic/Longyearbyen":"Europe/Oslo","Europe/Ljubljana":"Europe/Belgrade","Europe/Podgorica":"Europe/Belgrade","Europe/Sarajevo":"Europe/Belgrade","Europe/Skopje":"Europe/Belgrade","Europe/Zagreb":"Europe/Belgrade","Europe/Bratislava":"Europe/Prague","America/Shiprock":"America/Denver","America/St_Barthelemy":"America/Guadeloupe","America/Marigot":"America/Guadeloupe"};var n="timezone";AjxTimezone=function(){this.localeData=e.Intl.get(n)},AjxTimezone.getTransition=function(e,t){var n=[t||(new Date).getFullYear(),e.mon,1];if(e.mday)n[2]=e.mday;else if(e.wkday){var r=new Date(t,e.mon-1,1,e.hour,e.min,e.sec),i,s;if(e.week==-1){var o=new Date((new Date(r.getTime())).setMonth(e.mon,0)),u=o.getDate();i=o.getDay()+1,s=i>=e.wkday?i-e.wkday:7-e.wkday-i,n[2]=u-s}else i=r.getDay()+1,s=e.wkday==i?1:0,n[2]=e.wkday+7*(e.week-s)-i+1}return n},AjxTimezone.addWkDayTransition=function(e){var t=e.trans,n=t[1],r=t[2],i=Math.floor((r-1)/7),s=new Date(t[0],t[1]-1,t[2],12,0,0),o=(new Date((new Date(s.getTime())).setMonth(n-1,0))).getDate(),u=o-r<7;return e.mon=n,e.week=u?-1:i+1,e.wkday=s.getDay()+1,e.hour=t[3],e.min=t[4],e.sec=t[5],e},AjxTimezone.createTransitionDate=function(e){var t=new Date(TimezoneData.TRANSITION_YEAR,e.mon-1,1,12,0,0);if(e.mday)t.setDate(e.mday);else if(e.week==-1){t.setMonth(t.getMonth()+1,0);for(var n=0;n<7;n++){if(t.getDay()+1==e.wkday)break;t.setDate(t.getDate()-1)}}else{for(n=0;n<7;n++){if(t.getDay()+1==e.wkday)break;t.setDate(t.getDate()+1)}t.setDate(t.getDate()+7*(e.week-1))}var r=[t.getFullYear(),t.getMonth()+1,t.getDate()];return r},AjxTimezone.prototype.getShortName=function(e){var t=this.localeData[e+"_Z_short"]||["GMT",AjxTimezone._SHORT_NAMES[e]].join("");return t},AjxTimezone.prototype.getMediumName=function(e){var t=this.localeData[e+"_Z_abbreviated"]||["(",this.getShortName(e),") ",e].join("");return t},AjxTimezone.prototype.getLongName=AjxTimezone.prototype.getMediumName,AjxTimezone.addRule=function(e){var t=e.tzId;AjxTimezone._SHORT_NAMES[t]=AjxTimezone._generateShortName(e.standard.offset),AjxTimezone._CLIENT2RULE[t]=e;var n=e.daylight?AjxTimezone.DAYLIGHT_RULES:AjxTimezone.STANDARD_RULES;n.push(e)},AjxTimezone.getRule=function(e,t){var n=AjxTimezone._CLIENT2RULE[e];if(!n&&t){var r=["standard","daylight"],i=t.daylight?AjxTimezone.DAYLIGHT_RULES:AjxTimezone.STANDARD_RULES;for(var s=0;s<i.length;s++){n=i[s];var o=!0;for(var u=0;u<r.length;u++){var a=r[u],f=n[a];if(!f)continue;var l=!1;for(var c in t[a])if(t[a][c]!=f[c]){o=!1,l=!0;break}if(l)break}if(o)return n}return null}return n},AjxTimezone.getOffset=function(e,t){var n=AjxTimezone.getRule(e);if(n&&n.daylight){var r=t.getFullYear(),i=n.standard,s=n.daylight,o=AjxTimezone.getTransition(i,r),u=AjxTimezone.getTransition(s,r),a=t.getMonth()+1,f=t.getDate(),l=o[1],c=o[2],h=u[1],p=u[2],d=!1;return h<l?(d=a>h&&a<l,d=d||a==h&&f>=p,d=d||a==l&&f<c):(d=a<h||a>l,d=d||a==h&&f<p,d=d||a==l&&f>=c),d?s.offset:i.offset}return n?n.standard.offset:-(new Date).getTimezoneOffset()},AjxTimezone._BY_OFFSET=function(e,t){var n=e.standard.offset-t.standard.offset;if(n==0){var r=e.tzId,i=t.tzId;r<i?n=-1:r>i&&(n=1)}return n},AjxTimezone._SHORT_NAMES={},AjxTimezone._CLIENT2RULE={},AjxTimezone.STANDARD_RULES=[],AjxTimezone.DAYLIGHT_RULES=[],function(){for(var e=0;e<TimezoneData.TIMEZONE_RULES.length;e++){var t=TimezoneData.TIMEZONE_RULES[e],n=t.daylight?AjxTimezone.DAYLIGHT_RULES:AjxTimezone.STANDARD_RULES;n.push(t)}}(),AjxTimezone._generateShortName=function(e,t){if(e==0)return"";var n=e<0?"-":"+",r=Math.abs(e),i=Math.floor(r/60),s=r%60;return i=i<10?"0"+i:i,s=s<10?"0"+s:s,[n,i,t?".":"",s].join("")},function(){TimezoneData.TIMEZONE_RULES.sort(AjxTimezone._BY_OFFSET);for(var e=0;e<TimezoneData.TIMEZONE_RULES.length;e++){var t=TimezoneData.TIMEZONE_RULES[e];AjxTimezone.addRule(t)}}(),Array.prototype.indexOf=function(e){for(var t=0;t<this.length;t++)if(this[t]==e)return t;return-1},AjxTimezone.getCurrentTimezoneIds=function(e){e/=60;var t=[],n=new Date;for(tzId in AjxTimezone._CLIENT2RULE)(e==0||AjxTimezone.getOffset(tzId,n)==e)&&t.push(tzId);for(link in TimezoneLinks)t.indexOf(TimezoneLinks[link])!=-1&&t.push(link);return t},AjxTimezone.getTimezoneIdForOffset=function(e){e/=60;if(e%60==0){var t="Etc/GMT";e!=0&&(t+=(e>0?"-":"+")+e/60);if(AjxTimezone._CLIENT2RULE[t]!=null)return t}var n=new Date;for(tzId in AjxTimezone._CLIENT2RULE)if(AjxTimezone.getOffset(tzId,n)==e)return tzId;return""},AjxTimezone.isDST=function(e,t){var n=AjxTimezone.getRule(e);if(n&&n.daylight){var r=t.getFullYear(),i=n.standard,s=n.daylight,o=AjxTimezone.getTransition(i,r),u=AjxTimezone.getTransition(s,r),a=t.getMonth()+1,f=t.getDate(),l=o[1],c=o[2],h=u[1],p=u[2],d=!1;return h<l?(d=a>h&&a<l,d=d||a==h&&f>=p,d=d||a==l&&f<c):(d=a<h||a>l,d=d||a==h&&f<p,d=d||a==l&&f>=c),d?1:0}return-1},AjxTimezone.isValidTimezoneId=function(e){return AjxTimezone._CLIENT2RULE[e]!=null||TimezoneLinks[e]!=null},e.TimeZone=function(t){var n=e.TimeZone.getNormalizedTimezoneId(t);if(n=="")throw new e.TimeZone.UnknownTimeZoneException("Could not find timezone: "+t);this.tzId=n,this._ajxTimeZoneInstance=new AjxTimezone},e.TimeZone.UnknownTimeZoneException=function(e){this.message=e},e.TimeZone.UnknownTimeZoneException.prototype.toString=function(){return"UnknownTimeZoneException: "+this.message},e.TimeZone.getCurrentTimezoneIds=function(e){return AjxTimezone.getCurrentTimezoneIds(e)},e.TimeZone.getTimezoneIdForOffset=function(e){return AjxTimezone.getTimezoneIdForOffset(e)},e.TimeZone.getUnixTimeFromWallTime=function(e){e.year==null&&(e.year=(new Date).getFullYear()),e.mon==null&&(e.mon=0),e.mday==null&&(e.mday=1),e.hour==null&&(e.hour=0),e.min==null&&(e.min=0),e.sec==null&&(e.sec=0),e.gmtoff==null&&(e.gmtoff=0);var t=Date.UTC(e.year,e.mon,e.mday,e.hour,e.min,e.sec);return t-=e.gmtoff*1e3,s(t/1e3)},e.TimeZone.isValidTimestamp=function(e,t){var n=/^(\d\d\d\d)-([0-1][0-9])-([0-3][0-9])([T ])([0-2][0-9]):([0-6][0-9]):([0-6][0-9])(Z|[+-][0-1][0-9]:[0-3][0-9])?$/,r=(new RegExp(n)).exec(e);if(r==null)return!1;var i=parseInt(r[1]),s=parseInt(r[2]),o=parseInt(r[3]),u=r[4],a=parseInt(r[5]),f=parseInt(r[6]),l=parseInt(r[7]),c=r[8];if(s<1||s>12)return!1;var h=[1,3,5,7,8,10,12],p=30;h.indexOf(s)!=-1?p=31:s==2&&(i%400==0?p=29:i%100==0?p=28:i%4==0?p=29:p=28);if(o<1||o>p)return!1;if(a<0||a>23)return!1;if(f<0||f>59||l<0||l>59)return!1;if(u==" "&&c==null)return!0;if(u=="T"&&c!=null){var d=0;c!="Z"&&(d=parseInt(c.substr(1,3))*60+parseInt(c.substr(4)),d*=60,d*=c.charAt(0)=="+"?1:-1);if(d==t)return!0}return!1},e.TimeZone.isValidTimezoneId=function(e){return AjxTimezone.isValidTimezoneId(e)},e.TimeZone.getNormalizedTimezoneId=function(t){if(!e.TimeZone.isValidTimezoneId(t))return"";var n,r=t;do n=r,r=TimezoneLinks[n];while(r!=null);return n},e.TimeZone.prototype._parseRFC3339=function(e){var t=/(\d+)(-)?(\d+)(-)?(\d+)(T)?(\d+)(:)?(\d+)(:)?(\d+)(\.\d+)?(Z|([+-])(\d+)(:)?(\d+))/,n=new Date,r=e.match(t),i=0;return n.setUTCDate(1),n.setUTCFullYear(parseInt(r[1],10)),n.setUTCMonth(parseInt(r[3],10)-1),n.setUTCDate(parseInt(r[5],10)),n.setUTCHours(parseInt(r[7],10)),n.setUTCMinutes(parseInt(r[9],10)),n.setUTCSeconds(parseInt(r[11],10)),r[12]?n.setUTCMilliseconds(parseFloat(r[12])*1e3):n.setUTCMilliseconds(0),r[13]!="Z"&&(i=r[15]*60+parseInt(r[17],10),i*=r[14]=="-"?-1:1,n.setTime(n.getTime()-i*60*1e3)),n},e.TimeZone.prototype._parseSQLFormat=function(e){var t=e.split(" "),n=t[0].split("-"),r=t[1].split(":"),i=AjxTimezone.getOffset(this.tzId,new Date(n[0],n[1]-1,n[2]));return new Date(Date.UTC(n[0],n[1]-1,n[2],r[0],r[1],r[2])-i*60*1e3)},e.TimeZone.prototype.getShortName=function(){return this._ajxTimeZoneInstance.getShortName(this.tzId)},e.TimeZone.prototype.getMediumName=function(){return this._ajxTimeZoneInstance.getMediumName(this.tzId)},e.TimeZone.prototype.getLongName=function(){return this._ajxTimeZoneInstance.getLongName(this.tzId)},e.TimeZone.prototype.convertToIncrementalUTC=function(e){return e.indexOf("T")!=-1?this._parseRFC3339(e).getTime()/1e3:this._parseSQLFormat(e).getTime()/1e3},e.TimeZone.prototype.convertUTCToRFC3339Format=function(e){var t=new Date(e*1e3),n=AjxTimezone.getOffset(this.tzId,t),i="Z";if(n!=0){var o=n>0?"+":"-";i=o+r(Math.abs(s(n/60)))+":"+r(n%60)}t.setTime(e*1e3+n*60*1e3);var u=r(t.getUTCFullYear(),4)+"-"+r(t.getUTCMonth()+1)+"-"+r(t.getUTCDate())+"T"+r(t.getUTCHours())+":"+r(t.getUTCMinutes())+":"+r(t.getUTCSeconds())+i;return u},e.TimeZone.prototype.convertUTCToSQLFormat=function(e){var t=new Date(e*1e3),n=AjxTimezone.getOffset(this.tzId,t);t.setTime(e*1e3+n*60*1e3);var i=r(t.getUTCFullYear(),4)+"-"+r(t.getUTCMonth()+1)+"-"+r(t.getUTCDate())+" "+r(t.getUTCHours())+":"+r(t.getUTCMinutes())+":"+r(t.getUTCSeconds());return i},e.TimeZone.prototype.getRawOffset=function(){return AjxTimezone.getOffset(this.tzId,new Date)*60},e.TimeZone.prototype.getWallTimeFromUnixTime=function(e){var t=AjxTimezone.getOffset(this.tzId,new Date(e*1e3))*60,n=e+t,r=new Date(n*1e3),s={sec:r.getUTCSeconds(),min:r.getUTCMinutes(),hour:r.getUTCHours(),mday:r.getUTCDate(),mon:r.getUTCMonth(),year:r.getUTCFullYear(),wday:r.getUTCDay(),yday:i(r),isdst:AjxTimezone.isDST(this.tzId,new Date(e)),gmtoff:t,zone:this.tzId};return s}},"@VERSION@",{lang:["af-NA","af","af-ZA","am-ET","am","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LB","ar-LY","ar-MA","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-TN","ar","ar-YE","as-IN","as","az-AZ","az-Cyrl-AZ","az-Cyrl","az-Latn-AZ","az-Latn","az","be-BY","be","bg-BG","bg","bn-BD","bn-IN","bn","bo-CN","bo-IN","bo","ca-ES","ca","cs-CZ","cs","cy-GB","cy","da-DK","da","de-AT","de-BE","de-CH","de-DE","de-LI","de-LU","de","el-CY","el-GR","el","en-AU","en-BE","en-BW","en-BZ","en-CA","en-GB","en-HK","en-IE","en-IN","en-JM","en-JO","en-MH","en-MT","en-MY","en-NA","en-NZ","en-PH","en-PK","en-SG","en-TT","en","en-US-POSIX","en-US","en-VI","en-ZA","en-ZW","eo","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-ES","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-PY","es-SV","es","es-US","es-UY","es-VE","et-EE","et","eu-ES","eu","fa-AF","fa-IR","fa","fi-FI","fi","fil-PH","fil","fo-FO","fo","fr-BE","fr-CA","fr-CH","fr-FR","fr-LU","fr-MC","fr-SN","fr","ga-IE","ga","gl-ES","gl","gsw-CH","gsw","gu-IN","gu","gv-GB","gv","ha-GH","ha-Latn-GH","ha-Latn-NE","ha-Latn-NG","ha-Latn","ha-NE","ha-NG","ha","haw","haw-US","he-IL","he","hi-IN","hi","hr-HR","hr","hu-HU","hu","hy-AM-REVISED","hy-AM","hy","id-ID","id","ii-CN","ii","in-ID","in","is-IS","is","it-CH","it-IT","it","iw-IL","iw","ja-JP","ja","ka-GE","ka","kk-Cyrl-KZ","kk-Cyrl","kk-KZ","kk","kl-GL","kl","km-KH","km","kn-IN","kn","kok-IN","kok","ko-KR","ko","kw-GB","kw","lt-LT","lt","lv-LV","lv","mk-MK","mk","ml-IN","ml","mr-IN","mr","ms-BN","ms-MY","ms","mt-MT","mt","nb-NO","nb","ne-IN","ne-NP","ne","nl-BE","nl-NL","nl","nn-NO","nn","no-NO","no","om-ET","om-KE","om","or-IN","or","pa-Arab-PK","pa-Arab","pa-Guru-IN","pa-Guru","pa-IN","pa-PK","pa","pl-PL","pl","ps-AF","ps","pt-BR","pt-PT","pt","ro-MD","ro-RO","ro","ru-RU","ru","ru-UA","sh-BA","sh-CS","sh","sh-YU","si-LK","si","sk-SK","sk","sl-SI","sl","so-DJ","so-ET","so-KE","so-SO","so","sq-AL","sq","sr-BA","sr-CS","sr-Cyrl-BA","sr-Cyrl-CS","sr-Cyrl-ME","sr-Cyrl-RS","sr-Cyrl","sr-Cyrl-YU","sr-Latn-BA","sr-Latn-CS","sr-Latn-ME","sr-Latn-RS","sr-Latn","sr-Latn-YU","sr-ME","sr-RS","sr","sr-YU","sv-FI","sv-SE","sv","sw-KE","sw","sw-TZ","ta-IN","ta","te-IN","te","th-TH","th","ti-ER","ti-ET","ti","tl-PH","tl","tr-TR","tr","uk","uk-UA","ur-IN","ur-PK","ur","uz-AF","uz-Arab-AF","uz-Arab","uz-Cyrl","uz-Cyrl-UZ","uz-Latn","uz-Latn-UZ","uz","uz-UZ","vi","vi-VN","zh-CN","zh-Hans-CN","zh-Hans-HK","zh-Hans-MO","zh-Hans-SG","zh-Hans","zh-Hant-HK","zh-Hant-MO","zh-Hant-TW","zh-Hant","zh-HK","zh-MO","zh-SG","zh-TW","zh","zu","zu-ZA"]});
