import { type Metadata } from 'next'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import dockerImg from '@/images/stack/docker.png'
import figmaImg from '@/images/stack/figma.png'
import gitImg from '@/images/stack/git.png'
import hostingerImg from '@/images/stack/hostinger.png'
import javascriptImg from '@/images/stack/javascript.png'
import mongodbImg from '@/images/stack/mongodb.png'
import nextjsImg from '@/images/stack/nextjs.png'
import nodejsImg from '@/images/stack/nodejs.png'
import postgresqlImg from '@/images/stack/postgresql.png'
import prismaImg from '@/images/stack/prisma.png'
import reactImg from '@/images/stack/reactjs.png'
import redisImg from '@/images/stack/redis.png'
import reduxImg from '@/images/stack/redux.png'
import riveImg from '@/images/stack/rive.png'
import sequelizeImg from '@/images/stack/sequelize.png'
import supabaseImg from '@/images/stack/supabase.png'
import tailwindImg from '@/images/stack/tailwind.png'
import typescriptImg from '@/images/stack/typescript.png'
import vercelImg from '@/images/stack/vercel.png'

const tech = [
  {
    title: 'Frontend',
    techology: [
      {
        name: 'JavaScript',
        role: 'Programming Language',
        image: { src: javascriptImg },
      },
      {
        name: 'TypeScript',
        role: 'JavaScript Superset',
        image: { src: typescriptImg },
      },
      {
        name: 'React',
        role: 'JavaScript Library',
        image: { src: reactImg },
      },
      {
        name: 'Nextjs',
        role: 'JavaScript framework for server-side rendering',
        image: { src: nextjsImg },
      },
      {
        name: 'Tailwind CSS',
        role: 'CSS Framework',
        image: { src: tailwindImg },
      },
      {
        name: 'Redux',
        role: 'State management',
        image: { src: reduxImg },
      },
    ],
  },
  {
    title: 'Backend',
    techology: [
      {
        name: 'Node js',
        role: 'JavaScript runtime environment',
        image: { src: nodejsImg },
      },
      {
        name: 'PostgreSQL',
        role: 'Database management system',
        image: { src: postgresqlImg },
      },
      {
        name: 'Sequelize',
        role: 'ORM for Node.js',
        image: { src: sequelizeImg },
      },
      {
        name: 'Redis',
        role: 'In-Memory Database',
        image: { src: redisImg },
      },
      {
        name: 'MongoDB',
        role: 'NoSQL Database Management System',
        image: { src: mongodbImg },
      },
      {
        name: 'Supabase',
        role: 'Open-source Firebase alternative',
        image: { src: supabaseImg },
      },
      {
        name: 'Prisma',
        role: 'TypeScript-first ORM',
        image: { src: prismaImg },
      },
    ],
  },
  {
    title: 'Deployment & Hosting',
    techology: [
      {
        name: 'Vercel',
        role: 'Deployment platform',
        image: { src: vercelImg },
      },
      {
        name: 'Hostinger',
        role: 'Web hosting provider',
        image: { src: hostingerImg },
      },
    ],
  },
  {
    title: 'Tools',
    techology: [
      {
        name: 'Git',
        role: 'Version control system',
        image: { src: gitImg },
      },
      {
        name: 'Docker',
        role: 'Containerization platform',
        image: { src: dockerImg },
      },
      {
        name: 'Figma',
        role: 'User interface design tool',
        image: { src: figmaImg },
      },
      {
        name: 'Rive',
        role: 'Design tool for interactive animations',
        image: { src: riveImg },
      },
    ],
  },
]

function Tech() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {tech.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.techology.map((technology) => (
                    <li key={technology.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <div className="flex h-64 items-start justify-center p-4">
                            <GrayscaleTransitionImage
                              {...technology.image}
                              sizes="(min-width: 768px) 42rem, 100vw"
                              className="w-50 flex aspect-[16/9] h-1/2 object-contain"
                            />
                          </div>
                          <div className="absolute inset-0 flex flex-col justify-end  p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-black">
                              {technology.name}
                            </p>
                            <p className="mt-2 text-sm text-black">
                              {technology.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'My Stack - Benjamin Guiganton',
  description:
    'Explore the diverse set of technologies and tools I leverage to build innovative web solutions. From front-end to back-end, my stack is continually evolving to include the latest and most efficient frameworks and languages.',
}

export default async function Stack() {
  return (
    <>
      <Tech />
    </>
  )
}
