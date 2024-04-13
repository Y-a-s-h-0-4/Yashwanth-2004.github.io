import React from 'react'
import {createBrowserRouter,Navigate,RouterProvider} from 'react-router-dom'
import RootLayout from '../RootLayout/RootLayout'
import Home from '../Home/Home'
import Signup from '../Signup/Signup'
import Signin from '../Signin/Signin'
import ErrorRoute from '../ErrorRoute/ErrorRoute'
import UserProfile from '../User-profile/UserProfile'
// import AuthorProfile from '../Author-profile/AuthorProfile'
import Articles from '../Articles/Articles'
import Article from '../Article/Article'
import {lazy, Suspense} from 'react'
import ArticlesByAuthor from '../articles-by-author/ArticlesByAuthor'
import AddArticle from '../Add-article/AddArticle'

const AuthorProfile=lazy(()=>import('../Author-profile/AuthorProfile'))

function RootComponent() {

  let router = createBrowserRouter([{
    path : '',
    element:<RootLayout/>,
    errorElement : <ErrorRoute/>,
    children : [
      {
        path:'',
        element:<Home/>
      },
      {
        path:'/signup',
        element:<Signup/>
      },
      {
        path:'/signin',
        element:<Signin/>
      },
      {
        path:'/user-profile',
        element:<UserProfile/>,
        children:[
          {
            path:'articles',
            element:<Articles/>
          },
          {
            path:'article/:articeId',
            element:<Article/>
          },
          {
            path:'',
            element:<Navigate to='articles'/>
          }
        ]
      },
      {
        path:"/author-profile",
        // element:<AuthorProfile />,
        element:<Suspense fallback="loading..."><AuthorProfile/></Suspense>,
        children:[
          {
            path:'new-article',
            element:<AddArticle/>
            // element:<Suspense fallback="loading..."><AddArticle /></Suspense> 
          },
          {
            path:'articles-by-author/:author',
            element:<ArticlesByAuthor />,
           
          },
          {
            path:"article/:articleId",
            element:<Article />
          },
          {
            path:'',
            element:<Navigate to='articles-by-author/:author' />
          }
        ]
      }
    ]
  }])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default RootComponent