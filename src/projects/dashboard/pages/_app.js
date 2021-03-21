import Head from 'next/head';
import { NextSeo } from 'next-seo';

import 'aos/dist/aos.css';
import '../assets/styles/globals.css';

import getApp from '../../../shared/pages/_app';
import * as constants from '../constants';

const AppendHead = () => (
  <>
    <NextSeo
      title="WeBuildWebZ"
      description="Aquí podrás administrar el contenido de tu web."
      canonical={constants.URL}
      openGraph={{
        url: constants.URL,
        title: 'WeBuildWebZ',
        description: 'Aquí podrás administrar el contenido de tu web.',
        site_name: 'WeBuildWebZ',
        images: [
          {
            url:
              'https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/banner-webuildwebz.jpg?alt=media&token=cca05d1d-42e8-445e-a346-21c6d4686bfc',
            width: 1366,
            height: 635,
            alt: 'Imagen 1'
          },
          {
            url: `${constants.URL}/favicon.png`,
            width: 96,
            height: 96,
            alt: 'Imagen 2'
          }
        ]
      }}
      twitter={{ handle: '@handle', site: '@site', cardType: 'summary_large_image' }}
    />
    <Head>
      <link rel="icon" href="/favicon.png" />
      {process.browser &&
        !window.location.pathname.startsWith('/admin') &&
        !window.location.pathname.startsWith('/dashboard') && (
          <script
            src="https://www.widgets.webuildwebz.com/include.js"
            data-webuildwebz-project-token="5729AADFA12F43A4B556C74BD9631C81D5318A5B"
          />
        )}
    </Head>
  </>
);

export default getApp({}, constants, AppendHead);
