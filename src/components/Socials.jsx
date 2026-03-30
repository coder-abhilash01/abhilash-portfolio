import React from 'react'


const socialHandles = [
  {handle:"Instagram",
    path:"https://www.instagram.com/coder_abhilash?igsh=ZXg0bWxxcGZsZmk3"

},   {handle:"Twitter",
    path:"https://x.com/_coding_is_love"

},  {handle:"GitHub",
    path:"https://github.com/coder-abhilash01"

},  {handle:"LinkedIn",
    path:"https://www.linkedin.com/in/abhilashtiwari02/"

}]
const Socials = ({className}) => {
  return (
      <ul className={`flex ${className}`}>
         {  socialHandles.map((social, i) => (<li key={social.handle}
         className="hover:opacity-70 transition flex">
            <a href={social.path} target='_blank'>{social.handle} </a>
        { i < socialHandles.length-1 ? <span className='text-white/30 mx-2 sm:ml-4'>|</span>: ""} </li>))}
        
        </ul>
  )
}

export default Socials
