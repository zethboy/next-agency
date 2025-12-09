'use client';
import React, { useState } from 'react';

const faqs = [
	{
		question: 'Apa saja layanan yang ditawarkan Giogi Agency?',
		answer: 'Kami menawarkan pembuatan website, branding & desain, digital marketing, dan UI/UX design.',
	},
	{
		question: 'Bagaimana proses kerja dengan Giogi Agency?',
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
		<section id="faq" className="py-24 bg-[#18181b] w-full relative overflow-hidden text-white animate-fadein-section">
			{/* Grain overlay */}
			<div
				className="pointer-events-none absolute inset-0 z-0"
				style={{
					backgroundImage: `url('data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><filter id='noise'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23noise)' opacity='0.12'/></svg>')`,
					opacity: 0.7,
					mixBlendMode: 'screen',
				}}
				aria-hidden="true"
			></div>
			<div className="relative z-10 max-w-4xl mx-auto px-6">
				<span className="inline-block bg-[#8B0000] text-white px-4 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase shadow">
					FAQ
				</span>
				<h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3 text-center tracking-tight">
					FAQ
				</h3>
				<div className="h-1 w-16 bg-[#8B0000]/60 rounded mb-8 mx-auto"></div>
				<div className="space-y-6 text-base">
					{faqs.map((faq, idx) => (
						<div
							key={idx}
							className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl shadow-lg overflow-hidden"
						>
							<button
								className="w-full text-left px-6 py-5 font-semibold text-white flex justify-between items-center focus:outline-none"
								onClick={() => toggleFAQ(idx)}
								aria-expanded={openIndex === idx}
							>
								<span className="flex items-center gap-2">
									<i className="ri-question-line text-[#FBBF24] text-xl"></i> {faq.question}
								</span>
								<span
									className={`ml-4 transition-transform ${
										openIndex === idx ? 'rotate-180' : ''
									}`}
								>
									▼
								</span>
							</button>
							{openIndex === idx && (
								<div className="px-6 pb-5 text-white/80 animate-fade-in flex items-center gap-2">
									<i className="ri-chat-1-line text-[#FBBF24] text-xl"></i> {faq.answer}
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
