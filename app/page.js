// 1. basic
// import React from 'react'

// const page = () => {
//   return (
//     <div>page</div>
//   )
// }

// export default page

// 2. integer variable
// import React from 'react'

// const page = () => {
//   const a=10;
//   return (
//     <div>{a}</div>
//   )
// }

// export default page

// 3. string variable
// import React from 'react'

// const page = () => {
//   const groom="salmon";
//   const bride="kat";
//   return (
//     <div>{groom} weds {bride}</div>
//   )
// }

// export default page

// 4. jsx elements - html tags using in js , fragments
// import React from 'react'

// const page = () => {
//   let marks=80
//   return (
//     <>
//     <div>
//     <h1>My marks were {marks}</h1>
//     </div>
//     </>
//   )
// }
// export default page

// 5. making variables using hooks - useState (correct way of making variables in react so that the value gets updated)
// "use client"
// import React, { useState } from 'react'

// const page = () => {
//   const [marks, setMarks] = useState(80) // [var,func]
//   return (
//     <>
//     <h1>My marks were {marks}</h1>
//     <button onClick={()=>{
//       setMarks(33)
//     }}>Update</button>
//     </>
//   )
// }

// export default page

// 6. Component seeking , passing data using props 
// "use client"
// import React, { useState } from 'react'
// import Header from "@/Components/Header"

// const page = () => {
//   const [user, setUser] = useState("Anushka")
//   const [editor, setEditor] = useState("XYZ")
//   return (
//     <>
//     <Header user={user} edit={editor}/>
//     </>
//   )
// }

// export default page

// 7. Routing
// "use client"
// import React from 'react'

// const page = () => {
//   return (
//     <div>
//       <h1>This is Home Page</h1>
//       <a href='/About'>About</a>
//       <a href='/Courses'>Courses</a>
//       <a href='/Product'>Product</a>
      
//     </div>
//   )
// }

// export default page

// 8. Routing... Working with link tag instead of a 
// "use client"
// import React from 'react'
// import Link from 'next/link'

// const page = () => {
//   return (
//     <div>
//       <h1>This is Home Page</h1>
//       <Link href="/About">About</Link>
//       <Link href="/Product">Product</Link>
//       <Link href="/Courses">Courses</Link>
//     </div>
//   )
// }

// export default page

// 9. getting links from header directly or through layout.js ✔️
// "use client"
// import React from 'react'

// const page = () => {
//   return (
//     <div>
//       <h1>This is Home Page</h1>
//     </div>
//   )
// }

// export default page

// 10. Api fetch / axios
"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const page = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    getImages()
  
  }, [])
  

  const getImages=async()=>{
    try{
      const response=await axios.get("https://picsum.photos/v2/list");
      const data=response.data;
      // console.log(data);
      setImages(data);
      console.log(images);
    }
    catch(error){
      console.error("Error  in Fetching images");
    }
  }
  return (
    <div>
      <button onClick={getImages} className='px-5 py-3 bg-green-600 text-white font-bold'>Get Images</button>
      <div className='p-10'>
        {images.map((elem,i)=>{
          return <img 
          key={i} 
          src={elem.download_url}
          width={300}
          height={250}
          className='m-10 rounded inline-block'
          />
        })}
      </div>
    </div>
  )
}

export default page