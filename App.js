import React, { useRef, useEffect, useState } from "react";
import {
  SafeAreaView,
  Button,
  TextInput,
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  Switch,
  Image,
  FlatList,
  Animated
} from "react-native";
import { NativeEventEmitter, NativeModules } from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from "./constants";
import { AlanView } from "./AlanSDK.js";
import { SwiperFlatList } from 'react-native-swiper-flatlist';

import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from "react-native-indicators";

const { AlanManager, AlanEventEmitter } = NativeModules;
const alanEventEmitter = new NativeEventEmitter(AlanEventEmitter);

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
 const affordable = 1;
    const fairPrice = 2;
    const expensive = 3;
    const foodData = [
          {
            menuId: 1,
            name: "Crispy Chicken Burger",
            photo: images.crispy_chicken_burger,
            description: "Burger with crispy chicken, cheese and lettuce",
            calories: 200,
            price: 10,
            restaurant: "ByProgrammers Burger",
            rating: 4.8,
            categories: "burger",
            priceRating: affordable,
            restaurenPhoto: images.burger_restaurant_1,
            duration: "30 - 45 min",
            location: {
            latitude: 1.5347282806345879,
            longitude: 110.35632207358996,
                       },
            courier: {
            avatar: images.avatar_1,
            name: "Amy",
                     }
          },
          {
            menuId: 2,
            name: "Crispy Chicken Burger with Honey Mustard",
            photo: images.honey_mustard_chicken_burger,
            description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
            calories: 250,
            price: 15,
            restaurant: "ByProgrammers Burger",
            rating: 4.8,
            categories: "burger",
            priceRating: affordable,
            restaurenPhoto: images.burger_restaurant_1,
            duration: "30 - 45 min",
            location: {
            latitude: 1.5347282806345879,
            longitude: 110.35632207358996,
                       },
            courier: {
            avatar: images.avatar_1,
            name: "Amy",
                     }
          },
          {
            menuId: 3,
            name: "Crispy Baked French Fries",
            photo: images.baked_fries,
            description: "Crispy Baked French Fries",
            calories: 194,
            price: 8,
            restaurant: "ByProgrammers Burger",
            rating: 4.8,
            categories: "chips",
            priceRating: affordable,
            restaurenPhoto: images.burger_restaurant_1,
            duration: "30 - 45 min",
            location: {
            latitude: 1.5347282806345879,
            longitude: 110.35632207358996,
                       },
            courier: {
            avatar: images.avatar_1,
            name: "Amy",
                     }
      },
        {
            menuId: 4,
            name: "Hawaiian Pizza",
            photo: images.hawaiian_pizza,
            description: "Canadian bacon, homemade pizza crust, pizza sauce",
            calories: 250,
            price: 15,
            restaurant: "ByProgrammers Pizza",
            rating: 4.8,
            categories: "pizza",
            priceRating: affordable,
            restaurenPhoto: images.pizza_restaurant,
            duration: "30 - 45 min",
            location: {
            latitude: 1.556306570595712,
                longitude: 110.35504616746915,
                       },
            courier: {
                avatar: images.avatar_2,
                name: "Jackson"
            },
        
          },
          {
            menuId: 5,
            name: "Tomato & Basil Pizza",
            photo: images.pizza,
            description:
              "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
            calories: 250,
            price: 20,
            restaurant: "ByProgrammers Pizza",
            rating: 4.8,
            categories: "pizza",
            priceRating: affordable,
            restaurenPhoto: images.pizza_restaurant,
            duration: "30 - 45 min",
            location: {
            latitude: 1.556306570595712,
                longitude: 110.35504616746915,
                       },
            courier: {
                avatar: images.avatar_2,
                name: "Jackson"
            },
          },
          {
            menuId: 6,
            name: "Tomato Pasta",
            photo: images.tomato_pasta,
            description: "Pasta with fresh tomatoes",
            calories: 100,
            price: 10,
            restaurant: "ByProgrammers Pizza",
            rating: 4.8,
            categories: "pasta",
            priceRating: affordable,
            restaurenPhoto: images.pizza_restaurant,
            duration: "30 - 45 min",
            location: {
            latitude: 1.556306570595712,
                longitude: 110.35504616746915,
                       },
            courier: {
                avatar: images.avatar_2,
                name: "Jackson"
            },
          },
          {
            menuId: 7,
            name: "Mediterranean Chopped Salad ",
            photo: images.salad,
            description: "Finely chopped lettuce, tomatoes, cucumbers",
            calories: 100,
            price: 10,
            restaurant: "ByProgrammers Pizza",
            rating: 4.8,
            categories: "salad",
            priceRating: affordable,
            restaurenPhoto: images.pizza_restaurant,
            duration: "30 - 45 min",
            location: {
            latitude: 1.556306570595712,
                longitude: 110.35504616746915,
                       },
            courier: {
                avatar: images.avatar_2,
                name: "Jackson"
                     },
          },
          {
            menuId: 8,
            name: "Chicago Style Hot Dog",
            photo: images.chicago_hot_dog,
            description: "Fresh tomatoes, all beef hot dogs",
            calories: 100,
            price: 20,
            restaurant: "ByProgrammers Hotdogs",
            rating: 4.8,
            categories: "hotdog",
            priceRating: expensive,
            restaurenPhoto: images.hot_dog_restaurant,
            duration: "20 - 25 min",
            location: {
              latitude: 1.5238753474714375,
              longitude: 110.34261833833622,
                 },
            courier: {
              avatar: images.avatar_3,
              name: "James",
                 },
          },
       
      {
            menuId: 9,
            name: "Sushi sets",
            photo: images.sushi,
            description: "Fresh salmon, sushi rice, fresh juicy avocado",
            calories: 100,
            price: 50,
            restaurant: "ByProgrammers Sushi",
            rating: 4.8,
            categories: "sushi",
            priceRating: expensive,
            restaurenPhoto: images.japanese_restaurant,
            duration: "10 - 15 min",
            location: {
             latitude: 1.5578068150528928,
             longitude: 110.35482523764315,
        },
            courier: {
              avatar: images.avatar_4,
              name: "Ahmad",
        }
          },
      
          {
            menuId: 10,
            name: "Kolo Mee",
            photo: images.kolo_mee,
            description: "Noodles with char siu",
            calories: 200,
            price: 5,
            restaurant: "ByProgrammers Cuisine",
            rating: 4.8,
            categories: "cuisine",
            priceRating: expensive,
            restaurenPhoto: images.noodle_shop,
            duration: "15 - 20 min",
            location: {
              latitude: 1.558050496260768,
              longitude: 110.34743759630511,
        },
            courier: {
             avatar: images.avatar_4,
             name: "Muthu",
        }
          },
          {
            menuId: 11,
            name: "Sarawak Laksa",
            photo: images.sarawak_laksa,
            description: "Vermicelli noodles, cooked prawns",
            calories: 300,
            price: 8,
            restaurant: "ByProgrammers Cuisine",
            rating: 4.8,
            categories: "cuisine",
            priceRating: expensive,
            restaurenPhoto: images.noodle_shop,
            duration: "15 - 20 min",
            location: {
              latitude: 1.558050496260768,
              longitude: 110.34743759630511,
        },
            courier: {
             avatar: images.avatar_4,
             name: "Muthu",
        }
          }
    ];


function App() {
  const [authDataValue, setAuthDataValue] = useState("test auth data");
  const [foodScreen, setFoodScreen] = useState(false);
  const [homeScreen, setHomeScreen] = useState(true);
  const [restaurantScreen, setRestaurantScreen] = useState(false);
  const [restaurant, setRestaurant] = React.useState(null);
  const [restaurants, setRestaurants] = useState(foodData);
  const [scroll,setScroll]= useState(false)
  const [orderItems, setOrderItems] = React.useState([]);

  
  useEffect(() => {
    const subscription = alanEventEmitter.addListener("command", (data) => {
      if (data.command == "ok") {
        AlanManager.playText(
          "did you check out those places i suggested to you yesterday? "
        );
      }
      if (data.command == "down") {
        AlanManager.playText("Ok ");
        setTimeout(() => {
          setScroll(true);
          }, 3000);
					}
					
		 if (data.command == "one") {
        AlanManager.playText("Ok ");
         setScroll(false);
         setFoodScreen(false);
         setRestaurantScreen(true);
         setRestaurant(restaurants.find((x)=>{return x.menuId == 1}))
					}			
					
	if (data.command == "up") {
        AlanManager.playText("Ok ");
        setTimeout(() => {
          setScroll(false);
          setScroll(true);
        }, 3000);
					}
      if (data.command == "menu") {
        AlanManager.playText("Let me show you a list of food categories which i have ");
        setTimeout(() => {
          setFoodScreen(true);
          setHomeScreen(false);
          setScroll(false);
        }, 5000);

        setTimeout(() => {
          AlanManager.playText("tell me if you find something you like ");
        }, 10000);
      }
      
      if (data.command == "home") {
        AlanManager.playText("ok");
        setTimeout(() => {
          setFoodScreen(false);
          setHomeScreen(true);
          setScroll(false);
        }, 5000);
}
    });
    return () => {
      subscription.remove();
    };
  }, []);

function HomeScreen() {
	return(
	<View style={styles.container}>
          <Image
            source={require("./assets/center.jpg")}
            style={{ position: "absolute", top: "25%", resizeMode: "contain" }}
          />
          <BarIndicator
            color="#c7c7c7"
            style={{ position: "absolute", top: "50%" }}
          />
        </View>
	)
}

  function FoodScreen() {
    const initialCurrentLocation = {
      streetName: "Kuching",
      gps: {
        latitude: 1.5496614931250685,
        longitude: 110.36381866919922,
      },
    };
const [currentLocation, setCurrentLocation] = useState(
      initialCurrentLocation
    );

 function renderRestaurantList() {
    	
    	
      const renderItem = ({ item }) => (
        <React.Fragment>
          <View
            style={{
              marginBottom: SIZES.padding,
              marginTop: 50,
            }}
          >
            <Image
              source={item.photo}
              resizeMode="cover"
              style={{
                width: "100%",
                height: 200,
                borderRadius: SIZES.radius,
              }}
            />

            <View
              style={{
                position: "absolute",
                bottom: 0,
                height: 50,
                width: SIZES.width * 0.3,
                backgroundColor: COLORS.white,
                borderTopRightRadius: SIZES.radius,
                borderBottomLeftRadius: SIZES.radius,
                alignItems: "center",
                justifyContent: "center",
                ...styles.shadow,
              }}
            >
              <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
            </View>
          </View>

          <Text style={{ ...FONTS.body2 }}>Option:{item.menuId} {item.name}</Text>

          <View
            style={{
              marginTop: SIZES.padding,
              flexDirection: "row",
            }}
          >
            <Image
              source={icons.star}
              style={{
                height: 20,
                width: 20,
                tintColor: COLORS.primary,
                marginRight: 10,
              }}
            />
            <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

            <View
              style={{
                flexDirection: "row",
                marginLeft: 10,
              }}
            >
             
                  <View style={{ flexDirection: "row" }} >
                    <Text style={{ ...FONTS.body3 }}>
                      {item.categories}
                    </Text>
                    <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}>
                      {" "}
                      .{" "}
                    </Text>
                  </View>
              
                <Text
                 
                  style={{
                    ...FONTS.body3,
                    color:COLORS.black
                   
                  }}
                >
                  ${item.price}
                </Text>
          
            </View>
          </View>
        </React.Fragment>
      );

      return (
        <SwiperFlatList
         onScrollToIndexFailed={(info) => {
          const wait = new Promise((resolve) => setTimeout(resolve, 500));
          wait.then(() => {
            flatList.current?.scrollToIndex({
              index: info.index,
              animated: true,
            });
          });
        }}
          index={0}
          autoplay={scroll}
          vertical={true}
          autoplayDelay={3}
          onEndReached={({ distanceFromEnd }) => {
          if (distanceFromEnd < 0) return
          	setTimeout(()=>{
          		setScroll(false)
          	},20000)
          }}
          data={restaurants}
          keyExtractor={(item) => `${item.menuId}`}
          renderItem={renderItem}
          contentcontainer3Style={{
            paddingHorizontal: SIZES.padding * 2,
            paddingBottom: 30,
          }}
        />
      );
    }
    return (
      <SafeAreaView style={styles.container3}>
        {renderRestaurantList()}
      </SafeAreaView>
    );
  }
  
  function RestaurantScreen () {

    function editOrder(action, menuId, price) {
        let orderList = orderItems.slice()
        let item = orderList.filter(a => a.menuId == menuId)

        if (action == "+") {
            if (item.length > 0) {
                let newQty = item[0].qty + 1
                item[0].qty = newQty
                item[0].total = item[0].qty * price
            } else {
                const newItem = {
                    menuId: menuId,
                    qty: 1,
                    price: price,
                    total: price
                }
                orderList.push(newItem)
            }

            setOrderItems(orderList)
        } else {
            if (item.length > 0) {
                if (item[0]?.qty > 0) {
                    let newQty = item[0].qty - 1
                    item[0].qty = newQty
                    item[0].total = newQty * price
                }
            }

            setOrderItems(orderList)
        }
    }

    function getOrderQty(menuId) {
        let orderItem = orderItems.filter(a => a.menuId == menuId)

        if (orderItem.length > 0) {
            return orderItem[0].qty
        }

        return 0
    }

    function getBasketItemCount() {
        let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0)

        return itemCount
    }

    function sumOrder() {
        let total = orderItems.reduce((a, b) => a + (b.total || 0), 0)

        return total.toFixed(2)
    }

    function renderHeader() {
        return (
            <View style={{ alignItems: 'center',justifyContent: 'center', }}>
               <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <View
                        style={{
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding * 3,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightGray3
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>{restaurant.restaurant}</Text>
                    </View>
                </View>

            </View>
        )
    }

    function renderFoodInfo() {
        return (
        
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ height: SIZES.height * 0.35 }}>
                              
                                <Image
                                    source={restaurant.photo}
                                    resizeMode="cover"
                                    style={{
                                        width: SIZES.width,
                                        height: "100%"
                                    }}
                                />

                              
                                <View
                                    style={{
                                        position: 'absolute',
                                        bottom: - 20,
                                        width: SIZES.width,
                                        height: 50,
                                        justifyContent: 'center',
                                        flexDirection: 'row'
                                    }}
                                >
                                <View
                                        style={{
                                            width: 50,
                                            backgroundColor: COLORS.white,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderTopLeftRadius: 25,
                                            borderBottomLeftRadius: 25
                                        }}
                                      
                                    >
                                  <Text style={{ ...FONTS.body1 }}>-</Text>
                                  </View>
                                    <View
                                        style={{
                                            width: 50,
                                            backgroundColor: COLORS.white,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Text style={{ ...FONTS.h2 }}>{getOrderQty(restaurant.menuId)}</Text>
                                    </View>
                                         <View
                                        style={{
                                            width: 50,
                                            backgroundColor: COLORS.white,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderTopRightRadius: 25,
                                            borderBottomRightRadius: 25
                                        }}
                                      
                                    >
                                        <Text style={{ ...FONTS.body1 }}>+</Text>
                                   </View>
                                </View>
                            </View>

                            <View
                                style={{
                                    width: SIZES.width,
                                    alignItems: 'center',
                                    marginTop: 15,
                                    paddingHorizontal: SIZES.padding * 2
                                }}
                            >
                                <Text style={{ marginVertical: 10, textAlign: 'center', ...FONTS.h2 }}>{restaurant.name} - {restaurant.price.toFixed(2)}</Text>
                                <Text style={{ ...FONTS.body3 }}>{restaurant.description}</Text>
                            </View>
                               <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: 10
                                }}
                            >
                                <Image
                                    source={icons.fire}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginRight: 10
                                    }}
                                />

                                <Text style={{
                                    ...FONTS.body3, color: COLORS.darygray
                                }}>{restaurant.calories.toFixed(2)} cal</Text>
                            </View>
                        </View>
                    )
             }



    function renderOrder() {
        return (
            <View>
               
                <View
                    style={{
                        backgroundColor: COLORS.white,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: SIZES.padding * 2,
                            paddingHorizontal: SIZES.padding * 3,
                            borderBottomColor: COLORS.lightGray2,
                            borderBottomWidth: 1
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>{getBasketItemCount()} items in Cart</Text>
                        <Text style={{ ...FONTS.h3 }}>${sumOrder()}</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: SIZES.padding * 2,
                            paddingHorizontal: SIZES.padding * 3
                        }}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={icons.pin}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.darkgray
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>Location</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={icons.master_card}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.darkgray
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>8888</Text>
                        </View>
                    </View>

                    <View
                        style={{
                            padding: SIZES.padding * 2,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <View
                            style={{
                                width: SIZES.width * 0.9,
                                padding: SIZES.padding,
                                backgroundColor: COLORS.primary,
                                alignItems: 'center',
                                borderRadius: SIZES.radius
                            }}
                            
                        >
                            <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Place Order</Text>
                        </View>
                    </View>
                </View>

            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container4}>
            {renderHeader()}
            {renderFoodInfo()}
            {renderOrder()}
        </SafeAreaView>
    )
}


  return (
    <React.Fragment>
      {homeScreen && <HomeScreen/>}
      {foodScreen && <FoodScreen />}
      {restaurantScreen && RestaurantScreen/>}

      <AlanView
        projectid={
          "9f230096bc8fef2aaeafe86795455deb2e956eca572e1d8b807a3e2338fdd0dc/stage"
        }
        host={"studio.alan.app"}
        authData={{ text: authDataValue }}
      />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0C1A27",
  },
  container1: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  container3: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  container4: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    }
});
export default App;
