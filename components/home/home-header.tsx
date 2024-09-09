import { Plus } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import HomeSearch from './home-search'
import Link from '../ui/button/link'

export default function HomeHeader() {
  return (
    <section
      className={clsx([
        //
        'px-[--px] pt-10 pb-8',
        'flex flex-col gap-6',
        'md:flex-row md:items-center',
      ])}
    >
      <h1 className='grow text-h1 text-neutral-1'>Training Certificates</h1>
      <div
        className={clsx([
          //
          'shrink-0',
          'flex items-center gap-2',
        ])}
      >
        <HomeSearch />
        <Link
          href='/create-new-certificates'
          className='shrink-0'
        >
          <Plus />
          <span>Create new</span>
        </Link>
        {/* <Button
          className='shrink-0'
          onPress={() => {
            console.log('current', ref.current)
            ref.current?.focus()
          }}
        >
          <span>Test</span>
        </Button> */}
      </div>
    </section>
  )
}
