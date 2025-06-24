# Next JS Exploration

These are some major tips/takeaways from going through Next JS documentation. The assumption is you're familiar with React already, my experience is in Create-React-App and 
## Takeaways

- ### App Router makes life easy
	TLDR: Folders create urls automatically 

```
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