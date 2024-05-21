import { cn, formatDateFromMs } from '@renderer/utils'
import { NoteInfo } from '@shared/models'
import React, { ComponentProps } from 'react'

export type NotePreviewProps = NoteInfo & {
  isActive?: boolean
} & ComponentProps<'div'>

function NotePreview({
  title,
  lastEditedTime,
  isActive = false,
  className,
  ...props
}: NotePreviewProps): JSX.Element {
  return (
    <div
      className={cn(
        `cursor-pointer px-2 py-3 rounded-md transition-colors duration-75`,
        {
          'bg-zinc-400/75': isActive,
          'hover:bg-zinc-500/50': !isActive
        },
        className
      )}
      {...props}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="inline-block w-full text-left font-light text-xs mb-2 ">
        {formatDateFromMs(+lastEditedTime)}
      </span>
    </div>
  )
}

export default NotePreview
