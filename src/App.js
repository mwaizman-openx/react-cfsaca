import './style.css';
import React, { useState } from 'react';
import {
  Dialog,
  Listbox,
  Switch,
  Disclosure,
  Popover,
  RadioGroup,
  Tab,
  Menu,
  Transition,
} from '@headlessui/react';

const VercelEnterpriseClone = () => {
  const [pricingTab, setPricingTab] = useState('monthly');

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold animate__animated animate__fadeIn">
            Vercel Enterprise Clone
          </h1>
          <p className="mt-4 text-xl animate__animated animate__fadeIn animate__delay-1s">
            Your dummy text here
          </p>
        </div>
      </section>

      {/* Highlight Statistics */}
      {/* Add your own statistics here */}
      <section className="grid grid-cols-3 gap-4 my-12">
        {/* Single Statistic */}
        <div className="text-center animate__animated animate__fadeIn animate__delay-2s">
          <h2 className="text-4xl font-bold">1000+</h2>
          <p>Customers</p>
        </div>
        {/* Single Statistic */}
        <div className="text-center animate__animated animate__fadeIn animate__delay-2s">
          <h2 className="text-4xl font-bold">200+</h2>
          <p>Projects</p>
        </div>
        {/* Single Statistic */}
        <div className="text-center animate__animated animate__fadeIn animate__delay-2s">
          <h2 className="text-4xl font-bold">99%</h2>
          <p>Uptime</p>
        </div>
      </section>

      {/* How It Works Tabs */}
      <section className="my-12">
        <h2 className="text-4xl font-bold text-center mb-8 animate__animated animate__fadeIn">
          How It Works
        </h2>
        {/* Add your own tab content here */}
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4 animate__animated animate__fadeIn animate__delay-1s">
            <div className="bg-zinc-900/50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Step 1</h3>
              <p>Dummy text for Step 1</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4 animate__animated animate__fadeIn animate__delay-1s">
            <div className="bg-zinc-900/50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Step 2</h3>
              <p>Dummy text for Step 2</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4 animate__animated animate__fadeIn animate__delay-1s">
            <div className="bg-zinc-900/50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Step 3</h3>
              <p>Dummy text for Step 3</p>
            </div>
          </div>
        </div>
      </section>

      {/* Companies That Trust Us */}
      <section className="my-12">
        <h2 className="text-4xl font-bold text-center mb-8 animate__animated animate__fadeIn">
          Companies That Trust Us
        </h2>
        {/* Add your own company logos here */}
        <div className="flex flex-wrap justify-center items-center animate__animated animate__fadeIn animate__delay-1s">
          <div className="w-1/4 md:w-1/6 p-4">
            <img src="https://via.placeholder.com/150" alt="Company Logo" />
          </div>
          <div className="w-1/4 md:w-1/6 p-4">
            <img src="https://via.placeholder.com/150" alt="Company Logo" />
          </div>
          <div className="w-1/4 md:w-1/6 p-4">
            <img src="https://via.placeholder.com/150" alt="Company Logo" />
          </div>
          <div className="w-1/4 md:w-1/6 p-4">
            <img src="https://via.placeholder.com/150" alt="Company Logo" />
          </div>
        </div>
      </section>
      {/* Our Trainings Carousel */}
      <section className="my-12">
        <h2 className="text-4xl font-bold text-center mb-8 animate__animated animate__fadeIn">
          Our Trainings
        </h2>
        {/* Add your own course cards here */}
        <div className="flex flex-wrap justify-center animate__animated animate__fadeIn animate__delay-1s">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-zinc-900/50 p-6 rounded-lg">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Course Image"
                className="mb-4 rounded"
              />
              <h3 className="text-2xl font-bold mb-4">Course 1</h3>
              <p>Dummy text for Course 1</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-zinc-900/50 p-6 rounded-lg">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Course Image"
                className="mb-4 rounded"
              />
              <h3 className="text-2xl font-bold mb-4">Course 2</h3>
              <p>Dummy text for Course 2</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-zinc-900/50 p-6 rounded-lg">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Course Image"
                className="mb-4 rounded"
              />
              <h3 className="text-2xl font-bold mb-4">Course 3</h3>
              <p>Dummy text for Course 3</p>
            </div>
          </div>
        </div>
      </section>
      {/* Team Workspaces */}
      <section className="my-12">
        <h2 className="text-4xl font-bold text-center mb-8 animate__animated animate__fadeIn">
          Team Workspaces
        </h2>
        {/* Add your own workspace images here */}
        <div className="flex flex-wrap justify-center animate__animated animate__fadeIn animate__delay-1s">
          <div className="w-full md:w-1/2 p-4">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Workspace Image"
              className="rounded"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Workspace Image"
              className="rounded"
            />
          </div>
        </div>
      </section>
      {/* Team Analytics */}
      <section className="my-12">
        <h2 className="text-4xl font-bold text-center mb-8 animate__animated animate__fadeIn">
          Team Analytics
        </h2>
        {/* Add your own analytics images here */}
        <div className="flex flex-wrap justify-center animate__animated animate__fadeIn animate__delay-1s">
          <div className="w-full md:w-1/2 p-4">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Analytics Image"
              className="rounded"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Analytics Image"
              className="rounded"
            />
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="my-12">
        <h2 className="text-4xl font-bold text-center mb-8 animate__animated animate__fadeIn">
          Pricing
        </h2>
        <div className="flex justify-center mb-4 animate__animated animate__fadeIn animate__delay-1s">
          <button
            className={`mr-2 px-4 py-2 rounded-lg ${
              pricingTab === 'monthly'
                ? 'bg-gray-800 text-white'
                : 'bg-gray-400'
            }`}
            onClick={() => setPricingTab('monthly')}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              pricingTab === 'annual' ? 'bg-gray-800 text-white' : 'bg-gray-400'
            }`}
            onClick={() => setPricingTab('annual')}
          >
            Annual
          </button>
        </div>
        {/* Add your own pricing cards here */}
        <div className="flex flex-wrap justify-center animate__animated animate__fadeIn animate__delay-1s">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-zinc-900/50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <p>
                {pricingTab === 'monthly'
                  ? 'Monthly Price: $10'
                  : 'Annual Price: $100'}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-zinc-900/50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <p>
                {pricingTab === 'monthly'
                  ? 'Monthly Price: $20'
                  : 'Annual Price: $200'}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-zinc-900/50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <p>
                {pricingTab === 'monthly'
                  ? 'Monthly Price: $50'
                  : 'Annual Price: $500'}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-12">
        <div className="text-center animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold mb-4">Request a Demo</h2>
          <p className="mb-8">
            Need a Team Plan? Contact us to schedule a demo and see the power of
            Open X.
          </p>
          <form className="mx-auto w-full max-w-md">
            <label className="block mb-2 text-left">* Required</label>
            {[
              'Your Email',
              'Your Phone Number',
              'Your First Name',
              'Your Last Name',
              'Your Company',
              'Your Job Title',
            ].map((field, index) => (
              <div key={index} className="mb-4">
                <label className="block text-left mb-2">{field} *</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
            <div className="mb-4">
              <label className="block text-left mb-2">Message *</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              ></textarea>
            </div>
            <button
              className="bg-gray-800 text-white px-8 py-2 rounded-lg"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="my-12">
        <h2 className="text-4xl font-bold text-center mb-8 animate__animated animate__fadeIn">
          Frequently Asked Questions
        </h2>
        {/* Add your own FAQs here */}
        <div className="animate__animated animate__fadeIn animate__delay-1s">
          <h3 className="text-2xl font-bold mb-2">Question 1</h3>
          <p>Answer 1</p>
        </div>
        <div className="animate__animated animate__fadeIn animate__delay-1s">
          <h3 className="text-2xl font-bold mb-2">Question 2</h3>
          <p>Answer 2</p>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-gray-800 text-white py-12">
        <div className="text-center animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold mb-8">Join Our Community</h2>
          <button className="px-8 py-4 rounded-lg bg-white text-gray-800">
            Get Started
          </button>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="text-center animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold mb-8">Vercel Enterprise Clone</h2>
          <p>
            &copy; {new Date().getFullYear()} Vercel Enterprise Clone. All
            Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const openModal = () => setIsOpen(false);
  const closeModal = () => setIsOpen(false);
  const [data] = useState({
    workspaces: [
      { name: 'Secure Team Management and Learning Environment', icon: '🔒' },
      { name: 'Custom Branded Workspace with Your Company Logo', icon: '🎨' },
      { name: 'Easy Access with Custom URL', icon: '🌐' },
      { name: 'DOD-level Security', icon: '🛡️' },
    ],
    analytics: [
      { name: 'Team Learning Progression and Insights', icon: '📈' },
      { name: 'Individual Progress Tracking', icon: '👤' },
      { name: 'Team User Engagement and Activity', icon: '📅' },
      { name: 'Team Project Activity and Viewer', icon: '👁️' },
    ],
    teamManager: [
      {
        name: 'Central Dashboard for Workspace and Plan Management',
        icon: '🚀',
      },
      { name: 'Access & License Management', icon: '🔑' },
      { name: 'Custom Enterprise Skilling Features', icon: '⚙️' },
    ],
    accountManagement: [
      { name: 'Account Manager Support', icon: '🤝' },
      { name: 'Basic LMS API Integration Capability', icon: '🔌' },
      { name: 'Multi-language Support', icon: '🌍' },
      { name: 'Volume Discounting', icon: '💸' },
      { name: 'Rapid on-demand, Custom Training Creation', icon: '🎓' },
    ],
    premiumSupport: [
      { name: 'Proprietary Content Access', icon: '🔏' },
      { name: 'Upload Company Internal Training', icon: '📁' },
      { name: 'Single Sign-On (SSO) Integration', icon: '🔔' },
    ],
    chartData: {
      lineData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Team Progress',
            data: [10, 30, 50, 40, 60, 70],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1,
            fill: false,
            tension: 0.3,
          },
        ],
      },
      barData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Team Engagement',
            data: [10, 20, 30, 40, 50, 60],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
            ],
            borderWidth: 1,
          },
        ],
      },
      doughnutData: {
        labels: ['Completed Projects', 'Ongoing Projects', 'Upcoming Projects'],
        datasets: [
          {
            data: [10, 20, 30],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 205, 86)',
              'rgb(54, 162, 235)',
            ],
            hoverOffset: 4,
          },
        ],
      },
    },
  });

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className=" py-20 px-10">
          <h1 className="text-4xl mb-10">Open X for Enterprise Teams</h1>
          <p>
            At Open X, our mission is to bridge the skills gap in manufacturing
            technologies and engineering by providing accessible and affordable
            education and training. We believe that everyone should have the
            opportunity to develop the skills needed to succeed in the modern
            workforce, and we are committed to creating an inclusive learning
            environment that supports learners of all backgrounds.
          </p>
          <button
            onClick={openModal}
            className="bg-blue-600 text-white p-2 mt-4"
          >
            Request a demo
          </button>
        </div>

        {/* Modal */}
        <Dialog open={isOpen} onClose={closeModal}>
          <Dialog.Overlay className="fixed inset-0 bg-opacity-30 bg-black" />
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white p-6 space-y-4 text-black">
              <Dialog.Title>Request a Demo</Dialog.Title>
              <Dialog.Description>
                Please fill in the form below
              </Dialog.Description>
              {/* Form contents */}
            </div>
          </div>
        </Dialog>

        <div className="py-12 space-y-12">
          {/* Workspaces */}
          <Popover className="relative">
            <Popover.Button className="flex justify-between w-full p-4 text-lg font-bold bg-gray-800 text-white">
              Workspaces
            </Popover.Button>
            <Popover.Panel
              as="ul"
              className="list-disc pl-4 absolute z-10 w-64 mt-2 space-y-2 bg-gray-800 text-white rounded-lg shadow-md"
            >
              {data.workspaces.map((item, index) => (
                <li key={index}>
                  <span>{item.icon}</span> {item.name}
                </li>
              ))}
            </Popover.Panel>
          </Popover>
          {/* Analytics */}
          <div>
            <div className="w-full text-center text-2xl font-bold mt-3 bg-gray-800">
              {' '}
              Analytics
            </div>
            <Tab.Group>
              <Tab.List className="bg-gray-800 text-white p-4 font-bold flex gap-2">
                {data.analytics.map((item, index) => (
                  <Tab>
                    <span>{item.icon}</span> {item.name}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="bg-white text-black">
                {data.analytics.map((item, index) => (
                  <Tab.Panel key={index} as="div" className="p-4">
                    <span>{item.icon}</span> {item.name}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* Team Manager */}
          <button className="flex justify-between w-full p-4 text-lg font-bold bg-gray-800 text-white">
            Team Manager
          </button>
          <div className="animate__animated animate__fadeIn">
            <RadioGroup>
              <RadioGroup.Label className="sr-only">
                Team Manager
              </RadioGroup.Label>
              <div className="grid grid-cols-3 gap-3 list-disc pl-4">
                {data.teamManager.map((item, index) => (
                  <RadioGroup.Option
                    key={index}
                    value={item}
                    className={({ checked }) =>
                      `${checked ? 'bg-gray-800' : 'bg-white'}
                   text-black w-full px-4 py-2 rounded-md`
                    }
                  >
                    <span>{item.icon}</span> {item.name}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>
          {/* Account Management */}
          <Menu className="w-full">
            {({ open }) => (
              <>
                <Menu.Button className="flex justify-between w-full p-4 text-lg font-bold bg-gray-800 text-white">
                  Account Management
                </Menu.Button>
                <Transition
                  show={true}
                  className="animate__animated animate__fadeIn"
                  enter="transition ease-out duration-200"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-200"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    as="div"
                    className="list-disc pl-4 w-full bg-zinc-900"
                  >
                    {data.accountManagement.map((item, index) => (
                      <Menu.Item key={index}>
                        {({ active }) => (
                          <li
                            className={`${
                              active ? 'bg-gray-800 text-white' : ''
                            } px-4 py-2`}
                            onClick={() => setSelectedAccountManagement(item)}
                          >
                            <span>{item.icon}</span> {item.name}
                          </li>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
          {/* Premium Support */}
          <button className="flex justify-between w-full p-4 text-lg font-bold bg-gray-800 text-white">
            Premium Support
          </button>
          <div className="animate__animated animate__fadeIn">
            <ul className="list-disc pl-4">
              {data.premiumSupport.map((item, index) => (
                <li key={index}>
                  <span>{item.icon}</span> {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default function App() {
  return <Landing />;
}
