import * as React from "react"
import { SVGProps, memo } from "react"

export const SearchIconSVG = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11.5 4a7.5 7.5 0 0 1 5.902 12.129l3.334 3.335a.9.9 0 0 1-1.18 1.353l-.092-.08-3.335-3.335A7.5 7.5 0 1 1 11.5 4Zm0 1.8a5.7 5.7 0 1 0 0 11.4 5.7 5.7 0 0 0 0-11.4Z"
            fill="#2A5885"
        />
    </svg>
)

export const SearchIcon = memo(SearchIconSVG)
