'use client'
import { ErrorPage } from "@/features/system/pages"
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        
        <ErrorPage 
          error={error} 
          message="Something went wrong. Please try again later."
          statusCode={500}
          errorId={error.digest}
          />

        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}