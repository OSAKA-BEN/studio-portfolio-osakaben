import { type Metadata } from 'next'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import Link from 'next/link'

import chartjsImg from '@/images/stack/chartjs.png'
import cloudinaryImg from '@/images/stack/cloudinary.png'
import cssImg from '@/images/stack/css.png'
import excelImg from '@/images/stack/excel.png'
import figmaImg from '@/images/stack/figma.png'
import framermotionImg from '@/images/stack/framermotion.svg'
import htmlImg from '@/images/stack/html.png'
import javascriptImg from '@/images/stack/javascript.png'
import mongodbImg from '@/images/stack/mongodb.png'
import nextjsImg from '@/images/stack/nextjs.png'
import nodeImg from '@/images/stack/nodejs.png'
import postgresqlImg from '@/images/stack/postgresql.png'
import reactImg from '@/images/stack/reactjs.png'
import redisImg from '@/images/stack/redis.png'
import reduxImg from '@/images/stack/redux.png'
import stripeImg from '@/images/stack/stripe.png'
import supabaseImg from '@/images/stack/supabase.png'
import tailwindcssImg from '@/images/stack/tailwind.png'
import typescriptImg from '@/images/stack/typescript.png'
import vbaImg from '@/images/stack/vba.png'
import viteImg from '@/images/stack/vite.png'
import airetouchImg from '@/images/work/airetouchImg.jpg'
import appchantierImg from '@/images/work/appchantier.jpg'
import ayuandbenImg from '@/images/work/ayuandben.png'
import bonheursenbImg from '@/images/work/bonheursenb.jpg'
import chezgImg from '@/images/work/chezg.jpg'
import mecchaImg from '@/images/work/meccha2.jpg'
import metablizzImg from '@/images/work/metablizz.png'
import metroImg from '@/images/work/metro.png'
import oworldImg from '@/images/work/oworld.jpg'
import teslaImg from '@/images/work/tesla.jpg'
import Image from 'next/image'

const projectsData = [
  {
    title: 'Site Application',
    href: '/pdf/Professional project presentation Site Management Base - EN.pdf',
    summary: [
      'This application developed under VBA makes it possible to process all site data and provide a site management tool. It allows to prepare work, update progress and measure efficiency for the financial monitoring.',
    ],
    image: { src: appchantierImg },
    date: '2020',
    technology: [
      { name: 'Excel', src: excelImg },
      { name: 'VBA', src: vbaImg },
    ],
  },
  {
    title: 'Chez G',
    href: 'https://chezg-osaka-ben.vercel.app/',
    summary: [
      'A showcase site developed to train me on React. It allows you to present the restaurant, the menu, the services and the contact details.',
    ],
    image: { src: chezgImg },
    date: '2023',
    technology: [
      { name: 'React', src: reactImg },
      { name: 'Css', src: cssImg },
    ],
  },
  {
    title: 'Metablizz',
    href: 'https://metablizz.vercel.app/',
    summary: [
      'A website aimed to present Blizzard worlds with the history of the lore and each character in immersion and to train me on animation effects and UI design.',
    ],
    image: { src: metablizzImg },
    date: '2023',
    technology: [
      { name: 'React', src: reactImg },
      { name: 'Vite', src: viteImg },
      { name: 'TailwindCSS', src: tailwindcssImg },
      { name: 'Framer', src: framermotionImg },
    ],
  },
  {
    title: 'OWorld',
    href: 'https://oworld.space/',
    summary: [
      'OWorld offers an immersive experience to explore and discover varied information about the planets and different countries of the world.',
    ],
    image: { src: oworldImg },
    date: '2023',
    technology: [
      { name: 'Figma', src: figmaImg },
      { name: 'React', src: reactImg },
      { name: 'Vite', src: viteImg },
      { name: 'TailwindCSS', src: tailwindcssImg },
      { name: 'ChartJS', src: chartjsImg },
      { name: 'Framer', src: framermotionImg },
      { name: 'Redux', src: reduxImg },
      { name: 'Redis', src: redisImg },
      { name: 'TypeScript', src: typescriptImg },
    ],
  },
  {
    title: 'Les Bonheurs en B',
    href: 'https://les-bonheurs-en-b.vercel.app/',
    summary: [
      "Showcase site created to present a client's lodgings and present the activities of the region.",
    ],
    image: { src: bonheursenbImg },
    date: '2023',
    technology: [
      { name: 'Figma', src: figmaImg },
      { name: 'React', src: reactImg },
      { name: 'NextJs', src: nextjsImg },
      { name: 'Framer', src: framermotionImg },
      { name: 'TailwindCSS', src: tailwindcssImg },
    ],
  },
  {
    title: 'Ayu & Ben',
    href: 'https://ayuandben.com/',
    summary: [
      "An e-learning platform for learning Japanese online with interractive lessons and exercises. It also allows to follow the user's progress.",
    ],
    image: { src: ayuandbenImg },
    date: '2024',
    technology: [
      { name: 'Figma', src: figmaImg },
      { name: 'React', src: reactImg },
      { name: 'NextJs', src: nextjsImg },
      { name: 'TailwindCSS', src: tailwindcssImg },
      { name: 'Framer', src: framermotionImg },
      { name: 'TypeScript', src: typescriptImg },
      { name: 'Supabase', src: supabaseImg },
      { name: 'PostgreSQL', src: postgresqlImg },
    ],
  },
  {
    title: 'Metro',
    href: 'https://www.metro-learn-english.app/',
    summary: [
      'A web application for Japanese students to learn english vocabulary through active method exercises. Words are displayed in English and the user has to choose type the word for each repetition. For each word, the user can hear the right pronunciation with native audio.',
    ],
    image: { src: metroImg },
    date: '2024',
    technology: [
      { name: 'Figma', src: figmaImg },
      { name: 'React', src: reactImg },
      { name: 'NextJs', src: nextjsImg },
      { name: 'TailwindCSS', src: tailwindcssImg },
      { name: 'TypeScript', src: typescriptImg },
      { name: 'Supabase', src: supabaseImg },
      { name: 'PostgreSQL', src: postgresqlImg },
    ],
  },
  {
    title: 'Tesla Configurator',
    href: 'https://tesla-configurator-beryl.vercel.app/',
    summary: [
      'A configurator for Tesla cars to choose the options and see the price.',
    ],
    image: { src: teslaImg },
    date: '2024',
    technology: [
      { name: 'HTML', src: htmlImg },
      { name: 'CSS', src: cssImg },
      { name: 'JavaScript', src: javascriptImg },
    ],
  },
  {
    title: 'AI Retouch',
    href: 'https://tesla-configurator-beryl.vercel.app/',
    summary: [
      'A web application to retouch images with AI. Remove background, restore image, remove objects, change the format, recolor, generative fill.',
    ],
    image: { src: airetouchImg },
    date: '2024',
    technology: [
      { name: 'React', src: reactImg },
      { name: 'NextJs', src: nextjsImg },
      { name: 'TailwindCSS', src: tailwindcssImg },
      { name: 'TypeScript', src: typescriptImg },
      { name: 'Cloudinary', src: cloudinaryImg },
      { name: 'MongoDB', src: mongodbImg },
      { name: 'Stripe', src: stripeImg },
    ],
  },
  {
    title: 'Meccha',
    href: 'https://meccha-frontend.vercel.app/',
    summary: [
      'An e-commerce website for selling Japanese products with complete backoffice. It allows to manage the products, the orders, the customers and the inventory. Payment is made with Stripe.',
    ],
    image: { src: mecchaImg },
    date: '2024',
    technology: [
      { name: 'React', src: reactImg },
      { name: 'NextJs', src: nextjsImg },
      { name: 'TailwindCSS', src: tailwindcssImg },
      { name: 'TypeScript', src: typescriptImg },
      { name: 'Express', src: nodeImg },
      { name: 'MongoDB', src: mongodbImg },
      { name: 'Cloudinary', src: cloudinaryImg },
      { name: 'Stripe', src: stripeImg },
    ],
  },
]

function Projects() {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Projects
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {projectsData.map((project) => (
          <FadeIn key={project.title}>
            <article id={project.title}>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={project.image.src}
                      alt={project.title}
                      width={500}
                      height={500}
                      className="aspect-[16/10] w-full rounded-xl object-cover"
                    />
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <h3 className="font-display text-4xl font-medium text-neutral-950">
                    {project.title}
                  </h3>
                  <p className="font-thin">{project.date}</p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {project.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex">
                    {project.href ? (
                      <Link
                        href={project.href}
                        target="_blank"
                        aria-label={`Visit website for ${project.title}`}
                      >
                        <Button>Visit Website</Button>
                      </Link>
                    ) : (
                      <Button
                        disabled
                        aria-label={`Visit website for ${project.title}`}
                        className="cursor-not-allowed hover:bg-neutral-300 hover:text-neutral-700"
                        title="Coming soon..."
                      >
                        Visit Website
                      </Button>
                    )}
                  </div>
                  <ul
                    role="list"
                    className="mt-6 flex flex-row flex-wrap gap-4"
                  >
                    {project.technology.map((technology) => (
                      <li key={technology.name}>
                        <FadeIn>
                          <div className="group relative flex h-24 w-24 flex-col overflow-hidden rounded-xl bg-neutral-100 p-4">
                            <div className="flex h-2/3 items-start justify-center">
                              <Image
                                src={technology.src}
                                alt={technology.name}
                                width={200}
                                height={200}
                                className="h-10 w-10 rounded-xl object-contain"
                              />
                            </div>
                            <div className="flex h-1/3 items-end justify-center">
                              <p className="font-display text-sm text-black">
                                {technology.name}
                              </p>
                            </div>
                          </div>
                        </FadeIn>
                      </li>
                    ))}
                  </ul>
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'My Work - Benjamin Guiganton',
  description:
    'Explore a curated selection of my web development projects, including bespoke SaaS platforms, freelance websites, and e-learning solutions. Each project exemplifies my approach to solving real-world problems through innovative technology and design.',
}

export default async function Work() {
  return (
    <>
      <PageIntro eyebrow="My work" title="Have a look at my projects.">
        <p>
          I have worked on a variety of projects, I just selected a few of them.
          I am passionate about what I do and I am always looking for new
          challenges to improve my skills.
        </p>
      </PageIntro>

      <Projects />
    </>
  )
}
