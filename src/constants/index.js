import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	nextjs,
	hebertcom,
	nikeclone,
	conferenceasd,
	threejs,
	liamsanche,
	annickstdenis,
} from "../assets";

export const navLinks = [
	{
		id: "a-propos",
		title: "À propos",
	},
	{
		id: "experience",
		title: "Expérience",
	},
	{
		id: "technologies",
		title: "Technologies",
	},
	{
		id: "portfolio",
		title: "Portfolio",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Développement de sites web",
		icon: web,
	},
	{
		title: "Développement d'applications web",
		icon: mobile,
	},
	{
		title: "Développement d'applications mobiles",
		icon: backend,
	},
	{
		title: "Développement full-stack",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "nextjs",
		icon: nextjs,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
];

const experiences = [
	{
		title: "Développeur web",
		company_name: "Hébert Communication",
		icon: hebertcom,
		iconBg: "#383E56",
		date: "Juin 2023 à aujourd'hui",
		points: [
			"Développement et maintenance de sites web en utilisant WordPress et d'autres technologies connexes.",
			"Collaboration avec d'autres développeurs pour créer des produits de haute qualité.",
			"Mise en œuvre de la conception responsive et garantie de la compatibilité entre les navigateurs.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"Si vous voulez avoir un site web bien fait, je choisirais mon bon ami Carl à chaque fois. Je n'ai jamais rencontré une personne plus méticuleuse et axée sur les détails de ma vie.",
		name: "Liam Sanche",
		designation: "Programmeur-Analyste",
		company: "Hébert Communication",
		image: liamsanche,
	},
	{
		testimonial:
			"Carl est à l'écoute des besoins de son client et cherche à répondre aux demandes de manière professionnelle et créative!",
		name: "Annick St-Denis",
		designation: "Conférencière",
		company: "Conférence ASD",
		image: annickstdenis,
	},
];

const projects = [
	{
		name: "Nike clone",
		description:
			"Pour démontrer mes compétences en développement web et design, j'ai réalisé un clone du site Nike en utilisant Vite.js, React.js, JavaScript et Tailwind CSS. Ce projet est éducatif, non affilié à Nike, et sert à montrer mes compétences techniques.",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "Vitejs",
				color: "green-text-gradient",
			},
			{
				name: "Tailwind CSS",
				color: "pink-text-gradient",
			},
		],
		image: nikeclone,
		source_code_link: "https://github.com/carltrepanier/Nike_clone",
		subdomain_link: "https://nikeclone.carltrepanier.net/",
	},
	{
		name: "Conférence ASD",
		description:
			"Application web fait dans le cadre d'un projet scolaire. Cette application permet de gérer les conférences d'une entreprise. Elle permet de gérer les conférenciers, les conférences, les clients et les réservations.",
		tags: [
			{
				name: "ASP.NET MVC",
				color: "blue-text-gradient",
			},
			{
				name: "SQL",
				color: "green-text-gradient",
			},
			{
				name: "CSS",
				color: "pink-text-gradient",
			},
		],
		image: conferenceasd,
		source_code_link: "",
	},
];

export { services, technologies, experiences, testimonials, projects };
