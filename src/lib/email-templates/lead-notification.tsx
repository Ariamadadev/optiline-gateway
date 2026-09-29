import * as React from 'react'
import { Body, Container, Head, Heading, Html, Preview, Section, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

interface LeadProps {
  source?: string
  fields?: Record<string, string>
}

function LeadNotification({ source = 'Website form', fields = {} }: LeadProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>New request from the Optiline Mada website: {source}</Preview>
      <Body style={{ backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }}>
        <Container style={{ padding: '24px', maxWidth: '600px' }}>
          <Heading style={{ color: '#0f1d3a', fontSize: '20px' }}>New website request</Heading>
          <Text style={{ color: '#10a37f', fontSize: '13px', textTransform: 'uppercase' }}>{source}</Text>
          <Section>
            {Object.entries(fields).map(([k, v]) => (
              <Text key={k} style={{ margin: '0 0 10px', fontSize: '14px', color: '#1f2937' }}>
                <strong>{k}:</strong> {v || '—'}
              </Text>
            ))}
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: LeadNotification,
  subject: (d: Record<string, any>) => `New website request — ${d['source'] ?? 'form'}`,
  displayName: 'Website form notification',
  to: 'contact@optiline-mada.com',
  previewData: { source: 'contact', fields: { name: 'Jane Doe', email: 'jane@example.com', message: 'Hello' } },
} satisfies TemplateEntry
