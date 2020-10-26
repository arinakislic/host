const rooms = [{
    roomId: 1,
    category: 'с доступом в клуб',
    descriptionShort: "- Две удобные кровати\n- Эргономичное пространство площадью 34 кв. м\n- Современный минималистский дизайн\n- Панорамный вид на реку Исеть и Храм на Крови\n- Доступ в закрытую зону отдыха Regency Club на 18-м этаже с бесплатными вечерними коктейлями",
    descriptionLong: "Отдельная рабочая зона \nТелевизор с диагональю экрана от 63,5 см \nВысокоскоростной Интернет\nСистема индивидуального климат-контроля\nСейф\nПринадлежности для приготовления чая и кофе\nМини-бар\nДетская кроватка (по требованию)",
    imgUrl: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/03/08/1117/Hyatt-Regency-Ekaterinburg-P159-Twin-City-View.jpg/Hyatt-Regency-Ekaterinburg-P159-Twin-City-View.16x9.jpg?imwidth=1280",
    images: ["https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2014/09/21/1535/YEKHR-P079-Twin-Guestroom.jpg/YEKHR-P079-Twin-Guestroom.16x9.jpg?imwidth=1280"],
    numbers: [498,445,402,403,102]
  
  },
  {
    roomId: 2,
    category: 'Отдельная рабочая зона',
    descriptionShort: "Большая комфортабельная двуспальная и односпальная кровать (King) в отдельной спальне\n- Просторный номер площадью 62 кв. м, разделенный на зоным\n- Современный дизайн и ванная комната с открытой планировкой-",
    descriptionLong: "-доступ к бесплатному вайфаю\n -Детская кровать при необзодимости \n-Завтраки включены в стоимость \n-Вид на реку Исеть \n-Бесплатный вечерний коктель ",
    imgUrl: "https://www.gorkihotels.ru/upload/iblock/6dd/6dd44671ded3433df7e818e9961d19bb.jpg",
    images: ["https://trizio.ru/img-srv01/092017/img_post/top_523.jpg"],
    numbers: [324,345,302,303,301]
  },
  {
    roomId: 3,
    category: 'Бесплатный мини бар',
    descriptionShort: "-спальня с удобной\n двухспальной кроватью \n-Отдельный кабинет\n -просторная ванная комната",
    descriptionLong: "-Доступ к высокоскоростному\n Интернету \n-Круглосуточное обслуживание номеров\n  -Сейф",
    imgUrl: "https://www.gorkihotels.ru/upload/iblock/9c6/9c6f8c74f5d0c7f766c9159d8301e5f1.jpg",
    images: ["https://www.gorkihotels.ru/upload/iblock/9c6/9c6f8c74f5d0c7f766c9159d8301e5f1.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/08/f0/9d/c4/sheraton-ufa-hotel.jpg",
      "https://www.mebel-mr.ru/images/tb/6/4/9/64991/14065573175853_w4000h3200.jpg"
    ],
    numbers: [298,245,202,203,205]
  }
];

const myBookings = [{
    id: 1,
    user_id: 1,
    roomId: 3,
    status: 1, //1 - new, 2 - call, 3 - paid, 4 - done 
    tariff: {
      id: 3,
      name: "Полный пансион",
      price: 12000
    },
    guests: 4,
    dateFrom: "2021-05-12",
    dateTo: "2021-05-22",
    guestsInfo: "Маша, Вася, Петя",
    comment: "-"
  },
  {
    id: 2,
    roomId: 2,
    user_id: 2,
    status: 3, //1 - new, 2 - call, 3 - paid, 4 - done 
    tariff: {
      id: 2,
      name: "Только завтраки",
      price: 8000
    },
    guests: 2,
    dateFrom: "2021-05-26",
    dateTo: "2021-05-29",
    guestsInfo: "Маша, Вася",
    comment: "Ранний заезд"
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

const breakfast = [{
    id: 1,
    name: "Заврак с яичницой",
    pic: "breakfast.jpg",
    dicription: "Кофе,яичница с беконом,тост с маслом и джемом."
  },
  {
    id: 2,
    name: "Фруктовый завтрак",
    pic: "breakfast.jpg",
    dicription: "Фруктовая тарелка,апельсиновый сок."
  },
  {
    id: 3,
    name: "Завтрак с сырниками",
    pic: "breakfast.jpg",
    dicription: "Апельсиноввй сок,сырники с джемом,тост с сыром."
  }
];

const users = [{
    id: 1,
    phone: +79999999999,
    name: "Вася Пупкин"
  },
  {
    id: 2,
    phone: +79999999991,
    name: "Иван Иванов"
  }
]

const lunch = [{
    date: "17.08.2020",
    soup: [{
        id: 1,
        name: "Борщ с пампушками",
        pic: "soup.jpg",
        descr: "Суп со свеклой, калорийность 111 ккал"
      },
      {
        id: 2,
        name: "Солянка",
        pic: "soup.jpg",
        descr: "xxx"
      }
    ],
    meal: [{
        id: 3,
        name: "Котлеты с пюре",
        pic: "soup.jpg",
        descr: "Куринные котлеты с пюре, калорийность 240 ккал"
      },
      {
        id: 4,
        name: "Гречка с сосисками",
        pic: "soup.jpg",
        descr: ", калорийность 240 ккал"
      }
    ],
    drink: [{
        id: 5,
        name: "Компот",
        pic: "soup.jpg",
        descr: "Клюквенный компот, калорийность 60 ккал"
      },
      {
        id: 6,
        name: "Чай",
        pic: "soup.jpg",
        descr: "Чай черный, калорийность 30 ккал"
      },
      {
        id: 7,
        name: "Кофе",
        pic: "soup.jpg",
        descr: "Амерекано, калорийность 50 ккал"
      }
    ]
  },

  {
    date: "18.08.2020",
    soup: [{
        id: 8,
        name: "Грибной",
        pic: "",
        descr: "Суп со свеклой, калорийность 111 ккал"
      },
      {
        id: 9,
        name: "Куриный",
        pic: "",
        descr: "xxx"
      }
    ],
    meal: ["Котлеты с пюре", "Гречка с сосисками"],
    drink: ["Морс", "Чай", "Кофе"]
  }

]

const lunch_orders = [{
  roomId: 3,
  date: "11.10.2020",
  orders: [{
      userId: 1,
      meals: [1, 4, 6]
    },
    {
      userId: 2,
      meals: [1, 4, 6]
    }
  ]
},
{
  roomId: 4,
  date: "11.10.2020",
  orders: [{
      userId: 4,
      meals: [1, 3, 5]
    },
    {
      userId: 5,
      meals: [1, 3, 6]
    }
  ]
}]

const breakfast_orders = [{
  roomId: 3,
  date: "11.10.2020",
  orders: [{
      userId: 1,
      meals: 1
    },
    {
      userId: 2,
      meals: 1
    }
  ]
},
{
  roomId: 4,
  date: "11.10.2020",
  orders: [{
      userId: 4,
      meals: 2
    },
    {
      userId: 5,
      meals:  3
    }
  ]
}]

const concierges=[
  {
    date:"25.09.2020",
    workers: [
      { fio: 'Ivanov', in: [404,102,245,222], out: [221,109] },
      { fio: 'Petrov', in: [401,212,343], out: [108] },
      { fio: 'Sidin', in: [407,218,340], out: [105,578] },
    ]
  }
]
const maids=[
  {
    date:"28.09.2020",
    total: 22,
  workers: [
    { fio: 'Tarasova', rooms: [212,409,302]},
    { fio: 'Marinova', rooms: [113,113,311,207]}
  ]
  }
]