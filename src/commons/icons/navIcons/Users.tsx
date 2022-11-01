import * as React from "react"
import { SVGProps, memo } from "react"

const UsersSvg = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M9 12c-5 0-5 2.6-5 4.1 0 .7.3.9 1.5.9h7.1c1.2 0 1.4-.2 1.4-.9 0-1.4 0-4.1-5-4.1ZM15.6 16.718c0 .1-.003.195-.011.282H18.6c1.2 0 1.4-.2 1.4-.9 0-1.4-.5-4.1-5-4.1-.31 0-.6.01-.874.03 1.438 1.353 1.474 3.322 1.474 4.688ZM7 8.5c0 1.667.895 2.5 2 2.5s2-.833 2-2.5S10.105 6 9 6s-2 .833-2 2.5ZM13 8.5c0 1.667.895 2.5 2 2.5s2-.833 2-2.5S16.105 6 15 6s-2 .833-2 2.5Z"
            fill="#555"
        />
    </svg>
)

export const UsersIcon = memo(UsersSvg)
