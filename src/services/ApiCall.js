import { mainUrl } from "../common";
//https://www.swiggy.com/dapi/restaurants?restaurant_id=26706&source=collection&query=Burger
export const getAllResturants = async () => {
  try {
    const url =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.67003492726483&lng=77.11469986756225&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const response = await fetch(mainUrl + encodeURIComponent(url));
    const data = await response.json();
    return {
      data: data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
      status: true,
    };
  } catch (error) {
    throw new Error(error);
  }
};

// fetch(
//   "https://pk.fd-api.com/api/v5/vendors/n7yx?include=menus,bundles,multiple_discounts&language_id=1&opening_type=delivery&basket_currency=PKR&latitude=31.477531193917844&longitude=74.32708262987789",
// )
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     // Process the data as needed
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

// const url =
//   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.67003492726483&lng=77.11469986756225&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
// fetch(proxyUrl + encodeURIComponent(url))
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.table(data);
//     // Process the fetched data here
//   })
//   .catch((error) => {
//     console.error("There was a problem with your fetch operation:", error);
//   });

// const url = "https://www.swiggy.com/dapi/restaurants/list/update";
// const payload = {
//   lat: 28.67003492726483,
//   lng: 77.11469986756225,
//   nextOffset: "COVCELQ4KID42tOf0rLSNjCnEzgD",
//   filters: {},
//   seoParams: {
//     seoUrl: "https://www.swiggy.com/",
//     pageType: "FOOD_HOMEPAGE",
//     apiName: "FoodHomePage",
//   },
//   widgetOffset: {
//     NewListingView_category_bar_chicletranking_TwoRows: "",
//     NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
//     Restaurant_Group_WebView_SEO_PB_Theme: "",
//     collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "10",
//     inlineFacetFilter: "",
//     restaurantCountWidget: "",
//     _csrf: "Q1SNLFtsijy0-5f7VMuiB8Skr0RQLNGbyfn-OcPY",
//   },
// };

// fetch(proxyUrl + encodeURIComponent(url), {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(payload),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));
