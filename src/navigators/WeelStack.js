import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import Weel from '../pages/Weel/Weel';
import Connect from '../pages/Connect/Connect';
import Airplan from '../pages/Connect/Airplan';
import Boat from '../pages/Connect/Boat';
import DirectChat from '../pages/Connect/DirectChat';
import Email from '../pages/Connect/Email'
import Independant from '../pages/Connect/Independant'
import MachMaker from '../pages/Connect/MachMaker'
import Map from '../pages/Connect/Map'
import ProfileSearch from '../pages/Connect/ProfileSearch';
import People from '../pages/Connect/People'
import Public from '../pages/Connect/Public'
import TaxiDrive from '../pages/Connect/TaxiDrive'
import Tarin from '../pages/Connect/Train'
import WhatUp from '../pages/Connect/WhatUp'

import Creation from '../pages/Creation/Creation';
// import Art from '../pages/Creation/Art';
import Cooking from '../pages/Creation/Cooking';
import Fashion from '../pages/Creation/Fashion';
import InventionCapital from '../pages/Creation/InventionCapital';
import InventionInfo from '../pages/Creation/InventionInfo';
import StartUpCapital from '../pages/Creation/StartUpCapital';
import StartUpInfo from '../pages/Creation/StartUpInfo';




import GoScheduleStack from './GoScheduleStack';


import Deal from '../pages/Deal/Deal';
import B2BDemand from '../pages/Deal/B2BDemand';
import B2BOffer from '../pages/Deal/B2BOffer';
import C2CDemand from '../pages/Deal/C2CDemand';
import C2COffer from '../pages/Deal/C2COffer';
import JobDemand from '../pages/Deal/JobDemand';
import JobOffer from '../pages/Deal/JobOffer';
import LearnDemand from '../pages/Deal/LearnDemand';
import LearnOffer from '../pages/Deal/LearnOffer';
import ServiceDemand from '../pages/Deal/ServiceDemand';
import ServiceOffer from '../pages/Deal/ServiceOffer';

import Memory from '../pages/Memory/Memory';
import MyActivitiesMeeting from '../pages/Memory/MyActivitiesMeeting';
import MyActivitiesOrder from '../pages/Memory/MyActivitiesOrder';
import MyCalendrePrivate from '../pages/Memory/MyCalendrePrivate';
import MyCalendrePublic from '../pages/Memory/MyCalendrePublic';
import MyFootagePicture from '../pages/Memory/MyFootagePicture';
import MyFootageVideo from '../pages/Memory/MyFootageVideo';

import Shop from '../pages/Shop/Shop';
import ShopEat from '../pages/Shop/ShopEat/ShopEat';
import ShopIntertenment from '../pages/Shop/ShopIntertenment';
import ShopProduct from '../pages/Shop/ShopProduct';

import Talkie from '../pages/Talkie/Talkie';
import Finenc from '../pages/Talkie/Finenc';
import General from '../pages/Talkie/General';
import Movie from '../pages/Talkie/Movie';
import Music from '../pages/Talkie/Music';
import Search from '../pages/Talkie/Search';
import Sport from '../pages/Talkie/Sport';
import Statistic from '../pages/Talkie/Statistic';
import VideoGame from '../pages/Talkie/VideoGame';
import Weather from '../pages/Talkie/Weather';
import MovieHome from '../pages/Talkie/Movie/MovieHome';
import Repair from '../pages/Deal/ServiceDemands/Repair';


import ShopEatStack from './ShopEatStack';
import shopEntertainmentStack from './ShopEntertainmentStack'
import ShopProductStack from './ShopProductStack'
import ServiceStack from './ServiceStack';
import B2BStack from './B2BStack';
import VideoGameStack from './TalkieVideoGameStack';
import MovieStack from './TalkieMovieStack';
import MusicStack from './TalkieMusicStack';
import TubeStack from './TalkieTubeStack';
import ConnectPeopleStack from './ConnectPeopleStack';
import ConnectDatingStack from './ConnectDatingStack';
import DealService from './DealService';
import DealLearning from './DealLearning';
import CreationFashion from './CreationFashion';
import CreationArt from './CreationArt';
import CreationCooking from './CreationCooking';
import CreationSatrtup from './CreationSatrtup';
import CreationInvention from './CreationInvention';
import GoExpenseStack from './GoExpenseStack';
//09-01-2023 new stach for entairtment
import ShopEntertainmentStack from './ShopEntertainmentStack';
const WeelStack = (props) => {

    const Stack = createNativeStackNavigator();

    return (

        <Stack.Navigator
            screenOptions={{ headerShown: false, }}
        >
            {/* <Stack.Screen component={ShopEatStack} name="ShopEatStack" /> */}
            <Stack.Screen component={ShopEntertainmentStack} name="ShopEntertainmentStack" />

            {/* goExpanse Stack */}
            {/* <Stack.Screen component={GoExpenseStack} name="GoExpenseStack" /> */}
            {/* <Stack.Screen component={CreationSatrtup} name="CreationSatrtup" /> */}
            <Stack.Screen component={CreationInvention} name="CreationInvention" />
            {/* <Stack.Screen component={ConnectPeopleStack} name="ConnectPeopleStack" /> */}
            {/* <Stack.Screen component = {Weel} name="Weel" /> */}
            {/* <Stack.Screen component={CreationFashion} name="CreationFashion" /> */}
            <Stack.Screen component={Airplan} name="Airplan" />
            <Stack.Screen component={Boat} name="Boat" />
            <Stack.Screen component={DirectChat} name="DirectChat" />
            <Stack.Screen component={Email} name="Email" />
            <Stack.Screen component={Independant} name="Independant" />
            <Stack.Screen component={MachMaker} name="MachMaker" />
            <Stack.Screen component={Map} name="Map" />
            <Stack.Screen component={ProfileSearch} name="ProfileSearch" />
            <Stack.Screen component={People} name="People" />
            <Stack.Screen component={Public} name="Public" />
            <Stack.Screen component={TaxiDrive} name="TaxiDrive" />
            <Stack.Screen component={Tarin} name="Tarin" />
            <Stack.Screen component={WhatUp} name="WhatUp" />

            <Stack.Screen component={Creation} name="Creation" />
            {/* <Stack.Screen component={Art} name="Art" /> */}
            <Stack.Screen component={Cooking} name="Cooking" />

            <Stack.Screen component={InventionCapital} name="InventionCapital" />
            <Stack.Screen component={InventionInfo} name="InventionInfo" />
            <Stack.Screen component={StartUpCapital} name="StartUpCapital" />
            <Stack.Screen component={StartUpInfo} name="StartUpInfo" />

            <Stack.Screen component={Deal} name="Deal" />
            {/* <Stack.Screen component = {B2BDemand} name="B2BDemand" /> */}
            <Stack.Screen component={B2BStack} name="B2BDemand" />
            <Stack.Screen component={B2BOffer} name="B2BOffer" />
            <Stack.Screen component={C2CDemand} name="C2CDemand" />
            <Stack.Screen component={C2COffer} name="C2COffer" />
            <Stack.Screen component={JobDemand} name="JobDemand" />
            <Stack.Screen component={JobOffer} name="JobOffer" />
            <Stack.Screen component={LearnDemand} name="LearnDemand" />
            <Stack.Screen component={LearnOffer} name="LearnOffer" />
            {/* <Stack.Screen component = {ServiceDemand} name="ServiceDemand" /> */}
            <Stack.Screen component={ServiceStack} name="ServiceDemand" />

            <Stack.Screen component={ServiceOffer} name="ServiceOffer" />


            <Stack.Screen component={Memory} name="Memory" />
            <Stack.Screen component={MyActivitiesMeeting} name="MyActivitiesMeeting" />
            <Stack.Screen component={MyActivitiesOrder} name="MyActivitiesOrder" />
            <Stack.Screen component={MyCalendrePrivate} name="MyCalendrePrivate" />
            <Stack.Screen component={MyCalendrePublic} name="MyCalendrePublic" />
            <Stack.Screen component={MyFootagePicture} name="MyFootagePicture" />
            <Stack.Screen component={MyFootageVideo} name="MyFootageVideo" />

            <Stack.Screen component={Shop} name="Shop" />
            <Stack.Screen component={ShopEatStack} name="ShopEat" />
            <Stack.Screen component={shopEntertainmentStack} name="ShopIntertenment" />
            <Stack.Screen component={ShopProductStack} name="ShopProduct" />

            <Stack.Screen component={Talkie} name="Talkie" />
            <Stack.Screen component={Finenc} name="Finenc" />
            <Stack.Screen component={General} name="General" />
            <Stack.Screen component={Movie} name="Movie" />
            <Stack.Screen component={Music} name="Music" />
            <Stack.Screen component={Search} name="Search" />
            <Stack.Screen component={Sport} name="Sport" />
            <Stack.Screen component={Statistic} name="Statistic" />
            <Stack.Screen component={VideoGame} name="VideoGame" />
            <Stack.Screen component={Weather} name="Weather" />

            {/* <Stack.Screen component = {Repair} name="Repair" /> */}
            {/* <Stack.Screen component = {VideoGameStack} name="VideoGameHome" />
            <Stack.Screen component = {MovieStack} name="MovieHome" />
            

            <Stack.Screen component = {MusicStack} name="MusicHome" />
            <Stack.Screen component = {TubeStack} name="NewsHome" /> */}

        </Stack.Navigator>

    )
}




export default WeelStack