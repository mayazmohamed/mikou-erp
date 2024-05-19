import { AppLayout, Content, Sidebar, DraggableBar } from '@components'
import ActionButton from './components/button/ActionButton'
import { IoAddCircleOutline } from 'react-icons/io5'
import { AiOutlineDelete } from 'react-icons/ai'
import { notesMock } from './store/mocks'
import NotePreview from './components/NotePreview'
import MarkDownEditor from './components/MarkDownEditor'

const App = (): JSX.Element => {
  return (
    <>
      <DraggableBar />
      <AppLayout className="">
        <Sidebar className="p-2 flex flex-col gap-4">
          <div className="flex justify-between gap-4">
            <ActionButton className="hover:text-green-500">
              <IoAddCircleOutline />
            </ActionButton>
            <ActionButton className="hover:text-red-500">
              <AiOutlineDelete />
            </ActionButton>
          </div>
          <ul className="mt-3 space-y-4">
            {notesMock.length > 0 ? (
              notesMock.map((note, index) => <NotePreview {...note} key={index} />)
            ) : (
              <p className="text-center text-gray-500">No notes found</p>
            )}
          </ul>
        </Sidebar>
        <Content className="border-l bg-zinc-900/20 border-l-white/50 debug">
          <MarkDownEditor />
        </Content>
      </AppLayout>
    </>
  )
}

export default App
