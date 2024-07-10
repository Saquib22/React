
import './App.css';
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwlz25QIlCMRKVQialJlbT93VwxoopTDqlXQ&s"></img>
      </div>
      <div className="nav-item">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href='#'>Contact Us</a></li>
          <li><a href="#">Cart</a></li>
        </ul>
      </div>
    </div>
  )
}
const ResturantCard = (props) => {
  const{resData} = props;
  const{name,cloudinaryImageId,cuisines,avgRating,deliveryTime} = resData;
  // console.log(resData);
  return (
    <div className="res-card" style = {{backgroundColor: "grey"}}>
      <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}  alt="error"></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  )
}

const resObj =  [
{
  "id": "423976",
  "name": "KFC",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/9869efb0-ef0e-41eb-bffa-9d6e03eef55e_423976.JPG",
  "locality": "Yashwant Arcade co-op housing society",
  "areaName": "Vashi",
  "costForTwo": "₹400 for two",
  "cuisines": [
    "Burgers",
    "Fast Food",
    "Rolls & Wraps"
  ],
  "avgRating": 4.1,
  "parentId": "547",
  "avgRatingString": "4.1",
  "totalRatingsString": "1K+",
  "sla": {
    "deliveryTime": 28,
    "lastMileTravel": 4,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "4.0 km",
    "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
    "nextCloseTime": "2024-07-10 04:00:00",
    "opened": true
  },
  "badges": {

  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
    "entityBadges": {
      "imageBased": {

      },
      "textBased": {

      },
      "textExtendedBadges": {

      }
    }
  },
  "aggregatedDiscountInfoV3": {
    "header": "30% OFF",
    "subHeader": "UPTO ₹75"
  },
  "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {

      },
      "video": {

      }
    }
  },
  "reviewsSummary": {

  },
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {

  },
  "externalRatings": {
    "aggregatedRating": {
      "rating": "--"
    }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  
},
{
  "id": "23947",
  "name": "Pizza Hut",
  "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
  "locality": "Sector 28",
  "areaName": "Vashi",
  "costForTwo": "₹350 for two",
  "cuisines": [
    "Pizzas"
  ],
  "avgRating": 4,
  "parentId": "721",
  "avgRatingString": "4.0",
  "totalRatingsString": "5K+",
  "sla": {
    "deliveryTime": 34,
    "lastMileTravel": 5.6,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "5.6 km",
    "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
    "nextCloseTime": "2024-07-11 03:00:00",
    "opened": true
  },
  "badges": {
    "imageBadges": [
      {
        "imageId": "Rxawards/_CATEGORY-Pizza.png",
        "description": "Delivery!"
      }
    ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
    "entityBadges": {
      "imageBased": {
        "badgeObject": [
          {
            "attributes": {
              "description": "Delivery!",
              "imageId": "Rxawards/_CATEGORY-Pizza.png"
            }
          }
        ]
      },
      "textBased": {

      },
      "textExtendedBadges": {

      }
    }
  },
  "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹189"
  },
  "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {

      },
      "video": {

      }
    }
  },
  "reviewsSummary": {

  },
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {

  },
  "externalRatings": {
    "aggregatedRating": {
      "rating": "--"
    }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},{
  "id": "34932",
  "name": "Burger King",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_34932.JPG",
  "locality": "Navi Mumbai",
  "areaName": "Ghansoli",
  "costForTwo": "₹350 for two",
  "cuisines": [
    "Burgers",
    "American"
  ],
  "avgRating": 4.3,
  "parentId": "166",
  "avgRatingString": "4.3",
  "totalRatingsString": "10K+",
  "sla": {
    "deliveryTime": 28,
    "lastMileTravel": 5,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "5.0 km",
    "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
    "nextCloseTime": "2024-07-11 06:00:00",
    "opened": true
  },
  "badges": {
    "imageBadges": [
      {
        "imageId": "Rxawards/_CATEGORY-Burger.png",
        "description": "Delivery!"
      }
    ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
    "entityBadges": {
      "imageBased": {
        "badgeObject": [
          {
            "attributes": {
              "description": "Delivery!",
              "imageId": "Rxawards/_CATEGORY-Burger.png"
            }
          }
        ]
      },
      "textBased": {

      },
      "textExtendedBadges": {

      }
    }
  },
  "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
  },
  "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {

      },
      "video": {

      }
    }
  },
  "reviewsSummary": {

  },
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {

  },
  "externalRatings": {
    "aggregatedRating": {
      "rating": "--"
    }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},{
  "id": "28783",
  "name": "Domino's Pizza",
  "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
  "locality": "Sector 11 Plot 21 Koparkhairane",
  "areaName": "Kopar Khairane",
  "costForTwo": "₹400 for two",
  "cuisines": [
    "Pizzas",
    "Italian",
    "Pastas",
    "Desserts"
  ],
  "avgRating": 4.4,
  "parentId": "2456",
  "avgRatingString": "4.4",
  "totalRatingsString": "10K+",
  "sla": {
    "deliveryTime": 25,
    "lastMileTravel": 5,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "5.0 km",
    "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
    "nextCloseTime": "2024-07-11 02:59:00",
    "opened": true
  },
  "badges": {
    "imageBadges": [
      {
        "imageId": "Rxawards/_CATEGORY-Pizza.png",
        "description": "Delivery!"
      }
    ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
    "entityBadges": {
      "imageBased": {
        "badgeObject": [
          {
            "attributes": {
              "description": "Delivery!",
              "imageId": "Rxawards/_CATEGORY-Pizza.png"
            }
          }
        ]
      },
      "textBased": {

      },
      "textExtendedBadges": {

      }
    }
  },
  "aggregatedDiscountInfoV3": {
    "header": "₹150 OFF",
    "subHeader": "ABOVE ₹299",
    "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {

      },
      "video": {

      }
    }
  },
  "reviewsSummary": {

  },
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {

  },
  "externalRatings": {
    "aggregatedRating": {
      "rating": "--"
    }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
{
  "id": "257753",
  "name": "Great Indian Khichdi by EatFit",
  "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
  "locality": "Satra Plaza",
  "areaName": "Vashi",
  "costForTwo": "₹200 for two",
  "cuisines": [
    "Home Food",
    "Indian",
    "North Indian",
    "Healthy Food",
    "Snacks",
    "Desserts",
    "Rajasthani",
    "South Indian",
    "Maharashtrian",
    "Sweets"
  ],
  "avgRating": 4.3,
  "veg": true,
  "parentId": "319582",
  "avgRatingString": "4.3",
  "totalRatingsString": "1K+",
  "sla": {
    "deliveryTime": 27,
    "lastMileTravel": 5.6,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "5.6 km",
    "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
    "nextCloseTime": "2024-07-11 00:00:00",
    "opened": true
  },
  "badges": {
    "imageBadges": [
      {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
      }
    ],
    "textExtendedBadges": [
      {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "brand",
        "fontColor": "#7E808C"
      }
    ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
    "entityBadges": {
      "imageBased": {
        "badgeObject": [
          {
            "attributes": {
              "description": "pureveg",
              "imageId": "v1695133679/badges/Pure_Veg111.png"
            }
          }
        ]
      },
      "textBased": {

      },
      "textExtendedBadges": {
        "badgeObject": [
          {
            "attributes": {
              "description": "",
              "fontColor": "#7E808C",
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "brand"
            }
          }
        ]
      }
    }
  },
  "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
  },
  "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {

      },
      "video": {

      }
    }
  },
  "reviewsSummary": {

  },
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {

  },
  "externalRatings": {
    "aggregatedRating": {
      "rating": "--"
    }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
{
  "id": "25563",
  "name": "Subway",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/250d7054-1254-4158-b1a5-67141ea2d51f_25563.JPG",
  "locality": "Vashi",
  "areaName": "Vashi",
  "costForTwo": "₹350 for two",
  "cuisines": [
    "Salads",
    "Snacks",
    "Desserts",
    "Beverages"
  ],
  "avgRating": 4.3,
  "parentId": "2",
  "avgRatingString": "4.3",
  "totalRatingsString": "10K+",
  "sla": {
    "deliveryTime": 37,
    "lastMileTravel": 4.6,
    "serviceability": "SERVICEABLE",
    "slaString": "35-40 mins",
    "lastMileTravelString": "4.6 km",
    "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
    "nextCloseTime": "2024-07-11 07:00:00",
    "opened": true
  },
  "badges": {
    "imageBadges": [
      {
        "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
        "description": "Delivery!"
      }
    ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
    "entityBadges": {
      "imageBased": {
        "badgeObject": [
          {
            "attributes": {
              "description": "Delivery!",
              "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
            }
          }
        ]
      },
      "textBased": {

      },
      "textExtendedBadges": {

      }
    }
  },
  "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹100"
  },
  "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {

      },
      "video": {

      }
    }
  },
  "reviewsSummary": {

  },
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {

  },
  "externalRatings": {
    "aggregatedRating": {
      "rating": "3.7",
      "ratingCount": "100+"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},{
  "id": "833196",
  "name": "FreshMenu",
  "cloudinaryImageId": "f5980f4e4888af4e5c275d5dd3ea93f6",
  "locality": "VASHI",
  "areaName": "Municipal Corporation",
  "costForTwo": "₹250 for two",
  "cuisines": [
    "Continental",
    "Chinese",
    "Oriental",
    "Asian",
    "Healthy Food",
    "Fast Food",
    "Indian",
    "Desserts"
  ],
  "avgRating": 4,
  "parentId": "398",
  "avgRatingString": "4.0",
  "totalRatingsString": "1K+",
  "sla": {
    "deliveryTime": 36,
    "lastMileTravel": 4.9,
    "serviceability": "SERVICEABLE",
    "slaString": "35-40 mins",
    "lastMileTravelString": "4.9 km",
    "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
    "nextCloseTime": "2024-07-10 23:59:00",
    "opened": true
  },
  "badges": {

  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
    "entityBadges": {
      "imageBased": {

      },
      "textBased": {

      },
      "textExtendedBadges": {

      }
    }
  },
  "aggregatedDiscountInfoV3": {
    "header": "EVERY ITEM",
    "subHeader": "@ ₹129"
  },
  "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {

      },
      "video": {

      }
    }
  },
  "reviewsSummary": {

  },
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "isNewlyOnboarded": true,
  "restaurantOfferPresentationInfo": {

  },
  "externalRatings": {
    "aggregatedRating": {
      "rating": "--"
    }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},{
  "id": "62968",
  "name": "LunchBox - Meals and Thalis",
  "cloudinaryImageId": "cczbahs40ez5jwkzdcid",
  "locality": "Satyam Towers",
  "areaName": "Kopar Khairane",
  "costForTwo": "₹200 for two",
  "cuisines": [
    "Biryani",
    "North Indian",
    "Punjabi",
    "Healthy Food",
    "Desserts",
    "Beverages"
  ],
  "avgRating": 4.4,
  "parentId": "4925",
  "avgRatingString": "4.4",
  "totalRatingsString": "5K+",
  "sla": {
    "deliveryTime": 30,
    "lastMileTravel": 4.8,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "4.8 km",
    "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
    "nextCloseTime": "2024-07-10 23:59:00",
    "opened": true
  },
  "badges": {
    "textExtendedBadges": [
      {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available",
        "fontColor": "#7E808C"
      }
    ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
    "entityBadges": {
      "imageBased": {

      },
      "textBased": {

      },
      "textExtendedBadges": {
        "badgeObject": [
          {
            "attributes": {
              "description": "",
              "fontColor": "#7E808C",
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available"
            }
          }
        ]
      }
    }
  },
  "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹159"
  },
  "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {

      },
      "video": {

      }
    }
  },
  "reviewsSummary": {

  },
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {

  },
  "externalRatings": {
    "aggregatedRating": {
      "rating": "--"
    }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
{
  "id": "137365",
  "name": "Theobroma",
  "cloudinaryImageId": "63dd75492c47fcec191132b8eb299ea5",
  "locality": "Arenja Corner",
  "areaName": "Vashi",
  "costForTwo": "₹400 for two",
  "cuisines": [
    "Bakery",
    "Desserts"
  ],
  "avgRating": 4.5,
  "parentId": "1040",
  "avgRatingString": "4.5",
  "totalRatingsString": "5K+",
  "sla": {
    "deliveryTime": 31,
    "lastMileTravel": 5,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "5.0 km",
    "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
    "nextCloseTime": "2024-07-10 23:59:00",
    "opened": true
  },
  "badges": {
    "imageBadges": [
      {
        "imageId": "Rxawards/_CATEGORY-Desserts.png",
        "description": "Delivery!"
      }
    ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
    "entityBadges": {
      "imageBased": {
        "badgeObject": [
          {
            "attributes": {
              "description": "Delivery!",
              "imageId": "Rxawards/_CATEGORY-Desserts.png"
            }
          }
        ]
      },
      "textBased": {

      },
      "textExtendedBadges": {

      }
    }
  },
  "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {

      },
      "video": {

      }
    }
  },
  "reviewsSummary": {

  },
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {

  },
  "externalRatings": {
    "aggregatedRating": {
      "rating": "--"
    }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
{
  "id": "156407",
  "name": "The Good Bowl",
  "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
  "locality": "Koparkhairne",
  "areaName": "Satyam Tower",
  "costForTwo": "₹400 for two",
  "cuisines": [
    "Biryani",
    "Pastas",
    "Punjabi",
    "Desserts",
    "Beverages"
  ],
  "avgRating": 4.3,
  "parentId": "7918",
  "avgRatingString": "4.3",
  "totalRatingsString": "1K+",
  "sla": {
    "deliveryTime": 30,
    "lastMileTravel": 4.7,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "4.7 km",
    "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
    "nextCloseTime": "2024-07-10 23:59:00",
    "opened": true
  },
  "badges": {
    "textExtendedBadges": [
      {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available",
        "fontColor": "#7E808C"
      }
    ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
    "entityBadges": {
      "imageBased": {

      },
      "textBased": {

      },
      "textExtendedBadges": {
        "badgeObject": [
          {
            "attributes": {
              "description": "",
              "fontColor": "#7E808C",
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available"
            }
          }
        ]
      }
    }
  },
  "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹90"
  },
  "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {

      },
      "video": {

      }
    }
  },
  "reviewsSummary": {

  },
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {

  },
  "externalRatings": {
    "aggregatedRating": {
      "rating": "--"
    }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
{
  "id": "713212",
  "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/3967a9e5-221f-4af7-8bec-9d5c63551954_713212.JPG",
  "locality": "Sector-11",
  "areaName": "(Ghansoli )Nahi Mumbai",
  "costForTwo": "₹200 for two",
  "cuisines": [
    "Desserts",
    "Ice Cream",
    "Ice Cream Cakes"
  ],
  "avgRating": 4.6,
  "veg": true,
  "parentId": "582",
  "avgRatingString": "4.6",
  "totalRatingsString": "50+",
  "sla": {
    "deliveryTime": 27,
    "lastMileTravel": 4.6,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "4.6 km",
    "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
    "nextCloseTime": "2024-07-10 23:30:00",
    "opened": true
  },
  "badges": {
    "imageBadges": [
      {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
      }
    ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
    "entityBadges": {
      "imageBased": {
        "badgeObject": [
          {
            "attributes": {
              "description": "pureveg",
              "imageId": "v1695133679/badges/Pure_Veg111.png"
            }
          }
        ]
      },
      "textBased": {

      },
      "textExtendedBadges": {

      }
    }
  },
  "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
  },
  "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {

      },
      "video": {

      }
    }
  },
  "reviewsSummary": {

  },
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {

  },
  "externalRatings": {
    "aggregatedRating": {
      "rating": "--"
    }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
{
  "id": "30309",
  "name": "Faasos - Wraps, Rolls & Shawarma",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/5/c796d226-572e-4e15-827f-d1e43cc68cb9_30309.jpg",
  "locality": "Satyam Towers",
  "areaName": "Kopar Khairane",
  "costForTwo": "₹200 for two",
  "cuisines": [
    "Kebabs",
    "Fast Food",
    "Snacks",
    "American",
    "Healthy Food",
    "Desserts",
    "Beverages"
  ],
  "avgRating": 4.3,
  "parentId": "21809",
  "avgRatingString": "4.3",
  "totalRatingsString": "10K+",
  "sla": {
    "deliveryTime": 30,
    "lastMileTravel": 4.8,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "4.8 km",
    "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
    "nextCloseTime": "2024-07-10 23:59:00",
    "opened": true
  },
  "badges": {
    "imageBadges": [
      {
        "imageId": "Rxawards/_CATEGORY-Rolls.png",
        "description": "Delivery!"
      }
    ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
    "entityBadges": {
      "imageBased": {
        "badgeObject": [
          {
            "attributes": {
              "description": "Delivery!",
              "imageId": "Rxawards/_CATEGORY-Rolls.png"
            }
          }
        ]
      },
      "textBased": {

      },
      "textExtendedBadges": {

      }
    }
  },
  "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {

      },
      "video": {

      }
    }
  },
  "reviewsSummary": {

  },
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {

  },
  "externalRatings": {
    "aggregatedRating": {
      "rating": "--"
    }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
}]
const  Body = () => {
  return ( 
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          resObj.map(restro => <ResturantCard key={restro.id} resData ={restro}/>)
        }

      </div>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}

export default App;
