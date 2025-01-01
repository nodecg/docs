import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

import Translate, { translate } from "@docusaurus/Translate";

const features = [
	{
		title: <>Web Based</>,
		imageUrl: "img/Browser.svg",
		description: (
			<Translate id="homepage.features.webBase">
				NodeCG graphics are just webpages. There is absolutely nothing special
				or unique about them, and this allows you to use any framework or web
				graphic style you like.
			</Translate>
		),
	},
	{
		title: <>Compatible</>,
		imageUrl: "img/Compatible.svg",
		description: (
			<div>
				<Translate id="homepage.features.environments">
					NodeCG is compatible with any environment that can render HTML such
					as:
				</Translate>
				<div className={clsx("container-small", styles.environments)}>
					<div className="row">
						<a
							className={clsx("col", styles.environmentItem, styles.shadow2)}
							href="https://obsproject.com/"
						>
							OBS Studio
						</a>
						<a
							className={clsx("col", styles.environmentItem, styles.shadow2)}
							href="http://www.vmix.com/"
						>
							vMix
						</a>
					</div>
					<div className="row">
						<a
							className={clsx("col", styles.environmentItem, styles.shadow2)}
							href="https://www.xsplit.com/"
						>
							xSplit
						</a>
						<a
							className={clsx("col", styles.environmentItem, styles.shadow2)}
							href="https://casparcg.com/"
						>
							CasparCG
						</a>
					</div>
				</div>
			</div>
		),
	},
	{
		title: <>No broadcast too big or small</>,
		imageUrl: "img/NoMatterTheSize.svg",
		description: (
			<>
				<Translate id="homepage.features.sizeOfShow">
					We believe that one set of tools can and should be able to scale up
					from the smallest show all the way to the biggest fathomable show.
				</Translate>
				<br />
				<Translate id="homepage.features.sizeOfShow2">
					Whether you're using OBS for everything, or a hardware switcher with a
					traditional key/fill workflow, NodeCG can be a part of any broadcast
					graphics system.
				</Translate>
			</>
		),
	},
];

function Feature({ imageUrl, title, description }) {
	const imgUrl = useBaseUrl(imageUrl);
	return (
		<div className={clsx("col col--4", styles.feature)}>
			{imgUrl && (
				<div className="text--center">
					<img className={styles.featureImage} src={imgUrl} alt={title} />
				</div>
			)}
			<h3>{title}</h3>
			<div>{description}</div>
		</div>
	);
}

function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`Broadcast Graphics`}
			description="Browser-based broadcast graphics and controls"
		>
			<div className={styles.banner}>
				<div className={styles.top}>Free Palestine!</div>
				<div className={styles.center}>
					Israel is committing a genocide in Gaza.
				</div>
				<div className={styles.bottom}>
					<a target="_blank" href="https://techforpalestine.org/learn-more/">
						Learn more
					</a>
				</div>
				<svg height="100%" viewBox="0 0 2 3" className={styles.bannerTriangle}>
					<polygon points="0, 0, 2, 1.5, 0, 3" fill="#ee2a35" />
				</svg>
			</div>

			<header className={clsx("hero hero--primary", styles.heroBanner)}>
				<div className="container">
					<img alt="Splash" src="img/splash.png" />
					<p className="hero__subtitle">
						<Translate>
							Create broadcast graphics using Node.js and a browser
						</Translate>
					</p>
					<div className={styles.buttons}>
						<Link
							className={clsx(
								"button button--contained button--secondary button--lg",
								styles.getStarted,
							)}
							to={useBaseUrl("docs/installing")}
						>
							<Translate>Get Started</Translate>
						</Link>
					</div>
				</div>
			</header>
			<main>
				{features && features.length && (
					<section className={styles.features}>
						<div className="container">
							<div className="row">
								{features.map((props, idx) => (
									<Feature key={idx} {...props} />
								))}
							</div>
						</div>
					</section>
				)}
			</main>
		</Layout>
	);
}

export default Home;
