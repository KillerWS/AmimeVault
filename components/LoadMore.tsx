'use client'
import { fetchAnime } from '@/app/action'
import AnimeCard, { AnimeProp } from '@/components/AnimeCard'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { data } from '@/app/_data'

let page = 2

export type AnimeCard = JSX.Element

function LoadMore() {
  const { ref, inView } = useInView()
  //   const [data, setData] = useState<AnimeProp[]>([])
  const [data, setData] = useState<AnimeCard[]>([])
  useEffect(() => {
    if (inView) {
      //alert('load more')
      fetchAnime(page).then((res) => {
        console.log('RES:  -------')
        console.log(res)
        //更新数据
        setData([...data, ...res]) //使用...展开运算符，将fetch回来的数据res附加在其中
        page++
      })
    }
  }, [inView, data])

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {/* {data.map((item: AnimeProp, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))} */}
        {data}
      </section>
      {/* {data} */}
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  )
}

export default LoadMore
