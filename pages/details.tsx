import React from 'react'
import Navbar from "@/components/organisms/Navbar";

export default function details() {
  return (
    <>
    <Navbar/>
      <header className="ex-header bg-gray">
        <div className="container px-4 sm:px-8 xl:px-4">
          <h1 className="xl:ml-24">Detail Book</h1>
        </div>
      </header>

      <div className="py-12 ex-basic-1">
        <div className="container px-4 sm:px-8">
          <img className="inline mt-12 mb-4" src="images/article-details-large.jpg" alt="alternative" />
        </div>
      </div>

      <div className="pt-6 pb-12 ex-basic-1">
        <div className="container px-4 sm:px-8 xl:px-32">
          <p className="mb-12">
            Features include an eye catching morphtext in the header, details lightbox for more details information, statistics numbers for important values, card slider for testimonials, image slider for customer logos and working forms that
            will enable your landing page to provide leads in order to achieve your marketing goals.
          </p>

          <h2 className="mb-6">New elements added to the package</h2>
          <img className="inline mb-12" src="images/article-details-small.jpg" alt="alternative" />
          <p className="mb-4">
            Some useful extra pages are bundled with the template lik article details, terms conditions and privacy policy which can be customized as per your requirements. Riga has an impactful dark style design combined with warm colors and
            angular background shapes with the unique goal of making your mobile app stand out.
          </p>
          <p className="mb-12">
            Leon is an easy to customize landing page HTML template built with Tailwind CSS for promoting mobile apps to the online audience and making visitors download them from app stores. This template is built with HTML and Tailwind CSS
            to ensure the highest flexibility for all users.
          </p>
          <div className="mb-12 text-box">
            <h3 className="mb-2">Visitors love a beautiful and efficient website</h3>
            <p className="mb-4">
              All designers, developers and tech-savvy people will be able to customize this template with basic web coding skills. Among the features you will find details lightbox for more details information, tabbed content for feature
              details, video lightbox, card slider for testimonials, statistics numbers, image slider for customer logos, dropdown navigation and useful extra pages for article details, terms.
            </p>
          </div>
          <p className="mb-6">
            Together with touches of call to action green, the overall landing page design will showcase your app beautifully and will help with convincing visitors to download it from the app stores. Orange and gray hues with one color
            backgrounds to maximize the impact of your content image slider for customer logos and working forms.
          </p>
          <a className="mb-12 btn-solid-reg" href="index.html#download">Subscribe</a>
        </div>
      </div>
    </>
  )
}
