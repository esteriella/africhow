import React from 'react'
import OnboardingWelcome from '../components/OnboardingWelcome'
import OnboardingButton from '../components/OnboardingButton'
import Loader from '../components/LoaderOnboarding'
import ReactPlayer from 'react-player'
import Gif from '../assets/AnimateOnboarding/animation_lo0ckjix.mp4'
import { Link } from 'react-router-dom'

export default function FormSuccess() {
  return (
    <div className="grid gap-6 w-[358px] mx-auto place-items-center">
        <div className="w-[358px]">
            <ReactPlayer url={Gif} playing muted width="358px"/>
        </div>  

        <OnboardingWelcome 
            className={'flex flex-col justify-center items-center'} 
            text={`"Welcome back! You're in. Let the food journey begin."`} 
            title={'Login Successful'}
            style={'text-center'}
        />
        
        <Link to="/vendors-dashboard" >
        <OnboardingButton 
            text={'Go to dashboard'}
        />
        </Link>
    </div>
    
  )
}
