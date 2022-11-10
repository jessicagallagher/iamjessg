import { MockWebsiteNav, MockWebsiteFooter, DonationAmtButton } from '../../components';
import {
  ChevronDownIcon,
  CheckCircleIcon,
  TrashIcon,
} from '@heroicons/react/20/solid';
import { RadioGroup } from '@headlessui/react';
import { useState } from 'react'

const paymentMethods = [
  { id: 'credit-card', title: 'Credit card' },
  { id: 'paypal', title: 'PayPal' },
];

export default function MockWebsiteDonate() {
  const [donationAmt, setDonationAmt] = useState('0')

  const handleChange = (e) => {
    setDonationAmt(e.target.value)
  }

  const handleClick = () => {
    setDonationAmt('0')
  }

  const handleSetAmt = (e) => {
    setDonationAmt(e.target.value);
  };

  return (
    <div className='max-w-full mx-auto mt-4 sm:mt-10 lg:mt-20'>
      {/* nav */}
      <MockWebsiteNav />

      {/* cta heading */}
      <div className='mx-auto max-w-7xl py-10 px-4 sm:py-24 sm:px-6 lg:flex lg:justify-between lg:px-8 bg-gradient-to-b from-indigo-800 to-lightGrey'>
        <div className='max-w-xl'>
          <h2 className=' text-white text-3xl lg:text-4xl font-bold sm:text-5xl lg:text-6xl'>
            Donate
          </h2>
          <p className='mt-5 text-lg lg:text-xl'>
            Nullam pellentesque arcu sit amet ultrices hendrerit. Mauris iaculis
            risus et leo viverra facilisis.
          </p>
        </div>

        {/* donation input */}
        <div className='mt-10 w-full max-w-xs'>
          <label htmlFor='donationAmt' className='block text-base font-bold'>
            Donation Amount
          </label>
          <div className='relative mt-1.5 flex items-center'>
            <div className='relative mt-1 rounded-md shadow-sm w-full'>
              <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                <span className='text-gray-500 sm:text-sm'>$</span>
              </div>
              <input
                type='text'
                name='donationAmt'
                id='donationAmt'
                className='block w-full rounded-md border-gray-300 pl-7 pr-12 sm:text-sm'
                placeholder='100'
                aria-describedby='price-currency'
                value={donationAmt}
                onChange={handleChange}
              />
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
                <span className='text-gray-500 sm:text-sm' id='price-currency'>
                  USD
                </span>
              </div>
            </div>
          </div>
          <span className='isolate inline-flex rounded-md shadow-sm w-full mt-4'>
            <DonationAmtButton
              buttonType={'button'}
              buttonValue={'100'}
              handleSetAmt={handleSetAmt}
            />
            <DonationAmtButton
              buttonType={'button'}
              buttonValue={'200'}
              handleSetAmt={handleSetAmt}
            />
            <DonationAmtButton
              buttonType={'button'}
              buttonValue={'300'}
              handleSetAmt={handleSetAmt}
            />
          </span>
        </div>
      </div>

      {/* donation checkout */}
      <div>
        <div className='lg:mx-auto max-w-2xl px-4 pb-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:py-8'>
          <h2 className='sr-only'>Checkout</h2>

          <form className='lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16'>
            <div>
              <div>
                <h2 className='text-lg font-medium'>Contact information</h2>

                <div className='mt-4'>
                  <label
                    htmlFor='email-address'
                    className='block text-sm font-medium'
                  >
                    Email address
                  </label>
                  <div className='mt-1'>
                    <input
                      type='email'
                      id='email-address'
                      name='email-address'
                      autoComplete='email'
                      className='block w-full rounded-md border-gray-300 shadow-sm sm:text-sm'
                    />
                  </div>
                </div>
              </div>

              <div className='mt-10 border-t border-gray-200 pt-10'>
                <h2 className='text-lg font-medium'>Billing address</h2>

                <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4'>
                  <div>
                    <label
                      htmlFor='first-name'
                      className='block text-sm font-medium'
                    >
                      First name
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        id='first-name'
                        name='first-name'
                        autoComplete='given-name'
                        className='block w-full rounded-md border-gray-300 shadow-sm sm:text-sm'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='last-name'
                      className='block text-sm font-medium'
                    >
                      Last name
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        id='last-name'
                        name='last-name'
                        autoComplete='family-name'
                        className='block w-full rounded-md border-gray-300 shadow-sm sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='company'
                      className='block text-sm font-medium'
                    >
                      Company
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='company'
                        id='company'
                        className='block w-full rounded-md border-gray-300 shadow-sm sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='address'
                      className='block text-sm font-medium'
                    >
                      Address
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='address'
                        id='address'
                        autoComplete='street-address'
                        className='block w-full rounded-md border-gray-300 shadow-sm sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='apartment'
                      className='block text-sm font-medium'
                    >
                      Apartment, suite, etc.
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='apartment'
                        id='apartment'
                        className='block w-full rounded-md border-gray-300 shadow-sm sm:text-sm'
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor='city' className='block text-sm font-medium'>
                      City
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='city'
                        id='city'
                        autoComplete='address-level2'
                        className='block w-full rounded-md border-gray-300 shadow-sm sm:text-sm'
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor='region'
                      className='block text-sm font-medium'
                    >
                      State
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='region'
                        id='region'
                        autoComplete='address-level1'
                        className='block w-full rounded-md border-gray-300 shadow-sm sm:text-sm'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='postal-code'
                      className='block text-sm font-medium'
                    >
                      Postal code
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='postal-code'
                        id='postal-code'
                        autoComplete='postal-code'
                        className='block w-full rounded-md border-gray-300 shadow-sm sm:text-sm'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-medium'
                    >
                      Phone
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='phone'
                        id='phone'
                        autoComplete='tel'
                        className='block w-full rounded-md border-gray-300 shadow-sm sm:text-sm'
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className='mt-10 border-t border-gray-200 pt-10'>
                <h2 className='text-lg font-medium text-gray-900'>Payment</h2>
                <fieldset className='mt-4'>
                  <legend className='sr-only'>Payment type</legend>
                  <div className='space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10'>
                    {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
                      <div key={paymentMethod.id} className='flex items-center'>
                        {paymentMethodIdx === 0 ? (
                          <input
                            id={paymentMethod.id}
                            name='payment-type'
                            type='radio'
                            defaultChecked
                            className='h-4 w-4 border-gray-300 text-indigo-500'
                          />
                        ) : (
                          <input
                            id={paymentMethod.id}
                            name='payment-type'
                            type='radio'
                            className='h-4 w-4 border-gray-300 text-indigo-500'
                          />
                        )}

                        <label
                          htmlFor={paymentMethod.id}
                          className='ml-3 block text-sm font-medium'
                        >
                          {paymentMethod.title}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>

                <div className='mt-6 grid grid-cols-4 gap-y-6 gap-x-4'>
                  <div className='col-span-4'>
                    <label
                      htmlFor='card-number'
                      className='block text-sm font-medium'
                    >
                      Card number
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        id='card-number'
                        name='card-number'
                        autoComplete='cc-number'
                        className='block w-full rounded-md border-gray-300 shadow-sm sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='col-span-4'>
                    <label
                      htmlFor='name-on-card'
                      className='block text-sm font-medium'
                    >
                      Name on card
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        id='name-on-card'
                        name='name-on-card'
                        autoComplete='cc-name'
                        className='block w-full rounded-md border-gray-300 shadow-sm sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='col-span-3'>
                    <label
                      htmlFor='expiration-date'
                      className='block text-sm font-medium'
                    >
                      Expiration date (MM/YY)
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='expiration-date'
                        id='expiration-date'
                        autoComplete='cc-exp'
                        className='block w-full rounded-md border-gray-300 shadow-sm sm:text-sm'
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor='cvc' className='block text-sm font-medium'>
                      CVC
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='cvc'
                        id='cvc'
                        autoComplete='csc'
                        className='block w-full rounded-md border-gray-300 shadow-sm sm:text-sm'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order summary */}
            <div className='mt-10 lg:mt-0'>
              <h2 className='text-lg font-medium'>Donation summary</h2>
              <div className='mt-4 rounded-lg border border-gray-200 bg-white shadow-sm'>
                <ul role='list' className='divide-y divide-gray-200'>
                  <div className='flex py-6 px-4 sm:px-6'>
                    <div className='ml-6 flex flex-1 flex-col'>
                      <div className='flex'>
                        <div className='min-w-0 flex-1'>
                          <h4 className='text-sm'>
                            <a href={''} className='font-bold'>
                              Total
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className='flex flex-1 items-end justify-between pt-2'>
                        <p className='mt-1 text-sm font-medium'>
                          ${donationAmt}
                        </p>
                        <button
                          type='button'
                          className='-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500'
                          onClick={handleClick}
                        >
                          <span className='sr-only'>Remove</span>
                          <TrashIcon className='h-5 w-5' aria-hidden='true' />
                        </button>
                      </div>
                    </div>
                  </div>
                </ul>
                <div className='border-t border-gray-200 py-6 px-4 sm:px-6'>
                  <button
                    type='submit'
                    className='w-full rounded-md border border-transparent bg-indigo-500 py-3 px-4 text-base font-bold text-white shadow-sm hover:bg-indigo-800'
                  >
                    Donate
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* footer */}
      <MockWebsiteFooter />
    </div>
  );
}
