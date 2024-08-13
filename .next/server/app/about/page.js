(()=>{var e={};e.id=301,e.ids=[301],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},8058:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d}),s(2763),s(4925),s(2615),s(7152),s(5866);var r=s(3191),a=s(8716),n=s(7922),o=s.n(n),i=s(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);s.d(t,l);let d=["",{children:["about",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,2763)),"F:\\web-development\\IMDB-clone\\src\\app\\about\\page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,4925)),"F:\\web-development\\IMDB-clone\\src\\app\\layout.js"],error:[()=>Promise.resolve().then(s.bind(s,2615)),"F:\\web-development\\IMDB-clone\\src\\app\\error.jsx"],loading:[()=>Promise.resolve().then(s.bind(s,7152)),"F:\\web-development\\IMDB-clone\\src\\app\\loading.jsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["F:\\web-development\\IMDB-clone\\src\\app\\about\\page.jsx"],u="/about/page",m={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/about/page",pathname:"/about",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1121:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},4026:(e,t,s)=>{Promise.resolve().then(s.bind(s,4831)),Promise.resolve().then(s.t.bind(s,9404,23)),Promise.resolve().then(s.bind(s,3341)),Promise.resolve().then(s.bind(s,6649)),Promise.resolve().then(s.bind(s,3311))},3169:(e,t,s)=>{Promise.resolve().then(s.bind(s,3461))},5303:()=>{},3461:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(326),a=s(7577);let n=({error:e,reset:t})=>((0,a.useEffect)(()=>{console.log(e)},[e]),(0,r.jsxs)("div",{className:"text-center mt-20",children:[r.jsx("h1",{children:"something went wrong please try again"}),r.jsx("button",{onClick:()=>t(),className:"hover:text-amber-600 py-2 px-4",children:"try again"})]}))},3341:(e,t,s)=>{"use strict";s.d(t,{default:()=>i});var r=s(326),a=s(4831),n=s(9350),o=s(7577);let i=()=>{let[e,t]=(0,o.useState)(!1),{theme:s,setTheme:i,systemTheme:l}=(0,a.F)();return((0,o.useEffect)(()=>{t(!0)},[]),e)?r.jsx(r.Fragment,{children:"dark"===("system"===s?l:s)?r.jsx(n.EWX,{className:"text-2xl hover:text-amber-500 cursor-pointer",onClick:()=>i("light")}):r.jsx(n.Dq,{className:"text-2xl hover:text-amber-500 cursor-pointer",onClick:()=>i("dark")})}):null}},6649:(e,t,s)=>{"use strict";s.d(t,{default:()=>o});var r=s(326),a=s(434),n=s(5047);let o=({title:e,param:t})=>{let s=(0,n.useSearchParams)().get("genre");return r.jsx(a.default,{className:`hover:text-amber-600 font-semibold ${s===t?"underline decoration-amber-600 underline-offset-8 decoration-4 rounded-lg":""}`,href:`/?genre=${t}`,children:e})}},3311:(e,t,s)=>{"use strict";s.d(t,{default:()=>o});var r=s(326),a=s(5047),n=s(7577);let o=()=>{let[e,t]=(0,n.useState)(""),s=(0,a.usePathname)(),o=(0,a.useRouter)();return(0,n.useEffect)(()=>{s!==`/search/${e}`&&t("")},[s]),(0,r.jsxs)("form",{action:"",className:"flex pr-5 max-w-7xl mx-auto",onSubmit:t=>{t.preventDefault(),o.push(`/search/${e}`)},children:[r.jsx("input",{type:"text",placeholder:"Search Keywords...",className:"w-full h-14 flex-1 placeholder-gray-500 bg-transparent outline-none dark:text-gray-300 px-5",value:e,onChange:e=>t(e.target.value)}),r.jsx("button",{type:"submit",disabled:""===e,className:"text-amber-600 font-bold disabled:text-gray-600",children:"Search"})]})}},2763:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(9510);s(1159);let a=()=>(0,r.jsxs)("section",{className:"max-w-7xl mx-auto space-y-6 px-3 xl:px-0",children:[r.jsx("h1",{class:"text-2xl font-medium text-amber-600",children:"About"}),r.jsx("p",{className:"text-justify",children:"Welcome to our movie database website! We are a team of passionate movie enthusiasts who have come together to create a one-stop destination for all your movie-related needs. Our website is designed to provide you with a comprehensive database of movies from all around the world, along with the latest news, reviews, and trailers. Our movie database is constantly updated with new releases, ensuring that you have access to the latest and greatest in the world of cinema. You can search for movies by title, director, actor, genre, or release date, making it easy to find the perfect movie for any occasion."}),r.jsx("p",{className:"text-justify",children:"In addition to our extensive movie database, we also offer a platform for movie lovers to connect and share their thoughts on the latest releases. Our community section includes a forum where you can discuss your favorite films with like-minded individuals and read reviews and ratings from other users. We also have a section dedicated to movie news and trailers, keeping you updated with the latest happenings in the world of cinema."}),r.jsx("p",{className:"text-justify",children:"Thank you for visiting our website and we hope you enjoy your time browsing through our movie database. If you have any feedback or suggestions, please feel free to contact us. We are always looking for ways to improve and enhance the user experience on our website. Happy browsing!"})]})},2615:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>i});var r=s(8570);let a=(0,r.createProxy)(String.raw`F:\web-development\IMDB-clone\src\app\error.jsx`),{__esModule:n,$$typeof:o}=a;a.default;let i=(0,r.createProxy)(String.raw`F:\web-development\IMDB-clone\src\app\error.jsx#default`)},4925:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>I,metadata:()=>_});var r=s(9510),a=s(1723),n=s.n(a);s(5023),s(1159);var o=s(7371);let i=({title:e,address:t,Icon:s})=>(0,r.jsxs)(o.default,{href:t,className:"hover:text-amber-600",children:[r.jsx(s,{className:"text-2xl sm:hidden"}),r.jsx("p",{className:"uppercase hidden sm:inline text-sm",children:e})]});var l=s(4559),d=s(5406),c=s(8570);let u=(0,c.createProxy)(String.raw`F:\web-development\IMDB-clone\src\components\DarkModeSwitch.jsx`),{__esModule:m,$$typeof:p}=u;u.default;let x=(0,c.createProxy)(String.raw`F:\web-development\IMDB-clone\src\components\DarkModeSwitch.jsx#default`),h=()=>(0,r.jsxs)("section",{className:"flex justify-between items-center p-3 max-w-7xl mx-auto",children:[(0,r.jsxs)("div",{className:"flex gap-3",children:[r.jsx(i,{title:"home",address:"/",Icon:l.V9Z}),r.jsx(i,{title:"about",address:"/about",Icon:d.Qf3})]}),(0,r.jsxs)("div",{className:"flex gap-3 items-center",children:[r.jsx(x,{}),(0,r.jsxs)(o.default,{href:"/",className:"flex items-center gap-1",children:[r.jsx("span",{className:"uppercase bg-amber-500 py-1 px-2 rounded-md text-2xl",children:"imdb"}),r.jsx("span",{className:"text-xl hidden sm:inline",children:"Clone"})]})]})]});var f=s(9552);let v=(0,c.createProxy)(String.raw`F:\web-development\IMDB-clone\src\components\NavbarItem.jsx`),{__esModule:b,$$typeof:g}=v;v.default;let j=(0,c.createProxy)(String.raw`F:\web-development\IMDB-clone\src\components\NavbarItem.jsx#default`),w=()=>(0,r.jsxs)("div",{className:"flex gap-6 dark:bg-gray-500  bg-amber-100 h-14 items-center justify-center",children:[r.jsx(j,{title:"Trending",param:"fetchTrending"}),r.jsx(j,{title:"Top Rated",param:"fetchTopRated"})]}),y=(0,c.createProxy)(String.raw`F:\web-development\IMDB-clone\src\components\SearchBox.jsx`),{__esModule:P,$$typeof:N}=y;y.default;let M=(0,c.createProxy)(String.raw`F:\web-development\IMDB-clone\src\components\SearchBox.jsx#default`),_={title:"IMDB clone",description:"this is movie database website"};function I({children:e}){return r.jsx("html",{lang:"en",suppressHydrationWarning:!0,children:r.jsx("body",{className:n().className,children:r.jsx("div",{className:"transition-colors duration-[400ms]",children:(0,r.jsxs)(f.f,{attribute:"class",children:[r.jsx(h,{}),r.jsx(w,{}),r.jsx(M,{}),e]})})})})}},7152:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(9510);s(1159);let a=()=>r.jsx("div",{className:"flex justify-center items-center",children:r.jsx("img",{src:"loading.svg",alt:"loading..."})})},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(6621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,546,621],()=>s(8058));module.exports=r})();