import * as React from "react"
import { SVGProps, memo } from "react"

const SettingSVG = (props: SVGProps<SVGSVGElement>) => (
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
            d="m14.453 3.101.318.009c.233.012.402.035.585.077.295.068.563.18.82.34.224.14.4.284.7.578l3.02 3.019.218.23c.157.174.26.31.359.47.16.257.272.525.34.82.059.257.081.484.086.903v4.906l-.009.318a3.148 3.148 0 0 1-.077.585c-.068.295-.18.563-.34.82-.14.224-.284.4-.578.7l-3.019 3.02-.23.218c-.174.157-.31.26-.47.359-.256.16-.525.272-.82.34-.257.059-.484.081-.903.086H9.547l-.317-.009a3.148 3.148 0 0 1-.586-.077 2.642 2.642 0 0 1-.82-.34c-.224-.14-.4-.284-.7-.578l-3.02-3.019-.218-.23a3.143 3.143 0 0 1-.359-.47 2.641 2.641 0 0 1-.34-.82c-.059-.257-.081-.484-.086-.903V9.547l.009-.317c.012-.234.035-.403.077-.586a2.64 2.64 0 0 1 .34-.82c.14-.224.284-.4.578-.7l3.019-3.02.23-.218c.174-.157.31-.26.47-.359a2.64 2.64 0 0 1 .82-.34c.257-.059.484-.081.903-.086h4.906ZM14.26 4.9H9.594l-.224.005c-.092.003-.16.009-.216.017l-.106.02a.842.842 0 0 0-.27.111 1.927 1.927 0 0 0-.327.272L5.513 8.26c-.225.224-.33.338-.4.43l-.06.088a.842.842 0 0 0-.112.27l-.02.106c-.013.095-.019.218-.02.44v4.902c.003.167.01.269.02.35l.02.106c.024.1.058.182.112.27.055.088.118.167.272.327l2.935 2.938c.224.225.338.33.43.4l.088.06c.087.054.17.088.27.112l.106.02c.114.015.268.021.585.021l4.757-.002c.167-.002.269-.008.35-.02l.106-.02a.844.844 0 0 0 .27-.111c.088-.055.167-.118.327-.272l2.938-2.935c.225-.224.33-.338.4-.43l.06-.088a.844.844 0 0 0 .112-.27l.02-.105c.015-.115.021-.27.021-.586l-.002-4.757a2.922 2.922 0 0 0-.02-.35l-.02-.106a.843.843 0 0 0-.111-.27 1.928 1.928 0 0 0-.272-.327L15.74 5.513a4.55 4.55 0 0 0-.43-.4l-.088-.06a.843.843 0 0 0-.27-.112 1.597 1.597 0 0 0-.322-.036l-.37-.005ZM12 14a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0-6a.9.9 0 0 1 .9.9v3.2a.9.9 0 1 1-1.8 0V8.9A.9.9 0 0 1 12 8Z"
            fill="#555"
        />
    </svg>
)

export const SettingIcon = memo(SettingSVG)