import * as React from "react"
import { SVGProps, memo } from "react"

const DialogsSvg = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M20 12c0-2.105-1.562-3.907-3.772-4.644.8 1.029 1.272 2.276 1.272 3.644 0 2.705-1.843 4.941-4.437 5.94a7.231 7.231 0 0 0 2.06-.027c.464.683 1.307 1.103 2.89 1.103-.438-.646-.74-1.294-.826-1.779C18.877 15.353 20 13.786 20 12Z"
            fill="#555"
        />
        <path
            d="M5.98 17c1.588 0 2.433-.414 2.896-1.088.364.058.74.088 1.124.088 3.314 0 6-2.239 6-5s-2.686-5-6-5-6 2.239-6 5c0 1.785 1.122 3.351 2.81 4.236-.078.476-.384 1.121-.83 1.764Z"
            fill="#555"
        />
    </svg>
)

export const DialogsIcons = memo(DialogsSvg)
