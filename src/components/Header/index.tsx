import { ChevronDownIcon, UserAddIcon, UserIcon, MenuIcon, SearchIcon, ShoppingBagIcon, TranslateIcon } from '@heroicons/react/outline';
import i18n from 'i18next';
import { useState } from 'react';

export const Header = () => {
  const changeLanguage = (lng : string) => {
    i18n.changeLanguage(lng);
  }

  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="relative bg-white">
      <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
        Get free delivery on orders over $100
      </p>

      <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center">
            <button type="button" className="rounded-md bg-white p-2 text-gray-400 lg:hidden">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </div>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <div className="flex">
                    <UserIcon className="h-6 text-gray-700" aria-hidden="true" />
                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      Sign in
                    </a>
                  </div>
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                <div className="flex">
                    <UserIcon className="h-6 text-gray-700" aria-hidden="true" />
                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      UserAddIcon
                    </a>
                  </div>
                <div className="flex relative">
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <TranslateIcon className="h-6 text-gray-700" aria-hidden="true" />
                  <a id="dropdownDefault" data-dropdown-toggle="dropdown" href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Translate
                  </a>
                  <ChevronDownIcon className="h-6 text-gray-700" aria-hidden="true"  onClick={() => setIsOpen(!isOpen)}/>
                  {isOpen && (
                     //submenu with tailwind
                    <div className="absolute mt-5 w-48 rounded-md shadow-lg">
                      <div className=" bg-white rounded-md shadow-xs">
                        <div className="py-1">
                          <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" onClick={() => changeLanguage('en')}>
                            English
                          </a>
                          <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" onClick={() => changeLanguage('fr')}>
                            French
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
              </div>

              {/* Search */}
              <div className="flex lg:ml-6">
                <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <SearchIcon className="h-6 w-6" aria-hidden="true" />
                </a>
              </div>

              {/* Cart */}
              <div className="ml-4 flow-root lg:ml-6">
                <a href="#" className="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                  <span className="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
