import * as React from "react"
import { SVGProps, memo } from "react"

const NewsSvg = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 8.2h16v2H4v-2ZM4 14h16v2H4v-2Z"
            fill="#555"
        />
        <path
            d="m12 20-.693.574a.9.9 0 0 0 1.386 0L12 20Zm0-16 .693-.574a.9.9 0 0 0-1.386 0L12 4Zm0 .8a7.2 7.2 0 0 1 7.2 7.2H21a9 9 0 0 0-9-9v1.8Zm7.2 7.2a7.2 7.2 0 0 1-7.2 7.2V21a9 9 0 0 0 9-9h-1.8ZM12 19.2A7.2 7.2 0 0 1 4.8 12H3a9 9 0 0 0 9 9v-1.8ZM4.8 12A7.2 7.2 0 0 1 12 4.8V3a9 9 0 0 0-9 9h1.8Zm7.893 7.426C10.893 17.253 10 14.788 10 12H8.2c0 3.212 1.042 6.082 3.107 8.574l1.386-1.148ZM10 12c0-2.788.892-5.252 2.693-7.426l-1.386-1.148C9.242 5.918 8.2 8.788 8.2 12H10Zm1.307-7.426C13.107 6.748 14 9.212 14 12h1.8c0-3.212-1.042-6.082-3.107-8.574l-1.386 1.148ZM14 12c0 2.788-.892 5.253-2.693 7.426l1.386 1.148C14.758 18.082 15.8 15.212 15.8 12H14Z"
            fill="#555"
        />
    </svg>
)

export const NewsIcon = memo(NewsSvg)
