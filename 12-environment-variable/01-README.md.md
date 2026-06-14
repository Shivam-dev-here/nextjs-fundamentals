description

---
# `root/.evn`

- Stores credentials, very important keys.

1. `ID=mypersonalishere.mypersonal@gmail.com` is for server.
2. `NEXT_PUBLIC_ID=mypersonalishere.mypersonal@gmail.com` is for client.

#### Scope: 
- ID: Only at Server.
- NEXT_PUBLIC_ID: Both Client Browser and Server.

---
# Operation for Server Component

- When `root/app/page.js` is Server Component
- Path: `root/.env`
	- `ID=mypersonalishere.mypersonal@gmail.com`
	- `SECRET=******

#### Operations

- Path: "root/app/page.js"
	1. `<div> {process.env.ID} </div>`
		- Output: `mypersonalishere.mypersonal@gmail.com`

	2.  `console.log("ID:",process.env.ID);`
		- Output: `ID: mypersonalishere.mypersonal@gmail.com`
	3.  `console.log("SECRET:",process.env.SECRET);`
		- Output: `SECRET: ******`
		
---
