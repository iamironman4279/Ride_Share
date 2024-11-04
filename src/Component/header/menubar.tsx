import React from "react";

interface Props {
  setShowRide: (value: boolean) => void;
  setShowDrive: (value: boolean) => void;
  setShowMore: (value: boolean) => void;
  setShowAccount: (value: boolean) => void;
}


const MenuBar: React.FC<Props> = ({setShowRide,  setShowDrive, setShowMore,  setShowAccount}) => {
   const userName = localStorage.getItem('userName')
   const accountName = userName?.split(' ')[0]
  
   return(
     <nav className="nav_bar bg-black text-white p-0 px-5 md:px-10 lg:px-12 xl:px-[85px] 2xl:px-[130px]">
     <div className="nav_bar_container flex items-center justify-between px-2 md:px-10 lg:px-12">
      <ul className="nav_left flex items-center ">
        <li className="nav_bar_logo mr-14  cursor-pointer">
          <a href="/">
            <div className='font-sans text-2xl font-normal'>Ride Share</div>
          </a>
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
          onMouseEnter={() => {setShowAccount(true)
          setShowRide(false)
          setShowDrive(false)
          setShowMore(false)
          }}
          className='font-medium py-3'>{accountName? accountName: null}</button>
        </li>
      </ul>  
    </div>
  </nav>
  )
}


export default MenuBar;