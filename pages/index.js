import React from 'react';
import {Container, Row} from 'reactstrap';
import {Body, Header, Hero, Feature, Footer} from '../components';
import '../styles/styles.scss';

export default function App() {
  return (
    <Body title="Scrape financial data from the web | Finscrapers">
      <Header />
      <main role="main">
        <Hero title="Finscrapers scrapes financial data from the web in seconds." />
        <Container>
          <Row className="py-5">
            <Feature
              subheading="Any data"
              text="Connect with any data source, with or without API. Thanks to the Puppeteer integration, you can source financial data from websites directly. Join our community to build new connectors."
              icon="/static/database.svg"
            />
            <Feature
              subheading="Flexible processing"
              text="Finscrapers delivers the financial data through a REST (coming: GraphQL) endpoint. From here you can take it to Excel, a database (roadmap), or integrate it in your own custom application, or trading bot."
              icon="/static/flexible.svg"
            />
            <Feature
              subheading="Free, and open-source"
              text="Built for the community, Finscrapers strives to become the open standard to mine financial data, and build custom applications for traders, analysts, and investors."
              icon="/static/open-source.svg"
            />
            <Feature
              subheading="Integrated modeling"
              text="Gain insights from data with the integrated financial modeling capabilities (roadmap) that enables you to easiyl calculate company valuations in an automated way."
              icon="/static/chart-up.svg"
            />
          </Row>
        </Container>
      </main>
      <Footer />
    </Body>
  );
}
