import { useState } from 'react'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import heroThumb from '../assets/images/image.png'
import {
  Actions,
  CloseButton,
  ContentLayer,
  Copy,
  HeroGrid,
  HeroWrapper,
  MediaCard,
  MediaFrame,
  Meta,
  ModalContent,
  ModalOverlay,
  ModalShell,
  PlayButton,
  PlayIcon,
  Subtitle,
  Title,
} from './style'

export function HeroSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <HeroWrapper>
      <Container>
        <ContentLayer>
          <HeroGrid>
            <Copy>
              <Title>Quanto custa a contabilidade online em 2026?</Title>
              <Subtitle>
                Descubra os preços médios do mercado e veja como a
                contabilidade.com oferece planos acessíveis, abertura grátis e
                suporte completo para o seu CNPJ.
              </Subtitle>
              <Actions>
                <Button
                  onClick={() =>
                    window.open(
                      'https://contabilidade.com/checkout/',
                      '_blank',
                      'noopener,noreferrer',
                    )
                  }
                >
                  Planos e Preços
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    window.open(
                      'https://api.whatsapp.com/send/?phone=5511921948925',
                      '_blank',
                      'noopener,noreferrer',
                    )
                  }
                >
                  Falar com Especialista
                </Button>
              </Actions>
              <Meta>CRC SP-2SP038830/O-1</Meta>
            </Copy>
            <MediaCard>
              <MediaFrame>
                <img
                  src={heroThumb}
                  alt="Apresentação da equipe de contabilidade"
                />
              </MediaFrame>
              <PlayButton
                aria-label="Assistir ao vídeo"
                onClick={() => setIsOpen(true)}
              >
                <PlayIcon />
              </PlayButton>
            </MediaCard>
          </HeroGrid>
        </ContentLayer>
      </Container>
      {isOpen && (
        <ModalOverlay role="dialog" aria-modal="true" aria-label="Vídeo">
          <ModalShell>
            <CloseButton aria-label="Fechar" onClick={() => setIsOpen(false)}>
              ×
            </CloseButton>
            <ModalContent>
              <iframe
                src="https://www.youtube.com/embed/2RnnraJoW4w"
                title="Contabilidade Online"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </ModalContent>
          </ModalShell>
        </ModalOverlay>
      )}
    </HeroWrapper>
  )
}
