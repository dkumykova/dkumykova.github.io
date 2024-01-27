import {Inter, Lusitana} from 'next/font/google'

//different language subsets? cyrillic and arabic?
export const inter = Inter({subsets: ['latin']});
export const lusitana = Lusitana({subsets: ['latin'], weight: "400"});

//https://nextjs.org/docs/app/building-your-application/optimizing/fonts#using-multiple-fonts