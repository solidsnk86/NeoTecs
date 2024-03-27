import { cn } from '../../lib/utils'
import React, { CSSProperties, ReactNode } from 'react';

interface ShimmerButtonProps {
	shimmerColor?: string
	shimmerSize?: string
	borderRadius?: string
	shimmerDuration?: string
	background?: string
	className?: string
	children?: ReactNode
	[key: string]: unknown
}

export const ShimmerButton = ({
	shimmerColor = '#A058F7',
	shimmerSize = '0.1em',
	shimmerDuration = '.9s',
	borderRadius = '50px',
	background = 'radial-gradient(ellipse 80% 50% at 50% 120%,#0A0C25,#080E1B)',
	className,
	children,
	...props
}: ShimmerButtonProps) => {
	return (
		<button
			style={
				{
					'--spread': '90deg',
					'--shimmer-color': shimmerColor,
					'--radius': borderRadius,
					'--speed': shimmerDuration,
					'--cut': shimmerSize,
					'--bg': background
				} as CSSProperties
			}
			className={cn(
				'group border border-white/30 relative cursor-pointer overflow-hidden whitespace-nowrap px-6 py-4 [background:var(--bg)] [border-radius:var(--radius)] ',
				'transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(0,0,0,0.7)]',
				className
			)}
			{...props}
		>
			{/* contenedor de la chispa */}
			<div className='absolute inset-0 overflow-visible [container-type:size]'>
				{/* chispa */}
				<div className='absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none] '>
					{/* chispa before */}
					<div className='absolute inset-[-100%] w-auto rotate-0 animate-spin [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))] [translate:0_0]' />
				</div>
			</div>

			{/* fondo */}
			<div className='absolute [background:var(--button-variant)] [border-radius:var(--radius)] [inset:var(--cut)]' />

			{/* contenido */}
			<div className='relative z-10 flex text-lg font-semibold text-text-variant pointer-events-none md:text-xl'>
				{children}
			</div>
		</button>
	)
}
