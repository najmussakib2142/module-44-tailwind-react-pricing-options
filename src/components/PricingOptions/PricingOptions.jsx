import React, { use } from 'react';
import PricingCart from '../pricingCart/PricingCart';
import DaisyPricing from '../DaisyPricing/DaisyPricing';

const PricingOptions = ({pricingPromise}) => {
    const pricingdata = use(pricingPromise);

    return (
        <div className='px-6'>
            <h2 className='text-4xl'>Get our Membership</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                {/* {
                    pricingdata.map(pricing => <PricingCart 
                        key={pricing.price}
                        pricing = {pricing}>

                        </PricingCart>)
                } */}

                {
                    pricingdata.map (pricing => <DaisyPricing 
                        key={pricing.price}
                        pricing = {pricing}>
                        </DaisyPricing>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;