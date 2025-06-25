'use client';
import React, { useState } from 'react';

const faqs = [
	{
		question: 'Apa saja layanan yang ditawarkan Lieur Agency?',
		answer: 'Kami menawarkan pembuatan website, branding & desain, digital marketing, dan UI/UX design.',
	},
	{
		question: 'Bagaimana proses kerja dengan Lieur Agency?',
		answer: 'Kami memulai dengan konsultasi, dilanjutkan dengan perencanaan, eksekusi, dan revisi sesuai kebutuhan klien.',
	},
	{
		question: 'Apakah bisa request desain custom?',
		answer: 'Tentu, kami sangat terbuka untuk permintaan desain custom sesuai kebutuhan bisnis Anda.',
	},
	{
		question: 'Berapa lama waktu pengerjaan proyek?',
		answer: 'Waktu pengerjaan tergantung pada kompleksitas proyek, rata-rata 2-6 minggu.',
	},
];

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleFAQ = (idx) => {
		setOpenIndex(openIndex === idx ? null : idx);
	};

	return (
		<section id="faq" className="py-20 bg-[#FAF6F0] w-full">
			<div className="max-w-4xl mx-auto px-6">
				<h3 className="text-2xl md:text-3xl font-bold text-[#8B0000] mb-8 text-center tracking-tight">
					FAQ
				</h3>
				<div className="space-y-5 text-base">
					{faqs.map((faq, idx) => (
						<div
							key={idx}
							className="border rounded-xl bg-white shadow-sm overflow-hidden"
						>
							<button
								className="w-full text-left px-6 py-5 font-semibold text-[#8B0000] flex justify-between items-center focus:outline-none"
								onClick={() => toggleFAQ(idx)}
								aria-expanded={openIndex === idx}
							>
								{faq.question}
								<span
									className={`ml-4 transition-transform ${
										openIndex === idx ? 'rotate-180' : ''
									}`}
								>
									▼
								</span>
							</button>
							{openIndex === idx && (
								<div className="px-6 pb-5 text-[#5a5a5a] animate-fade-in">
									{faq.answer}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQ;
