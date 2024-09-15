/* eslint-disable react/no-unescaped-entities */
import { type Metadata } from 'next'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import Image from 'next/image'

import { GridList, GridListItem } from '@/components/GridList'
import { SectionIntro } from '@/components/SectionIntro'
import frenchflag from '@/images/flags/france.png'
import japaneseflag from '@/images/flags/japon.png'
import englishflag from '@/images/flags/unitedkingdom.png'

const languages = [
  ['French', frenchflag],
  ['English', englishflag],
  ['Japanese', japaneseflag],
]

function Languages() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Languages I speak
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3"
        >
          {languages.map(([language, logo]) => (
            <li key={language as string} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="flex h-32 items-center justify-center gap-4 pt-12 tracking-widest group-[&:nth-child(1)]:-mt-px">
                  {logo && (
                    <Image
                      src={logo}
                      alt={language as string}
                      width={40}
                      height={40}
                      unoptimized
                      className="border"
                    />
                  )}
                  <p className="text-xl">{String(language)}</p>
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}

function Values() {
  return (
    <div className="relative mt-24">
      <SectionIntro
        eyebrow="My values"
        title="Always trying to improve myself and my work"
      >
        <p>
          I believe in efficiency and maximizing my resources to provide the
          best value. I'm are committed to delivering high-quality services that
          meet the needs of the clients.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            I pay attention to detail and I am always looking for ways to
            improve my work.
          </GridListItem>
          <GridListItem title="Efficient">
            I am always looking for ways to improve my efficiency and work
            smart.
          </GridListItem>
          <GridListItem title="Adaptable">
            I am flexible and adapt easily to a new environment or client needs.
          </GridListItem>
          <GridListItem title="Honest">
            Mistakes happen, and when they do, i'm just fixing it and learn from
            them. Mistakes are the best way to learn.
          </GridListItem>
          <GridListItem title="Loyal">
            I will not let clients down and I will give my best to satisfy their
            needs.
          </GridListItem>
          <GridListItem title="Innovative">
            I'm curious and i like to try new things and to learn new
            technologies. I'm always aware of the latest trends and
            technologies.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Benjamin Guiganton - Portfolio',
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  return (
    <>
      <Container className="mt-24">
        <FadeIn className="flex max-w-7xl flex-col gap-8 lg:flex-row">
          <div className="lg:w-2/3">
            <h1 className="max-w-4xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
              Hello, <br />
              I'm Benjamin.
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
              After spending 10 years in the shipbuilding industry in various
              roles like Assembler, Team Leader, Site Manager, Project Manager
              and Business Manager. I recently embarked on a career change in
              the IT industry. <br />
              <br />
              I have completed a 6 month bootcamp in web development, obtain my
              diplom and I am currently working as a Freelance Developer. I am
              looking for a new challenge and am open to new opportunities.
              <br />
              <br />I like to learn and to level up. I am creative , motivated
              and hard worker.
            </p>
          </div>
          <div className="flex items-end lg:w-1/3">
            <Image
              src="/benjamin.jpeg"
              alt="Benjamin"
              width={600}
              height={600}
              className="w-full rounded-xl"
            />
          </div>
        </FadeIn>
      </Container>
      <Languages />
    </>
  )
}
