# Project Overview

## Project Links

- [Github Project2-BreweryApp](https://github.com/trtincher/Project2-BreweryApp)
- [Netlify link]()

## Project Description

Brewery mApp will be an interactive brewery map. Main page is a map with color gradient with darker hues representing more visites(post MVP adds pens on larger screens). There will be a collection page which will show cards with details about the brewery, your rating of the brewery, which beers you tried, have toggles (i.e., favorite, visited, and wishlist),  and notes about your visit. There will also be a search function to find breweries by location and add them to your lists.

## API

I will be using the Open Brewery DB API and brewerDB.com. Below are code snippet examples of the search function and brewery description information. 


```
using Open Brewery I can conduct brewery searchs by city that return results like this:

{data: [
{
"id": 6863,
"name": "Saint Arnold Brewing Co",
"brewery_type": "regional",
"street": "2000 Lyons Ave",
"city": "Houston",
"state": "Texas",
"postal_code": "77020-2028",
"country": "United States",
"longitude": "-95.3484665615608",
"latitude": "29.77112745",
"phone": "7136869494",
"website_url": "http://www.saintarnold.com",
"updated_at": "2018-08-24T16:22:59.506Z",
"tag_list": []
}
] }
```
```
using sandbo-api.brewerydb.com I can get more detail by filtering through there brewery list for results like this:

{
"id": "IImUD9",
"name": "Breckenridge Brewery",
"nameShortDisplay": "Breckenridge",
"description": "Breckenridge Brewery was founded in 1990 in Breckenridge, Colorado. In the past two plus decades Breckenridge Brewery has grown from a small 3,000-barrels-a-year brewpub to one of the most successful craft beer and restaurant companies in the nation. It now handcrafts more than 70,000 barrels of fresh beer annually and owns and operates five brewpubs and ale houses in the state of Colorado. For more information visit www.breckbrew.com.",
"website": "http://www.breckbrew.com/",
"established": "1990",
"isOrganic": "N",
"images": {
"icon": "https://brewerydb-images.s3.amazonaws.com/brewery/IImUD9/upload_jzk0J2-icon.png",
"medium": "https://brewerydb-images.s3.amazonaws.com/brewery/IImUD9/upload_jzk0J2-medium.png",
"large": "https://brewerydb-images.s3.amazonaws.com/brewery/IImUD9/upload_jzk0J2-large.png",
"squareMedium": "https://brewerydb-images.s3.amazonaws.com/brewery/IImUD9/upload_jzk0J2-squareMedium.png",
"squareLarge": "https://brewerydb-images.s3.amazonaws.com/brewery/IImUD9/upload_jzk0J2-squareLarge.png"
},
"status": "verified",
"statusDisplay": "Verified",
"createDate": "2012-01-03 02:41:48",
"updateDate": "2018-11-02 02:15:01",
"isMassOwned": "Y",
"isInBusiness": "Y",
"isVerified": "N"
}
```

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Mobile Wireframe](https://res.cloudinary.com/dugmhtotn/image/upload/v1593180145/Brewery_App_Wireframe_Mbl_dqzykj.jpg)
- [Desktop/Tablet Wireframe](https://res.cloudinary.com/dugmhtotn/image/upload/v1593184949/Brewery_App_Desk-Tblt1_pjoazt.jpg)
- [React architecture](https://res.cloudinary.com/dugmhtotn/image/upload/v1593183710/react_arch_brewery_app1_xzxafq.jpg)


### MVP/PostMVP  

#### MVP
- Find and use external api 
- Render data on page in form of cards
	- Favorites List
	- Wishlist
	- Visited List
	- All
- Landing Page
	- Map
	- Map filters
	- About section
- Nav Bar with working links
- Allow user to interact with the page
	- Nav Bar
	- Filters
	- Card Toggles and Notes
	- Search bar

#### PostMVP

- Add localStorage or firebase for storage
- Add more localized pins to map in tablet and desktop
- Brewery Rating system
- Brewery Notes section
- Add multiple search functionalities
	- City, Zip, State, Name

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 


## MVP

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| API | H | 2hrs| 0hrs | 0hrs |
| App | H | 2hrs| 0hrs | 0hrs |
| NaveBar | H | 3hrs| 0hrs | 0hrs |
| LinkButtons| H | 2hrs| 0hrs | 0hrs |
| MapPg | H | 5hrs| 0hrs | 0hrs |
| CardSets | H | 5hrs| 0hrs | 0hrs |
| Form| H | 3hrs| 0hrs | 0hrs |
| CSS Styling| H | 5hrs| 0hrs | 0hrs |
| Responsive Design| H | 5hrs| 0hrs | 0hrs |
| Total | H | 30hrs| 0hrs | 0hrs |

## Post MVP

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| More Form Search Functions | H | 2hrs| 0hrs | 0hrs |
| Pens on Brewery Locations | H | 2hrs| 0hrs | 0hrs |
| Animations/Hover Effects | H | 2hrs| 0hrs | 0hrs |
| Total | H | 6hrs| 0hrs | 0hrs |

## Additional Libraries
 Bootstrap, SCSS, React, React-Router

## Code Snippet Wins 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
