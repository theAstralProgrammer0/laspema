import React from 'react'

const GovQuoteCard = () => {
  return (
    <div className='w-full mt-4 py-[2rem] px-4 bg-slate-200 rounded-2xl border-4 border-l-[#00d98a] shadow-2xl'>
        <figure>
        <blockquote cite='https://twitter.com/jidesanwoolu/status/1520092383173656577?lang=en'>
            <p className="text-lg font-serif font-semibold text-[#000300]">
            "Governance is a huge responsibility, and all hands will continue to be on deck as we work tirelessly towards achieving our goals for a Greater Lagos."
            </p>
        </blockquote>
        <figcaption className='mt-2 flex justify-end'>
            - Babajide Olusola Sanwo-Olu
        </figcaption>
        </figure>
        
    </div>
  )
}

export default GovQuoteCard