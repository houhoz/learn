import { faker } from '@faker-js/faker'
import { Icon } from '@iconify/react'
import avatar from './logo.svg'

export default function BlogHome() {
  return (
    <div className='h-screen bg-zinc-800 pt-32'>
      <main className='mx-auto flex w-[800px]'>
        <aside className='flex w-40 shrink-0 flex-col gap-8'>
          <div className='flex items-center'>
            <image
              src={avatar}
              className='w-16 rounded-full border-2 border-gray-600'
            />
            <h1 className='grow text-center text-4xl font-bold text-white'>
              令川
            </h1>
          </div>
          <div className='flex justify-between text-slate-200'>
            <span className='flex items-center gap-2'>
              <Icon icon='octicon:location-16' />
              <span>杭州</span>
            </span>
            <span className='flex items-center gap-2'>
              <Icon icon='ps:work-case' />
              <span>前端开发</span>
            </span>
          </div>
          <div className='flex justify-between text-2xl text-slate-200'>
            <Icon icon='iconamoon:email-fill' />
            <Icon icon='bxl:github' />
            <Icon icon='bxl:tiktok' />
            <Icon icon='codicon:twitter' />
          </div>
          <div className='text-xs leading-5 text-slate-300'>
            React · Vue · Tailwind CSS · Tauri · Rust · Raycast · VS
            Code · Figma · Fig · JSBox · Proxyman · Cloudflare
          </div>
          <footer className='text-xs text-slate-400'>
            <div>Copyright © 2023 lccl.cc</div>
            <div className='mt-2'>京ICP备000111号-5</div>
          </footer>
        </aside>

        <div className='ml-24 flex flex-col gap-4'>
          {[
            { year: 2023, postCount: 4 },
            { year: 2022, postCount: 6 },
            { year: 2021, postCount: 3 },
          ].map(({ year, postCount }) => {
            return (
              <section key={year}>
                <h3 className='text-xl font-bold text-slate-200'>
                  {year}
                </h3>
                {Array.from({ length: postCount }).map((_, idx) => {
                  return (
                    <div
                      key={idx}
                      className='mt-4 flex items-center gap-4'
                    >
                      <span
                        className='flex-shrink-0 text-sm text-slate-400'
                        style={{ fontFamily: 'Fira Code' }}
                      >
                        {faker.date.month({ abbreviated: true }) +
                          ' '}
                        {(
                          '0' + faker.number.int({ min: 1, max: 31 })
                        ).slice(-2)}
                      </span>
                      <span className='line-clamp-1 text-lg font-bold text-slate-300'>
                        {faker.lorem.sentence()}
                      </span>
                    </div>
                  )
                })}
              </section>
            )
          })}
        </div>
      </main>
    </div>
  )
}
