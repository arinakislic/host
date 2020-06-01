const rooms = [
  { roomId: 1, 
    category: 'с доступом в клуб', 
    descriptionShort: 
  "- Две удобные кровати\n- Эргономичное пространство площадью 34 кв. м\n- Современный минималистский дизайн\n- Панорамный вид на реку Исеть и Храм на Крови\n- Доступ в закрытую зону отдыха Regency Club на 18-м этаже с бесплатными вечерними коктейлями",
  descriptionLong:
  "Отдельная рабочая зона \nТелевизор с диагональю экрана от 63,5 см \nВысокоскоростной Интернет\nСистема индивидуального климат-контроля\nСейф\nПринадлежности для приготовления чая и кофе\nМини-бар\nДетская кроватка (по требованию)",
  imgUrl: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/03/08/1117/Hyatt-Regency-Ekaterinburg-P159-Twin-City-View.jpg/Hyatt-Regency-Ekaterinburg-P159-Twin-City-View.16x9.jpg?imwidth=1280",
  images: ["https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2014/09/21/1535/YEKHR-P079-Twin-Guestroom.jpg/YEKHR-P079-Twin-Guestroom.16x9.jpg?imwidth=1280"
  ]
  },
  { roomId: 2, 
    category: 'Отдельная рабочая зона', 
    descriptionShort: 
  "Большая комфортабельная двуспальная и односпальная кровать (King) в отдельной спальне\n- Просторный номер площадью 62 кв. м, разделенный на зоным\n- Современный дизайн и ванная комната с открытой планировкой-",
  descriptionLong:
  "-доступ к бесплатному вайфаю\n -Детская кровать при необзодимости \n-Завтраки включены в стоимость \n-Вид на реку Исеть \n-Бесплатный вечерний коктель ",
    imgUrl:"https://www.gorkihotels.ru/upload/iblock/6dd/6dd44671ded3433df7e818e9961d19bb.jpg",
    images: [  "https://trizio.ru/img-srv01/092017/img_post/top_523.jpg"]
  },
  { roomId: 3, 
    category: 'Бесплатный мини бар', 
    descriptionShort: 
  "-спальня с удобной\n двухспальной кроватью \n-Отдельный кабинет\n -просторная ванная комната",
  descriptionLong:
  "-Доступ к высокоскоростному\n Интернету \n-Круглосуточное обслуживание номеров\n  -Сейф",
    imgUrl: "https://www.gorkihotels.ru/upload/iblock/9c6/9c6f8c74f5d0c7f766c9159d8301e5f1.jpg",
    images: [ "https://www.gorkihotels.ru/upload/iblock/9c6/9c6f8c74f5d0c7f766c9159d8301e5f1.jpg",
    "https://media-cdn.tripadvisor.com/media/photo-s/08/f0/9d/c4/sheraton-ufa-hotel.jpg",
    "https://www.mebel-mr.ru/images/tb/6/4/9/64991/14065573175853_w4000h3200.jpg" ]
  }
];

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}