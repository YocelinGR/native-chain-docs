import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Chain will manage your business from the same place',
    Svg: require('../../static/img/guru.svg').default,
    description: (
      <>
        Receive all your invoices or make your declarations
        from the palm of your hand automatically.
      </>
    ),
  },
  {
    title: '"I love doing invoices" - Said nobody, ever',
    Svg: require('../../static/img/desconectate.svg').default,
    description: (
      <>
        Chain manages your business from the palm
        from your hand and automatically.
      </>
    ),
  },
  {
    title: 'Receives invitations to the cinema, not to fulfill your obligations prosecutors',
    Svg: require('../../static/img/conectate.svg').default,
    description: (
      <>
        Chain is what you do, but also what we do together.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
