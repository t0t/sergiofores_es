// routes.js

import Home from './pages/Home.svelte'
import Obras from './pages/Obras.svelte'
import SingleObras from './pages/SingleObras.svelte'
import Blog from './pages/Blog.svelte'
import SingleBlog from './pages/SingleBlog.svelte'
import PageNotExists from './pages/PageNotExists.svelte'

export default [
	{
		path: '/',
		component: Home
	},
	{
		path: '/obras',
		component: Obras
	},
	{
		path: '/obras/:id',
		component: SingleObras
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