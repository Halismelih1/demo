const mockData = [
  {
    id: "1",
    sınıf: "1.Sınıf",
    imgUrl: "./assets/1.sınıf.PNG",
    dersler: [
      {
        ders: [
          {
            ders_adı: "Turkce", //useLocationdan dolayı ders isimlendirmelerinde türkçe karakter kullanamadım
            dersImgUrl: "../assets/turkce.PNG"
          }
        ],
        üniteler: [
          {
            ünite_adı: "1.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "2.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "3.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          }
        ]
      },
      {
        ders: [
          {
            ders_adı: "matematık", //useLocationdan dolayı ders isimlendirmelerinde türkçe karakter kullanamadım
            dersImgUrl: "../assets/matematık.PNG"
          }
        ],
        üniteler: [
          {
            ünite_adı: "1.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "2.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "3.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          }
        ]
      },
      {
        ders: [
          {
            ders_adı: "Sosyal Bılgıler", //useLocationdan dolayı ders isimlendirmelerinde türkçe karakter kullanamadım
            dersImgUrl: "../assets/sosyalBılgıler.PNG"
          }
        ], üniteler: [
          {
            ünite_adı: "test",
            konu_ögeleri: ["deneme", "deneme", "deneme"]
          },
          {
            ünite_adı: "2.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "3.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "4.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "5.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "6.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
         
        ]
      },
    ]
  },
  {
    id: "2",
    sınıf: "2.Sınıf",
    imgUrl: "../assets/2.sınıf.PNG",
    dersler: [
      {
        ders: [
          {
            ders_adı: "Turkce", //useLocationdan dolayı ders isimlendirmelerinde türkçe karakter kullanamadım
            dersImgUrl: "../assets/turkce.PNG"
          }
        ],
        üniteler: [
          {
            ünite_adı: "deneme",
            konu_ögeleri: ["deneme", "deneme", "deneme"]
          },
          {
            ünite_adı: "2.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "3.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "4.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "5.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "6.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "7.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "8.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          }
        ]
      },
      {
        ders: [
          {
            ders_adı: "matematık", //useLocationdan dolayı ders isimlendirmelerinde türkçe karakter kullanamadım
            dersImgUrl: "../assets/matematık.PNG"
          }
        ],
        üniteler: [
          {
            ünite_adı: "1.Ünite",
            konu_ögeleri: ["deneme", "deneme", "deneme"]
          },
          {
            ünite_adı: "2.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "3.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "4.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "5.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "6.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "7.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "8.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          }
        ]
      },
      {
        ders: [
          {
            ders_adı: "Sosyal Bılgıler", //useLocationdan dolayı ders isimlendirmelerinde türkçe karakter kullanamadım
            dersImgUrl: "../assets/sosyalBılgıler.PNG"
          }
        ],
        üniteler: [
          {
            ünite_adı: "deneme",
            konu_ögeleri: ["deneme", "deneme", "deneme"]
          },
          {
            ünite_adı: "2.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "3.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "4.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
         
        ]
      },

    ]
  },
  {
    id: "3",
    sınıf: "3.Sınıf",
    imgUrl: "../assets/3.sınıf.PNG",
    dersler: [
      {
        ders: [
          {
            ders_adı: "Turkce", //useLocationdan dolayı ders isimlendirmelerinde türkçe karakter kullanamadım
            dersImgUrl: "../assets/turkce.PNG"
          }
        ],
        üniteler: [
          {
            ünite_adı: "1.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "2.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "3.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          }
        ]
      },
      {
        ders: [
          {
            ders_adı: "matematık", //useLocationdan dolayı ders isimlendirmelerinde türkçe karakter kullanamadım
            dersImgUrl: "../assets/matematık.PNG"
          }
        ],
        üniteler: [
          {
            ünite_adı: "1.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "2.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "3.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          }
        ]
      },
      {
        ders: [
          {
            ders_adı: "Sosyal Bılgıler", //useLocationdan dolayı ders isimlendirmelerinde türkçe karakter kullanamadım
            dersImgUrl: "../assets/sosyalBılgıler.PNG"
          }
        ], üniteler: [
          {
            ünite_adı: "deneme",
            konu_ögeleri: ["deneme", "deneme", "deneme"]
          },
          {
            ünite_adı: "2.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "3.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "4.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "5.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "6.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "7.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          
        ]
      },

    ]
  },
  {
    id: "4",
    sınıf: "4.Sınıf",
    imgUrl: "../assets/4.sınıf.PNG",
    dersler: [
      {
        ders: [
          {
            ders_adı: "Turkce", //useLocationdan dolayı ders isimlendirmelerinde türkçe karakter kullanamadım
            dersImgUrl: "../assets/turkce.PNG"
          }
        ], üniteler: [
          {
            ünite_adı: "1.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "2.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "3.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          }
        ]
      },
      {
        ders: [
          {
            ders_adı: "matematık", //useLocationdan dolayı ders isimlendirmelerinde türkçe karakter kullanamadım
            dersImgUrl: "../assets/matematık.PNG"
          }
        ], üniteler: [
          {
            ünite_adı: "deneme",
            konu_ögeleri: ["deneme", "deneme", "deneme"]
          },
          {
            ünite_adı: "2.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "3.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "4.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "5.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "6.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "7.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "8.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          }
        ]
      },
      
      {
        ders: [
          {
            ders_adı: "Fen Bılgısı", //useLocationdan dolayı ders isimlendirmelerinde türkçe karakter kullanamadım
            dersImgUrl: "../assets/fenBılgısı.PNG"
          }
        ], üniteler: [
          {
            ünite_adı: "1.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "2.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "3.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          }
        ]
      },
      {
        ders: [
          {
            ders_adı: "Sosyal Bılgıler", //useLocationdan dolayı ders isimlendirmelerinde türkçe karakter kullanamadım
            dersImgUrl: "../assets/sosyalBılgıler.PNG"
          }
        ], üniteler: [
          {
            ünite_adı: "deneme",
            konu_ögeleri: ["deneme", "deneme", "deneme"]
          },
          {
            ünite_adı: "2.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "3.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "4.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "5.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "6.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "7.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          },
          {
            ünite_adı: "8.Ünite",
            konu_ögeleri: ["Konu", "Konu", "Konu"]
          }
        ]
      }

    ]
  }
];

export default mockData;
