import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./image/logo.png";

//config-driven UI
const app = (
  <a href="/">
    <img src={logo} alt="logo" className="logo" />
  </a>
);
const HeaderComponent = () => {
  return (
    <div className="navbar">
      {app}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const data = [
  {
    "info": {
      "id": "621563",
      "name": "Daily Cakes Bakers",
      "cloudinaryImageId": "cmvnpceb2kdxi249ccrl",
      "locality": "August Kranti Marg",
      "areaName": "Hauz Khas",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Cafe"
      ],
      "avgRating": 3.9,
      "veg": true,
      "feeDetails": {
        "restaurantId": "621563",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4800
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4800
      },
      "parentId": "370222",
      "avgRatingString": "3.9",
      "totalRatingsString": "1K+",
      "promoted": true,
      "adTrackingId": "cid=9160385~p=1~eid=0000018b-fd55-a9b5-51a6-bc30005a0113~srvts=1700762331573~45995",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 1.9,
        "serviceability": "SERVICEABLE",
        "slaString": "31 mins",
        "lastMileTravelString": "1.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-11-23 23:59:00",
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
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              }
            ]
          },
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "55% OFF",
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=621563",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "253734",
      "name": "McDonald's",
      "cloudinaryImageId": "6dc3ed2ca21d71acff7c2a51dfe4c720",
      "locality": "E Block",
      "areaName": "South Extension 2",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "American"
      ],
      "avgRating": 4.3,
      "feeDetails": {
        "restaurantId": "253734",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4900
      },
      "parentId": "630",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "23 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-11-24 03:45:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=253734",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  }
]
 //destructuring the props and passing them as params
const Cards = ({cloudinaryImageId, name, cuisines, avgRating}) => {
  return (
    //info?. this ?. is for optional chaining
    <div className="card">
      {/* <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+data[0].info?.cloudinaryImageId} alt="Fruits" />
      <h2>{data[0].info?.name}</h2>
      <h3>{data[0].info?.cuisines.join(", ")}</h3>
      <h4>{data[0].info?.avgRating} stars</h4> */}

      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId} alt="Fruits" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

const BodyComponent = () => {
  return (//passing props 
    <div className="restaurant-list">
      <Cards cloudinaryImageId = {data[0].info.cloudinaryImageId} name = {data[0].info.name} cuisines = {data[0].info.cuisines} avgRating = {data[0].info.avgRating}/>
      <Cards cloudinaryImageId = {data[1].info.cloudinaryImageId} name = {data[1].info.name} cuisines = {data[1].info.cuisines} avgRating = {data[1].info.avgRating}/>      
    </div>
  );
};

const FooterComponent = () => {
  return <h3>Footer</h3>;
};

const AppLayout = () => {
  return (
    //this empty tag is React.Fragment and it acts like one parent inside JSX
    <>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
