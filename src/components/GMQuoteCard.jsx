import React from 'react'

const GMQuoteCard = () => {
  return (
    <div className='w-full mt-4 py-[2rem] px-4 bg-slate-200 rounded-2xl border-4 border-l-[#00d98a] shadow-2xl'>
        <figure>
        <blockquote cite='https://twitter.com/jidesanwoolu/status/1520092383173656577?lang=en'>
            <p className="text-lg font-serif font-semibold text-[#000300]">
            "Our setbacks and incidental open spaces are sacred, any misuse or abuse will affect the aesthetics of our Urban face."
            </p>
        </blockquote>
        <figcaption className='mt-2 flex justify-end'>
            - Oludaisi Timothy Oso
        </figcaption>
        </figure>
        
    </div>
  )
}

export default GMQuoteCard