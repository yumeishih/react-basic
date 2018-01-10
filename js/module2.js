var _ = require('lodash');
var people = [{
    "id": 1,
    "first_name": "Lionello",
    "last_name": "Twiggins",
    "email": "ltwiggins0@google.com.hk",
    "gender": "Male",
    "ip_address": "177.151.10.56"
  }, {
    "id": 2,
    "first_name": "Margette",
    "last_name": "Putt",
    "email": "mputt1@foxnews.com",
    "gender": "Female",
    "ip_address": "246.79.154.2"
  }, {
    "id": 3,
    "first_name": "Israel",
    "last_name": "Alam",
    "email": "ialam2@mediafire.com",
    "gender": "Male",
    "ip_address": "208.39.255.105"
  }, {
    "id": 4,
    "first_name": "Olvan",
    "last_name": "Howselee",
    "email": "ohowselee3@slate.com",
    "gender": "Male",
    "ip_address": "152.199.23.217"
  }, {
    "id": 5,
    "first_name": "Khalil",
    "last_name": "Kelby",
    "email": "kkelby4@mlb.com",
    "gender": "Male",
    "ip_address": "171.255.1.182"
  }, {
    "id": 6,
    "first_name": "Elisabetta",
    "last_name": "Charville",
    "email": "echarville5@wired.com",
    "gender": "Female",
    "ip_address": "51.227.231.53"
  }, {
    "id": 7,
    "first_name": "Thomasa",
    "last_name": "Iwanicki",
    "email": "tiwanicki6@webnode.com",
    "gender": "Female",
    "ip_address": "107.234.113.7"
  }, {
    "id": 8,
    "first_name": "Margarette",
    "last_name": "Edgin",
    "email": "medgin7@auda.org.au",
    "gender": "Female",
    "ip_address": "166.212.103.117"
  }, {
    "id": 9,
    "first_name": "Jerrie",
    "last_name": "Bulcroft",
    "email": "jbulcroft8@ameblo.jp",
    "gender": "Female",
    "ip_address": "56.194.35.114"
  }, {
    "id": 10,
    "first_name": "Daniel",
    "last_name": "Galero",
    "email": "dgalero9@mayoclinic.com",
    "gender": "Male",
    "ip_address": "133.77.164.193"
  }, {
    "id": 11,
    "first_name": "Fanechka",
    "last_name": "Duiguid",
    "email": "fduiguida@unc.edu",
    "gender": "Female",
    "ip_address": "181.202.88.24"
  }, {
    "id": 12,
    "first_name": "Lorine",
    "last_name": "Lepoidevin",
    "email": "llepoidevinb@walmart.com",
    "gender": "Female",
    "ip_address": "200.168.3.50"
  }, {
    "id": 13,
    "first_name": "Cissiee",
    "last_name": "Masterson",
    "email": "cmastersonc@si.edu",
    "gender": "Female",
    "ip_address": "7.85.67.172"
  }, {
    "id": 14,
    "first_name": "Jecho",
    "last_name": "Papachristophorou",
    "email": "jpapachristophoroud@list-manage.com",
    "gender": "Male",
    "ip_address": "202.34.154.165"
  }, {
    "id": 15,
    "first_name": "Hedy",
    "last_name": "Mullord",
    "email": "hmullorde@pcworld.com",
    "gender": "Female",
    "ip_address": "83.245.61.54"
  }, {
    "id": 16,
    "first_name": "Ofella",
    "last_name": "Dilston",
    "email": "odilstonf@google.cn",
    "gender": "Female",
    "ip_address": "119.67.113.91"
  }, {
    "id": 17,
    "first_name": "Karoly",
    "last_name": "Fairbourne",
    "email": "kfairbourneg@ehow.com",
    "gender": "Female",
    "ip_address": "242.59.168.64"
  }, {
    "id": 18,
    "first_name": "Glynis",
    "last_name": "Acedo",
    "email": "gacedoh@prweb.com",
    "gender": "Female",
    "ip_address": "30.13.170.110"
  }, {
    "id": 19,
    "first_name": "Orrin",
    "last_name": "Marney",
    "email": "omarneyi@123-reg.co.uk",
    "gender": "Male",
    "ip_address": "149.117.218.115"
  }, {
    "id": 20,
    "first_name": "Dierdre",
    "last_name": "Hodgets",
    "email": "dhodgetsj@soundcloud.com",
    "gender": "Female",
    "ip_address": "245.122.30.68"
  }]

  var femailCount = _.filter(people,{"gender":"Female"}).length;
  alert(femailCount + " females!");