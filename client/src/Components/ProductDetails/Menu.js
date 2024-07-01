import React from 'react';
import { Faq } from './FAQ/FAQItem';
import Reviews from './Reviews/Reviews';
import VendorInfo from './VendorInfo';
import products from '../../Data/products'
import {useParams} from 'react-router-dom';
import video from '../../Assets/images/vedios/ar_final.mp4';
 
const Menu = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const { productId } = useParams();
  const product = products.find((product) => product._id == productId);
  const description = product.description;
  const totalReview = product.totalReview;
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full pb-5 pt-10">
          <ul
            className="flex gap-x-4 md:gap-x-14 mb-4 list-none flex-wrap  flex-row border-b-2"
            role="tablist"
          >
            <li className="-mb-px  text-center">
              <a
                className={
                  'text-md md:text-lg font-sans font-medium py-3 block leading-normal ' +
                  (openTab === 1
                    ? 'text-gray-900 border-b-2 border-cyan-500'
                    : 'text-gray-600 ')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Description
              </a>
            </li>
           
            <li className="-mb-px  text-center">
              <a
                className={
                  'text-md md:text-lg font-sans font-medium py-3 block leading-normal ' +
                  (openTab === 3
                    ? 'text-gray-900 border-b-2 border-cyan-500'
                    : 'text-gray-600 ')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Vendor Info
              </a>
            </li>
            <li className="-mb-px text-center">
              <a
                className={
                  'text-md md:text-lg font-sans font-medium py-3 block leading-normal ' +
                  (openTab === 4
                    ? 'text-gray-900 border-b-2 border-cyan-500'
                    : 'text-gray-600 ')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                FAQ
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-accent-200 w-full rounded">
            <div className="py-5 flex-auto">
              <div className="tab-content tab-space">
              <div className="flex">
                {/* Left side - Description */}
                <div className={openTab === 1 ? 'w-1/2 pr-4' : 'hidden'} id="link1">
                  <p className="text-gray-800 font-sans font-normal tracking-wide leading-relaxed text-lg">
                    {description}
                  </p>
                </div>

                {/* Right side - Video */}
                <div className={openTab === 1 ? 'w-1/2' : 'hidden'}>
                <video controls className="w-full" src={video} type="video/mp4" />
                </div>
              </div>
                {/* <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <Reviews value ={product.rating}/>
                </div> */}
                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                  <VendorInfo />
                </div>
                <div className={openTab === 4 ? 'block' : 'hidden'} id="link3">
                  <Faq />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
