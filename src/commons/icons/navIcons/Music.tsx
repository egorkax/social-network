import * as React from "react"
import { SVGProps, memo } from "react"

const MusicSVG = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M16.938 8v5.822c-.4-.004-.826.078-1.242.255-1.271.54-1.97 1.76-1.56 2.726.41.966 1.774 1.311 3.044.772 1.002-.425 1.647-1.272 1.676-2.085.052.017.082.022.082.01V4L8.944 6.956V16c0 .02 0 .041.002.062a3.137 3.137 0 0 0-1.158.193c-1.297.472-2.058 1.654-1.7 2.64.36.987 1.702 1.403 3 .93 1.17-.425 1.905-1.43 1.773-2.346l.077.021V10l6-2Z"
            fill="#555"
        />
    </svg>
)

export const MusicIcon = memo(MusicSVG)
