'use client'
import React from 'react';
import { RiCodeSSlashLine, RiPaletteLine, RiMegaphoneLine, RiLayoutMasonryLine } from 'react-icons/ri';

const services = [
	{
		title: 'Pembuatan Website',
		desc: 'Website profesional, responsif, dan mudah dikelola sesuai kebutuhan bisnis Anda.',
		icon: <RiCodeSSlashLine className="text-2xl text-[#8B0000]" />,
	},
	{
		title: 'Branding & Desain',
		desc: 'Membangun identitas visual yang kuat dan menarik untuk brand Anda.',
		icon: <RiPaletteLine className="text-2xl text-[#8B0000]" />,
	},
	{
		title: 'Digital Marketing',
		desc: 'Strategi pemasaran digital untuk meningkatkan visibilitas dan penjualan.',
		icon: <RiMegaphoneLine className="text-2xl text-[#8B0000]" />,
	},
	{
		title: 'UI/UX Design',
		desc: 'Desain antarmuka dan pengalaman pengguna yang modern dan intuitif.',
		icon: <RiLayoutMasonryLine className="text-2xl text-[#8B0000]" />,
	},
];

const Layanan = () => {
	return (
		<section id="layanan" className="py-20 bg-[#FFF9E5] w-full relative overflow-hidden">
			{/* Grain overlay */}
			<div
				className="pointer-events-none absolute inset-0 z-0"
				style={{
					backgroundImage: `url('data:image/svg+xml;utf8,<svg width=\'100%\' height=\'100%\' xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'noise\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23noise)\' opacity=\'0.08\'/></svg>')`,
					opacity: 0.5,
					mixBlendMode: 'multiply',
				}}
				aria-hidden="true"
			></div>
			<div className="relative z-10 max-w-7xl mx-auto px-6">
				<span className="inline-block bg-[#8B0000] text-[#FAF6F0] px-3 py-1 rounded-full text-xs font-bold mb-3 tracking-widest uppercase shadow">
					Layanan
				</span>
				<h3 className="text-2xl md:text-3xl font-bold text-[#8B0000] mb-2 text-center tracking-tight">
					Layanan Kami
				</h3>
				<div className="h-1 w-16 bg-[#8B0000]/30 rounded mb-10 mx-auto"></div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{services.map((service, idx) => (
						<div
							key={idx}
							className="bg-white rounded-xl shadow p-6 text-center hover:scale-105 hover:shadow-lg transition text-base flex flex-col items-center border border-[#8B0000]/10"
						>
							<div className="mb-3">{service.icon}</div>
							<h4 className="text-lg font-semibold text-[#8B0000] mb-2">
								{service.title}
							</h4>
							<p className="text-[#5a5a5a]">{service.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Layanan;
