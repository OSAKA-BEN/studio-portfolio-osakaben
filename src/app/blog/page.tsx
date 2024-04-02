/* eslint-disable react/no-unescaped-entities */
import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { PageIntro } from '@/components/PageIntro'
import { formatDate } from '@/lib/formatDate'
import { loadArticles } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'My Dev Blog - Benjamin Guiganton',
  description:
    'Join Benjamin Guiganton on his developer journey, transitioning from a decade in naval construction to web development. Discover insights into the creation of an e-learning platform for Japanese language, reflections on technology, and the challenges and solutions encountered in developing new projects and learning new skills in the tech world.',
}

export default async function Blog() {
  let articles = await loadArticles()

  return (
    <>
      <PageIntro
        eyebrow="My Dev Blog"
        title="Follow my developer journey through my Dev Blog."
      >
        <p>
          I would like to share the projects that I have in mind. Discuss the
          architectures I chose, the challenges I encountered while building
          them, or simply express my thoughts on the technological world.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24 lg:space-y-32">
          {articles.map((article) => (
            <FadeIn key={article.href}>
              <article>
                <Border className="pt-16">
                  <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                    <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-2xl font-semibold text-neutral-950">
                        <Link href={article.href}>{article.title}</Link>
                      </h2>
                      <time dateTime={article.date} className="text-sm">
                        {formatDate(article.date)}
                      </time>
                      <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                        <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                          <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                            <GrayscaleTransitionImage
                              {...article.img}
                              sizes="(min-width: 768px) 42rem, 100vw"
                              className="aspect-[16/10] w-full rounded-xl object-cover"
                            />
                          </div>
                        </div>
                      </dl>
                      <p className="mt-6 max-w-2xl text-base text-neutral-600">
                        {article.description}
                      </p>
                      <Button
                        href={article.href}
                        aria-label={`Read more: ${article.title}`}
                        className="mt-8"
                      >
                        Read more
                      </Button>
                    </div>
                  </div>
                </Border>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </>
  )
}
