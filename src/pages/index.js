import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
	{
		title: <>Web Based</>,
		imageUrl: 'img/Browser.svg',
		description: (
			<>
				NodeCG graphics are just webpages. There is absolutely nothing special or unique about them
				allowing you to use any framework or web graphic style you like.
			</>
		)
	},
	{
		title: <>Compatible</>,
		imageUrl: 'img/Compatible.svg',
		description: (
			<div>
				NodeCG is compatible with any environment that can render HTML such as:
				<div className={classnames('container-small', styles.environments)}>
					<div className="row">
						<a
							className={classnames('col', styles.environmentItem, styles.shadow2)}
							href="https://obsproject.com/"
						>
							OBS Studio
						</a>
						<a
							className={classnames('col', styles.environmentItem, styles.shadow2)}
							href="http://www.vmix.com/"
						>
							vMix
						</a>
					</div>
					<div className="row">
						<a
							className={classnames('col', styles.environmentItem, styles.shadow2)}
							href="https://www.xsplit.com/"
						>
							xSplit
						</a>
						<a
							className={classnames('col', styles.environmentItem, styles.shadow2)}
							href="https://casparcg.com/"
						>
							CasparCG
						</a>
					</div>
				</div>
			</div>
		)
	},
	{
		title: <>No broadcast too big or small</>,
		imageUrl: 'img/NoMatterTheSize.svg',
		description: (
			<>
				We believe that one set of tools can and should be able to scale up from the smallest show
				all the way to the biggest fathomable show.
				<br />
				Whether you're using OBS for everything, or a hardware switcher with a traditional key/fill
				workflow, NodeCG can be a part of any broadcast graphics system.
			</>
		)
	}
];

function Feature({ imageUrl, title, description }) {
	const imgUrl = useBaseUrl(imageUrl);
	return (
		<div className={classnames('col col--4', styles.feature)}>
			{imgUrl && (
				<div className="text--center">
					<img className={styles.featureImage} src={imgUrl} alt={title} />
				</div>
			)}
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
}

function Home() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;
	return (
		<Layout
			title={`Broadcast Graphics`}
			description="Browser-based broadcast graphics and controls"
		>
			<header className={classnames('hero hero--primary', styles.heroBanner)}>
				<div className="container">
					<img src="img/splash.png" />
					<p className="hero__subtitle">{siteConfig.tagline}</p>
					<div className={styles.buttons}>
						<Link
							className={classnames(
								'button button--contained button--secondary button--lg',
								styles.getStarted
							)}
							to={useBaseUrl('docs/installing')}
						>
							Get Started
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
