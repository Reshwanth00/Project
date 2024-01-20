import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SideBarDashboard from "./components/SideNavBar/SideBarDashboard";
import UserProfile from "./MainApps/Account/UserProfile/UserProfile";
//Import Applications
import General from "./MainApps/Dashboard/General/General";
import MySlots from "./MainApps/MySlots/MySlots";

import { getuser } from "./CommonApps/AllAPICalls";

import { useMediaPredicate } from "react-media-hook";


function App() {
  console.log(" Main App Page reredering-----------------");

  let sideBarBreakPoint = "850px";

  const [rerender, setRerender] = useState(false);

  const rerenderHandler = () => {
    setRerender(!rerender);
  };

  const [sideNavBarWidth, setWidth] = useState("var(--sideNavBarWidth)");

  const [contract, setContract] = useState(true);

  const expandHandler = () => {
    //console.log("expand handler called");
    contract && setWidth("var(--sideNavBarWidthOnContract)");
    !contract && setWidth("var(--sideNavBarWidth)");
    setContract(!contract);
  };

  const [dashboardMounted, setDashboardMounted] = useState(false);
  const [contactsMounted, setContactsMounted] = useState(false);
  const [discussionMounted, setDiscussionMounted] = useState(false);

  const [mySlotsMounted, setMySlotsMounted] = useState(false);

  const [myProfileMounted, setMyProfileMounted] = useState(false);

  
 // const [userData, setData] = useState({
 //   id: null,
 //   usertype: 1,
 // });
  
  const [userData, setData] = useState(null);

  





  useEffect(() => {
    //console.log("useEffect-2");
    getuser({ setData });
  }, [rerender]);

  const smallerThan750px = useMediaPredicate("(max-width: 990px )");	

  useEffect(() => {
    smallerThan750px && setWidth("var(--sideNavBarWidthOnContract)");
    smallerThan750px && setContract(false);
    !smallerThan750px && setWidth("var(--sideNavBarWidth)");
    !smallerThan750px && setContract(true);
  }, [smallerThan750px]);


   console.log("userData in App.js: ", userData);


  return (
    <div className="edrapp">
	  { userData !==null &&  <>
	    <Header
                onPress={expandHandler}
                userData={userData}
                rerender={rerenderHandler}
                />
  
         <SideBarDashboard sideNavBarWidth={sideNavBarWidth}
	              userData={userData}
	              setWidth={setWidth}
	              setContract={setContract}
	              homeMounted={dashboardMounted}
	              mySlotsMounted={mySlotsMounted}
	              myProfileMounted={myProfileMounted}
                      />
 
        <Switch>	        	
            <Route exact path='/app/account/userprofile' >
               <UserProfile sideNavBarWidth={sideNavBarWidth} 
	          userData={userData}
	          rerender={rerenderHandler}
	          passMountInfo={setMyProfileMounted}
	          />
            </Route>
 
            <Route  path='/app/home/meetings' >
                   <General sideNavBarWidth={sideNavBarWidth} 
	              passMountInfo={setDashboardMounted} 
	              userData={userData}
	              rerender = {rerenderHandler}
	              />
            </Route>

            <Route  path='/app/home/slots' >
                   <MySlots sideNavBarWidth={sideNavBarWidth}
                      passMountInfo={setMySlotsMounted}
                      userData={userData}
                      rerender = {rerenderHandler}
                      />
            </Route>

         </Switch>

        </>}

    </div>
  );

  return <div> </div>;
}

export default App;
