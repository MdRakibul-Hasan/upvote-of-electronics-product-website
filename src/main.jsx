import React from 'react'
import ReactDOM from 'react-dom/client'
import Register from './Components/Services/Register/Register.jsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LayOut from './Components/LayOut.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Services/Login/Login.jsx';
import AuthProvider from './Components/Services/AuthProvider.jsx';
import ProtectedRoute from './Components/Services/ProtectedRoute/ProtectedRoute.jsx';
import AboutUs from './Components/OptionalPage/AboutUs.jsx';
import TermsAndConditions from './Components/OptionalPage/TermsAndConditions.jsx';
import PrivacyPolicy from './Components/OptionalPage/PrivacyPolicy.jsx';
import ErrorPage from './Components/Error/ErrorPage.jsx';
import AddProduct from './Components/Dashboard/AddProduct.jsx';
import UpdateProduct from './Components/Dashboard/UpdateProduct.jsx';
// import MyCart from './Components/MyCart.jsx';
// import Apple from './Components/Brand/Apple.jsx';
// import Google from './Components/Brand/Google.jsx';
// import Intel from './Components/Brand/Intel.jsx';
// import Samsung from './Components/Brand/Samsung.jsx';
// import Sony from './Components/Brand/Sony.jsx';
// import Lenovo from './Components/Brand/Lenovo.jsx';
import ProductDetails from './Components/Home/ProductDetails.jsx';
import Products from './ProductCategory/Products.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import MyProfile from './Components/Dashboard/MyProfile.jsx';
import MyProduct from './Components/Dashboard/MyProduct.jsx';
import Allusers from './Components/Dashboard/Allusers.jsx';
import ProductReviewQueue from './Components/Dashboard/ProductReviewQueue.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    errorElement: <ErrorPage></ErrorPage>,

    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=>fetch('/data.json')

      },
      {
        path: '/techProduct/:id',
        element: <ProtectedRoute> <ProductDetails></ProductDetails></ProtectedRoute>,
        loader: ({params})=>fetch(`https://ass12-crud-server1.vercel.app/techProduct/${params.id}`),
        
      },
      
      {
        path: '/products',
        element: <Products></Products>,
        // loader: ()=>fetch('https://ass12-crud-server1.vercel.app/techProduct'),
        
      },

      // {
      //   path: '/Apple',
      //   element: <Apple></Apple>,
      //   loader: ()=>fetch('https://ass10server2.vercel.app/product'),
        
      // },
      // {
      //   path: '/Google',
      //   element: <Google></Google>,
      //   loader: ()=>fetch('https://ass10server2.vercel.app/product'),
        
      // },
      // {
      //   path: '/Intel',
      //   element: <Intel></Intel>,
      //   loader: ()=>fetch('https://ass10server2.vercel.app/product'),
        
      // },
      // {
      //   path: '/Samsung',
      //   element: <Samsung></Samsung>,
      //   loader: ()=>fetch('https://ass10server2.vercel.app/product'),
        
      // },
      // {
      //   path: '/Sony',
      //   element: <Sony></Sony>,
      //   loader: ()=>fetch('https://ass10server2.vercel.app/product'),
        
      // },
      // {
      //   path: '/Lenovo',
      //   element: <Lenovo></Lenovo>,
      //   loader: ()=>fetch('https://ass10server2.vercel.app/product'),
        
      // },
      {
        path: '/addProduct',
        element: <ProtectedRoute> <AddProduct></AddProduct> </ProtectedRoute>,
        loader: ()=>fetch('/data.json'),
        
      },
      // {
      //   path: '/myCart',
      //   element: <ProtectedRoute> <MyCart></MyCart> </ProtectedRoute>,
      //   loader: ()=>fetch('https://ass10server2.vercel.app/product'),
        
      // },
      // {
      //   path: '/updateProduct/:id',
      //   element: <ProtectedRoute><UpdateProduct></UpdateProduct></ProtectedRoute>,
      //   loader: ({params})=>fetch(`https://ass10server2.vercel.app/product/${params.id}`)
        
      // },

      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },      
      {
        path: '/about-us',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/terms',
        element: <TermsAndConditions></TermsAndConditions>
      },
      {
        path: '/privacy',
        element: <PrivacyPolicy></PrivacyPolicy>
      },

    ]
  },
  {
    path: 'dashboard',
    element : <Dashboard></Dashboard>,
    children: [
      {
        path: 'myprofile',
        element: <MyProfile></MyProfile>,

      },
      {
        path: 'addproduct',
        element: <AddProduct></AddProduct>,
        
      },
      {
        path: 'myproduct',
        element: <MyProduct></MyProduct>,
        loader: ()=>fetch('https://ass12-crud-server1.vercel.app/techProduct'),
      }
      ,
      {
        path: 'updateproduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({params})=>fetch(`https://ass12-crud-server1.vercel.app/techProduct/${params.id}`),
        
      },
      // admin dashboard
      {
        path: 'manageusers',
        element: <Allusers></Allusers>,
        loader: ()=>fetch('https://ass12-crud-server1.vercel.app/users'),
      },
      // moderator dashboard
      {
        path: 'productstatus',
        element: <ProductReviewQueue></ProductReviewQueue>,
        loader: ()=>fetch('https://ass12-crud-server1.vercel.app/techProduct'),
      },
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthProvider>
 <RouterProvider router={router} />
       </AuthProvider>
  </React.StrictMode>,
)
