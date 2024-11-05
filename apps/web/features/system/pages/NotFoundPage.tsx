import Head from 'next/head';
import Link from 'next/link';


type Props = {
  title?: string;
  children?: never;
};

export const NotFoundPage = (props: Props) => {
  const title = props.title ?? '404 - Page Not Found';
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-white">
        <h1
          data-testid="not-found-title"
          className="text-5xl text-black md:text-4xl lg:text-5xl"
        >
          {title}
        </h1>
        <p className="mt-5 text-center text-xl no-underline hover:underline">
          <Link href={'/'}>Go back home</Link>
        </p>
      </div>
    </>
  );
};
