'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { Expand, X } from 'lucide-react'

const photos = [
  { file: 'circulation-pumps', tr: 'Sirkülasyon pompalarımız ve saha bağlantıları', en: 'Our circulation pumps and site connections', portrait: false, position: 'lg:col-span-2 lg:row-start-1' },
  { file: 'field-team-pipe', tr: 'Boru içinde saha ekibimiz', en: 'Our field team inside a pipe', portrait: true, position: 'lg:col-start-3 lg:row-start-1 lg:row-span-2' },
  { file: 'pipe-circulation', tr: 'Boru grupları ve sirkülasyon bağlantıları', en: 'Pipe groups and circulation connections', portrait: true, position: 'lg:col-start-4 lg:row-start-1 lg:row-span-2' },
  { file: 'field-application', tr: 'Ahal GTG tesisinde saha uygulaması', en: 'Field application at the Ahal GTG plant', portrait: false, position: 'lg:col-span-2 lg:row-start-2' },
]

export function AhalProjectGallery({ locale }: { locale: string }) {
  const tr = locale === 'tr'
  const dialog = useRef<HTMLDialogElement>(null)
  const [selected, setSelected] = useState(photos[0])
  const open = (photo: typeof photos[number]) => { setSelected(photo); dialog.current?.showModal() }
  return <>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {photos.map(photo => <figure key={photo.file} className={`flex flex-col ${photo.portrait ? '' : 'sm:col-span-2'} ${photo.position}`}>
        <button type="button" onClick={() => open(photo)} aria-label={`${tr ? 'Fotoğrafı büyüt' : 'Enlarge photograph'}: ${tr ? photo.tr : photo.en}`} className={`group relative block w-full overflow-hidden rounded-xl bg-[#071525] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan ${photo.portrait ? 'aspect-[9/16] lg:aspect-auto lg:flex-1' : 'aspect-video'}`}>
          <Image src={`/images/projects/ahal/${photo.file}.jpg`} alt={tr ? `Türkmenistan Ahal GTG — ${photo.tr}` : `Turkmenistan Ahal GTG — ${photo.en}`} fill sizes={photo.portrait ? '(min-width: 1024px) 290px, (min-width: 640px) 45vw, 100vw' : '(min-width: 1024px) 600px, 100vw'} className="object-contain" />
          <span className="absolute bottom-3 right-3 rounded-md bg-navy/80 p-2 text-white transition group-hover:bg-brand-blue"><Expand size={16} aria-hidden="true" /></span>
        </button>
        <figcaption className="mt-3 text-xs leading-5 text-muted">{tr ? photo.tr : photo.en}</figcaption>
      </figure>)}
    </div>
    <dialog ref={dialog} aria-label={tr ? 'Ahal GTG saha fotoğrafı' : 'Ahal GTG field photograph'} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close() }} className="fixed inset-0 m-auto w-[min(94vw,1200px)] max-w-none overflow-visible rounded-xl border border-white/15 bg-navy p-3 text-white backdrop:bg-black/85 sm:p-5">
      <button type="button" autoFocus onClick={() => dialog.current?.close()} aria-label={tr ? 'Fotoğrafı kapat' : 'Close photograph'} className="absolute right-4 top-4 z-10 rounded-full bg-black/70 p-2 focus-visible:outline-2 focus-visible:outline-cyan"><X size={22} /></button>
      <div className="relative h-[75vh]"><Image src={`/images/projects/ahal/${selected.file}.jpg`} alt={tr ? selected.tr : selected.en} fill sizes="94vw" className="object-contain" /></div>
      <p className="mt-3 text-sm text-white/80">{tr ? selected.tr : selected.en}</p>
    </dialog>
  </>
}