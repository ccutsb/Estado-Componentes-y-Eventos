import * as Icon from 'react-bootstrap-icons';
import React from 'react'


export default function SocialButton() {
  return (
    <>
    <div className='icons'>
    <div className="icon">
     <Icon.Twitter size={30}/> 
     </div>
     <div className="icon2">
     <Icon.Github size={30}/>
     </div>
     <div className="icon3">
     <Icon.Google size={30}/>
     </div>
     </div>
    </>
  )
}
