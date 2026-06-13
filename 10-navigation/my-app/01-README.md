description 

---
## Navigation Hooks in Next.js

- Documentation [click me](https://nextjs.org/docs/app/api-reference/functions/use-pathname)



---
#### usePathname

- Use: "tells us at what page we are"
- Folders: "root/components/Navbar.js"
- URL: `http://localhost:3000/admin/login`
- Output: `You are at page /admin/login`

---
#### useParams

- Use: "returns Dynamic routes at which we are"
- Folder: "root/app/blogpost/[slug]/page.js"
- URL: `http://localhost:3000/blogpost/cpp`
- Output: `This is useParams cpps`

---
#### useRouters

- Use: "redirects to another page as will"
- Folder: "root/app/blogpost/[slug]/page.js"
- URL: `http://localhost:3000/blogpost/cpp`
- Output: redirects to URL: `localhost:3000/Dashboard`

---
#### useSearchParams

- Use: "gives params inside URL"
- Folder: "root/app/page.js"
- URL: `http://localhost:3000/?blog=shivam&utm_source=instagram`
- Output: `Home | Page | blog is shivam and instagram`

---