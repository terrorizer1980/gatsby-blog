import React, {FunctionComponent} from "react";
import Layout from "@nehalist/gatsby-theme-nehalem/src/components/layout";
import SEO from "@nehalist/gatsby-theme-nehalem/src/components/seo";
import Container from "@nehalist/gatsby-theme-nehalem/src/components/common";
import Subheader from "@nehalist/gatsby-theme-nehalem/src/components/subheader";

const CustomPage: FunctionComponent<{ location: Location }> = ({location}) => (
  <Layout bigHeader={false}>
    <SEO
      location={location}
      title={`Page title`}
    />
    <Subheader title={`Page title`} subtitle={`Something else`} />
    <Container>
      Your content    
    </Container>
</Layout>
);

export default CustomPage;
