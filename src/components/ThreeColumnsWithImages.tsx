'use client'

import { cn } from '@/lib/cn'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Container } from './Container'
import { FadeIn } from './FadeIn'

import ayuandbenImg from '@/images/work/ayuandben.png'
import bonheurenbImg from '@/images/work/bonheurenb.jpg'
import chezgImg from '@/images/work/chezg.jpg'
import loopImg from '@/images/work/loop.png'
import metablizzImg from '@/images/work/metablizz.png'
import oworldImg from '@/images/work/oworld.jpg'

export function ThreeColumnsWithImages() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          My projects
        </h2>
      </FadeIn>
      <div className="cols-1  mt-20 grid gap-4 md:auto-rows-[25rem] md:grid-cols-3">
        {items.map((item, index) => (
          <Card
            key={index}
            className={cn('flex flex-col justify-between', item.className)}
          >
            <Link href={item.href}>
              <CardContent className="h-40">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
              <CardSkeletonBody>{item.header}</CardSkeletonBody>
            </Link>
          </Card>
        ))}
      </div>
    </Container>
  )
}

const items = [
  {
    title: 'Chez G',
    description:
      'A showcase site developed to train me on React. It allows you to present the restaurant, the menu, the services and the contact details.',
    href: '/work#Chez G',
    header: (
      <Image
        src={chezgImg}
        alt="Bento grid 1"
        width={500}
        height={500}
        className="ml-6 w-full rounded-lg object-cover"
      />
    ),
    className: 'md:col-span-1',
  },
  {
    title: 'Bonheur en B',
    description:
      "Showcase site created to present a client's lodgings and present the activities of the region.",
    href: '/work#Les Bonheurs en B',
    header: (
      <Image src={bonheurenbImg} alt="Bento grid 2" width={500} height={500} />
    ),
    className: 'md:col-span-1',
  },
  {
    title: 'Metablizz',
    description:
      'A website aimed to present Blizzard worlds with the history of the lore and each character in immersion and to train me on animation effects and UI design.',
    href: '/work#Metablizz',
    header: (
      <Image src={metablizzImg} alt="Bento grid 2" width={500} height={500} />
    ),
    className: 'md:col-span-1',
  },
  {
    title: 'OWorld',
    description:
      'OWorld offers an immersive experience to explore and discover varied information about the planets and different countries of the world.',
    href: '/work#OWorld',
    header: (
      <Image
        src={oworldImg}
        alt="Bento grid 3"
        width={500}
        height={500}
        className="-ml-6 -mt-4 rounded-lg object-cover md:-mt-0"
      />
    ),
    className: 'md:col-span-1',
  },
  {
    title: 'Ayu & Ben',
    description:
      "An e-learning platform for learning Japanese online with interractive lessons and exercises. It also allows to follow the user's progress.",
    href: '/work#Ayu & Ben',
    header: (
      <div className="flex">
        <Image
          src={ayuandbenImg}
          alt="Bento grid 4"
          width={500}
          height={500}
          className="ml-6 rounded-lg object-cover"
        />
        <Image
          src={ayuandbenImg}
          alt="Bento grid 4"
          width={500}
          height={500}
          className="ml-6 mt-8 rounded-lg object-cover"
        />
      </div>
    ),
    className: 'md:col-span-2',
  },

  {
    title: 'Loop',
    description:
      'A web application that allows to learn english vocabulary through active method exercises. Words are displayed in Japanese and the user has to choose type the word in english. For each word, the user can hear the right pronunciation with native audio.',
    href: '/work#Loop',
    header: (
      <Image
        src={loopImg}
        alt="Bento grid 5"
        width={500}
        height={500}
        className="mx-auto -mb-4 w-[calc(100%-3rem)] rounded-lg"
      />
    ),
    className: 'md:col-span-1',
  },
]

// Card structure
const CardSkeletonBody = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn('overflow-hidden', className)}>{children}</div>
}

const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn('p-6', className)}>{children}</div>
}

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
    },
  }
  return (
    <motion.h3
      variants={variants}
      transition={{
        type: 'easeOut',
        duration: 0.2,
      }}
      className={cn(
        'font-sans  text-lg font-medium tracking-tight text-neutral-700',
        className,
      )}
    >
      {children}
    </motion.h3>
  )
}

const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 15,
    },
  }
  return (
    <motion.p
      variants={variants}
      transition={{
        type: 'easeOut',
        duration: 0.2,
      }}
      className={cn(
        'mt-2 max-w-xs overflow-hidden font-sans text-base font-normal tracking-tight text-neutral-500',
        className,
      )}
    >
      <span className="line-clamp-2">{children}</span>
    </motion.p>
  )
}

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <motion.div
      whileHover="animate"
      className={cn(
        'group isolate flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}
