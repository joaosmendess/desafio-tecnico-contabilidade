import { useState } from 'react'
import { Button } from '../../components/Button'
import { Container } from '../../components/Container'
import plansImage from '../../assets/images/its-about-putting-work-cropped-portrait-attractive-young-businesswoman-working-her-laptop-office.webp'
import { planItems } from './data'
import {
  ContentGrid,
  CtaWrapper,
  Image,
  ImageCard,
  ItemIcon,
  ItemRow,
  ItemText,
  ListCard,
  PlansContainer,
  PlansWrapper,
  Title,
} from './styles'
import { PlanIcon } from './icons'
import { bgFor } from './tone'

export function PlansSection() {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <PlansWrapper>
      <Container>
        <PlansContainer>
          <Title>
            <span>Na contabilidade.com,</span>
            <span>você tem planos a partir</span>
            <span>de R$ 159/mês, já com:</span>
          </Title>
          <ContentGrid>
            <ImageCard data-loaded={isImageLoaded}>
              <Image
                src={plansImage}
                alt="Profissional de contabilidade em escritório"
                loading="lazy"
                decoding="async"
                onLoad={() => setIsImageLoaded(true)}
                onError={() => setIsImageLoaded(true)}
              />
            </ImageCard>
            <ListCard>
              {planItems.map((item, index) => (
                <ItemRow
                  key={item.id}
                  $bg={bgFor(item.tone)}
                  $grow={item.grow}
                  $index={index}
                >
                  <ItemIcon>
                    <PlanIcon kind={item.icon} />
                  </ItemIcon>
                  <ItemText>
                    {item.lines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </ItemText>
                </ItemRow>
              ))}
            </ListCard>
          </ContentGrid>
          <CtaWrapper>
            <Button>Conheça os planos e preços</Button>
          </CtaWrapper>
        </PlansContainer>
      </Container>
    </PlansWrapper>
  )
}
