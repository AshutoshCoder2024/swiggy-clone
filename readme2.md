
www.swiggy.com/restaurants
https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.3440997&lng=85.309562&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING



https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=10.054039908667727&lng=76.34344674532176&carousel=true&third_party_vendor=1
 


<!-- rest Menu -->
pizza hurt (APi) =https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.3440997&lng=85.309562&restaurantId=80227&catalog_qa=undefined&submitAction=ENTER

Burger King(API) =https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.3440997&lng=85.309562&restaurantId=657477&catalog_qa=undefined&submitAction=ENTER

In  Api of pizza hurt and in burger king there is only one diff id similary there are many more restuarants that have only diff in there id and all has same structure  so we habe to pass there id and call api of that restuarant 

    
// Local proxy server configured in vite.config.js
// All API calls now use /api prefix which gets proxied to Swiggy 



all the section 




problem that  o face while making this project 
1st problem 
 handle lagre amont of data as it is a large number of data as saome data have same structure but not all some have diff do i have to handle then like when i choose any brand like pizza hart or dominose then there  is a categories  section in some section  non veg veg ect 
as i i am selectiong on the basic of title 





2nd problem 
 in naming the file name like i make file name then confuse which file is responsve for what 



 3th 
 as in that project  while adding  a search bar  As  in swigy website when we search then  the data come form backedn like request but  it  work when  swigy wesite is open  as here  some cokkies(active user like swigy app is on or not  ) send  with api request 

 and  as   i am working with  heroku as a proxy server but in heroku swiggy app is not open  so when we send req then cokies will not send 


 
  API Link  
 https://www.swiggy.com/dapi/menu/pl/search?lat=22.8006&lng=86.1871&restaurantId=449028&isMenuUx4=true&query=pizza&submitAction=ENTER
