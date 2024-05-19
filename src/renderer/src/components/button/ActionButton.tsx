/* eslint-disable react/prop-types */
import React from 'react'
import { twMerge } from 'tailwind-merge'

export type ActionButtonType = React.ComponentProps<'button'>

function ActionButton({ className, children, ...props }: ActionButtonType): JSX.Element {
  return (
    <button
      className={twMerge(
        `px-2 py-1  border border-zinc-400/50 hover:bg-zinc-600/50 transition-color duration-100 ease-in-out`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
export default ActionButton
