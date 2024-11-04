import React, {useState,useEffect} from 'react';
import { CloseSVG } from '../const/svg';
import Account from './accountDetails';
import Dropdown from './dropdown';
import MenuBar from './menubar';
import MobileHeader from './mobile';




const Header:React.FC = ()=> {
  interface position {
    position: string;
    top: string;
    left: string;
  } 
  const menuPosition = (top:string, left: string):position => {
    const  position = {
      position: 'absolute',
      top: top,
      left: left,
    }
    return position;
  }

  const [showRide, setShowRide] = useState<boolean>(false);
  const [showDrive, setShowDrive] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [showAccount, setShowAccount] = useState<boolean>(false);
  const [networkError, setNetworkError] = useState<boolean>(false);
  

  useEffect(() => {
    const time =  setInterval( async() => {
      try {
        const online = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (online?.status === 200) {
          setNetworkError(false);
        } else {
          setNetworkError(true);
        }
      } 
      catch (error) {
        console.log(error);
        setNetworkError(true);
      }
    },2000)

    return () => {
      clearInterval(time);
    }
  })

  // useEffect(() => {
  //   function isInStandaloneMode() {
  //     return (window.matchMedia('(display-mode: standalone)').matches);
  //   }
  //   if (isInStandaloneMode()) { 

  //   }
  // })
  


      
  return (
    <div>
      {networkError?
       <div className='bg-red-500 flex z-20 justify-between py-4 px-3 text-white w-[250px]  rounded-lg absolute top-5 left-5'>
        <p className='text-[16px]'>Unable to reach network</p>
        <div 
        onClick={() => setNetworkError(!networkError)}
        className='w-fit h-fit'>
          <CloseSVG/>
        </div>  
      </div>: null }
      <div className='hidden sm:block'>
      <MenuBar
      setShowRide={setShowRide}
      setShowDrive={setShowDrive}
      setShowMore={setShowMore}
      setShowAccount={setShowAccount}
      />
      
      
      

      
      {showAccount? 
      <Account
      showAccount={showAccount}
      setShowAccount={setShowAccount}/>:''}
    </div>
    <div className='block md:hidden bg-transparent'>
      <MobileHeader/>
    </div>
    </div>  
  )
}


export default Header;