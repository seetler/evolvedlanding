import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Extra,
  Language,

} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("@ Evolve Digitally LLC")}</Language>
              {/* <Large to="/">{t("Tell us everything")}</Large> */}
              {/* <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para> */}
              {/* <a href="mailto:info@civiccodeai.com">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a> */}
            </Col>
          
          </Row>
        
        </Container>
      </FooterSection>
      <Extra>

      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
