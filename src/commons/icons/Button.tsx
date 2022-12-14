import * as React from "react"
import { SVGProps, memo } from "react"

 const ButtonSvg = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M4.78 15.856c-.7 1.9-1.1 3.2-1.3 3.9-.6 2.4-1 2.9 1.1 1.8 2.1-1.1 12-6.7 14.3-7.9 2.9-1.6 2.9-1.5-.2-3.2-2.3-1.4-12.2-6.8-14-7.9-1.8-1.1-1.7-.6-1.2 1.8.2.8.6 2.1 1.3 3.9.5 1.3 1.6 2.3 3 2.5l5.8 1.1c.1 0 .1.1.1.1s0 .1-.1.1l-5.8 1.1c-1.3.4-2.5 1.3-3 2.7Z"
            fill="#fff"
        />
    </svg>
)

export const ButtonIcons = memo(ButtonSvg)
