import React from 'react'
import Img2  from "./Img2"

const Img = ({pic}) => {
  console.log(pic)
  return (
    <div>
      {pic.map((pic)=>(
        <Img  img={Img2} key={Img2.id} />
      ))}
    </div>
  )
}

export default Img