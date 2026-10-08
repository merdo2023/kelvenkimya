'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { Expand, X } from 'lucide-react'

const photos = [
  { file: 'hrsg-internal-surface', tr: '10 Mayıs 2011 · HRSG iç yüzey görüntüsü', en: '10 May 2011 · HRSG internal surface view', portrait: false, position: '' },
  { file: 'hrsg-drum-internals', tr: '10 Mayıs 2011 · Kazan tamburu içi', en: '10 May 2011 · Drum internals', portrait: false, position: '' },
  { file: 'hrsg-drum-piping', tr: '10 Mayıs 2011 · Tambur ve boru düzeni', en: '10 May 2011 · Drum and pipe arrangement', portrait: false, position: '' },
  { file: 'hrsg-treatment-stage', tr: '22 Mayıs 2011 · Sıvı dolu uygulama aşaması', en: '22 May 2011 · Liquid-filled treatment stage', portrait: false, position: '' },
]

export function AksaProjectGallery({ locale }: { locale: string }) {
  const tr = locale === 'tr'
  const dialog = useRef<HTMLDialogElement>(null)
  const [selected, setSelected] = useState(photos[0])
  const open = (photo: typeof photos[number]) => { setSelected(photo); dialog.current?.showModal() }
  return <>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {photos.map(photo => <figure key={photo.file} className={`flex flex-col `}>
        <button type="button" onClick={() => open(photo)} aria-label={`${tr ? 'Fotoğrafı büyüt' : 'Enlarge photograph'}: ${tr ? photo.tr : photo.en}`} className={`group relative block w-full overflow-hidden rounded-xl bg-[#071525] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan ${photo.portrait ? 'aspect-[9/16] lg:aspect-auto lg:flex-1' : 'aspect-[4/3]'}`}>
          <Image src={`/images/projects/aksa/${photo.file}.jpeg`} alt={tr ? `Aksa Enerji Antalya HRSG — ${photo.tr}` : `Aksa Energy Antalya HRSG — ${photo.en}`} fill sizes={photo.portrait ? '(min-width: 1024px) 290px, (min-width: 640px) 45vw, 100vw' : '(min-width: 1024px) 600px, 100vw'} className="object-contain" />
          <span className="absolute bottom-3 right-3 rounded-md bg-navy/80 p-2 text-white transition group-hover:bg-brand-blue"><Expand size={16} aria-hidden="true" /></span>
        </button>
        <figcaption className="mt-3 text-xs leading-5 text-muted">{tr ? photo.tr : photo.en}</figcaption>
      </figure>)}
    </div>
    <dialog ref={dialog} aria-label={tr ? 'Aksa Antalya HRSG saha fotoğrafı' : 'Aksa Antalya HRSG field photograph'} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close() }} className="fixed inset-0 m-auto w-[min(94vw,1200px)] max-w-none overflow-visible rounded-xl border border-white/15 bg-navy p-3 text-white backdrop:bg-black/85 sm:p-5">
      <button type="button" autoFocus onClick={() => dialog.current?.close()} aria-label={tr ? 'Fotoğrafı kapat' : 'Close photograph'} className="absolute right-4 top-4 z-10 rounded-full bg-black/70 p-2 focus-visible:outline-2 focus-visible:outline-cyan"><X size={22} /></button>
      <div className="relative h-[75vh]"><Image src={`/images/projects/aksa/${selected.file}.jpeg`} alt={tr ? selected.tr : selected.en} fill sizes="94vw" className="object-contain" /></div>
      <p className="mt-3 text-sm text-white/80">{tr ? selected.tr : selected.en}</p>
    </dialog>
  </>
}