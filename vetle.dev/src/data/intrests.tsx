export interface Intrest {
	name: string;
	description: string;
	imageUrl: string;
	color: string;
}

export const intrests = [
	{
		name: 'Frontend',
		description: 'Designing and creating user friendly applications',
		imageUrl: 'front.png',
		color: 'hsl(180, 62%, 55%)',
	},
	{
		name: 'Backend',
		description:
			'Efficent backend applications that can meet spesific user demands',
		imageUrl: 'back.png',
		color: 'hsl(212, 86%, 64%)',
	},
	{
		name: 'Computer architecture',
		description:
			'Designing, testing and exploring different computer architectures',
		imageUrl: 'chip.png',
		color: 'hsl(34, 97%, 64%)',
	},
	{
		name: 'Optimization',
		description:
			'Optimizing applications, escpecially in languages like C and C++, to make applications as time and energy efficent as possible',
		imageUrl: 'optimization.png',
		color: 'hsl(0, 78%, 62%)',
	},
];
