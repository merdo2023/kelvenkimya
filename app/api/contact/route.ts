import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendContactEmail } from '@/lib/sendContactEmail'

const contactSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  phone: z.string().max(40).optional(),
  company: z.string().max(120).optional(),
  message: z.string().min(1).max(5000),
  locale: z.enum(['tr', 'en']).optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = contactSchema.parse(body)

    await sendContactEmail(data)

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'validation_failed', issues: error.issues },
        { status: 400 },
      )
    }

    console.error('[contact]', error)

    return NextResponse.json(
      { success: false, error: 'internal_error' },
      { status: 500 },
    )
  }
}
