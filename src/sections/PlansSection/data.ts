export interface PlanItem {
  id: string
  lines: string[]
  tone: 'surface' | 'gray1' | 'gray2' | 'greenSoft' | 'greenStrong'
  icon: 'open' | 'certificate' | 'invoices' | 'platform' | 'support'
  grow: number
}

export const planItems: PlanItem[] = [
  {
    id: 'open-company',
    lines: ['Abertura de empresa grátis', '(sem taxas de honorários).'],
    tone: 'surface',
    icon: 'open',
    grow: 1,
  },
  {
    id: 'certificate',
    lines: ['Certificado digital incluso', 'no 1º ano.'],
    tone: 'gray1',
    icon: 'certificate',
    grow: 1,
  },
  {
    id: 'invoices',
    lines: ['Emissor de notas', 'fiscais integrado.'],
    tone: 'gray2',
    icon: 'invoices',
    grow: 1,
  },
  {
    id: 'platform',
    lines: [
      'Plataforma contábil online com fluxo',
      'de caixa, lançamentos, relatórios e',
      'controle de impostos.',
    ],
    tone: 'greenSoft',
    icon: 'platform',
    grow: 1.35,
  },
  {
    id: 'support',
    lines: [
      'Atendimento personalizado',
      '(WhatsApp, telefone, e-mail e vídeo)',
    ],
    tone: 'greenStrong',
    icon: 'support',
    grow: 1.35,
  },
]
