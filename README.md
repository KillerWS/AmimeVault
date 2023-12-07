# Build Modern Next 14 Server Side App with Server Actions, Infinite Scroll & Framer Motion Animations

![Anime Website](https://i.ibb.co/MG1nbqt/YT-Thumbnails-2.png)

# AmimeVault
Build Modern Next 14 Server Side App with Server Actions, Infinite Scroll &amp; Framer Motion Animations


Some points:
1.It defines and calls some " server action " in client component by using "use server".  
2.Using the popular React libs :   
"react-intersection-observer" to tell you when an element enters or leaves the viewport(in this case track on current page user is scrolling down the contents or not)  
react-intersection-observer: https://www.npmjs.com/package/react-intersection-observer  
" framer-motion" to define usable component loading animations  
framer-motion: https://www.framer.com/motion/  
3.So, ([...data, ...res]) essentially creates a new array that includes all the elements from the current data array followed by all the elements from the res array. This new array is then set as the updated state using setData.  
The purpose of this pattern is to avoid directly mutating the current state. In React, state should be treated as immutable, and updating it involves creating a new state object. The spread operator is a concise way to achieve this when working with arrays.   


Data sources:   
Anime API: https://shikimori.one/api/doc/1.0/animes/index   

Original tutorial Youtube link: https://www.youtube.com/watch?v=FKZAXFjxlJI  

