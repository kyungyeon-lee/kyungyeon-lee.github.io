import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import { TypeAnimation } from 'react-type-animation'
import siteMetadata from '@/data/siteMetadata'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github, google } = frontMatter

  return (
    <>
    
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <TypeAnimation
            className="text-3xl font-extrabold leading-9"
            sequence={[
              'Hello, I am Kyungyeon 👋', // Types 'One'
              2000, // Waits 1s
              'From South Korea, Seoul 🇰🇷', // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              'Dog person 🐕', // Types 'Three' without deleting 'Two'
              2000, // Waits 2s
              () => {
                console.log('Sequence completed')
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '2em', display: 'inline-block' }}
          />
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-lg"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
            <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="google" href={siteMetadata.google}/>
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            Hello, I am a PhD student in Computer Science at the University of Maryland, College Park,
            advised by Prof. <a className="underline decoration-sky-500 font-semibold inline" href="https://junis.sakura.ne.jp/wp/" >Jun Nishda</a>. My research
            focuses on <p className="underline decoration-sky-500 font-semibold inline">Human-Computer Interaction, Accessibility, and Extended Reality</p>. Currently, I
            am actively engaged in the following research areas:
            <br></br>
            <ol>
              <li>
                {' '}
                Accessibility research to improve the daily lives of blind and low vision people <br></br>
              </li>
              <li>
                {' '}
                Non-vision and multimodal interfaces using haptic, tactile, and muscle feedback {' '}
              </li>
              <li>
                {' '}
                Utilizing multimodal AI for mixed reality applications
              </li>
            </ol>

            <p className="font-semibold">
            💡 I am actively seeking research collaborators and research internship opportunities. Feel free to reach out to me!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
