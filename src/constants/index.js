import {
	adssys,
	annickstdenis,
	backend,
	bev,
	ccm,
	conferenceasd,
	css,
	emmanuellecote,
	figma,
	gentremblay,
	git,
	hebertcom,
	html,
	itaq,
	javascript,
	lefil,
	liamsanche,
	mangoLab,
	martinchoquette,
	metaversusclone,
	mobile,
	mongodb,
	nextjs,
	nikeclone,
	nodejs,
	reactjs,
	redux,
	samgarneau,
	tailwind,
	threejs,
	tmb,
	typescript,
	web,
} from '../assets';

export const navLinks = [
	{
		id: 'a-propos',
		title: 'À propos',
	},
	{
		id: 'experience',
		title: 'Expérience',
	},
	{
		id: 'technologies',
		title: 'Technologies',
	},
	{
		id: 'portfolio',
		title: 'Portfolio',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Développement de sites web',
		icon: web,
	},
	{
		title: "Développement d'applications web",
		icon: web,
	},
	{
		title: "Développement d'applications mobiles",
		icon: mobile,
	},
	{
		title: 'Développement full-stack',
		icon: backend,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'nextjs',
		icon: nextjs,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
];

const experiences = [
	{
		title: 'Développeur full-stack pigiste',
		company_name: 'Mango Lab',
		icon: mangoLab,
		iconBg: '#383E56',
		date: "Avril 2024 à aujourd'hui",
		points: [
			'Apporter mon expertise dans certains mandats comme développeur pigiste.',
			"Développement et maintenance de sites web en utilisant WordPress et d'autres technologies connexes.",
			"Développement et maintenance d'applications web fait avec Laravel, Vue.js et d'autres technologies connexes.",
			"Collaboration avec d'autres développeurs pour créer des produits de haute qualité.",
			'Mise en œuvre de la conception responsive et garantie de la compatibilité entre les navigateurs.',
		],
	},
	{
		title: 'Développeur full-stack pigiste',
		company_name: 'Adssys',
		icon: adssys,
		iconBg: '#383E56',
		date: "Décembre 2023 à aujourd'hui",
		points: [
			'Apporter mon expertise dans certains mandats comme développeur pigiste.',
			"Développement et maintenance de sites web en utilisant WordPress et d'autres technologies connexes.",
			"Collaboration avec d'autres développeurs pour créer des produits de haute qualité.",
			'Mise en œuvre de la conception responsive et garantie de la compatibilité entre les navigateurs.',
		],
	},
	{
		title: 'Développeur web pigiste',
		company_name: 'Bonheur en vrac',
		icon: bev,
		iconBg: '#383E56',
		date: "Novembre 2023 à aujourd'hui",
		points: [
			'Apporter mon expertise dans certains mandats comme développeur pigiste.',
			"Développement et maintenance de sites web en utilisant WordPress et d'autres technologies connexes.",
			"Collaboration avec d'autres développeurs pour créer des produits de haute qualité.",
			'Mise en œuvre de la conception responsive et garantie de la compatibilité entre les navigateurs.',
		],
	},
	{
		title: 'Développeur web pigiste',
		company_name: 'Hébert Communication',
		icon: hebertcom,
		iconBg: '#383E56',
		date: "Juin 2023 à aujourd'hui",
		points: [
			'Apporter mon expertise dans certains mandats comme développeur pigiste.',
			"Développement et maintenance de sites web en utilisant WordPress et d'autres technologies connexes.",
			"Collaboration avec d'autres développeurs pour créer des produits de haute qualité.",
			'Mise en œuvre de la conception responsive et garantie de la compatibilité entre les navigateurs.',
		],
	},
];

const testimonials = [
	{
		testimonial:
			"Carl est un développeur Web exceptionnel dont la maîtrise technique et la créativité font de chaque projet un succès. Sa capacité à comprendre nos besoins et à les traduire en solutions fonctionnelles et innovantes est impressionnante. Travailler avec lui est toujours un plaisir, car il est réactif, professionnel et dédié à l'excellence.",
		name: 'Martin Choquette-Scott',
		designation: 'Développeur web',
		company: 'Catapulte communication',
		image: martinchoquette,
	},
	{
		testimonial:
			"Ma première collaboration avec Carl fut très positive! J'avais besoin de lui pour faire des modifications dans un site web désuet et il a traité ma demande avec grand professionnalisme. Je l'ai trouvé très à l'écoute de mes besoins, il m'a fait de bonnes suggestions, il était très efficace et fiable, ses indications étaient claires et il savait bien vulgariser les choses. Carl est définitivement une personne de confiance à qui vous pouvez confier vos mandats web!",
		name: 'Emmanuelle Côté',
		designation: 'Gestionnaire de projets',
		company: 'Erod agence créative',
		image: emmanuellecote,
	},
	{
		testimonial:
			'Carl est un excellent collaborateur de notre équipe : Il est compétent, évidemment! Mais plus important encore, il est bien organisé, proactif et a une excellente attitude constructive face aux défis du développement web.',
		name: 'Geneviève Tremblay',
		designation: 'Stratège numérique',
		company: 'Bonheur en vrac',
		image: gentremblay,
	},
	{
		testimonial: `Carl est une personne que j'ai eu le plaisir de voir évoluer en tant que programmeur tout au long de son parcours chez Multihexa. Pour le décrire en un mot, je choisirais "méticuleux". Les détails ne lui échappent pas, et il est prêt à investir le temps et les efforts nécessaires pour que tout soit conforme aux exigences. De plus, Carl prend l'initiative lorsque des questions sont soulevées, cherchant toujours à clarifier la situation. C'est le type de coéquipier que j'aurais été ravi d'avoir dans un autre contexte!`,
		name: 'Samuel Garneau',
		designation: 'Enseignant',
		company: 'Collège Multihexa',
		image: samgarneau,
	},
	{
		testimonial:
			"Si vous voulez avoir un site web bien fait, je choisirais mon bon ami Carl à chaque fois. Je n'ai jamais rencontré une personne plus méticuleuse et axée sur les détails de ma vie.",
		name: 'Liam Sanche',
		designation: 'Programmeur-Analyste',
		company: 'Hébert Communication',
		image: liamsanche,
	},
	{
		testimonial:
			"Carl est à l'écoute des besoins de son client et cherche à répondre aux demandes de manière professionnelle et créative!",
		name: 'Annick St-Denis',
		designation: 'Conférencière',
		company: 'Conférence ASD',
		image: annickstdenis,
	},
];

const projects = [
	{
		name: 'CCM',
		description:
			"Site WordPress pour la Chambre de commerce de Memphrémagog. Je fait la maintenance et les mises à jour du site. J'ai aussi fait des modifications pour améliorer la performance du site. En collaboration avec l'agence Mango Lab.",
		tags: [
			{
				name: 'WordPress',
				color: 'blue-text-gradient',
			},
			{
				name: 'PHP',
				color: 'blue-text-gradient',
			},
			{
				name: 'JavaScript',
				color: 'blue-text-gradient',
			},
			{
				name: 'CSS',
				color: 'pink-text-gradient',
			},
		],
		image: ccm,
		source_code_link: '',
		subdomain_link: 'https://ccmemphremagog.com/',
	},
	{
		name: 'ITAQ',
		description:
			"Site WordPress pour l'Institut de technologie agroalimentaire du Québec. Je fait la maintenance et les mises à jour du site. J'ai aussi fait la page 'Services aux Entreprise' ainsi que d'autres modifications sur le site. En collaboration avec l'agence Mango Lab.",
		tags: [
			{
				name: 'WordPress',
				color: 'blue-text-gradient',
			},
			{
				name: 'PHP',
				color: 'blue-text-gradient',
			},
			{
				name: 'JavaScript',
				color: 'blue-text-gradient',
			},
			{
				name: 'CSS',
				color: 'pink-text-gradient',
			},
		],
		image: itaq,
		source_code_link: '',
		subdomain_link: 'https://www.itaq.ca/',
	},
	{
		name: 'LeFil',
		description:
			"Site WordPress pour le journal Le Fil du CIUSSS de Montréal. Je fait la maintenance et les mises à jour du site. J'ai aussi fait des modifications pour améliorer la performance du site. En collaboration avec l'agence Mango Lab.",
		tags: [
			{
				name: 'WordPress',
				color: 'blue-text-gradient',
			},
			{
				name: 'PHP',
				color: 'blue-text-gradient',
			},
			{
				name: 'JavaScript',
				color: 'blue-text-gradient',
			},
			{
				name: 'CSS',
				color: 'pink-text-gradient',
			},
		],
		image: lefil,
		source_code_link: '',
		subdomain_link: 'https://lefil.ciusssestmtl.net/',
	},
	{
		name: 'Toi Moi Bébé',
		description:
			"Site WordPress pour le CIUSSS de Montréal. Je fait la maintenance et les mises à jour du site. J'ai aussi fait des modifications sur certaines pages pour améliorer le visuel ainsi que l'amélioration de la sécurité du site. En collaboration avec l'agence Mango Lab.",
		tags: [
			{
				name: 'WordPress',
				color: 'blue-text-gradient',
			},
			{
				name: 'PHP',
				color: 'blue-text-gradient',
			},
			{
				name: 'JavaScript',
				color: 'blue-text-gradient',
			},
			{
				name: 'CSS',
				color: 'pink-text-gradient',
			},
		],
		image: tmb,
		source_code_link: '',
		subdomain_link: 'https://toimoibebe.ca/',
	},
	{
		name: 'Nike clone',
		description:
			"Pour démontrer mes compétences en développement web et design, j'ai réalisé un clone du site Nike en utilisant Vite.js, React.js, JavaScript et Tailwind CSS. Ce projet est éducatif, non affilié à Nike, et sert à montrer mes compétences techniques.",
		tags: [
			{
				name: 'React.js',
				color: 'blue-text-gradient',
			},
			{
				name: 'Vite.js',
				color: 'blue-text-gradient',
			},
			{
				name: 'Tailwind CSS',
				color: 'pink-text-gradient',
			},
		],
		image: nikeclone,
		source_code_link: 'https://github.com/carltrepanier/Nike_clone',
		subdomain_link: 'https://nikeclone.carltrepanier.net/',
	},
	{
		name: 'Metaversus clone',
		description:
			"Pour démontrer mes compétences en développement web et design, j'ai réalisé un clone du site Metaversus en utilisant Next.js, React.js, JavaScript et Tailwind CSS. Ce projet est éducatif, non affilié à Metaversus, et sert à montrer mes compétences techniques.",
		tags: [
			{
				name: 'Next.js',
				color: 'blue-text-gradient',
			},
			{
				name: 'React.js',
				color: 'blue-text-gradient',
			},
			{
				name: 'Tailwind CSS',
				color: 'pink-text-gradient',
			},
		],
		image: metaversusclone,
		source_code_link: 'https://github.com/carltrepanier/Metaversus_clone',
		subdomain_link: 'https://metaversusclone.carltrepanier.net/',
	},
	{
		name: 'Conférence ASD',
		description:
			"Application web fait dans le cadre d'un projet scolaire. Cette application permet de gérer les conférences d'une entreprise. Elle permet de gérer les conférenciers, les conférences, les clients et les réservations.",
		tags: [
			{
				name: 'ASP.NET MVC',
				color: 'blue-text-gradient',
			},
			{
				name: 'SQL',
				color: 'green-text-gradient',
			},
			{
				name: 'CSS',
				color: 'pink-text-gradient',
			},
		],
		image: conferenceasd,
		source_code_link: '',
	},
];

export { experiences, projects, services, technologies, testimonials };
