# React js  

## [Sheriyans coding school](https://www.youtube.com/playlist?list=PLbtI3_MArDOn2wYYazc6Q2mzEo-28r1d0)

## video - 1 (lect1)  

-> `npx create-next-app` - to create react app  
What is your project named? ... my-app  
√ Would you like to use TypeScript? ... `No` / Yes  
√ Would you like to use ESLint? ... `No` / Yes  
√ Would you like to use Tailwind CSS? ... No / `Yes`  
√ Would you like to use `src/` directory? ... `No` / Yes  
√ Would you like to use App Router? (recommended) ... No / `Yes`  
√ Would you like to customize the default import alias (@/*)? ... `No` / Yes  

-> `npm run dev` - to run the react app  

-> `rafce` - Snippet used in app/page.js for boiler plate  

-> fragmentation : where <></> are fragments used as wrappers  
`<>`  
`<div></div>`  
`<h1></h1>`  
`</>`  

-> `"use client"` at the top for proper rendering of hooks  

-> `useState` - to tell react that you want to interact with DOM, hooks like useState are used (this is the concept of virtual dom (me->react->page/website) )  
`import {useState} from 'react'` - hook at the top  
inside the page function use useState snippet - `const [var, func] = useState(default_value)`  

-> breaking the components  
name of the component file always starts with caps eg : Header.js in folder name Components and use rafce and make function  
Also import that Header in the main page.js file by writting `import Header from"@/Components/Header"`

-> props are arguments used in functions  
props.attribute (passing data with the help of props)  

-> `Routing / Next js routing` - Routing is making a folder in app with the name of the page that u want eg-About and then making page.js in it  
in the link or a tag give href="/folder_name" eg- `<a href="/About"></a>`  
if u want to use `<Link href="/About">About</Link>` make sure to use `import Link from 'next/link'` at the top  
`<Link href=""></Link>` is used over `<a href=""></a>` to stop the reloading of the page  

-> No need to import and use Header in About,Courses,Product individually  
just import the header in layout.js  and use it inside the body tag of layout.js  
by doing this the navbar/Header will remain there by default even after changing the page(eg:going from about->courses)  

-> `npm i axios` - axios is used to call api also import it before using  
HERE IS ALOT TO LEARN - {TRY,CATCH},ASYNC,AWAIT AXIOS.GET(""),MAP,...

-> useEffect ?  

## video - 3 (lect2)  

-> `onChange={(e)=>{setUsername(e.target.value) }}` - onChange function helps in Two way binding i.e. concatinating all the target values one by one with the help of setXyz()  

-> Dynamic Routing / App routing - make a folder in app with the name `[xyz]` and make a file with name page.js  

-> API calling - using axios.get() and async await  (firstly `npm i axios` and import axios then use it)

-> `useEffect` - it is a hook that avoids clicking and getting data and it directly renders the data on the page  
`import {useEffect} from 'react'` - hook at the top  
inside the page function use useEffect snippet -  
`useEffect(() => {  first  return () => { second }  }, [third])` <!-- changes needed -->  

-> props - parameter passed in an component to get data from main page to component  
main page `(useState-num(variable))` and `<Header num={num}/>` then in header use props as function parameter and props.num to get the num from main page and in `<Nav num={props.num}/>` to send the num further in nav  

-> Context Api - to avoid passing of data from one component to another, we use concept of context api  
`1:02:41 - 1:15:20` difficult to understand so repeat again <!-- changes needed -->  

-> React toastify - showing flash messages  
install -  
`npm install --save react-toastify`  
import -  
`import { ToastContainer, toast } from 'react-toastify';`  
`import 'react-toastify/dist/ReactToastify.css';`  
use it as `<ToastContainer/>` and `toast("message")` in notify function and call that function in onclick of button  

-> Server side rendering and client side rendering  
In Next js, server side rendering is by default  

-> Deployment -  
github -> render  
or
netlify  
