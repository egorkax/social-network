import * as React from "react"
import { SVGProps, memo } from "react"

const ProfileSvg = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M18 17.1c0-1.4-.6-4.1-6-4.1s-6 2.6-6 4.1c0 .7.36.9 1.8.9h8.52c1.44 0 1.68-.2 1.68-.9ZM9 8.5c0 2.333 1.343 3.5 3 3.5s3-1.167 3-3.5S13.657 5 12 5 9 6.167 9 8.5Z"
            fill="#555"
        />
    </svg>
)

export const ProfileIcon = memo(ProfileSvg)
