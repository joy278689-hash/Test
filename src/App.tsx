/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Apple, Dumbbell, Brain, Heart, Scale, AlertTriangle } from 'lucide-react';

export default function App() {
  const sections = [
    {
      title: '১. পুষ্টিকর খাবার গ্রহণ',
      icon: <Apple className="w-6 h-6 text-green-500" />,
      content: [
        { name: 'তরমুজ', desc: 'প্রাকৃতিক ভায়াগ্রা, রক্তনালী শিথিল করে রক্তপ্রবাহ বাড়ায়।' },
        { name: 'ডার্ক চকলেট', desc: 'সেরোটোনিন ও ডোপামিন নিঃসরণ করে মানসিক প্রশান্তি আনে।' },
        { name: 'বাদাম ও বীজ', desc: 'জিঙ্ক ও ওমেগা-৩ ফ্যাটি অ্যাসিড টেস্টোস্টেরন বাড়াতে সহায়ক।' },
        { name: 'কলা', desc: 'ব্রোমেলাইন এনজাইম লিবিডো বাড়াতে সাহায্য করে।' },
      ],
    },
    {
      title: '২. নিয়মিত ব্যায়াম',
      icon: <Dumbbell className="w-6 h-6 text-blue-500" />,
      content: [
        { name: 'কিগেল ব্যায়াম', desc: 'পেলভিক ফ্লোর পেশি শক্তিশালী করে যৌন স্থায়িত্ব বাড়ায়।' },
        { name: 'কার্ডিও', desc: 'প্রতিদিন ৩০ মিনিট হাঁটা বা দৌড়ানো হৃদপিণ্ডের কার্যক্ষমতা বাড়ায়।' },
      ],
    },
    {
      title: '৩. মানসিক চাপ কমানো',
      icon: <Brain className="w-6 h-6 text-purple-500" />,
      content: [
        { name: 'পর্যাপ্ত ঘুম', desc: 'মানসিক চাপ ও কর্টিসল হরমোন কমাতে সাহায্য করে।' },
        { name: 'মেডিটেশন', desc: 'মানসিক প্রশান্তি ও যৌন আকাঙ্ক্ষা বাড়াতে সহায়ক।' },
      ],
    },
    {
      title: '৪. বদভ্যাস ত্যাগ করা',
      icon: <Heart className="w-6 h-6 text-red-500" />,
      content: [
        { name: 'ধূমপান ও মদ্যপান', desc: 'রক্তনালী সঙ্কুচিত করে দীর্ঘমেয়াদে সক্ষমতা কমিয়ে দেয়।' },
        { name: 'অতিরিক্ত চিনি ও প্রসেসড ফুড', desc: 'ক্লান্তি আনে এবং হরমোনের ক্ষতি করে।' },
      ],
    },
    {
      title: '৫. ওজন নিয়ন্ত্রণ',
      icon: <Scale className="w-6 h-6 text-orange-500" />,
      content: [
        { name: 'সঠিক ওজন', desc: 'শরীরে ইস্ট্রোজেন ও টেস্টোস্টেরনের ভারসাম্য বজায় রাখে।' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <header className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">প্রাকৃতিক উপায়ে শারীরিক সক্ষমতা বৃদ্ধি</h1>
        <p className="text-lg text-gray-600">জীবনযাত্রায় পরিবর্তন এবং সঠিক খাদ্যভ্যাসের মাধ্যমে সুস্থ থাকুন।</p>
      </header>

      <main className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        {sections.map((section, index) => (
          <section key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              {section.icon}
              <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
            </div>
            <ul className="space-y-3">
              {section.content.map((item, i) => (
                <li key={i} className="text-gray-700">
                  <span className="font-medium text-gray-900">{item.name}:</span> {item.desc}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>

      <footer className="max-w-4xl mx-auto mt-12 p-6 bg-yellow-50 rounded-2xl border border-yellow-200 flex items-start gap-4">
        <AlertTriangle className="w-10 h-10 text-yellow-600 flex-shrink-0" />
        <div>
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">বিশেষ দ্রষ্টব্য</h3>
          <p className="text-yellow-900">
            দীর্ঘ সময় ধরে সমস্যা অনুভব করলে লোকজ বা কবিরাজি টোটকা ব্যবহার না করে একজন বিশেষজ্ঞ ডাক্তারের (Urologist or Endocrinologist) পরামর্শ নিন। ডায়াবেটিস বা উচ্চ রক্তচাপের কারণেও এমন হতে পারে।
          </p>
        </div>
      </footer>
    </div>
  );
}
