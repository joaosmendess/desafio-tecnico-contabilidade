import styled, { keyframes } from 'styled-components'
import { Section } from '../../components/Section'

const shimmer = keyframes`
  0% { background-position: 100% 0; }
  100% { background-position: 0 0; }
`

export const PlansWrapper = styled(Section)`
  background: var(--color-background-alt);
  padding: var(--space-xl) 0;

  @media (min-width: 960px) {
    padding: var(--space-3xl) 0;
  }
`

export const PlansContainer = styled.div`
  display: grid;
  gap: var(--space-lg);

  @media (min-width: 960px) {
    gap: var(--space-2xl);
  }
`

export const Title = styled.h2`
  margin: 0 auto;
  max-width: 520px;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  text-align: center;
  line-height: 1.35;

  span {
    display: block;
  }

  @media (min-width: 960px) {
    font-size: 24px;
    margin-bottom: var(--space-xl);
  }
`

export const ContentGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  align-items: stretch;

  @media (min-width: 960px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0;
  }
`

export const ImageCard = styled.div`
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(27, 31, 35, 0.12);
  width: 100%;
  max-width: 100%;
  aspect-ratio: 16 / 9;
  justify-self: center;
  position: relative;
  background: var(--color-background-alt);

  img {
    opacity: 0;
    transform: scale(1.01);
    transition: opacity 0.25s ease, transform 0.6s ease;
    will-change: opacity, transform;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      var(--color-background-alt) 25%,
      var(--color-gray-100) 37%,
      var(--color-background-alt) 63%
    );
    background-size: 400% 100%;
    animation: ${shimmer} 1.2s ease-in-out infinite;
    opacity: 1;
    transition: opacity 0.2s ease;
    pointer-events: none;
  }

  &[data-loaded='true']::before {
    opacity: 0;
    animation: none;
  }

  &[data-loaded='true'] img {
    opacity: 1;
    transform: scale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    &[data-loaded='true']:hover img {
      transform: scale(1.03);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    img {
      transform: none;
      transition: opacity 0.25s ease;
    }

    &::before {
      animation: none;
    }
  }

  @media (min-width: 960px) {
    border-radius: var(--radius-xl);
    justify-self: end;
    max-width: clamp(280px, 30vw, 440px);
    aspect-ratio: 3 / 3.5;
    z-index: 2;
    margin-right: -64px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`

export const ListCard = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 100%;
  border-radius: 0;
  overflow: visible;
  position: relative;
  box-shadow: none;
  justify-self: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 0;

  @media (min-width: 960px) {
    justify-self: start;
    z-index: 1;
    margin-left: -3px;
    max-width: clamp(340px, 40vw, 550px);
    border-radius: var(--radius-xl);
    box-shadow: 0 16px 40px rgba(27, 31, 35, 0.08);
    gap: 0;
  }
`

export const ItemRow = styled.li<{ $bg: string; $grow: number; $index: number }>`
  flex: ${({ $grow }) => $grow} 1 0;
  z-index: ${({ $index }) => 20 - $index};
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  padding: 18px 18px;
  align-items: flex-start;
  background: ${({ $bg }) => $bg};
  color: var(--color-text);
  position: relative;
  border-radius: var(--radius-md);
  box-shadow: 0 8px 18px rgba(27, 31, 35, 0.07);
  transition: transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease;
  will-change: transform;

  &:not(:first-child) {
    margin-top: -10px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      z-index: 50;
      transform: translateY(-4px);
      box-shadow: 0 16px 30px rgba(27, 31, 35, 0.12);
    }

    &:active {
      transform: translateY(-2px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media (min-width: 960px) {
    grid-template-columns: 170px 1fr;
    padding: 25px 24px;
    border-radius: 0 var(--radius-xl) var(--radius-md) 0;

    &:not(:first-child) {
      margin-top: -10px;
    }
  }
`

export const ItemIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  color: var(--color-text);
  margin-top: 0;
  justify-self: start;
  margin-right: 0;

  svg {
    width: 28px;
    height: 28px;
  }

  @media (min-width: 960px) {
    width: 62px;
    height: 42px;
    margin-top: 4px;
    justify-self: end;
    margin-right: 50px;

    svg {
      width: 32px;
      height: 32px;
    }
  }
`

export const ItemText = styled.p`
  margin: 0;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  line-height: 1.4;
  display: flex;
  flex-direction: column;
  text-align: left;

  span {
    display: block;
  }
`

export const CtaWrapper = styled.div`
  margin-top: 0;
  display: flex;
  justify-content: center;
  width: 100%;

  > button {
    width: 100%;
  }

  @media (min-width: 960px) {
    margin-top: var(--space-xl);

    > button {
      width: auto;
    }
  }
`
