import React from 'react'

const Reviews = () => {
    const reviews = [
        {
          name: 'Sarah M.',
          text: "I'm blown away by the quality and style of the clothes I received from Fabrique.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
          verified: true
        },
        {
          name: 'Alex K.',
          text: "Finding clothes that align with my personal style used to be a challenge until I discovered Fabrique.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
          verified: true
        },
        {
          name: 'James L.',
          text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Fabrique.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
          verified: true
        }
      ]
  return (
    <section className="relative bg-gray-50 py-16">
      <div className='container mx-auto px-4 md:px-8'>
        <div className='flex items-center justify-between mb-12'>
          <h2 className='text-3xl sm:text-4xl font-bold'>
            OUR HAPPY CUSTOMERS
          </h2>
          <div className='flex gap-4'>
            <button className='w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100'>
              ←
            </button>
            <button className='w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100'>
              →
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {reviews.map((review, index) => (
            <div 
              key={index}
              className='bg-white p-6 rounded-xl shadow-sm'
            >
              <div className='flex gap-1 mb-4'>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <div className='flex items-center gap-2 mb-4'>
                <span className='font-semibold'>{review.name}</span>
                {review.verified && (
                  <span className='text-green-500 text-sm'>✓</span>
                )}
              </div>

              <p className='text-gray-600 leading-relaxed'>
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews