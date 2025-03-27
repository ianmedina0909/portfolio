'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">

        <p className="inline-block text-[20px]">HI THERE <img src="/hi.png" alt="hi" width="15%" className="inline-block"/></p>

         <p className="text-7xl"> Ian Christoper Medina</p>
        </Link>

        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500 pt-3 text-[20px]"
          delay={0.5}
        >
         Software Developer
        </TextEffect>

           <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500 pt-3 "
          delay={0.5}
        >
        I'm a professional UI/UX front end developer and also backend developer.
        </TextEffect>
		
       <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500 pt-3 pb-4 "
          delay={0.5}
        >
        Skills: React.js, Vue.Js, Liquid, CSS, Laravel, PHP, Next.js, Nest.js and more..
        </TextEffect>

		<a className="bg-gray-500 mt-20 hover:bg-gray text-white font-bold py-2 px-4 rounded" href="mailto:ianmedina0909@gmail.com">
	      Contact me!
	     </a>
      </div>
    </header>
  )
}
