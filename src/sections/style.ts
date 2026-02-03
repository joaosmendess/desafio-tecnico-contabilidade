import styled from 'styled-components'
import { Section } from '../components/Section'

export const HeroWrapper = styled(Section)`
  position: relative;
  background: var(--color-surface);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 670px;
    height: 500px;
    border-radius: 40%;
    background: var(--color-bg);
    top: -260px;
    opacity: 0.6;
    filter: blur(20px);
  }

  @media (max-width: 959px) {
    &::before {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

export const HeroGrid = styled.div`
  display: grid;
  gap: var(--space-2xl);
  align-items: start;

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 56px;
  }
  
  @media (max-width: 959px) {
    text-align: center;
  }
`

export const Copy = styled.div`
  max-width: 520px;

  @media (max-width: 959px) {
    margin: 0 auto;
  }
`

export const Title = styled.h1`
  margin: 0 0 var(--space-md);
  font-size: clamp(var(--font-size-xl), 3.4vw, var(--font-size-2xl));
  font-weight: var(--font-weight-semibold);
  line-height: 1.15;
  max-width: 360px;
  font-family: var(--font-family);

  @media (max-width: 959px) {
    margin-left: auto;
    margin-right: auto;
  }
`

export const Subtitle = styled.p`
  margin: 0 0 var(--space-lg);
  color: var(--color-text-muted);
  font-size: var(--font-size-md);
  line-height: 1.55;
  max-width: 340px;
  white-space: normal;

  @media (max-width: 959px) {
    margin-left: auto;
    margin-right: auto;
  }
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  margin-bottom: var(--space-sm);

  @media (max-width: 959px) {
    flex-direction: column;
    align-items: stretch;
  }
`

export const Meta = styled.p`
  margin: 0;
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  font-family: var(--font-family-alt);

  @media (max-width: 959px) {
    text-align: center;
  }
`

export const ContentLayer = styled.div`
  position: relative;
  z-index: 1;
`

export const MediaCard = styled.div`
  position: relative;
  background: transparent;
  border-radius: var(--radius-lg);
  padding: 0;
  width: min(560px, 100%);
  justify-self: end;

  @media (max-width: 959px) {
    width: 100%;
    justify-self: center;
  }
`

export const MediaFrame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: var(--radius-lg);
  overflow: hidden;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const PlayButton = styled.button`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: var(--color-success);
  display: grid;
  place-items: center;
  cursor: pointer;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);

  &:focus-visible {
    outline: 3px solid rgba(47, 111, 237, 0.35);
    outline-offset: 3px;
  }
`

export const PlayIcon = styled.span`
  width: 0;
  height: 0;
  border-left: 14px solid #1b1f23;
  border-top: 9px solid transparent;
  border-bottom: 9px solid transparent;
  margin-left: 3px;
`

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(17, 24, 39, 0.65);
  display: grid;
  place-items: center;
  padding: ${({ theme }) => theme.spacing.lg};
  z-index: 50;
`

export const ModalContent = styled.div`
  position: relative;
  width: min(550px, 100%);
  aspect-ratio: 16 / 9;
  background: #000;
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`

export const ModalShell = styled.div`
  position: relative;
  width: min(550px, 100%);
`

export const CloseButton = styled.button`
  position: absolute;
  top: -28px;
  right: -28px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  color: #111;
  font-size: 25px;
  cursor: pointer;
  display: grid;
  place-items: center;
  z-index: 2;

  &:focus-visible {
    outline: 3px solid rgba(47, 111, 237, 0.35);
    outline-offset: 2px;
  }
`
