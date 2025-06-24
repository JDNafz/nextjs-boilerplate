# Next JS Exploration

The content of the app is designed to be a NextJS tutorial or tips website. 

## Spin up my Code!

`git clone git@github.com:york-june-ets/jnafziger-nextjs-exploration.git`

`npm run dev` *set to run on 3001 so YOU can run your own new/current project on 3000


## Takeaways

- ### ~App Router~ Generates URLs Automatically 

```
Project Structure
next-app/     		# http://localhost:3000
├── app/			# '/'
│   ├── blog/		# '/blog
│   ├── about/ 		# '/about
```
Navigate to them with 

```TS
import Link from "next/link";
----------------------------------------
<Link href="/"> Home </Link>
<Link href="/blog"> Blog </Link>
<Link href="/about"> About </Link>
```


- ### Dynamic URL generation
Create a folder with `[ ]` like `app/[myVar]`

This is [myVar] is a "slug"(term from journalism)
```TS
<Link href={`/${myVar}`}>{myVar}</Link>)
```

│   │   └── [slug]/	
│   │   ├── page.tsx           # Blog index page (/blog)
│   │       └── page.tsx       # Dynamic blog post page (/blog/
│   ├── page.tsx               # Home page (/)