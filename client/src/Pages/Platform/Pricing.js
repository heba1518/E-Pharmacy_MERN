import React from 'react';
import Footer from '../../Components/Home/Footer/Footer';
import NavBar from '../../Components/Home/NavBar/NavBar';
import { CheckCircleIcon } from '@heroicons/react/solid';

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member',
]

const Pricing = () => {
  window.scrollTo(0, 0);
    return (
      <>
        <NavBar />

        {/*  Pricing */}
        <div className="bg-gray-100">
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-teal-700 sm:text-4xl lg:text-5xl">
                  Simple no-tricks pricing
                </h2>
                <p className="mt-4 text-xl text-gray-600">
                  If you're not satisfied, contact us within the first 14 days
                  and we'll send you a full refund.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
            <div className="relative">
              <div className="absolute inset-0 h-1/2 bg-gray-100" />
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                  <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                    <h3 className="text-2xl font-extrabold text-teal-700 sm:text-3xl">
                      Lifetime Membership
                    </h3>
                    <p className="mt-6 text-base text-gray-500">
                      Now with the Enaya application, you can increase the
                      number of your pharmacy’s customers and thus increase your
                      sales. Just register your pharmacy with the Enaya
                      application and order medicines and non-pharmaceutical
                      products from your pharmacy online.
                    </p>
                    <div className="mt-8">
                      <div className="flex items-center">
                        <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                          What's included
                        </h4>
                        <div className="flex-1 border-t-2 border-gray-200" />
                      </div>
                      <ul
                        role="list"
                        className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5"
                      >
                        {includedFeatures.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start lg:col-span-1"
                          >
                            <div className="flex-shrink-0">
                              <CheckCircleIcon
                                className="h-5 w-5 text-green-400"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-sm text-gray-700">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                    <p className="text-lg leading-6 font-medium text-gray-900">
                      Monthly
                    </p>
                    <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                      <span>590</span>
                      <span className="ml-3 text-xl font-medium text-gray-500">
                        EGP
                      </span>
                    </div>
                    <p className="mt-4 text-sm">
                      <a
                        href="#Learn"
                        className="font-medium text-gray-500 underline"
                      >
                        Learn about our membership policy
                      </a>
                    </p>
                    <div className="mt-6">
                      <div className="rounded-md shadow">
                        <a
                          href="#Get"
                          className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-white bg-teal-400 hover:bg-teal-800"
                        >
                          Get Access
                        </a>
                      </div>
                    </div>
                    <div className="mt-4 text-sm">
                      <a href="#get" className="font-medium text-gray-900">
                        Get a free sample{" "}
                        <span className="font-normal text-gray-500">
                          (20MB)
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                    <p className="text-lg leading-6 font-medium text-gray-900">
                      Yearly
                    </p>
                    <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                      <span>2900</span>
                      <span className="ml-3 text-xl font-medium text-gray-500">
                        EGP
                      </span>
                    </div>
                    <p className="mt-4 text-sm">
                      <a
                        href="#Learn"
                        className="font-medium text-gray-500 underline"
                      >
                        Learn about our membership policy
                      </a>
                    </p>
                    <div className="mt-6">
                      <div className="rounded-md shadow">
                        <a
                          href="#Get"
                          className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-white bg-teal-400 hover:bg-teal-800"
                        >
                          Get Access
                        </a>
                      </div>
                    </div>
                    <div className="mt-4 text-sm">
                      <a href="#get" className="font-medium text-gray-900">
                        Get a free sample{" "}
                        <span className="font-normal text-gray-500">
                          (20MB)
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
};

export default Pricing;