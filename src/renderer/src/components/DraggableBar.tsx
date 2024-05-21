import { twMerge } from 'tailwind-merge'

export const DraggableBar = (): JSX.Element => {
  return <header className={twMerge(` absolute inset-0 h-[2rem]  bg-transparent`)}></header>
}
