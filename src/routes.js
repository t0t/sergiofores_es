// routes.js

import Home from './pages/Home.svelte'
import Blog from './pages/Blog.svelte'
import SingleBlog from './pages/SingleBlog.svelte'
import PageNotExists from './pages/PageNotExists.svelte'

export default [
	{
		path: '/',
		component: Home
	},
	{
		path: '/blog',
		component: Blog
	},
	{
		path: '/blog/:id',
		component: SingleBlog
	},
	{
		path: '*',
		component: PageNotExists
	}
]