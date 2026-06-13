description

---

# SSR (Server Side Rendering)
- Terminal: offline (Server): `npm run build`
- default: Prerender pages as Static content.

- Example: 
	1. Path: `root/app/page.js`
	2. console.log("you will found me at Terminal: offline, i.e. Server")

---
# SSG (Static Side Generation)

- Any pages without containing ==Network calls== considered as Static Page by default
	- Example: Next.js pre-renders these pages & generates HTML files and served directly to user for faster load time.

---
# ISG / R (Incremental Side Generation / Regeneration)

- Path: `root/app/page.js`

1.   `const data = await fetch("https://api.vercel.app/blog");`
	- Stores data as cache and makes reload faster.

2.   `let data = await fetch("https://api.vercel.app/blog", {cache: 'no-store'})`
	- Doesn't store data for every update it request server and fetches data.

3. `let data= await fetch("https://api.vercel.app/blog", {next: {revalidate:3600}})`
	- Self requests data for every 3600 seconds. Except:
		- Used inside a Server actions.
		- Used Inside a Route Handler that uses POST method.

---
- Code: `export const dynamic = 'force-dynamic'`
- Path: `root/app/page.js`

- Forces pages to be dynamic instead of Static.

---

