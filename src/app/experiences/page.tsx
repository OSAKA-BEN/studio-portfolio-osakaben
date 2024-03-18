/* eslint-disable react/no-unescaped-entities */
import { type Metadata } from 'next'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import Astrolable from '@/images/experiences/astrolable.jpg'
import AyuBen from '@/images/experiences/ayu&ben.jpg'
import Bho2m from '@/images/experiences/bho2m.jpg'
import gowind from '@/images/experiences/gowind.png'
import Hsi from '@/images/experiences/hsi.jpg'
import Oclock from '@/images/experiences/oclock.png'
import logoBarillec from '@/images/logos/barillec.jpeg'
import logoOclock from '@/images/logos/oclock.jpeg'
import logoSnef from '@/images/logos/snef.png'
import Image from 'next/image'
import Link from 'next/link'

function Section({
  title,
  date,
  company,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
  date: string
  company: string
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div className="font-display text-base font-semibold">
              {'//  '}
              {company}
            </div>
            <span>{date}</span>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function GroupSnef01() {
  return (
    <Section
      title="Business Manager"
      image={{ src: Hsi }}
      company="Groupe SNEF"
      date="September 2014 - December 2016"
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          <strong className="font-semibold text-neutral-950">
            Business management
          </strong>{' '}
          for the study and installation services of pneumatic valve control.
        </p>
        <p>
          Design and industrialization of the installation / Financial and
          contractual management / Purchasing / Site supervision and management.
        </p>
        <p>
          Training for Egyptian clients as part of the Transfert of Technology /
          Supply Chain management in the context of the{' '}
          <strong className="font-semibold text-neutral-950">
            Transfer of Technology
          </strong>{' '}
          to the Egyptian shipyard.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Skills
      </h3>
      <TagList className="mt-4">
        <TagListItem>Business Management</TagListItem>
        <TagListItem>Supervision</TagListItem>
        <TagListItem>Contractual Management</TagListItem>
        <TagListItem>Financial Management</TagListItem>
        <TagListItem>Studies</TagListItem>
        <TagListItem>Skills sharing</TagListItem>
      </TagList>
    </Section>
  )
}

function GroupSnef02() {
  return (
    <Section
      title="Construction Manager"
      image={{ src: Astrolable }}
      company="Groupe SNEF"
      date="January 2017 - February 2018"
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          <strong className="font-semibold text-neutral-950">
            Planning, organizing,
          </strong>{' '}
          and leading a team of{' '}
          <strong className="font-semibold text-neutral-950">70 people</strong>{' '}
          for electrical assembly services (purchasable functions covering the
          areas of studies, procurement, assembly, and testing).
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Supervision
          </strong>{' '}
          of attachment and hull lining assembly works, equipment installation,
          cable pulling, termination, control, and testing.
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">Acceptance</strong>{' '}
          of premises with the Moroccan naval client and PIRIOU. Bureau Veritas
          validation.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Skills
      </h3>
      <TagList className="mt-4">
        <TagListItem>Planning</TagListItem>
        <TagListItem>Leadership</TagListItem>
        <TagListItem>Human ressources</TagListItem>
        <TagListItem>Supervision</TagListItem>
        <TagListItem>Client Relation</TagListItem>
        <TagListItem>Testing</TagListItem>
      </TagList>
    </Section>
  )
}

function GroupSnef03() {
  return (
    <Section
      title="Business Manager"
      image={{ src: Bho2m }}
      company="Groupe SNEF"
      date="January 2019 - August 2020"
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          <strong className="font-semibold text-neutral-950">
            Business management
          </strong>{' '}
          for the manufacturing and supply of main panels.{' '}
          <strong className="font-semibold text-neutral-950">
            Financial and contractual management
          </strong>{' '}
          / purchasing and negotiations / Monitoring of production and
          manufacturing control /{' '}
          <strong className="font-semibold text-neutral-950">
            Implementation of operational excellence
          </strong>{' '}
          in a wiring workshop.
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Operational maintenance missions
          </strong>{' '}
          on ships in Morocco and on Reunion Island.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Skills
      </h3>
      <TagList className="mt-4">
        <TagListItem>Business Management</TagListItem>
        <TagListItem>Operational excellence</TagListItem>
        <TagListItem>Contractual Management</TagListItem>
        <TagListItem>Financial Management</TagListItem>
        <TagListItem>Overseas missions</TagListItem>
      </TagList>
    </Section>
  )
}

function Barillec01() {
  return (
    <Section
      title="Project Manager"
      image={{ src: gowind }}
      company="Barillec Marine"
      date="September 2020 - December 2022"
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          <strong className="font-semibold text-neutral-950">
            Project management
          </strong>{' '}
          related to purchasable electrical features (Study, equipment supply,
          onboard work).
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Design office
          </strong>{' '}
          (Complete system study: fire detection, CCTV) / Supervision of site
          preparation and logistics / Implementation of Lean tools and methods /
          Monitoring of progress and schedule management.
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Programming in VBA
          </strong>
          , development and application of a management tool.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Skills
      </h3>
      <TagList className="mt-4">
        <TagListItem>Project Management</TagListItem>
        <TagListItem>System Study</TagListItem>
        <TagListItem>Preparation</TagListItem>
        <TagListItem>Schedule Management</TagListItem>
        <TagListItem>Logistics</TagListItem>
        <TagListItem>VBA Programming</TagListItem>
        <TagListItem>Excel Mastering</TagListItem>
      </TagList>
    </Section>
  )
}

function Oclock01() {
  return (
    <Section
      title="Web Developer"
      image={{ src: Oclock }}
      company="O'Clock"
      date="January 2023 - July 2023"
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          A program allowing training in essential technologies in the field,
          with a focus on JavaScript, a language highly appreciated for its
          flexibility and the great richness of its ecosystem.
        </p>
        <p>
          HTML, CSS, JavaScript, React, Node.js, Express, PostgreSQL, Sequelize,
          Git.
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Challenges every day
          </strong>{' '}
          to be completed independently, peer programming session and an project
          to be done as a team at the end of the training and to be presented in
          front of a jury.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Skills
      </h3>
      <TagList className="mt-4">
        <TagListItem>HTML/CSS</TagListItem>
        <TagListItem>JavaScript</TagListItem>
        <TagListItem>Express Js</TagListItem>
        <TagListItem>Node Js</TagListItem>
        <TagListItem>PostgresQL</TagListItem>
        <TagListItem>Sequelize</TagListItem>
        <TagListItem>Git</TagListItem>
        <TagListItem>React</TagListItem>
        <TagListItem>Frontend</TagListItem>
        <TagListItem>Backend</TagListItem>
      </TagList>
    </Section>
  )
}

function Freelance01() {
  return (
    <Section
      title="Web Developer"
      image={{ src: AyuBen }}
      company="Ayu & Ben"
      date="January 2024 - Now"
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Ayu & Ben is an e-learning platform that offers the possibility of{' '}
          <strong className="font-semibold text-neutral-950">
            learning Japanese online
          </strong>
          . With online courses by level, the website includes introductory
          videos, dialogues, vocabulary, grammar lessons and exercises to help
          learners progress in the Japanese language. In addition to the course
          modules, a blog is available to enrich culture and knowledge about
          Japan.
        </p>
        <p>
          Each user has a{' '}
          <strong className="font-semibold text-neutral-950">
            personalized dashboard
          </strong>{' '}
          to{' '}
          <strong className="font-semibold text-neutral-950">
            track their progress and scores
          </strong>
          . Ayu & Ben also offers a program of online courses taught by
          experienced Japanese teachers for{' '}
          <strong className="font-semibold text-neutral-950">
            interactive exchanges
          </strong>{' '}
          between learners and teachers.
        </p>
        <p>
          With the explosion of{' '}
          <strong className="font-semibold text-neutral-950">AI</strong> in 2024
          and the opening of the GPT Store, the platform will offer a chat to be
          able to chat with the community of learners by level but also with a
          pre-configured AI according to the user's level in order to so that he
          can practice the language. The AI will then become a real teacher
          available 24/7 to answer students' questions and they will also be
          able to practice the language orally. This platform therefore offers
          an{' '}
          <strong className="font-semibold text-neutral-950">
            immersive and complete experience for learning
          </strong>{' '}
          the Japanese language.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Skills
      </h3>
      <TagList className="mt-4">
        <TagListItem>Building a Saas</TagListItem>
        <TagListItem>Market research</TagListItem>
        <TagListItem>Business Plan</TagListItem>
        <TagListItem>Autonomy</TagListItem>
        <TagListItem>Marketing</TagListItem>
        <TagListItem>Architecture</TagListItem>
      </TagList>
    </Section>
  )
}

const clients = [
  ['Groupe Snef', logoSnef, 'https://www.snef.fr/'],
  ['Barillec', logoBarillec, 'https://www.barillec.fr/'],
  ['Ayu & Ben', logoOclock, ''],
]

function Clients() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Companies I have worked for
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul role="list" className="grid grid-cols-3 gap-x-8 gap-y-12">
          {clients.map(([client, logo, link]) => (
            <li key={client as string} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="flex items-center justify-center gap-4 pt-12 tracking-widest group-[&:nth-child(1)]:-mt-px">
                  <Image
                    src={logo}
                    alt={client as string}
                    width={60}
                    height={60}
                    unoptimized
                    className="rounded-lg"
                  />
                  <Link href={String(link)} className="text-xl">
                    {String(client)}
                  </Link>
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
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
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
  title: 'My Experience',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="My experiences" title="What I have done so far">
        <p>
          After spending 10 years in the shipbuilding industry in various roles
          like Assembler, Team Leader, Site Manager, Project Manager and
          Business Manager. I recently embarked on a career change in the IT
          industry. <br />
          <br />
          I have completed a 6 month bootcamp in web development, obtain my
          diplom and I am currently working as a Freelance Developer. I am
          looking for a new challenge and am open to new opportunities.
          <br />
          <br />I like to learn and to level up. I am creative , motivated and
          hard worker.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <GroupSnef01 />
        <GroupSnef02 />
        <GroupSnef03 />
        <Barillec01 />
        <Oclock01 />
        <Freelance01 />
      </div>

      <Clients />

      <Values />
    </>
  )
}
