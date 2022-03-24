import React from "react";
import Dropdown from "./dropdown";

interface Props {
  showRide: boolean;
  setShowRide: (value: boolean) => void;
  showDrive: boolean;
  setShowDrive: (value: boolean) => void;
  showMore: boolean;
  setShowMore: (value: boolean) => void;
  showAccount: boolean;
  setShowAccount: (value: boolean) => void;
}

const MenuBar: React.FC<Props> = ({showRide, setShowRide, showDrive, setShowDrive, showMore, setShowMore, showAccount, setShowAccount}) => {
  return(
     <nav className="nav_bar bg-black text-white p-3 px-2 md:px-10 lg:px-12 xl:px-[85px] 2xl:px-[130px]">
     <div className="nav_bar_container flex items-center justify-between px-2 md:px-10 lg:px-12">
      <ul className="nav_left flex items-center ">
        <li className="nav_bar_logo mr-14  cursor-pointer">
          <a href="https://www.uber.com/">
            <div className='font-sans text-2xl font-normal'>Uber</div>
          </a>
        </li>
        <li className="left_nav_bar_item text-lg">
          <button onMouseEnter={() => {setShowRide(true)}}
          onMouseLeave = {() => {setShowRide(false)}}
           className="ride font-san font-medium">Ride</button>
        </li>
        <li className="left_nav_bar_item ml-6 text-lg">
          <button 
          onMouseEnter={() => {setShowDrive(true)}}
          onMouseLeave = {() => {setShowDrive(false)}}
          className="drive font-medium">Drive</button>
        </li>
        <li className="left_nav_bar_item ml-6 text-lg">
          <button 
          onMouseEnter={() => {setShowMore(true)}}
          onMouseLeave = {() => {setShowMore(false)}}
          className="more font-medium">More</button>
        </li>
      </ul>
      <ul className="nav_right flex items-center">
        <li className="help text-lg font-medium">
          <a href="https://help.uber.com/riders">
            <div>Help</div>
          </a> 
        </li>
        <li className="Acc_name ml-6 text-lg">
          <button 
          onMouseEnter={() => {setShowAccount(true)}}
          onMouseLeave = {() => {setShowAccount(false)}}
          className='font-medium'>Oluka</button>
        </li>
      </ul>  
    </div>
  </nav>
  )
}


export default MenuBar;