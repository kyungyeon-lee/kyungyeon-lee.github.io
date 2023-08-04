import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href, href_2,role, link_word,link_word_2 }) => (
  <div className="md p-4 md:w-1/3" style={{ maxWidth: '544px' }}>
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <p>
              {title}
            </p>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        <p className="prose mb-3 max-w-none text-red-500 dark:text-gray-400">{role}</p>

        {href ? (
          // <Link
          //   href={href}
          //   className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          //   aria-label={`Link to ${title}`}
          // >
          //   {link_word} &rarr;
          // </Link>
                                    <Link href={href}>
                            <button className="inline-flex items-center rounded border border-gray-500 bg-transparent px-2 py-1 font-semibold text-gray-700 hover:border-transparent hover:bg-gray-500 hover:text-white">
                              <span className="m-1">{link_word}</span>
                            </button>
                          </Link>
        ): ('⚙️ Work In Progress...')} </div>
                {link_word_2 ? (
            <Link href={href_2}>
                            <button className="mx-2 inline-flex items-center rounded border border-gray-500 bg-transparent px-2 py-1 font-semibold text-gray-700 hover:border-transparent hover:bg-gray-500 hover:text-white">
                              <span className="m-1">{link_word_2}</span>
                            </button>
                          </Link>
        ): ('')}
    </div>
  </div>
)

export default Card
